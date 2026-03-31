// ==========================================
// MOTOR LÓGICO DE LA PLATAFORMA (SPA)
// ==========================================

// Variables Globales
let currentUnitId = null;
let currentScore = 0;

// 1. Inicialización de la Página
document.addEventListener('DOMContentLoaded', () => {
    renderRoadmap();
    generateMenuButtons();
});

// 2. Renderizar Línea de Tiempo (Roadmap)
function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    container.innerHTML = UNIDADES.map((u, i) => {
        const isEven = i % 2 !== 0;
        return `
        <div class="timeline-node flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-stretch w-full" onclick="openUnit(${u.id})">
            <div class="w-full md:w-5/12 glass-panel p-8 rounded-[2rem] glow-${u.color} ${isEven ? 'md:text-right' : 'md:text-left'} group">
                <span class="text-${u.color}-400 font-bold tracking-widest text-xs uppercase mb-2 block">Eje Temático ${u.numero}</span>
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

// 3. Control del Modal Principal
function openUnit(id) {
    currentUnitId = id;
    const u = UNIDADES.find(x => x.id === id);
    document.getElementById('modal-unit-number').innerText = `Eje Temático ${u.numero}`;
    document.getElementById('modal-unit-title').innerText = u.titulo;
    document.getElementById('unit-modal').classList.add('active');
    showMenu(); 
}

function closeModal() { 
    document.getElementById('unit-modal').classList.remove('active'); 
}

// 4. Generador de Botones del Menú
function generateMenuButtons() {
    const menuContainer = document.getElementById('menu-buttons-container');
    menuContainer.innerHTML = `
        <button onclick="openModule('leyes')" class="glass-panel p-8 rounded-3xl text-left glow-cyan transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6"><i class="fas fa-book-open text-2xl text-cyan-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Explorador Íntegro</h3>
            <p class="text-sm text-slate-400 font-light">Acceso a Leyes, Constituciones y Tratados Internacionales.</p>
        </button>
        <button onclick="openModule('casos')" class="glass-panel p-8 rounded-3xl text-left glow-violet transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6"><i class="fas fa-balance-scale text-2xl text-violet-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Laboratorio Casos</h3>
            <p class="text-sm text-slate-400 font-light">Tarjetas 3D con Jurisprudencia real de la Corte Suprema.</p>
        </button>
        <button onclick="openModule('estatuto')" class="glass-panel p-8 rounded-3xl text-left glow-emerald transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6"><i class="fas fa-chalkboard-teacher text-2xl text-emerald-400"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">Estatuto Docente</h3>
            <p class="text-sm text-slate-400 font-light">Buscador filtrado de la Ley 10.579 (Rol, Derechos, Obligaciones).</p>
        </button>
        <button onclick="openModule('choice')" class="glass-panel p-8 rounded-3xl text-left glow-cyan transition-all group lg:col-span-2">
            <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0"><i class="fas fa-gamepad text-2xl text-orange-400"></i></div>
                <div><h3 class="text-xl font-bold text-white mb-1">Desafío Choice</h3><p class="text-sm text-slate-400 font-light">Simulador de examen para acreditar esta unidad.</p></div>
            </div>
        </button>
        <button onclick="openModule('cine')" class="glass-panel p-8 rounded-3xl text-left glow-violet transition-all group">
            <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0"><i class="fas fa-film text-2xl text-pink-400"></i></div>
                <div><h3 class="text-xl font-bold text-white mb-1">Cine-Debate</h3><p class="text-sm text-slate-400 font-light">Análisis del modelo médico vs social en películas.</p></div>
            </div>
        </button>
    `;
}

// 5. Navegación Interna (SPA)
function showMenu() {
    document.querySelectorAll('.module-view').forEach(el => el.classList.remove('active'));
    document.getElementById('view-menu').classList.add('active');
    document.getElementById('btn-back').classList.add('hidden');
}

function openModule(moduleName) {
    document.querySelectorAll('.module-view').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${moduleName}`).classList.add('active');
    document.getElementById('btn-back').classList.remove('hidden');
    
    if(moduleName === 'leyes') document.getElementById('leyes-content').innerHTML = LEYES_DB;
    if(moduleName === 'casos') renderCasos();
    if(moduleName === 'estatuto') renderEstatuto(ESTATUTO_DB);
    if(moduleName === 'choice') renderChoice();
    if(moduleName === 'cine') renderCine();
}

// 6. Funciones de Renderizado Específico
function renderCasos() {
    document.getElementById('casos-content').innerHTML = CASOS_DB.map(c => `
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

function renderEstatuto(data) {
    document.getElementById('estatuto-content').innerHTML = data.map(item => `
        <div class="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500">
            <h4 class="font-bold text-white mb-2">${item.art}</h4>
            <p class="text-slate-300 text-sm leading-relaxed">${item.texto}</p>
        </div>
    `).join('');
}

function filterEstatuto() {
    const term = document.getElementById('search-estatuto').value.toLowerCase();
    const filtered = ESTATUTO_DB.filter(x => x.art.toLowerCase().includes(term) || x.texto.toLowerCase().includes(term));
    renderEstatuto(filtered);
}

function renderChoice() {
    currentScore = 0;
    document.getElementById('score-display').innerText = `Puntaje: 0 / ${CHOICE_DB.length}`;
    
    document.getElementById('choice-content').innerHTML = CHOICE_DB.map((q, qIndex) => `
        <div class="glass-panel p-8 rounded-3xl" id="q-container-${qIndex}">
            <h4 class="text-xl font-bold text-white mb-6">${qIndex + 1}. ${q.pregunta}</h4>
            <div class="space-y-3">
                ${q.opciones.map((opt, oIndex) => `
                    <button onclick="checkAnswer(${qIndex}, ${opt.correcta}, this, '${q.feedback.replace(/'/g, "\\'")}')" class="w-full text-left p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-700 transition text-slate-200 opt-btn-${qIndex}">
                        ${opt.texto}
                    </button>
                `).join('')}
            </div>
            <div id="feedback-${qIndex}" class="mt-4 p-4 rounded-xl hidden text-sm font-bold"></div>
        </div>
    `).join('');
}

function checkAnswer(qIndex, isCorrect, btn, feedback) {
    document.querySelectorAll(`.opt-btn-${qIndex}`).forEach(b => { b.disabled = true; b.classList.add('opacity-50'); });
    const feedbackEl = document.getElementById(`feedback-${qIndex}`);
    feedbackEl.classList.remove('hidden');

    if(isCorrect) {
        btn.classList.replace('bg-slate-800/50', 'bg-emerald-900');
        btn.classList.replace('border-slate-700', 'border-emerald-500');
        btn.classList.add('text-emerald-100', 'opacity-100');
        feedbackEl.classList.add('bg-emerald-500/20', 'text-emerald-300');
        feedbackEl.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ${feedback}`;
        currentScore++;
        document.getElementById('score-display').innerText = `Puntaje: ${currentScore} / ${CHOICE_DB.length}`;
    } else {
        btn.classList.replace('bg-slate-800/50', 'bg-red-900');
        btn.classList.replace('border-slate-700', 'border-red-500');
        btn.classList.add('text-red-100', 'opacity-100');
        feedbackEl.classList.add('bg-red-500/20', 'text-red-300');
        feedbackEl.innerHTML = `<i class="fas fa-times-circle mr-2"></i> Incorrecto. ${feedback}`;
    }
}

function renderCine() {
    document.getElementById('cine-content').innerHTML = `
        <div class="glass-panel p-4 rounded-3xl overflow-hidden">
            <div class="relative w-full rounded-2xl overflow-hidden" style="padding-top: 56.25%;">
                <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/VLH8eQejT5o" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p-4 text-center"><p class="text-pink-400 font-bold">Cápsula: Derechos (Short)</p></div>
        </div>
        <div class="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center border-dashed border-2 border-pink-500/30">
            <i class="fas fa-film text-4xl text-pink-500/50 mb-4"></i>
            <h4 class="font-bold text-white mb-2">Foro Activo: "Mar Adentro"</h4>
            <p class="text-sm text-slate-400 mb-4">Análisis del modelo médico rehabilitador frente al modelo social basado en la película. Fundamenta tu postura con la Convención Internacional.</p>
            <button class="px-6 py-2 bg-pink-600 hover:bg-pink-500 rounded-full text-white text-sm font-bold transition">Abrir Debate</button>
        </div>
    `;
}
