/**
 * BASE DE DATOS NORMATIVA INTEGRAL (ARTÍCULO POR ARTÍCULO)
 */

const LEYES_DB = [
    {
        titulo: "Ley de Educación Nacional 26.206",
        entidad: "República Argentina - Vigente",
        capitulos: [
            {
                nombreCorto: "Fines y Objetivos",
                tituloCapitulo: "Título I: Disposiciones Generales",
                articulos: [
                    { numero: "1", contenido: "La presente ley regula el ejercicio del derecho de enseñar y aprender consagrado por el artículo 14 de la Constitución Nacional y los tratados internacionales incorporados a ella." },
                    { numero: "2", contenido: "La educación y el conocimiento son un bien público y un derecho personal y social, garantizados por el Estado." },
                    { numero: "11 (inc. n)", contenido: "Brindar a las personas con discapacidades, temporales o permanentes, una propuesta pedagógica que permita el máximo desarrollo de sus posibilidades, la integración y el pleno ejercicio de sus derechos." }
                ]
            },
            {
                nombreCorto: "Educación Especial",
                tituloCapitulo: "Título II, Cap. VIII: Educación Especial",
                articulos: [
                    { numero: "42", contenido: "La Educación Especial es la modalidad del sistema educativo destinada a asegurar el derecho a la educación de las personas con discapacidades, temporales o permanentes, en todos los niveles y modalidades del Sistema Educativo. La Educación Especial se rige por el principio de inclusión educativa." },
                    { numero: "43", contenido: "Las provincias y la CABA garantizarán: Personal especializado, servicios educativos especiales, transporte, recursos técnicos y materiales para el desarrollo del currículum." },
                    { numero: "44", contenido: "Las autoridades dispondrán las medidas necesarias para: Posibilitar una trayectoria educativa integral; Contar con el personal especializado suficiente; Asegurar la cobertura de servicios." },
                    { numero: "45", contenido: "El Ministerio de Educación, en acuerdo con el Consejo Federal de Educación, creará las instancias institucionales y técnicas necesarias para la orientación de la trayectoria escolar más adecuada de los/as alumnos/as con discapacidades." }
                ]
            }
        ]
    },
    {
        titulo: "Ley de Educación Provincial 13.688",
        entidad: "Provincia de Buenos Aires",
        capitulos: [
            {
                nombreCorto: "Estructura PBA",
                tituloCapitulo: "Título II: El Sistema Educativo Provincial",
                articulos: [
                    { numero: "39", contenido: "La Educación Especial es la modalidad del Sistema Educativo Provincial responsable de garantizar el derecho a la educación de los alumnos con discapacidades, temporales o permanentes." },
                    { numero: "40", contenido: "La Dirección General de Cultura y Educación establecerá los mecanismos de articulación con los otros Niveles y Modalidades a fin de garantizar la trayectoria educativa integral de los alumnos." },
                    { numero: "41", contenido: "Garantizará la integración de los alumnos con discapacidades en todos los niveles y modalidades, según las posibilidades de cada persona y las configuraciones de apoyo necesarias." }
                ]
            }
        ]
    },
    {
        titulo: "Protección Integral Ley 10.592",
        entidad: "Régimen Básico PBA",
        capitulos: [
            {
                nombreCorto: "Cupo Laboral",
                tituloCapitulo: "Título III: Empleo y Capacitación",
                articulos: [
                    { numero: "8", contenido: "El Estado Provincial, sus organismos descentralizados o autárquicos, las empresas del Estado, están obligados a ocupar personas con discapacidad que reúnan condiciones de idoneidad para el cargo en una proporción no inferior al cuatro por ciento (4%) de la totalidad de su personal." },
                    { numero: "9", contenido: "Las personas con discapacidad que se desempeñen en los entes indicados en el artículo anterior, gozarán de los mismos derechos y estarán sujetas a las mismas obligaciones que el resto de los trabajadores." }
                ]
            }
        ]
    },
    {
        titulo: "Transporte y Accesibilidad",
        entidad: "Leyes Nacionales 22.431 y 24.314",
        capitulos: [
            {
                nombreCorto: "Transporte Gratuito",
                tituloCapitulo: "Decreto 38/2004 - Reglamentario Ley 22.431",
                articulos: [
                    { numero: "1", contenido: "El certificado de discapacidad expedido por autoridad competente será documento válido para acceder al derecho de gratuidad para viajar en los distintos tipos de transporte colectivo terrestre, sometidos a la jurisdicción nacional." },
                    { numero: "2", contenido: "Dicho derecho se extiende a un acompañante en caso de que el certificado así lo indique. Las empresas deberán entregar los pasajes de forma inmediata al ser solicitados." }
                ]
            },
            {
                nombreCorto: "Barreras Físicas",
                tituloCapitulo: "Ley 24.314 - Accesibilidad",
                articulos: [
                    { numero: "20", contenido: "Establécese la prioridad de la supresión de barreras físicas en los ámbitos urbanos arquitectónicos y de transporte que se realicen o en los existentes que deban ser remodelados." },
                    { numero: "21", contenido: "Entiéndese por accesibilidad la posibilidad de las personas con movilidad reducida de gozar de las adecuadas condiciones de seguridad y autonomía como elemento primordial para la integración." }
                ]
            }
        ]
    }
];
