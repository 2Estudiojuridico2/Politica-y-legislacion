let currentUnitId = null;

// Función para abrir la unidad y guardar el estado
function openUnit(id) {
    currentUnitId = Number(id); // Normalización de ID
    const unidad = UNIDADES.find(u => u.id === currentUnitId);
    
    if(!unidad) return;

    document.getElementById('modal-unit-title').innerText = unidad.titulo;
    document.getElementById('modal-unit-number').innerText = `Unidad ${unidad.numero}`;
    
    // Abrir modal
    document.getElementById('unit-modal').classList.add('active');
    showMenu(); // Volver al menú principal del modal
}

function renderCasos() {
    const container = document.getElementById('casos-content');
    // FILTRO REAL: Solo los casos donde el eje coincida con la unidad abierta
    const filtrados = CASOS_DB.filter(c => c.eje === currentUnitId);
    
    if(filtrados.length === 0) {
        container.innerHTML = `<p class="text-slate-500 italic">No hay casos cargados para esta unidad.</p>`;
        return;
    }

    container.innerHTML = filtrados.map(c => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front glass-panel">
                    <h4 class="text-violet-400 font-bold">${c.tema}</h4>
                    <p class="text-sm text-slate-300 mt-2">${c.conflicto}</p>
                </div>
                <div class="flip-card-back">
                    <p class="text-sm">${c.fallo}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderLeyes() {
    const container = document.getElementById('leyes-content');
    const filtradas = LEYES_DB.filter(l => l.eje === currentUnitId);
    
    container.innerHTML = filtradas.length > 0 
        ? filtradas.map(l => `<div class="glass-panel p-4 mb-3"><h5 class="text-cyan-400 font-bold">${l.titulo}</h5><p class="text-slate-300 text-sm">${l.texto}</p></div>`).join('')
        : `<p class="text-slate-500 italic">Sin leyes asignadas a este eje.</p>`;
}

// Función para volver al menú de botones dentro del modal
function showMenu() {
    document.querySelectorAll('.module-view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-menu').classList.add('active');
}

// Función para abrir un módulo específico (Leyes, Casos, etc.)
function openModule(module) {
    document.querySelectorAll('.module-view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${module}`).classList.add('active');
    
    // Disparar el renderizado correspondiente
    if(module === 'casos') renderCasos();
    if(module === 'leyes') renderLeyes();
}

// ==========================================
// MOTOR LÓGICO FILTRADO (SPA)
// ==========================================

let currentUnitId = null;
let currentScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    renderRoadmap();
    generateMenuButtons();
});

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
                <div class="w-14 h-14 rounded-full glass-panel border border-${u.color}-500/50 flex items-center justify-center">
                    <i class="fas ${u.icon} text-xl text-${u.color}-400"></i>
                </div>
            </div>
            <div class="w-full md:w-5/12"></div>
        </div>`;
    }).join('');
}

function openUnit(id) {
    currentUnitId = id; // AQUÍ GUARDAMOS EL EJE ACTUAL
    const u = UNIDADES.find(x => x.id === id);
    document.getElementById('modal-unit-number').innerText = `Unidad ${u.numero}`;
    document.getElementById('modal-unit-title').innerText = u.titulo;
    document.getElementById('unit-modal').classList.add('active');
    showMenu(); 
}

function closeModal() { 
    document.getElementById('unit-modal').classList.remove('active'); 
}

function generateMenuButtons() {
    const menuContainer = document.getElementById('menu-buttons-container');
    menuContainer.innerHTML = `
        <button onclick="openModule('leyes')" class="glass-panel p-8 rounded-3xl text-left glow-cyan transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6"><i class="fas fa-book-open text-2xl text-cyan-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Explorador Íntegro</h3>
            <p class="text-sm text-slate-400 font-light">Normativas y Tratados de esta Unidad.</p>
        </button>
        <button onclick="openModule('casos')" class="glass-panel p-8 rounded-3xl text-left glow-violet transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6"><i class="fas fa-balance-scale text-2xl text-violet-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Laboratorio Casos</h3>
            <p class="text-sm text-slate-400 font-light">Jurisprudencia de la CSJN aplicada a esta Unidad.</p>
        </button>
        <button onclick="openModule('estatuto')" class="glass-panel p-8 rounded-3xl text-left glow-emerald transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6"><i class="fas fa-chalkboard-teacher text-2xl text-emerald-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Estatuto Docente</h3>
            <p class="text-sm text-slate-400 font-light">Artículos de la Ley 10.579 vinculados.</p>
        </button>
        <button onclick="openModule('choice')" class="glass-panel p-8 rounded-3xl text-left glow-cyan transition-all group lg:col-span-2">
            <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0"><i class="fas fa-gamepad text-2xl text-orange-400"></i></div>
                <div><h3 class="text-xl font-bold text-white mb-1">Desafío Choice</h3><p class="text-sm text-slate-400 font-light">Evaluación específica de esta Unidad.</p></div>
            </div>
        </button>
    `;
}

function showMenu() {
    document.querySelectorAll('.module-view').forEach(el => el.classList.remove('active'));
    document.getElementById('view-menu').classList.add('active');
    document.getElementById('btn-back').classList.add('hidden');
}

function openModule(moduleName) {
    document.querySelectorAll('.module-view').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${moduleName}`).classList.add('active');
    document.getElementById('btn-back').classList.remove('hidden');
    
    // RUTAS DE RENDERIZADO FILTRADO
    if(moduleName === 'leyes') renderLeyes();
    if(moduleName === 'casos') renderCasos();
    if(moduleName === 'estatuto') {
        document.getElementById('search-estatuto').value = ""; // Limpiar buscador
        filterEstatuto(); // Renderizar por defecto
    }
    if(moduleName === 'choice') renderChoice();
}

// ==========================================
// RENDERIZADORES CON FILTRO POR UNIDAD
// ==========================================

function renderLeyes() {
    const dataFiltrada = LEYES_DB.filter(item => item.eje === currentUnitId);
    const container = document.getElementById('leyes-content');
    
    if (dataFiltrada.length === 0) {
        container.innerHTML = `<p class="text-slate-400 italic">No hay normativas cargadas específicamente para esta unidad aún.</p>`;
        return;
    }

    container.innerHTML = dataFiltrada.map(item => `
        <div class="glass-panel p-6 rounded-2xl mb-4">
            <h4 class="text-xl font-bold text-white border-l-4 border-cyan-500 pl-3 mb-4">${item.titulo}</h4>
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
    // Filtramos primero por Unidad, y luego por la búsqueda de texto
    const dataFiltrada = ESTATUTO_DB
        .filter(item => item.eje === currentUnitId)
        .filter(item => item.art.toLowerCase().includes(term) || item.texto.toLowerCase().includes(term));
    
    const container = document.getElementById('estatuto-content');

    if (dataFiltrada.length === 0) {
        container.innerHTML = `<p class="text-slate-400 italic">No hay artículos del Estatuto para esta unidad o búsqueda.</p>`;
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
    
    // Pasamos el ID real de la pregunta en la base de datos (q.id) pero aquí usamos un index local
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
    document.querySelectorAll(`.opt-btn-${localIndex}`).forEach(b => { b.disabled = true; b.classList.add('opacity-50'); });
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
