// ==========================================
// BASE DE DATOS RELACIONAL MASIVA - LEXDISCA 3D
// Archivo: js/datos.js
// ==========================================

const UNIDADES = [
    { id: 1, numero: "01", titulo: "Fundamentos Jurídicos y Discriminación", desc: "Naturaleza de la Discriminación, Marco Internacional (OEA), Derechos Humanos y Sistema de Fuentes.", color: "cyan", icon: "fa-gavel" },
    { id: 2, numero: "02", titulo: "Políticas Públicas y Personalidad Jurídica", desc: "Desafíos Actuales, Derechos Civiles y Derechos Económicos, Sociales y Culturales (DESC).", color: "violet", icon: "fa-users" },
    { id: 3, numero: "03", titulo: "Protección Integral y el Estado", desc: "Protección en la Constitución Nacional (Arts. 14, 16, 75). Ley 22.431 y CUD.", color: "emerald", icon: "fa-shield-alt" },
    { id: 4, numero: "04", titulo: "Memoria Histórica y Sistema de Prestaciones", desc: "Ley 24.901, Decretos reglamentarios y vulnerabilidad social.", color: "cyan", icon: "fa-landmark" },
    { id: 5, numero: "05", titulo: "Salud, Autonomía y Seguridad Social", desc: "Leyes de Salud Mental (26.657), Hipoacusia, Epilepsia y Obras Sociales (Ley 23.660/61).", color: "violet", icon: "fa-heartbeat" },
    { id: 6, numero: "06", titulo: "Empleo y Riesgos Laborales", desc: "Ley de Empleo 24.013 (Ley Bases), Riesgos del Trabajo 24.557 y Talleres Protegidos.", color: "emerald", icon: "fa-briefcase" },
    { id: 7, numero: "07", titulo: "El Rol Docente en el Marco Legal", desc: "Leyes de Educación 26.206 y 13.688. Estatuto Docente (Ley 10.579). Ética profesional.", color: "cyan", icon: "fa-chalkboard-teacher" }
];
const TEORIA_DB = [
    {
        eje: 1,
        titulo: "El Modelo Médico o Rehabilitador",
        subtitulo: "Enfoque en el Déficit y la Normalización",
        cuerpo: "Este modelo entiende la discapacidad como una desviación de la 'normalidad'. El foco está en la patología. Según los autores: 'Este se centra en el déficit, y pone el énfasis en una comprensión causal de los trastornos y en el sentido de un curso crónico' (Cazorla Palomo & Parra Ramajo, 2017, p. 47). El objetivo aquí es 'curar' o 'normalizar' al sujeto para que encaje en la sociedad.",
        cita: "Cazorla Palomo, J. y Parra Ramajo, B. (2017). Alternativas. Cuadernos de Trabajo Social, 24, 43-54."
    },
    {
        eje: 1,
        titulo: "El Modelo Social (Derechos Humanos)",
        subtitulo: "La Discapacidad como Producto Social",
        cuerpo: "La discapacidad no es una enfermedad individual, sino el resultado de la interacción entre deficiencias y BARRERAS. 'El modelo social sitúa la causa de la discapacidad en el entorno social, y no en la persona. Es la sociedad la que, al no tener en cuenta las necesidades de las personas con diversidad funcional, genera barreras' (Asís, 2013, citado en Cazorla Palomo & Parra Ramajo, 2017, p. 49).",
        cita: "Cazorla Palomo, J. y Parra Ramajo, B. (2017). Alternativas. Cuadernos de Trabajo Social, 24, 43-54."
    },
    {
        eje: 1,
        titulo: "El Modelo de la Recuperación (Recovery)",
        subtitulo: "Autonomía y Propósito de Vida",
        cuerpo: "Apunta a que el estudiante desarrolle su proyecto de vida más allá del diagnóstico. 'La recuperación es un proceso personal, único e implica el desarrollo de un nuevo sentido de propósito y esperanza a medida que se crece más allá de los efectos de la enfermedad' (Anthony, 1993, citado en Cazorla Palomo & Parra Ramajo, 2017, p. 48).",
        cita: "Cazorla Palomo, J. y Parra Ramajo, B. (2017). Alternativas. Cuadernos de Trabajo Social, 24, 43-54."
    }
];
const LEYES_DB = [
    { 
        eje: 1, 
        titulo: "Constitución de la Nación Argentina - Preámbulo y Art. 14", 
        texto: "Preámbulo: '...promover el bienestar general, y asegurar los beneficios de la libertad, para nosotros, para nuestra posteridad, y para todos los hombres del mundo que quieran habitar en el suelo argentino...'. Art. 14: Todos los habitantes de la Nación gozan de los siguientes derechos... de enseñar y aprender." 
    },
    { 
        eje: 3, 
        titulo: "Constitución Nacional - Art. 75 inc. 23 (Acciones Positivas)", 
        texto: "Corresponde al Congreso: Legislar y promover medidas de acción positiva que garanticen la igualdad real de oportunidades y de trato, y el pleno goce y ejercicio de los derechos reconocidos por esta Constitución y por los tratados internacionales vigentes sobre derechos humanos, en particular respecto de los niños, las mujeres, los ancianos y las personas con discapacidad." 
    },
    {
        eje: 3,
        titulo: "Ley Nacional 22.431 - Sistema de protección integral",
        texto: "Art. 1: Institúyese por la presente ley un sistema de protección integral de las personas discapacitadas, tendiente a asegurar a éstas su atención médica, su educación y su seguridad social, así como a concederles las franquicias y estímulos que permitan en lo posible neutralizar la desventaja que la discapacidad les provoca y les den oportunidad, mediante su esfuerzo, de desempeñar en la comunidad un rol equivalente al que ejercen las personas normales."
    },
    { 
        eje: 4, 
        titulo: "Ley 24.901 - Sistema de Prestaciones Básicas", 
        texto: "Art. 1: Institúyese por la presente ley un sistema de prestaciones básicas de atención integral a favor de las personas con discapacidad, contemplando acciones de prevención, asistencia, promoción y protección, con el objeto de brindarles una cobertura integral a sus necesidades y requerimientos." 
    },
    { 
        eje: 7, 
        titulo: "Ley de Educación Nacional 26.206 - Art. 42", 
        texto: "La Educación Especial es la modalidad del sistema educativo destinada a asegurar el derecho a la educación de las personas con discapacidades, temporales o permanentes, en todos los niveles y modalidades del Sistema Educativo. La Educación Especial se rige por el principio de inclusión educativa." 
    }
];

const CASOS_DB = [
    {
        eje: 1, 
        tema: "Derecho a la Igualdad y No Discriminación en Educación",
        conflicto: "Una institución educativa adopta conductas hostiles (negativa de documentación, trato diferenciado irrazonable, elaboración de un proyecto pedagógico individual coercitivo, circulación de comunicaciones relativas a la amparista entre sus compañeros de clase) hacia una menor con discapacidad, forzando un esquema expulsivo y no inclusivo.",
        fallo: "La CSJN (Fallos: 343:1805) revocó la decisión de cámara. Sostuvo que 'resulta imperativo que se garanticen medidas efectivas y personalizadas de apoyo en entornos que fomenten al máximo el desarrollo social y educativo de conformidad con el objetivo de plena inclusión, máxime cuando el actor es una persona en situación de múltiple vulnerabilidad por su condición de niño y de persona con discapacidad'."
    },
    {
        eje: 3, 
        tema: "Acceso a Justicia y Tutela Judicial Efectiva (Ajustes de Procedimiento)",
        conflicto: "Una persona con incapacidad para el trabajo que vive en Salta reclama pensión, pero la ley 24.241 (art 49 inc 4) le exige litigar en la Cámara Federal de la Seguridad Social en CABA.",
        fallo: "La Corte (Fallos: 344:1788) declara inconstitucional la regla de competencia. El Art. 13 de la Convención impone 'ajustes de procedimiento' para el acceso a la justicia. Obligar a litigar a miles de kilómetros configura una barrera que afecta la tutela judicial efectiva en condiciones de igualdad."
    },
    {
        eje: 4, 
        tema: "Carga probatoria en materia de derechos educativos",
        conflicto: "Una obra social rechaza la cobertura de prestaciones educativas de la Ley 24.901 exigiendo a la familia que pruebe la inexistencia de instituciones públicas adecuadas.",
        fallo: "Es arbitrario el rechazo (Fallos: 347:547 y 343:848). La CSJN falló que derivar la carga probatoria sobre la actora vinculada a la imposibilidad de acudir a una institución pública adecuada no resulta razonable. Es la demandada la que debía ocuparse de probar y poner a disposición una institución adecuada."
    },
    {
        eje: 5, 
        tema: "Salud, Obras Sociales y Aceite de Cannabis",
        conflicto: "Obra social y Provincia se niegan a cubrir el 100% de aceite de cannabis para tratar epilepsia refractaria, alegando que el procedimiento es experimental y no está en el PMO.",
        fallo: "La CSJN (Fallos: 344:2868) ordenó la cobertura total. Acreditada la prescripción médica, la falta de efectividad de los tratamientos convencionales y la mejora sustancial en la calidad de vida, el paciente tiene derecho a la cobertura integral, siendo obligación del Estado realizar 'medidas de acción positiva' (Art 75 inc 23 CN)."
    },
    {
        eje: 7, 
        tema: "Escolaridad Común vs. Especial (Síndrome de Down)",
        conflicto: "Una empresa de medicina prepaga se niega a cubrir íntegramente la escolaridad común de un niño con discapacidad, alegando que existen escuelas públicas provinciales.",
        fallo: "En el caso (Fallos: 341:966 y 341:585), la Corte dejó sin efecto la sentencia que obligaba a la prepaga, ya que los tribunales inferiores relativizaron testimonios de expertas que daban cuenta de la posibilidad de que la menor asistiera a escuelas públicas provinciales preparadas para la integración."
    }
];

const ESTATUTO_DB = [
    { 
        eje: 7, 
        art: "Art. 6 - Obligaciones", 
        texto: "Son obligaciones del personal docente: a) Desempeñar digna, eficaz y responsablemente las funciones inherentes al cargo. b) Observar dentro y fuera del servicio... una conducta que no afecte la función y la ética docentes. c) Formar a los alumnos en las normas éticas y sociales con absoluta prescindencia partidaria y religiosa, en el amor y respeto a la patria y en el conocimiento y respeto de la Constitución Nacional y la Constitución Provincial." 
    },
    { 
        eje: 7, 
        art: "Art. 7 - Derechos del Titular", 
        texto: "Son derechos del personal docente titular: a) La estabilidad en el cargo, categoría, jerarquía y ubicación o destino. b) La percepción de una remuneración justa... j) El ejercicio de su actividad en las condiciones pedagógicas adecuadas. l) El uso de licencias reglamentarias." 
    },
    { 
        eje: 7, 
        art: "Art. 8 - Personal Suplente y Provisional", 
        texto: "El personal docente suplente y provisional gozará de los derechos establecidos en el artículo anterior a excepción de los enumerados en los incisos a [Estabilidad], c [Ascenso/Traslado], d, e, i, k, ñ y o." 
    },
    { 
        eje: 7, 
        art: "Art. 28 - Incompatibilidades", 
        texto: "El personal docente comprendido en este Estatuto podrá acumular más de: 2) Dos (2) cargos de base en el mismo o distintos establecimientos. 6) Treinta (30) horas cátedra. El desempeño será incompatible cuando haya superposición de horarios o la distancia impida el cumplimiento del horario." 
    },
    { 
        eje: 7, 
        art: "Art. 114 - Licencias", 
        texto: "El personal docente tiene derecho a licencias por las siguientes causas: a) Por enfermedad o accidente de trabajo. b) Por examen médico pre-matrimonial y preventivo. d) Por maternidad o adopción. e) Por nacimiento de hijo." 
    }
];

const CHOICE_DB = [
    {
        eje: 1,
        pregunta: "Bajo el paradigma actual (Convención Internacional), ¿cuál es el postulado principal del 'Modelo Social' de la Discapacidad?",
        opciones: [
            { texto: "La discapacidad es una patología individual que requiere cura o normalización.", correcta: false },
            { texto: "La discapacidad resulta de la interacción entre las deficiencias de la persona y las BARRERAS (actitudinales/entorno) que evitan su participación.", correcta: true },
            { texto: "Las personas con discapacidad deben ser asistidas únicamente de manera caritativa por el Estado.", correcta: false }
        ],
        feedback: "¡Exacto! El Modelo Social pone el foco en el entorno. La discapacidad surge cuando la sociedad impone barreras (físicas, sociales, legales) que limitan a la persona."
    },
    {
        eje: 1,
        pregunta: "Según la Reforma Constitucional de 1994, ¿cuál es el orden de prelación (jerarquía) de las leyes en Argentina?",
        opciones: [
            { texto: "Las Leyes Nacionales y Constituciones Provinciales tienen supremacía sobre los Tratados.", correcta: false },
            { texto: "Constitución Nacional y Tratados de DDHH (Art. 75 inc 22) > Leyes Nacionales > Constituciones Provinciales.", correcta: true },
            { texto: "El derecho comunitario y municipal deroga las normativas nacionales en materia de salud.", correcta: false }
        ],
        feedback: "Correcto. El Art. 75 inc 22 otorgó jerarquía constitucional a tratados como la Convención de los Derechos de las Personas con Discapacidad."
    },
    {
        eje: 3,
        pregunta: "De acuerdo al Art. 75 inc 23 de la Constitución Nacional, ¿qué obligación impostergable tiene el Estado respecto a las personas con discapacidad?",
        opciones: [
            { texto: "Dictar medidas de 'Acción Positiva' para garantizar la igualdad real de oportunidades.", correcta: true },
            { texto: "Asegurar un trato matemáticamente idéntico al de los demás ciudadanos sin considerar su vulnerabilidad.", correcta: false },
            { texto: "Derivar toda la responsabilidad de atención médica a los efectores privados.", correcta: false }
        ],
        feedback: "Perfecto. La 'Acción Positiva' (o discriminación inversa) obliga al Estado a dar un trato preferente a grupos vulnerables para equilibrar desigualdades reales."
    },
    {
        eje: 4,
        pregunta: "En los juicios por amparo educativo (Ej. Ley 24.901), la Corte Suprema ha dictaminado que la carga de probar la existencia de instituciones idóneas recae sobre:",
        opciones: [
            { texto: "Los padres o familiares de la persona con discapacidad.", correcta: false },
            { texto: "El Estado o la Obra Social demandada, quienes deben poner la institución a disposición.", correcta: true },
            { texto: "El Tribunal de Clasificación Docente.", correcta: false }
        ],
        feedback: "¡Correcto! Exigir una prueba negativa a la familia (demostrar que 'no existen' instituciones) es irrazonable. El Estado/Obra Social tiene los recursos para probarlo."
    },
    {
        eje: 7,
        pregunta: "Bajo la Ley 10.579 (Estatuto Docente), el derecho a la 'estabilidad en el cargo, jerarquía y ubicación' le corresponde a:",
        opciones: [
            { texto: "Exclusivamente al personal docente Titular.", correcta: true },
            { texto: "Todo el personal (Titular, Provisional y Suplente).", correcta: false },
            { texto: "Solo a los Inspectores y Directivos.", correcta: false }
        ],
        feedback: "Exacto. El Art. 7 inciso 'a' garantiza la estabilidad al personal TITULAR. El Art. 8 expresamente excluye a provisionales y suplentes de este derecho."
    },
    {
        eje: 7,
        pregunta: "Según el Art. 6 del Estatuto, el docente tiene la obligación de formar a los alumnos en normas éticas y sociales...",
        opciones: [
            { texto: "...fomentando la ideología política del gobierno de turno.", correcta: false },
            { texto: "...con absoluta prescindencia partidaria y religiosa, respetando la Constitución Nacional y Provincial.", correcta: true },
            { texto: "...basado exclusivamente en las creencias morales de la comunidad local.", correcta: false }
        ],
        feedback: "Correcto. La educación pública exige objetividad, laicidad y respeto absoluto a la Constitución por sobre cualquier bandera partidaria."
    }
];

const CINE_DB = [
    { 
        eje: 1, 
        titulo: "Cápsula: Derechos (Naturaleza de la Discriminación)", 
        url: "https://www.youtube.com/embed/VLH8eQejT5o" 
    },
    // 👇 ESTE ES EL BLOQUE NUEVO PARA TU PREZI 👇
    { 
        eje: 1, 
        titulo: "Presentación Interactiva (Prezi)", 
        url: "https://prezi.com/view/WIRQlPHeAgjQZlnBviYf/embed/" 
    },
    { 
        eje: 3, 
        titulo: "Mar Adentro (Análisis de la Autonomía y Barreras)", 
        url: "https://www.youtube.com/embed/z12i-xN8L0w" 
    }
];
