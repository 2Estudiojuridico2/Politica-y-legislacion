// ==========================================
// BASE DE DATOS ESTRUCTURADA - LEXDISCA 3D
// ==========================================

// 1. EL PLAN DE ESTUDIOS (Las Unidades del Roadmap)
const UNIDADES = [
    { 
        id: 1, numero: "01", 
        titulo: "Fundamentos Jurídicos y Discriminación", 
        desc: "Análisis de la exclusión, Marco Internacional (OEA), Derechos Humanos y Sistema de Fuentes.", 
        color: "cyan", icon: "fa-gavel" 
    },
    { 
        id: 2, numero: "02", 
        titulo: "Políticas Públicas y Personalidad Jurídica", 
        desc: "La población con discapacidad en Argentina. Derechos Económicos, Sociales y Culturales (DESC).", 
        color: "violet", icon: "fa-users" 
    },
    { 
        id: 3, numero: "03", 
        titulo: "Protección Integral y el Estado", 
        desc: "Constitución Nacional (Arts. 14, 75), Ley 22.431, obtención del CUD y Organizaciones Sociales.", 
        color: "emerald", icon: "fa-shield-alt" 
    },
    { 
        id: 7, numero: "07", // Salto al Eje 7 para mostrar el Estatuto
        titulo: "El Rol Docente en el Marco Legal", 
        desc: "Ley de Educación 26.206 y 13.688. Estatuto del Docente (Ley 10.579). Ética profesional.", 
        color: "cyan", icon: "fa-chalkboard-teacher" 
    }
];

// 2. MARCO NORMATIVO (Leyes)
const LEYES_DB = `
    <div class="glass-panel p-6 rounded-2xl mb-4">
        <h4 class="text-xl font-bold text-white border-l-4 border-cyan-500 pl-3 mb-4">Constitución Nacional - Art. 75 inc. 23</h4>
        <p class="legal-text text-slate-300">"Corresponde al Congreso: Legislar y promover medidas de acción positiva que garanticen la igualdad real de oportunidades y de trato... en particular respecto de los niños, las mujeres, los ancianos y las personas con discapacidad."</p>
    </div>
    <div class="glass-panel p-6 rounded-2xl mb-4">
        <h4 class="text-xl font-bold text-white border-l-4 border-cyan-500 pl-3 mb-4">Ley de Educación Nacional 26.206 - Art. 11 (inc. n)</h4>
        <p class="legal-text text-slate-300">"Brindar a las personas con discapacidades, temporales o permanentes, una propuesta pedagógica que permita el máximo desarrollo de sus posibilidades, la integración y el pleno ejercicio de sus derechos."</p>
    </div>
`;

// 3. JURISPRUDENCIA (Casos Reales de la CSJN extraídos del PDF)
const CASOS_DB = [
    {
        tema: "Derecho a la Educación e Inclusión Real",
        conflicto: "Una institución educativa adopta conductas hostiles (negativa de documentación, trato diferenciado, comunicaciones a compañeros) hacia una menor con discapacidad, forzando un esquema expulsivo y no inclusivo.",
        fallo: "La CSJN revocó la decisión que eximía al colegio. Concluyó que es imperativo garantizar medidas de apoyo en entornos que fomenten la plena inclusión, máxime al tratarse de un sujeto de 'múltiple vulnerabilidad' por su condición de niño y persona con discapacidad. (Fallos: 343:1805)"
    },
    {
        tema: "Salud y Medidas de Acción Positiva (Cannabis)",
        conflicto: "Una obra social y el Estado Provincial se niegan a cubrir íntegramente el costo del aceite de cannabis prescripto para tratar a un joven con epilepsia refractaria, alegando que no figura en protocolos estándar.",
        fallo: "La Corte condenó a la obra social a brindar cobertura del 100%. Aplicando el Art. 75 inc. 23, dictaminó que se demostraron mejoras sustanciales en la calidad de vida y que el Estado debe garantizar 'acciones positivas' para proteger la salud de personas vulnerables. (Fallos: 344:2868)"
    },
    {
        tema: "Acceso a la Justicia y Barreras Procesales",
        conflicto: "Una hija incapacitada para el trabajo, que vive en Salta, inicia una demanda previsional, pero la ley procesal la obliga a litigar en la Cámara Federal de la Seguridad Social en Buenos Aires.",
        fallo: "La Corte declara inconstitucional la regla de competencia territorial. Afirma que obligar a una persona vulnerable a litigar a miles de kilómetros viola la Convención (Art. 13), imponiendo una 'barrera procesal'. El Estado debe hacer 'ajustes de procedimiento'. (Fallos: 344:1788)"
    }
];

// 4. ESTATUTO DOCENTE (Ley 10.579 extraída del PDF)
const ESTATUTO_DB = [
    { art: "Art. 6 - Obligaciones", texto: "a) Desempeñar digna, eficaz y responsablemente las funciones inherentes al cargo. c) Formar a los alumnos en las normas éticas y sociales con absoluta prescindencia partidaria... en el respeto de la Constitución Nacional y Provincial." },
    { art: "Art. 7 - Derechos del Titular", texto: "a) La estabilidad en el cargo, categoría, jerarquía y ubicación o destino. b) La percepción de una remuneración justa. j) El ejercicio de su actividad en las condiciones pedagógicas adecuadas." },
    { art: "Art. 114 - Licencias", texto: "El personal docente tiene derecho a licencias por: a) Por enfermedad o accidente de trabajo. b) Por examen médico preventivo. d) Por maternidad o adopción." },
    { art: "Art. 132 - Faltas y Sanciones", texto: "Las faltas graves serán sancionadas con: a) Postergación de ascenso. b) Traslado. c) Disminución de jerarquía. d) Cesantía. e) Exoneración." }
];

// 5. MÚLTIPLE CHOICE (Simulador de examen)
const CHOICE_DB = [
    {
        pregunta: "Bajo el paradigma actual (Convención Internacional), ¿cuál es el postulado principal del 'Modelo Social' de la Discapacidad?",
        opciones: [
            { texto: "La discapacidad es una enfermedad que requiere cura o normalización médica.", correcta: false },
            { texto: "La discapacidad surge de la interacción entre las deficiencias de la persona y las BARRERAS del entorno que evitan su participación plena.", correcta: true },
            { texto: "Las personas con discapacidad deben ser educadas únicamente en instituciones separadas (Escuelas Especiales aisladas).", correcta: false }
        ],
        feedback: "¡Excelente! El Modelo Social (a diferencia del Modelo Médico rehabilitador) pone el foco en la sociedad: son las barreras (físicas, sociales, actitudinales) las que discapacitan, no el individuo."
    },
    {
        pregunta: "Según la Reforma Constitucional de 1994, ¿cómo funciona el orden de prelación (jerarquía) de las leyes en Argentina?",
        opciones: [
            { texto: "La Constitución Provincial está por encima de los Tratados Internacionales.", correcta: false },
            { texto: "Constitución Nacional y Tratados de DDHH (Art. 75 inc 22) > Leyes Nacionales > Constituciones Provinciales.", correcta: true },
            { texto: "Las resoluciones ministeriales tienen la misma jerarquía que la Constitución Nacional.", correcta: false }
        ],
        feedback: "Correcto. Como vimos en la clase, la pirámide jurídica tiene en su cúspide a la Constitución Nacional junto con los Tratados de Derechos Humanos con jerarquía constitucional."
    }
];
