export const GBDQuestions = [
    {
        question: "¿Cuál de las siguientes afirmaciones describe mejor una base de datos relacional?",
        options: [
            "Almacena datos en una sola tabla.",
            "No permite relaciones entre los datos.",
            "Organiza los datos en múltiples tablas interconectadas.",
            "Sólo permite la entrada de datos numéricos."
        ],
        answer: "Organiza los datos en múltiples tablas interconectadas."
    },
    {
        question: "Qué se entiende por una base de datos?",
        options: [
            "Un conjunto de archivos de texto.",
            "Una colección de hardware de computadora.",
            "Un sistema para administrar y organizar datos.",
            "Un programa para navegar por internet."
        ],
        answer: "Un sistema para administrar y organizar datos."
    },
    {
        question: "Cuál es el propósito principal de un Sistema Gestor de Bases de Datos (SGBD)",
        options: [
            "Gestionar la seguridad de la red.",
            "Administrar la información en una base de datos.",
            "Crear páginas web dinámicas.",
            "Realizar análisis estadísticos."
        ],
        answer: "Administrar la información en una base de datos."
    },
    {
        question: "Qué tipo de datos pueden almacenarse en una base de datos.",
        options: [
            "Solo datos numéricos.",
            "Solo datos de texto.",
            "Datos de diferentes tipos, como numéricos, de texto, fechas, etc.",
            "Solo datos multimedia."
        ],
        answer: "Datos de diferentes tipos, como numéricos, de texto, fechas, etc."
    },
    {
        question: "Cuál es una característica importante de una base de datos bien diseñada.",
        options: [
            "Complejidad excesiva.",
            "Redundancia de datos.",
            "Consistencia y precisión de los datos.",
            "Falta de seguridad."
        ],
        answer: "Consistencia y precisión de los datos."
    },
    {
        type: "matching",
        question: "Relacione los tipos de transparencias con su significado",
        terms: ["Transparencia de la red", "Transparencia de replicación", "Transparencia de la fragmentación", "Independencia de datos"],
        definitions: ["Por razones de rendimiento, fiabilidad y disponibilidad, Es deseable distribuir los datos de forma replicada a través de las máquinas de una red por razones de rendimiento, fiabilidad y disponibilidad.", "El usuario debe ser protegido de los detalles operativos de la red; posiblemente incluso ocultando la existencia de la red, de tal manera que no exista diferencia entre las aplicaciones de la base de datos que se ejecutarían en una base de datos centraliza", "Se refiere a la inmunidad de las aplicaciones de usuario a los cambios en la definición y organización de los datos, y viceversa. se produce en dos niveles.", "Es refiere a la división de cada relación de la base de datos en fragmentos más pequeños y tratar cada fragmento como un objeto de base de datos separado es decir otra relación"],
        answer: {"Transparencia de la red": "El usuario debe ser protegido de los detalles operativos de la red; posiblemente incluso ocultando la existencia de la red, de tal manera que no exista diferencia entre las aplicaciones de la base de datos que se ejecutarían en una base de datos centraliza", "Transparencia de replicación": "Por razones de rendimiento, fiabilidad y disponibilidad, Es deseable distribuir los datos de forma replicada a través de las máquinas de una red por razones de rendimiento, fiabilidad y disponibilidad.", "Transparencia de la fragmentación": "Es refiere a la división de cada relación de la base de datos en fragmentos más pequeños y tratar cada fragmento como un objeto de base de datos separado es decir otra relación", "Independencia de datos": "Se refiere a la inmunidad de las aplicaciones de usuario a los cambios en la definición y organización de los datos, y viceversa. se produce en dos niveles."}
    },
    {
        question: "Escoja cuál no es una promesa de las DBMS Distribuidas.",
        options: [
            "Gestión transparente de los datos distribuidos, fragmentados y replicados.",
            "Mejora de la fiabilidad/disponibilidad mediante transacciones distribuidas.",
            "Mejora del rendimiento.",
            "Una reducción del sistema más fácil y económica."
        ],
        answer: "Una reducción del sistema más fácil y económica."
    },
    {
        question: "Una Base de Datos puede ser ________________ para mejorar el rendimiento y simplificar su mantenimiento.",
        options: [
            "Fragmentada",
            "Distribuida",
            "Segmentada",
            "Ninguna de las anteriores"
        ],
        answer: "Fragmentada"
    },
    {
        question: "Una de las reglas características de una base de datos distribuida indica que “todos los sitios deben ser tratados igual y realizar sus propios procesamientos”, lo anterior puede asociarse al término.",
        options: [
            "Independencia",
            "Replicación",
            "Distribución",
            "Fragmentación"
        ],
        answer: "Independencia"
    },
    {
        question: "La simultaneidad en la ejecución de múltiples tareas interactivas se denomina:",
        options: [
            "Réplica",
            "Independencia",
            "Distribución",
            "Concurrencia"
        ],
        answer: "Concurrencia"
    },
    {
        question: "Cuál es uno de los beneficios de optimizar una base de datos.",
        options: [
            "Mayor complejidad en la administración.",
            "Reducción de los costos de hardware.",
            "Aumento del tamaño de la base de datos.",
            "Mejora en la productividad y eficiencia del negocio."
        ],
        answer: "Mejora en la productividad y eficiencia del negocio."
    },
    {
        question: "Cuál es una técnica comúnmente utilizada para optimizar una base de datos.",
        options: [
            "Agregar más datos.",
            "Eliminar índices.",
            "Utilizar índices.",
            "No realizar copias de seguridad."
        ],
        answer: "Utilizar índices."
    },
    {
        question: "Qué es una clase en el contexto del paradigma orientado a objetos.",
        options: [
            "Es el comportamiento o funcionalidad de un objeto.",
            "Representa un conjunto de objetos que comparten las mismas características y comportamiento.",
            "Es la instancia de una clase.",
            "Es la relación que existe entre las clases."
        ],
        answer: "Representa un conjunto de objetos que comparten las mismas características y comportamiento."
    },
    {
        question: "Que indica un gestor de transacciones coordinador",
        options: [
            "Indica a cada recurso cómo procesar una transacción, en función de su conocimiento de todos los recursos que participan en la transacción.",
            "Indica el sistema operativo de procesamiento de transacciones que tiene como funciones principales.",
            "Indica la Administración de procesos y administrador de transacciones.",
            "Indica el programa de aplicación."
        ],
        answer: "Indica a cada recurso cómo procesar una transacción, en función de su conocimiento de todos los recursos que participan en la transacción."
    },
    {
        type: "multiple-choice",
        question: "Menciona las propiedades ACID",
        options: [
            "Atomicidad",
            "Consistencia",
            "Aislamiento",
            "Durabilidad",
            "Confiabilidad",
            "Autenticidad"
        ],
        answer: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
    },
    {
        question: "Cuál de los siguientes puntos es un inconveniente de las bases de datos centralizadas.",
        options: [
            "No hay redundancia de datos",
            "No hay control total sobre los datos de cierto departamento",
            "Se realizan consultas para la obtención de datos",
            "Los respaldos son realizados por cada departamento"
        ],
        answer: "No hay control total sobre los datos de cierto departamento"
    },
    {
        question: "Escoja cuál no es una promesa de las DBMS Distribuidas.",
        options: [
            "Gestión transparente de los datos distribuidos, fragmentados y replicados.",
            "Mejora de la fiabilidad/disponibilidad mediante transacciones distribuidas.",
            "Mejora del rendimiento.",
            "Una reducción del sistema más fácil y económica"
        ],
        answer: "Una reducción del sistema más fácil y económica"
    },
    {
        question: "De los siguientes acrónimos, indique cuál es un Sistema Gestor de Bases de Datos (SGBD).",
        options: [
            "MySQL",
            "BASE",
            "EXCEL"
        ],
        answer: "MySQL"
    },
    {
        question: "Las bases de datos que creamos y manejamos mediante aplicaciones como Microsoft Access, Apache OpenOffice Base y LibreOffice Base son de tipo:",
        options: [
            "Jerárquica",
            "Transaccional",
            "Relacional"
        ],
        answer: "Relacional"
    },
    {
        question: "Una consulta en una base de datos es:",
        options: [
            "Una manera de seleccionar información de una o más tablas, visualizada como otra tabla",
            "Una pantalla de introducción, consulta o modificación de datos en una o varias tablas",
            "Una presentación de los datos en la vista de impresión"
        ],
        answer: "Una manera de seleccionar información de una o más tablas, visualizada como otra tabla"
    },
    {
        question: "Las fases del diseño de una base de datos relacional son:",
        options: [
            "El diseño conceptual y el diseño físico",
            "El diseño conceptual, el diseño lógico y el diseño físico",
            "El diseño conceptual, el diseño analógico y el diseño físico",
            "El diseño digital, el diseño lógico y el diseño global"
        ],
        answer: "El diseño conceptual, el diseño lógico y el diseño físico"
    },
    {
        question: "Microsoft Access, Apache OpenOffice Base y LibreOffice Base son ejemplos de:",
        options: [
            "Aplicaciones informáticas para Bases de Datos",
            "Bases de Datos",
            "Sistemas Gestores de Bases de Datos (SGBD)"
        ],
        answer: "Aplicaciones informáticas para Bases de Datos"
    },
    {
        question: "Cuál es el objetivo principal de la optimización de consultas en bases de datos.",
        options: [
            "Mejorar la seguridad de la base de datos",
            "Agregar nuevas tablas a la base de datos",
            "Asegurar que todas las consultas devuelvan resultados idénticos.",
            "Optimizar el rendimiento y la eficiencia de las consultas"
        ],
        answer: "Optimizar el rendimiento y la eficiencia de las consultas"
    },
    {
        question: "Qué es la fragmentación en la optimización de bases de datos.",
        options: [
            "La división de una tabla en varias tablas más pequeñas",
            "El proceso de eliminar registros duplicados",
            "La combinación de varias tablas en una sola",
            "La actualización de la versión del software de la base de datos"
        ],
        answer: "La división de una tabla en varias tablas más pequeñas"
    },
    {
        question: "Qué es la optimización semántica en el contexto de la búsqueda en la web.",
        options: [
            "Mejorar la velocidad de carga de las páginas web",
            "Optimizar el contenido de las páginas para que coincida mejor con las consultas de los usuarios",
            "Añadir más palabras clave al contenido para aumentar la visibilidad en los motores de búsqueda",
            "Reducir el tamaño de las imágenes y los archivos multimedia en las páginas web."
        ],
        answer: "Optimizar el contenido de las páginas para que coincida mejor con las consultas de los usuarios"
    },
    {
        question: "Qué es la desnormalización en la optimización de bases de datos.",
        options: [
            "La organización de datos en tablas relacionadas",
            "La eliminación de índices de una base de datos.",
            "La duplicación selectiva de datos para mejorar el rendimiento",
            "La agregación de nuevas tablas a la base de datos"
        ],
        answer: "La duplicación selectiva de datos para mejorar el rendimiento"
    },
    {
        question: "Qué papel juegan los índices en la optimización de bases de datos.",
        options: [
            "Mejorar la seguridad de la base de datos",
            "Añadir nuevas columnas a las tablas",
            "Facilitar la búsqueda y recuperación rápida de datos",
            "Eliminar registros duplicados de la base de datos."
        ],
        answer: "Facilitar la búsqueda y recuperación rápida de datos"
    },
    {
        question: "Un archivo o conjunto de archivos que contienen múltiples informaciones que, de alguna forma, guardan relación es:",
        options: [
            "Un Sistema Gestor de Bases de Datos (SGBD)",
            "Una base de datos",
            "Una aplicación informática para el manejo de bases de datos"
        ],
        answer: "Una base de datos"
    },
    {
        question: "Las partes del paquete son:",
        options: [
            "Cierre",
            "Desarrollo",
            "Cuerpo",
            "Inicio"
        ],
        answer: "Cuerpo"
    },
    {
        question: "Cuál es el ejemplo correcto para dar permiso en el de OTHERS:",
        options: [
            "GRANT EXECUTE ON SYS.DBMS_LOCK TO",
            "GRANT EXECUTE ON SYS.DBMS Usuari",
            "GRANT EXECUTE ON SYS.DBMS_LOCK TO usuario;",
            "GRANT usuario EXECUTE ON SYS.DBMS_LOCK TO"
        ],
        answer: "GRANT EXECUTE ON SYS.DBMS_LOCK TO usuario;"
    },
    {
        question: "Una exception (excepción) ocurre cuando:",
        options: [
            "Hay manejos de saltos de tiempo",
            "Hay instrucciones ejecutándose",
            "Un bloque se haya terminado",
            "Hay un error en tiempo de ejecución."
        ],
        answer: "Hay un error en tiempo de ejecución."
    },
    {
        question: "Cual modo especifica el parámetro de salida.",
        options: [
            "OUT",
            "OFF",
            "ON",
            "IN"
        ],
        answer: "OUT"
    }
];


GBDQuestions.forEach((question, index) => {
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


