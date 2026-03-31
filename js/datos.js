// ==========================================
// BASE DE DATOS RELACIONAL - LEXDISCA 3D
// ==========================================

const UNIDADES = [
    { id: 1, numero: "01", titulo: "Fundamentos y Modelos", desc: "Modelo Médico vs. Modelo Social. Discriminación y Marco Constitucional.", color: "cyan", icon: "fa-gavel" },
    { id: 3, numero: "03", titulo: "Protección Integral", desc: "Ley 22.431, CUD y la Convención Internacional.", color: "emerald", icon: "fa-shield-alt" },
    { id: 7, numero: "07", titulo: "Rol Docente y Educación", desc: "Leyes de Educación y Estatuto Docente (Ley 10.579).", color: "violet", icon: "fa-chalkboard-teacher" }
];

const LEYES_DB = [
    { 
        eje: 1, titulo: "Constitución Nacional - Art. 75 inc. 23", 
        texto: "Corresponde al Congreso: Legislar y promover medidas de acción positiva que garanticen la igualdad real de oportunidades y de trato... en particular respecto de los niños, las mujeres, los ancianos y las personas con discapacidad." 
    },
    { 
        eje: 3, titulo: "Convención Internacional de los Derechos de las Personas con Discapacidad (Ley 26.378)", 
        texto: "La discapacidad es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las BARRERAS debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás (Modelo Social)." 
    },
    { 
        eje: 7, titulo: "Ley de Educación Nacional 26.206 - Art. 42", 
        texto: "La Educación Especial es la modalidad del sistema educativo destinada a asegurar el derecho a la educación de las personas con discapacidades... La Educación Especial se rige por el principio de inclusión educativa." 
    }
];

const CASOS_DB = [
    {
        eje: 1, tema: "Derecho a la Igualdad y No Discriminación",
        conflicto: "Una institución educativa adopta conductas hostiles (trato diferenciado irrazonable, comunicaciones a compañeros) hacia una menor con discapacidad, forzando un esquema expulsivo.",
        fallo: "La CSJN ordenó cesar las conductas discriminatorias. Afirmó que la Convención exige una protección especial (acción positiva) y medidas de apoyo personalizadas para lograr una INCLUSIÓN PLENA, desterrando el modelo segregador. (Fallos: 343:1805)"
    },
    {
        eje: 3, tema: "Acceso a la Justicia (Ajustes de Procedimiento)",
        conflicto: "Una persona con discapacidad debe litigar a miles de kilómetros para reclamar una pensión, lo que configura una barrera física y económica insalvable.",
        fallo: "La Corte declara inconstitucional la regla de competencia. El Estado debe realizar 'ajustes razonables' de procedimiento para garantizar la igualdad y remover las BARRERAS procesales (Art. 13 Convención). (Fallos: 344:1788)"
    },
    {
        eje: 7, tema: "Cobertura Educativa e Integración",
        conflicto: "Una obra social se niega a cubrir la escolaridad y el acompañante terapéutico de un niño, exigiendo pruebas casi imposibles de conseguir por la familia.",
        fallo: "La CSJN revocó el rechazo. Sostuvo que el Estado y las Obras Sociales no pueden imponer trabas burocráticas irrazonables para prestaciones educativas vitales. Rige el principio in dubio pro inclusión. (Fallos: 347:547)"
    }
];

const ESTATUTO_DB = [
    { eje: 7, art: "Art. 6 - Obligaciones", texto: "a) Desempeñar digna, eficaz y responsablemente las funciones... c) Formar a los alumnos en las normas éticas y sociales con absoluta prescindencia partidaria... respetando la Constitución Nacional y Provincial." },
    { eje: 7, art: "Art. 7 - Derechos del Titular", texto: "a) La estabilidad en el cargo, categoría, jerarquía y ubicación o destino. b) La percepción de una remuneración justa." },
    { eje: 7, art: "Art. 114 - Licencias", texto: "El personal docente tiene derecho a licencias por: a) Enfermedad o accidente de trabajo. b) Maternidad o adopción." }
];

const CHOICE_DB = [
    {
        eje: 1,
        pregunta: "¿Cuál es la diferencia fundamental entre el Modelo Médico y el Modelo Social de la discapacidad?",
        opciones: [
            { texto: "El modelo médico busca adaptar el entorno, y el social busca curar a la persona.", correcta: false },
            { texto: "El modelo médico ve a la discapacidad como una 'enfermedad' a curar o normalizar. El modelo social sostiene que la discapacidad surge por las BARRERAS (físicas/actitudinales) que la sociedad impone.", correcta: true },
            { texto: "Ambos modelos sostienen que las personas con discapacidad deben asistir a escuelas segregadas.", correcta: false }
        ],
        feedback: "¡Exacto! El Modelo Social (incorporado en la Convención) quita el 'problema' de la persona y lo pone en la sociedad que no está adaptada."
    },
    {
        eje: 3,
        pregunta: "Según la Ley 22.431 y la Constitución, ¿qué son las 'Medidas de Acción Positiva'?",
        opciones: [
            { texto: "Son privilegios inconstitucionales que rompen la igualdad ante la ley.", correcta: false },
            { texto: "Trato idéntico y matemático para todos los ciudadanos sin importar su condición.", correcta: false },
            { texto: "Son acciones estatales para tratar de forma diferente a quienes están en desventaja (vulnerabilidad) para lograr una igualdad REAL de oportunidades.", correcta: true }
        ],
        feedback: "Correcto. El Art. 75 inc 23 de la CN ordena estas medidas para equilibrar la balanza a favor de personas con discapacidad, niños y ancianos."
    },
    {
        eje: 7,
        pregunta: "Bajo la Ley 10.579 (Estatuto Docente), la estabilidad en el cargo es un derecho de:",
        opciones: [
            { texto: "Todo el personal (titular, provisional y suplente).", correcta: false },
            { texto: "Únicamente el personal docente Titular.", correcta: true },
            { texto: "Los directivos exclusivamente.", correcta: false }
        ],
        feedback: "Perfecto. El Art. 7 inc 'a' garantiza la estabilidad exclusivamente al personal Titular."
    }
];
