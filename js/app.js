// ==========================================
// MOTOR LÓGICO FILTRADO (SPA) - LEXDISCA 3D
// Archivo: js/app.js
// ==========================================

// Variables de estado global
let currentUnitId = null;
let currentScore = 0;

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderRoadmap();
});

// 1. RENDERIZAR EL MAPA PRINCIPAL
function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    container.innerHTML = UNIDADES.map((u, i) => {
        const isEven = i % 2 !== 0;
        return `
        <div class="timeline-node flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-stretch w-full" onclick="openUnit(${u.id})">
            <div class="w-full md:w-5/12 glass-panel p-8 rounded-[2rem] glow-${u.color} ${isEven ? 'md:text-right' : 'md:text-left'} group">
                <span class="text-${u.color}-400 font-bold tracking-widest text-xs uppercase mb-2 block">Unidad ${u.numero}</span>
                <h2 class="text-2xl font-display font-bold text-white mb-2">${u.titulo}</h2>
                <p class="text-slate-400 font-light">${u.desc}</p>
            </div>
            <div class="w-full md:w-2/12 flex justify-center items-center py-6 md:py-0 z-20">
                <div class="w-14 h-14 rounded-full glass-panel border border-${u.color}-500/50 flex items-center justify-center bg-slate-900">
                    <i class="fas ${u.icon} text-xl text-${u.color}-400"></i>
                </div>
            </div>
            <div class="w-full md:w-5/12"></div>
        </div>`;
    }).join('');
}

// 2. CONTROL DEL MODAL (Apertura de Unidad)
function openUnit(id) {
    currentUnitId = Number(id); // Normalizamos el ID para evitar errores de tipo
    const unidad = UNIDADES.find(x => x.id === currentUnitId);
    
    if(!unidad) return; // Seguridad por si no encuentra la unidad

    // Actualizamos los títulos del modal
    document.getElementById('modal-unit-number').innerText = `Unidad ${unidad.numero}`;
    document.getElementById('modal-unit-title').innerText = unidad.titulo;
    
    generateMenuButtons();
    document.getElementById('unit-modal').classList.add('active');
    showMenu(); 
}

function closeModal() { 
    document.getElementById('unit-modal').classList.remove('active'); 
}

// 3. GENERADOR DEL MENÚ DINÁMICO
function generateMenuButtons() {
    const menuContainer = document.getElementById('menu-buttons-container');
    let html = `
        <button onclick="openModule('leyes')" class="glass-panel p-8 rounded-3xl text-left glow-cyan transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6"><i class="fas fa-book-open text-2xl text-cyan-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Explorador Íntegro</h3>
            <p class="text-sm text-slate-400 font-light">Leyes y Tratados de esta Unidad.</p>
        </button>
        <button onclick="openModule('casos')" class="glass-panel p-8 rounded-3xl text-left glow-violet transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6"><i class="fas fa-balance-scale text-2xl text-violet-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Laboratorio Casos</h3>
            <p class="text-sm text-slate-400 font-light">Jurisprudencia de la CSJN de esta Unidad.</p>
        </button>`;
    
    // El Estatuto Docente tiene sentido pedagógico en la Unidad 7 (según tu plan)
    if (currentUnitId === 7) {
        html += `
        <button onclick="openModule('estatuto')" class="glass-panel p-8 rounded-3xl text-left glow-emerald transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6"><i class="fas fa-chalkboard-teacher text-2xl text-emerald-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Estatuto Docente</h3>
            <p class="text-sm text-slate-400 font-light">Buscador filtrado de la Ley 10.579.</p>
        </button>`;
    }

    html += `
        <button onclick="openModule('choice')" class="glass-panel p-8 rounded-3xl text-left glow-cyan transition-all group ${currentUnitId === 7 ? 'lg:col-span-2' : 'md:col-span-2'}">
            <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0"><i class="fas fa-gamepad text-2xl text-orange-400"></i></div>
                <div><h3 class="text-xl font-bold text-white mb-1">Desafío Choice</h3><p class="text-sm text-slate-400 font-light">Simulador de examen de la Unidad.</p></div>
            </div>
        </button>
        <button onclick="openModule('cine')" class="glass-panel p-8 rounded-3xl text-left glow-violet transition-all group">
            <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0"><i class="fas fa-film text-2xl text-pink-400"></i></div>
                <div><h3 class="text-xl font-bold text-white mb-1">Cine-Debate</h3><p class="text-sm text-slate-400 font-light">Análisis audiovisual.</p></div>
            </div>
        </button>
    `;
    menuContainer.innerHTML = html;
}

// 4. NAVEGACIÓN INTERNA (VISTAS)
function showMenu() {
    document.querySelectorAll('.module-view').forEach(el => el.classList.remove('active'));
    document.getElementById('view-menu').classList.add('active');
    document.getElementById('btn-back').classList.add('hidden');
}

function openModule(moduleName) {
    document.querySelectorAll('.module-view').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${moduleName}`).classList.add('active');
    document.getElementById('btn-back').classList.remove('hidden');
    
    // Disparador del renderizado correspondiente
    if(moduleName === 'leyes') renderLeyes();
    if(moduleName === 'casos') renderCasos();
    if(moduleName === 'estatuto') { document.getElementById('search-estatuto').value = ""; filterEstatuto(); }
    if(moduleName === 'choice') renderChoice();
    if(moduleName === 'cine') renderCine();
}

// ==========================================
// 5. RENDERIZADORES (CON FILTROS ESTRICTOS)
// ==========================================

function renderLeyes() {
    const dataFiltrada = LEYES_DB.filter(item => item.eje === currentUnitId);
    const container = document.getElementById('leyes-content');
    
    if (dataFiltrada.length === 0) {
        container.innerHTML = `<p class="text-slate-400 italic">No hay normativas cargadas específicamente para esta unidad aún.</p>`;
        return;
    }

    container.innerHTML = dataFiltrada.map(item => `
        <div class="glass-panel p-6 rounded-2xl mb-4 border-l-4 border-cyan-500">
            <h4 class="text-xl font-bold text-white mb-4">${item.titulo}</h4>
            <p class="legal-text text-slate-300">"${item.texto}"</p>
        </div>
    `).join('');
}

function renderCasos() {
    const dataFiltrada = CASOS_DB.filter(c => c.eje === currentUnitId);
    const container = document.getElementById('casos-content');

    if (dataFiltrada.length === 0) {
        container.innerHTML = `<p class="text-slate-400 italic col-span-2">No hay jurisprudencia cargada específicamente para esta unidad aún.</p>`;
        return;
    }

    container.innerHTML = dataFiltrada.map(c => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front glass-panel flex flex-col justify-center">
                    <div class="text-violet-400 mb-4"><i class="fas fa-gavel text-3xl"></i></div>
                    <h4 class="text-lg font-bold text-white mb-2">${c.tema}</h4>
                    <p class="text-slate-300 text-sm">${c.conflicto}</p>
                    <p class="text-xs text-violet-400 font-bold mt-4 mt-auto uppercase tracking-widest"><i class="fas fa-sync-alt mr-2"></i> Clic para ver Fallo CSJN</p>
                </div>
                <div class="flip-card-back flex flex-col justify-center">
                    <h4 class="text-lg font-bold text-white mb-2">Resolución CSJN</h4>
                    <p class="text-slate-200 text-sm italic">"${c.fallo}"</p>
                </div>
            </div>
        </div>
    `).join('');
}

function filterEstatuto() {
    const term = document.getElementById('search-estatuto').value.toLowerCase();
    
    // Doble filtro: Por Eje y por término de búsqueda
    const dataFiltrada = ESTATUTO_DB
        .filter(item => item.eje === currentUnitId)
        .filter(item => item.art.toLowerCase().includes(term) || item.texto.toLowerCase().includes(term));
    
    const container = document.getElementById('estatuto-content');

    if (dataFiltrada.length === 0) {
        container.innerHTML = `<p class="text-slate-400 italic">No hay artículos cargados para esta unidad o término de búsqueda.</p>`;
        return;
    }

    container.innerHTML = dataFiltrada.map(item => `
        <div class="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500">
            <h4 class="font-bold text-white mb-2">${item.art}</h4>
            <p class="text-slate-300 text-sm leading-relaxed">${item.texto}</p>
        </div>
    `).join('');
}

function renderChoice() {
    const dataFiltrada = CHOICE_DB.filter(q => q.eje === currentUnitId);
    const container = document.getElementById('choice-content');
    currentScore = 0;

    if (dataFiltrada.length === 0) {
        document.getElementById('score-display').innerText = `Puntaje: 0 / 0`;
        container.innerHTML = `<p class="text-slate-400 italic">No hay preguntas de examen cargadas para esta unidad aún.</p>`;
        return;
    }

    document.getElementById('score-display').innerText = `Puntaje: 0 / ${dataFiltrada.length}`;
    
    container.innerHTML = dataFiltrada.map((q, localIndex) => `
        <div class="glass-panel p-8 rounded-3xl">
            <h4 class="text-xl font-bold text-white mb-6">${localIndex + 1}. ${q.pregunta}</h4>
            <div class="space-y-3">
                ${q.opciones.map((opt) => `
                    <button onclick="checkAnswer(${localIndex}, ${opt.correcta}, this, '${q.feedback.replace(/'/g, "\\'")}', ${dataFiltrada.length})" class="w-full text-left p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-700 transition text-slate-200 opt-btn-${localIndex}">
                        ${opt.texto}
                    </button>
                `).join('')}
            </div>
            <div id="feedback-${localIndex}" class="mt-4 p-4 rounded-xl hidden text-sm font-bold"></div>
        </div>
    `).join('');
}

function checkAnswer(localIndex, isCorrect, btn, feedback, totalQuestions) {
    // Bloquear botones después de responder
    document.querySelectorAll(`.opt-btn-${localIndex}`).forEach(b => { b.disabled = true; b.classList.add('opacity-50', 'cursor-not-allowed'); });
    const feedbackEl = document.getElementById(`feedback-${localIndex}`);
    feedbackEl.classList.remove('hidden');

    if(isCorrect) {
        btn.classList.replace('bg-slate-800/50', 'bg-emerald-900');
        btn.classList.replace('border-slate-700', 'border-emerald-500');
        btn.classList.add('text-emerald-100', 'opacity-100');
        feedbackEl.classList.add('bg-emerald-500/20', 'text-emerald-300');
        feedbackEl.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ${feedback}`;
        currentScore++;
    } else {
        btn.classList.replace('bg-slate-800/50', 'bg-red-900');
        btn.classList.replace('border-slate-700', 'border-red-500');
        btn.classList.add('text-red-100', 'opacity-100');
        feedbackEl.classList.add('bg-red-500/20', 'text-red-300');
        feedbackEl.innerHTML = `<i class="fas fa-times-circle mr-2"></i> Incorrecto. ${feedback}`;
    }
    
    document.getElementById('score-display').innerText = `Puntaje: ${currentScore} / ${totalQuestions}`;
}

function renderCine() {
    // Filtramos si hay material de cine para esta unidad (aunque por ahora dejamos un fallback)
    let dataFiltrada = [];
    if(typeof CINE_DB !== 'undefined') {
        dataFiltrada = CINE_DB.filter(c => c.eje === currentUnitId);
    }
    
    const container = document.getElementById('cine-content');

    if (dataFiltrada.length === 0) {
        // Fallback genérico si no hay nada en la base de datos para esta unidad
        container.innerHTML = `
            <div class="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center border-dashed border-2 border-pink-500/30 lg:col-span-2">
                <i class="fas fa-film text-4xl text-pink-500/50 mb-4"></i>
                <h4 class="font-bold text-white mb-2">Sin material audiovisual asignado</h4>
                <p class="text-sm text-slate-400">Aún no se ha cargado una película o cápsula para la Unidad ${currentUnitId}.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = dataFiltrada.map(c => `
        <div class="glass-panel p-4 rounded-3xl overflow-hidden">
            <div class="relative w-full rounded-2xl overflow-hidden" style="padding-top: 56.25%;">
                <iframe class="absolute top-0 left-0 w-full h-full" src="${c.url}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p-4 text-center"><p class="text-pink-400 font-bold">${c.titulo}</p></div>
        </div>
    `).join('');
}
