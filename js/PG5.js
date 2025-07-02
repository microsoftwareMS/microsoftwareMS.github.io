export const MDQuestions = [
    {
        question: "¿Qué describe la 'maldición de la dimensionalidad'?",
        options: [
            "La dificultad de aplicar modelos en datos numéricos",
            "El crecimiento exponencial de datos necesario al aumentar dimensiones",
            "La pérdida de datos en bases grandes",
            "El sobreajuste de modelos simples"
        ],
        answer: "El crecimiento exponencial de datos necesario al aumentar dimensiones"
    },
    {
        question: "¿Cuál es el objetivo principal del Análisis de Componentes Principales (PCA)?",
        options: [
            "Aumentar el número de atributos",
            "Reducir dimensionalidad conservando la mayor varianza posible",
            "Eliminar datos duplicados",
            "Transformar atributos categóricos en numéricos"
        ],
        answer: "Reducir dimensionalidad conservando la mayor varianza posible"
    },
    {
        question: "¿Qué permite identificar la técnica NER en minería de texto?",
        options: [
            "Errores ortográficos",
            "Palabras sin significado",
            "Entidades como nombres, ubicaciones y organizaciones",
            "Longitud de los párrafos"
        ],
        answer: "Entidades como nombres, ubicaciones y organizaciones"
    },
    {
        question: "¿Cuál es el objetivo principal de la minería de datos?",
        options: [
            "Descubrir patrones y conocimientos útiles a partir de grandes volúmenes de datos.",
            "Diseñar bases de datos para almacenar información estructurada.",
            "Traducir datos numéricos a lenguaje natural.",
            "Automatizar la recolección de datos desde sitios web."
        ],
        answer: "Descubrir patrones y conocimientos útiles a partir de grandes volúmenes de datos."
    },
    {
        question: "Una aplicación de análisis de señales busca identificar fuentes independientes a partir de mezclas observadas. ¿Qué técnica es más adecuada?",
        options: [
            "LDA",
            "ICA",
            "PCA",
            "Autoencoder"
        ],
        answer: "ICA"
    },
    {
        question: "¿Cuál es el propósito de la visualización en minería de texto?",
        options: [
            "Eliminar palabras sin significado",
            "Aplicar redes neuronales",
            "Representar gráficamente los resultados del análisis textual",
            "Etiquetar palabras clave"
        ],
        answer: "Representar gráficamente los resultados del análisis textual"
    },
    {
        type: "matching",
        question: "Relaciona cada disciplina con su aporte a la minería de datos",
        terms: [
            "Estadística",
            "Visualización de datos",
            "Aprendizaje automático",
            "Bases de datos"
        ],
        definitions: [
            "Proporciona técnicas como regresión y validación",
            "Permite representar patrones descubiertos de forma comprensible",
            "Desarrolla modelos predictivos a partir de ejemplos",
            "Ofrecen almacenamiento y recuperación eficiente de datos"
        ],
        answer: {
            "Estadística": "Proporciona técnicas como regresión y validación",
            "Visualización de datos": "Permite representar patrones descubiertos de forma comprensible",
            "Aprendizaje automático": "Desarrolla modelos predictivos a partir de ejemplos",
            "Bases de datos": "Ofrecen almacenamiento y recuperación eficiente de datos"
        }
    },
    {
        question: "¿Cuáles son los dos componentes clave del Web Scraping?",
        options: [
            "Rastreador y clasificador",
            "Scraper y motor de búsqueda",
            "Crawler y Scraper",
            "HTML y XML"
        ],
        answer: "Crawler y Scraper"
    },
    {
        type: "matching",
        question: "Relaciona cada tipo de minería web con su descripción",
        terms: [
            "Uso",
            "Contenido",
            "Estructura"
        ],
        definitions: [
            "Se basa en logs de actividad de usuarios",
            "Extrae datos de páginas para detectar patrones",
            "Analiza hipervínculos y relaciones entre páginas"
        ],
        answer: {
            "Uso": "Se basa en logs de actividad de usuarios",
            "Contenido": "Extrae datos de páginas para detectar patrones",
            "Estructura": "Analiza hipervínculos y relaciones entre páginas"
        }
    },
    {
        question: "¿Cuál es una ventaja clave de usar modelos predictivos en minería de datos?",
        options: [
            "Eliminan la necesidad de validar modelos",
            "Permiten anticipar eventos futuros y tomar decisiones informadas",
            "Funcionan sin datos históricos",
            "Solo aplican en datos textuales"
        ],
        answer: "Permiten anticipar eventos futuros y tomar decisiones informadas"
    },
    {
        question: "¿Por qué se divide un conjunto de datos en entrenamiento y validación?",
        options: [
            "Para crear dos modelos diferentes",
            "Para aumentar la complejidad computacional",
            "Para evaluar si el modelo generaliza bien",
            "Para reducir el tamaño del conjunto original"
        ],
        answer: "Para evaluar si el modelo generaliza bien"
    },
    {
        question: "¿Cuál es una funcionalidad destacada de RapidMiner?",
        options: [
            "Analizar únicamente datos en papel",
            "Diseñar redes sociales",
            "Realizar minería de texto, análisis predictivo y aprendizaje automático",
            "Crear perfiles de usuario en redes"
        ],
        answer: "Realizar minería de texto, análisis predictivo y aprendizaje automático"
    },
    {
        question: "¿Qué caracteriza al análisis de series temporales?",
        options: [
            "El uso de variables categóricas para predicción",
            "Predicción sin orden cronológico",
            "Uso del tiempo como variable independiente",
            "Modelo no supervisado de clasificación"
        ],
        answer: "Uso del tiempo como variable independiente"
    },
    {
        question: "Un analista desea predecir el ingreso mensual de una persona con base en su edad y nivel de estudios. ¿Qué técnica es adecuada?",
        options: [
            "Clasificación",
            "Series temporales",
            "Regresión logística",
            "Regresión lineal"
        ],
        answer: "Regresión lineal"
    },
    {
        type: "matching",
        question: "Relaciona cada tarea de minería de datos con un ejemplo correspondiente",
        terms: [
            "Clasificación",
            "Regresión",
            "Agrupamiento",
            "Asociación"
        ],
        definitions: [
            "Determinar si un email es spam",
            "Predecir el valor de una acción",
            "Segmentar clientes por comportamiento",
            "Detectar productos frecuentemente comprados juntos"
        ],
        answer: {
            "Clasificación": "Determinar si un email es spam",
            "Regresión": "Predecir el valor de una acción",
            "Agrupamiento": "Segmentar clientes por comportamiento",
            "Asociación": "Detectar productos frecuentemente comprados juntos"
        }
    },
    {
        question: "¿Qué tipo de minería de datos se usa para detectar opiniones en redes sociales?",
        options: [
            "Minería de texto",
            "Minería de estructuras web",
            "Minería de procesos"
        ],
        answer: "Minería de texto"
    },
    {
        question: "Un sistema de streaming quiere sugerir películas similares a las que un usuario ha visto recientemente. ¿Qué técnica es más adecuada?",
        options: [
            "Basado en contenido",
            "Clustering",
            "Series temporales",
            "Naive Bayes"
        ],
        answer: "Basado en contenido"
    },
    {
        question: "¿Qué técnica se puede usar para facilitar la comprensión de los resultados de minería de datos?",
        options: [
            "Visualización de datos",
            "Normalización de variables",
            "Muestreo estratificado",
            "Codificación de atributos categóricos"
        ],
        answer: "Visualización de datos"
    },
    {
        type: "matching",
        question: "Relaciona el tipo de recomendación con su descripción",
        terms: [
            "Basado en conocimiento",
            "Basado en contenido",
            "Filtrado colaborativo",
            "Híbrido"
        ],
        definitions: [
            "Usa especificaciones explícitas del usuario",
            "Se enfoca en los atributos del ítem",
            "Utiliza gustos de otros usuarios",
            "Combina múltiples enfoques"
        ],
        answer: {
            "Basado en conocimiento": "Usa especificaciones explícitas del usuario",
            "Basado en contenido": "Se enfoca en los atributos del ítem",
            "Filtrado colaborativo": "Utiliza gustos de otros usuarios",
            "Híbrido": "Combina múltiples enfoques"
        }
    },
    {
        question: "¿Cuándo es apropiado utilizar un gráfico de dispersión?",
        options: [
            "Para representar proporciones entre categorías",
            "Cuando se quiere comparar tendencias en el tiempo",
            "Al explorar relaciones entre dos variables numéricas",
            "Para mostrar distribución de una variable categórica"
        ],
        answer: "Al explorar relaciones entre dos variables numéricas"
    },
    {
        question: "¿Qué paso del proceso KDD implica eliminar ruido y datos incoherentes?",
        options: [
            "Limpieza de datos",
            "Minería de datos",
            "Evaluación de patrones"
        ],
        answer: "Limpieza de datos"
    },
    {
        type: "matching",
        question: "Relaciona cada técnica con su descripción",
        terms: [
            "Autoencoder",
            "LDA",
            "ICA",
            "PCA"
        ],
        definitions: [
            "Aprende representaciones comprimidas mediante redes",
            "Maximiza la separación entre clases",
            "Encuentra variables estadísticamente independientes",
            "Reduce dimensionalidad preservando varianza"
        ],
        answer: {
            "Autoencoder": "Aprende representaciones comprimidas mediante redes",
            "LDA": "Maximiza la separación entre clases",
            "ICA": "Encuentra variables estadísticamente independientes",
            "PCA": "Reduce dimensionalidad preservando varianza"
        }
    },
    {
        question: "¿Cuál es una de las razones del auge actual de la minería de datos?",
        options: [
            "La disponibilidad de grandes volúmenes de datos y el aumento del poder computacional",
            "La falta de herramientas estadísticas y de visualización",
            "El reemplazo total del análisis cualitativo por métodos automatizados"
        ],
        answer: "La disponibilidad de grandes volúmenes de datos y el aumento del poder computacional"
    },
    {
        question: "¿Cuál de las siguientes técnicas de reducción de dimensionalidad es supervisada?",
        options: [
            "PCA",
            "ICA",
            "LDA",
            "Autoencoder"
        ],
        answer: "LDA"
    },
    {
        question: "¿Para qué se utiliza un umbral de varianza en la selección de características?",
        options: [
            "Eliminar características que no aportan valor",
            "Incrementar el número de variables",
            "Asignar pesos a variables",
            "Clasificar los datos en grupos"
        ],
        answer: "Eliminar características que no aportan valor"
    },
    {
        image: "img/img_MD/image1.png",
        question: "En relación con la Figura Gráfico de Densidad en Seaborn, ¿qué afirmación es correcta sobre la distribución de las calificaciones?",
        options: [
            "La densidad es mayor en los extremos de la distribución, indicando alta variabilidad",
            "El gráfico indica que hay una correlación positiva entre calificación y tiempo de estudio",
            "Las calificaciones están uniformemente distribuidas entre 50 y 120",
            "La mayoría de los estudiantes obtuvo calificaciones cercanas a 90, lo que se refleja en el pico de la curva"
        ],
        answer: "La mayoría de los estudiantes obtuvo calificaciones cercanas a 90, lo que se refleja en el pico de la curva",
        type: "imageWithOptions"
    },
    {
        image: "img/img_MD/image2.png",
        question: "En relación con la Figura Gráfico de Burbuja en Seaborn, ¿qué afirmación es correcta sobre la relación entre las variables?",
        options: [
            "El gráfico muestra que todos los proyectos con más de 10 horas tienen el mismo costo",
            "El tamaño de las burbujas representa el número de trabajadores por tarea",
            "A mayor cantidad de horas invertidas, generalmente se observa mayor productividad y mayor costo del proyecto",
            "No existe una relación visible entre horas de trabajo y productividad"
        ],
        answer: "A mayor cantidad de horas invertidas, generalmente se observa mayor productividad y mayor costo del proyecto",
        type: "imageWithOptions"
    },
    {
        question: "¿Cuál es la diferencia principal entre un histograma y un gráfico de barras?",
        options: [
            "El histograma agrupa datos continuos en intervalos, mientras que el gráfico de barras muestra categorías discretas",
            "El gráfico de barras representa datos agrupados automáticamente",
            "El histograma solo se usa para porcentajes",
            "El gráfico de barras siempre tiene colores"
        ],
        answer: "El histograma agrupa datos continuos en intervalos, mientras que el gráfico de barras muestra categorías discretas"
    },
    {
        question: "¿Qué tipo de gráfico es más adecuado para analizar la distribución de una variable continua?",
        options: [
            "Gráfico de líneas con múltiples ejes",
            "Histograma o gráfico de densidad",
            "Gráfico circular",
            "Gráfico de barras apiladas"
        ],
        answer: "Histograma o gráfico de densidad"
    },
    {
        image: "img/img_MD/image3.png",
        question: "En relación con el gráfico de dispersión que muestra el precio frente al número de reseñas, ¿qué se puede inferir sobre la relación entre las variables?",
        options: [
            "Los productos con mayor precio siempre tienen más reseñas",
            "La línea de regresión indica que el número de reseñas depende exclusivamente del precio",
            "Hay una fuerte correlación negativa entre el precio y las reseñas",
            "Existe una relación débilmente positiva entre el precio y el número de reseñas, con alta dispersión y presencia de valores atípicos"
        ],
        answer: "Existe una relación débilmente positiva entre el precio y el número de reseñas, con alta dispersión y presencia de valores atípicos",
        type: "imageWithOptions"
    },
    {
        question: "¿Qué función de Matplotlib permite crear una distribución libre de subgráficos dentro de una figura?",
        options: [
            "plt.hist()",
            "subplot_mosaic()",
            "plt.figure()",
            "plt.title()"
        ],
        answer: "subplot_mosaic()"
    },
    {
        question: "¿Cuál es una característica clave de los histogramas?",
        options: [
            "Muestran relaciones entre variables",
            "Se utilizan solo para datos categóricos",
            "Requieren intervalos de clase",
            "Presentan valores acumulados"
        ],
        answer: "Requieren intervalos de clase"
    },
    {
        type: "matching",
        question: "Relaciona cada herramienta de minería de datos con su característica",
        terms: [
            "Autoencoder",
            "LDA",
            "ICA",
            "PCA"
        ],
        definitions: [
            "Aprende representaciones comprimidas mediante redes",
            "Maximiza la separación entre clases",
            "Encuentra variables estadísticamente independientes",
            "Reduce dimensionalidad preservando varianza"
        ],
        answer: {
            "Autoencoder": "Aprende representaciones comprimidas mediante redes",
            "LDA": "Maximiza la separación entre clases",
            "ICA": "Encuentra variables estadísticamente independientes",
            "PCA": "Reduce dimensionalidad preservando varianza"
        }
    },

];

MDQuestions.forEach((question, index) => {

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


