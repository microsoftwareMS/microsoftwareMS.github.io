export const IS2Questions = [
    {
        question: "Los requisitos del sistema ______________ y exponen la forma en la que el sistema ofrece los requerimientos del usuario; son utilizados en su mayoría por _____________ como datos iniciales para diseñar el sistema.",
        options: [
            "agregan detalles; los usuarios del sistema",
            "contienen la arquitectura; los ingenieres de software",
            "contienen la arquitectura; los usuarios del sistema",
            "agregan detalles; los ingenieres de software"
        ],
        answer: "agregan detalles; los ingenieres de software"
    },
    {
        question: "Las revisiones de requisitos tratan de encontrar:",
        options: [
            "Problemas de implementación en el código",
            "Inconsistencias y ambigüeidades en requerimientos",
            "Oportunidades de reducir costos",
            "Defificencias en el diseño del sistema"
        ],
        answer: "Inconsistencias y ambigüeidades en requerimientos"
    },
    {
        question: "En que consiste la verificabilidad",
        options: [
            "Se debe escribir un conjunto de pruebas que el sistema debe cumplir",
            "El documento debe incluir todas las funciones y restricciones",
            "No debe haber contradicciones o descriciones ambiguas",
            "Identificar las funciones adiccionales que se requiere"
        ],
        answer: "Se debe escribir un conjunto de pruebas que el sistema debe cumplir"
    },
    {
        question: "En que consiste la especificación de un sistema?",
        options: [
            "Definir el hardware necesario.",
            "Crear documentación técnica.",
            "Desarrollar un plan de marketing.",
            "Establecer los limites del sistema y sus funciones"
        ],
        answer: "Establecer los limites del sistema y sus funciones"
    },
    {
        question: "Qué muestran los modelos de contexto?",
        options: [
            "Las relaciones entre sistemas en el entorno y el sistema especificado.",
            "El flujo de control en un sistema.",
            "Los procesos del sistema.",
            "La estructura interna de un sistema."
        ],
        answer: "Las relaciones entre sistemas en el entorno y el sistema especificado."
    },
    {
        question: "Al escribir requerimientos es recomendable:",
        options: [
            "Asociar razones a cada requerimiento",
            "No distinguir tipos de requerimientos",
            "Evitar estándares y formatos",
            "Usar lenguaje técnico de programación"
        ],
        answer: "Asociar razones a cada requerimiento"
    },
    {
        question: "Cuál de los siguientes NO es un tipo de requerimiento no funcional?",
        options: [
            "Requierimientos organizacionales",
            "Requierimientos legislativos",
            "Requierimientos de rendimiento",
            "Requierimientos de compatibilidad"
        ],
        answer: "Requierimientos de compatibilidad"
    },
    {
        question: "Según el texto, los requerimientos funcionales:",
        options: [
            "Especificican servicios que el sistema debe proveer",
            "Son semejantes a los requerimientos no funcionales.",
            "Definen estándares y procesos de desarrollo.",
            "Describen las restricciones del sistema como un todo."
        ],
        answer: "Especificican servicios que el sistema debe proveer"
    },
    {
        question: "El documento de requerimientos típicamente incluye:",
        options: [
            "El código fuente detallado del sistema",
            "Únicamente requerimientos no funcionales",
            "Requerimientos de usuario y del sistema",
            "Solo la arquitectura y el diseño completo"
        ],
        answer: "Requerimientos de usuario y del sistema"
    },
    {
        question: "Los requerimientos del usuario no deberían contener ___________, por ende, no se debe utilizar un lenguaje técnico a nivel de software, se recomienda aplicar ___________, entre otros recursos de información.",
        options: [
            "detalles del diseño o arquitectura del sistema: notaciones, modelos",
            "detalles del diseño o arquitectura del sistema: un lenguaje natural, diagramas, tablas",
            "un lenguaje natural, diagramas, tablas, notaciones, modelos",
            "un lenguaje natural, diagramas, tablas, detalles del diseño o arquitectura del sistema"
        ],
        answer: "detalles del diseño o arquitectura del sistema: un lenguaje natural, diagramas, tablas"
    },
    {
        question: "La validación de requisitos verifica:",
        options: [
            "Detalles de diseño e implementación",
            "Satisfacción de necesidades reales del usuario",
            "Ausencia de riesgos de seguridad en el sistema",
            "Cumplimiento de fechas y presupuesto del proyecto"
        ],
        answer: "Satisfacción de necesidades reales del usuario"
    },
    {
        question: "El propósito principal de construir prototipos es:",
        options: [
            "Definir la arquitectura técnica",
            "Verificar la completitud de requerimientos",
            "Evaluar opciones tecnológicas",
            "Permitir a usuarios probar requisitos tentativamente"
        ],
        answer: "Permitir a usuarios probar requisitos tentativamente"
    },
    {
        question: "Qué son los escenarios?",
        options: [
            "Son métodos de descubrimiento usando lenguaje de modelado unificado",
            "Son preguntas que se realizan a los que intervienen en el proyecto",
            "Es una fase del descubrimiento de requerimientos.",
            "Son útiles para detallar un bosquejo de descripción de requerimientos."
        ],
        answer: "Son útiles para detallar un bosquejo de descripción de requerimientos."
    },
    {
        question: "Los prototipos en la validación de requisitos permiten:",
        options: [
            "Evaluar tecnologías candidatas",
            "Mejorar la eficiencia de los algoritmos",
            "Verificar estándares de codificación",
            "Que los usuarios prueben requisitos tentativos"
        ],
        answer: "Que los usuarios prueben requisitos tentativos"
    },
    {
        question: "Seleccione la alternativa INCORRECTA para las entrevistas",
        options: [
            "Pueden ser mediante preguntas cerradas y abiertas",
            "Pueden ser de manera formal o informal",
            "Su objeto es formular preguntas a los participantes",
            "Solo se puede usar con preguntas preestablecidas"
        ],
        answer: "Solo se puede usar con preguntas preestablecidas"
    }
];

IS2Questions.forEach((question, index) => {
    if (question.type === "matching") {
        // Verificar que términos y definiciones son arreglos válidos
        if (Array.isArray(question.terms) && Array.isArray(question.definitions)) {
            // Crear pares combinados
            const pairs = question.terms.map((term, i) => ({
                term,
                definition: question.definitions[i]
            }));

            // Mezclar los pares
            const shuffledPairs = pairs.sort(() => Math.random() - 0.5);

            // Asignar términos y definiciones mezclados de vuelta
            question.terms = shuffledPairs.map(pair => pair.term);
            question.definitions = shuffledPairs.map(pair => pair.definition);
        } else {
            console.error(
                `Error en la pregunta "${question.question}" en el índice ${index}: 'terms' o 'definitions' no son arreglos válidos.`
            );
        }
    } else if (Array.isArray(question.options)) {
        // Verificar si las opciones son válidas y mezclarlas
        question.options = question.options.sort(() => Math.random() - 0.5);
    } else {
        console.error(
            `Error en la pregunta "${question.question}" en el índice ${index}: 'options' no es un arreglo válido.`
        );
    }
});
