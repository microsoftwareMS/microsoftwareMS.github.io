export const DIQuestions = [
    {
        question: "¿El diagrama que permite visualizar causas y efectos de un problema en forma estructurada es el  Diagrama de Ishikawa? ",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Verdadero"
    },
    {
        question: "La exploración documental no forma parte del planteamiento del problema.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Falso"
    },
    {
        question: "Las preguntas de investigación pueden modificarse durante el proceso.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Verdadero"
    },
    {//Aqui va de tipo completar escrito//
        question: "El diagrama de _________ se usa para identificar, explorar y representar gráficamente posibles causas de un problema específico.",
        type: "text",
        answer: "Ishikawa"
    },
    {
        question: "En el árbol de problemas, las causas se ubican en la parte superior del diagrama.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Falso"
    },
    {
        question: "En la matriz de investigación, los objetivos específicos deben vincularse directamente con las preguntas de investigación.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Verdadero"
    },
    {
        question: "El diagrama de Ishikawa se utiliza principalmente para determinar la población de estudio.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Falso"
    },
    {//Aqui va de tipo completar escrito//
        question: "La pregunta de investigación es el punto de partida del ____________ del problema.",
        type: "text",
        answer: "planteamiento"
    },
    {
        question: "El método estadístico de análisis de los datos cuantitativos depende de",
        options: [
            "Cinco factores",
            "Un factor",
            "Tres factores",
            "Dos factores"
        ],
        answer: "Tres factores"
    },
    {
        question: "Responda verdadero o falso.<br> En el enfoque cualitativo: La recolección de los datos está orientada a proveer de un mayor entendimiento de los significados y experiencias de las personas.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Verdadero"
    },
    {
        question: "Las técnicas e instrumentos de recolección de información son",
        options: [
            "El proceso de registrar conceptos abstractos a través de referentes empíricos, mediante un plan explícito y organizado.",
            "Técnicas e instrumentos apropiados para la fase de recolección de datos, en función de las variables necesarias para obtener resultados que expliquen el fenómeno investigado.",
            "Elementos esenciales en la investigación y en la toma de decisiones informadas en diversos campos."
        ],
        answer: "Elementos esenciales en la investigación y en la toma de decisiones informadas en diversos campos."
    },
    {
        type: "multiple-choice",
        question: "El procedimiento para crear un instrumento de medición es:",
        options: [
            "Análisis de documentos",
            "Recabar la información de forma indirecta",
            "Modificar, ajustar y mejorar",
            "Listar los conceptos",
            "Determinar y listar los referentes empíricos",
            "Objetivos de investigación",
            "Aplicar una prueba piloto del instrumento de medición",
            "Revisar su definición teórica"
        ],
        answer: [
            "Análisis de documentos",
            "Recabar la información de forma indirecta",
            "Modificar, ajustar y mejorar",
            "Listar los conceptos",
            "Determinar y listar los referentes empíricos",
            "Objetivos de investigación",
            "Aplicar una prueba piloto del instrumento de medición",
            "Revisar su definición teórica"
        ]
    },
    {
        question: "Responda verdadero o falso.<br> La revisión sistemática, consiste en reunir toda evidencia empírica que cumpla con los criterios de búsqueda establecidos previamente, con la finalidad que haya pocos errores.",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Verdadero"
    },
    {
        question: "Cómo se define la investigación.",
        options: [
            "Como la combinación del enfoque cuantitativo y el cualitativo.",
            "Como el Planteamientos más abiertos que van enfocándose.",
            "Un conjunto de procesos sistemáticos, críticos y empíricos que se aplican al estudio de un fenómeno o problema."
        ],
        answer: "Un conjunto de procesos sistemáticos, críticos y empíricos que se aplican al estudio de un fenómeno o problema."
    },
    {
        question: "El instrumento debe haber sido ya probado en otras investigaciones encontradas durante la construcción del marco teórico, en el proceso de selección de un instrumento de recolección de datos",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Verdadero"
    },
    {
        type: "multiple-choice",
        question: "Los factores que afectan la validez del instrumento son:",
        options: [
            "Regulación",
            "Origen del instrumento",
            "Condiciones",
            "Confiabilidad",
            "Improvisación",
            "Inadecuado",
            "Medición"
        ],
        answer: [
            "Regulación",
            "Origen del instrumento",
            "Condiciones",
            "Confiabilidad",
            "Improvisación",
            "Inadecuado",
            "Medición"
        ]
    },
    {
        type: "multiple-choice",
        question: "Los tipos de instrumentos de recolección de datos son:",
        options: [
            "Prueba piloto",
            "Cuestionario",
            "Observación",
            "Escala",
            "Biografía",
            "Entrevista",
            "Medición",
            "Revisión",
            "Sesión de grupo"
        ],
        answer: [
            "Prueba piloto",
            "Cuestionario",
            "Observación",
            "Escala",
            "Biografía",
            "Entrevista",
            "Medición",
            "Revisión",
            "Sesión de grupo"
        ]
    },
];


DIQuestions.forEach((question, index) => {
    if (question.type === "text") {
        // Ignorar preguntas de tipo "text"
        return;
    }

    if (Array.isArray(question.options) && question.options.length === 2 &&
        question.options.includes("Verdadero") && question.options.includes("Falso")) {
        return;
    }

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


