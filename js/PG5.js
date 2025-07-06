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
    {
        question: "¿Para qué sirve principalmente la regresión lineal?",
        options: [
            "Clasificar clientes en segmentos",
            "Predecir valores categóricos",
            "Predecir valores numéricos continuos",
            "Detectar valores atípicos"
        ],
        answer: "Predecir valores numéricos continuos"
    },
    {
        question: "¿Cuál es una ventaja de los árboles de decisión?",
        options: [
            "Son difíciles de interpretar",
            "Requieren muchos datos de entrada",
            "Permiten representar decisiones de forma clara y jerárquica",
            "Solo sirven para regresión"
        ],
        answer: "Permiten representar decisiones de forma clara y jerárquica"
    },
    {
        question: "¿Cuál es una diferencia entre selección y extracción de características?",
        options: [
            "La selección crea nuevas variables; la extracción elimina las irrelevantes",
            "La selección usa PCA; la extracción, umbrales",
            "La selección elige un subconjunto; la extracción transforma los datos",
            "No hay diferencia"
        ],
        answer: "La selección elige un subconjunto; la extracción transforma los datos"
    },
    {
        question: "¿Qué tipo de gráfico es más útil para identificar valores atípicos en los datos?",
        options: [
            "Gráfico de barras",
            "Diagrama de cajas",
            "Histograma",
            "Polígono de frecuencia"
        ],
        answer: "Diagrama de cajas"
    },
    {
        type: "matching",
        question: "Relaciona la acción descrita con el paso correspondiente del proceso KDD",
        terms: [
            "Usa gráficos de barras para mostrar el comportamiento mensual de compra",
            "Filtra los registros solo de clientes activos en los últimos 6 meses",
            "Unifica los datos de ventas, atención al cliente y redes sociales en una sola base",
            "Aplica un algoritmo de clustering para segmentar clientes por comportamiento"
        ],
        definitions: [
            "Presentación del conocimiento",
            "Selección de datos",
            "Integración de datos",
            "Minería de datos"
        ],
        answer: {
            "Usa gráficos de barras para mostrar el comportamiento mensual de compra": "Presentación del conocimiento",
            "Filtra los registros solo de clientes activos en los últimos 6 meses": "Selección de datos",
            "Unifica los datos de ventas, atención al cliente y redes sociales en una sola base": "Integración de datos",
            "Aplica un algoritmo de clustering para segmentar clientes por comportamiento": "Minería de datos"
        }
    },
    {
        question: "Una tienda en línea quiere recomendar productos observando patrones de usuarios con comportamientos similares. ¿Qué técnica aplicaría?",
        options: [
            "Clasificación supervisada",
            "Filtrado colaborativo basado en usuarios",
            "Series temporales",
            "Análisis de varianza"
        ],
        answer: "Filtrado colaborativo basado en usuarios"
    },
    {
        question: "¿Cuál es la diferencia principal entre clasificación y regresión?",
        options: [
            "Clasificación predice categorías; regresión predice valores numéricos",
            "Clasificación usa redes neuronales y regresión no",
            "Regresión es más precisa que clasificación",
            "Clasificación trabaja solo con datos de texto"
        ],
        answer: "Clasificación predice categorías; regresión predice valores numéricos"
    },
    {
        question: "¿Qué tarea realiza la tokenización en minería de texto?",
        options: [
            "Agrupa documentos similares",
            "Clasifica automáticamente los textos",
            "Divide el texto en palabras o frases llamadas tokens",
            "Calcula la frecuencia de términos en una base de datos"
        ],
        answer: "Divide el texto en palabras o frases llamadas tokens"
    },
    {
        question: "¿Qué tarea de minería de datos es típicamente de tipo descriptivo?",
        options: [
            "Regresión",
            "Detección de fraudes",
            "Agrupamiento",
            "Clasificación"
        ],
        answer: "Agrupamiento"
    },
    {
        question: "Un sistema de salud desea predecir si un paciente será readmitido al hospital según historial clínico. ¿Qué tipo de tarea debe usarse?",
        options: [
            "Agrupamiento",
            "Asociación",
            "Clasificación",
            "Regresión"
        ],
        answer: "Clasificación"
    },
    {
        question: "¿Cómo puede ayudar la minería de texto en el servicio al cliente?",
        options: [
            "Al crear encuestas visuales en redes sociales",
            "Al responder automáticamente cualquier correo",
            "Al identificar temas frecuentes en comentarios y tickets",
            "Al traducir publicaciones en tiempo real"
        ],
        answer: "Al identificar temas frecuentes en comentarios y tickets"
    },
    {
        question: "Una empresa desea conocer la percepción de su marca analizando los comentarios en sus publicaciones de redes sociales. ¿Qué técnica debería aplicar?",
        options: [
            "Tokenización",
            "Análisis de sentimientos",
            "Traducción automática",
            "NER"
        ],
        answer: "Análisis de sentimientos"
    },
    {
        type: "matching",
        question: "Relaciona el tipo de gráfico con su principal función",
        terms: [
            "Gráfico de líneas",
            "Gráfico de barras",
            "Diagrama de cajas",
            "Histograma"
        ],
        definitions: [
            "Observar tendencias a lo largo del tiempo",
            "Comparar cantidades categóricas",
            "Visualizar valores atípicos y cuartiles",
            "Mostrar la frecuencia de intervalos de una variable"
        ],
        answer: {
            "Gráfico de líneas": "Observar tendencias a lo largo del tiempo",
            "Gráfico de barras": "Comparar cantidades categóricas",
            "Diagrama de cajas": "Visualizar valores atípicos y cuartiles",
            "Histograma": "Mostrar la frecuencia de intervalos de una variable"
        }
    },
    {
        question: "Una empresa desea comparar automáticamente precios de productos en diferentes sitios web. ¿Qué técnica debe usar?",
        options: [
            "Visualización de datos",
            "Clasificación supervisada",
            "Web Scraping",
            "Análisis de sentimientos"
        ],
        answer: "Web Scraping"
    },
    {
        question: "Un analista utiliza Orange para seleccionar puntos de un gráfico de dispersión y resaltar nodos de un árbol de decisión. ¿Qué tipo de visualización está aplicando?",
        options: [
            "Gráfico animado",
            "Gráfico acumulado",
            "Gráfico interactivo",
            "Gráfico categórico"
        ],
        answer: "Gráfico interactivo"
    },
    {
        question: "¿Qué técnica sería adecuada para predecir si un paciente tiene alto riesgo de enfermedad?",
        options: [
            "Regresión lineal",
            "Clustering",
            "Regresión logística",
            "Análisis de componentes principales"
        ],
        answer: "Regresión logística"
    },
    {
        question: "¿Qué es la minería de texto?",
        options: [
            "El análisis de datos estructurados provenientes de bases de datos",
            "La extracción de conocimiento útil desde datos textuales no estructurados",
            "La traducción automática de textos a varios idiomas",
            "La búsqueda de información exacta en tablas numéricas"
        ],
        answer: "La extracción de conocimiento útil desde datos textuales no estructurados"
    },
    {
        question: "Una empresa de marketing quiere predecir si un cliente responderá a una campaña. ¿Qué técnica debe usar?",
        options: [
            "Clustering",
            "Regresión logística",
            "Regresión lineal",
            "Árbol de decisión no supervisado"
        ],
        answer: "Regresión logística"
    },
    {
        question: "¿Cómo se seleccionan los componentes principales en PCA?",
        options: [
            "Por orden alfabético",
            "Según la varianza que explican",
            "Por número de columnas originales",
            "Aleatoriamente"
        ],
        answer: "Según la varianza que explican"
    },
    {
        question: "¿Qué caracteriza a la herramienta Orange?",
        options: [
            "Basada en lenguaje R, especializada en bioinformática",
            "Diseñada solo para minería de texto",
            "Interfaz visual con widgets para análisis de datos",
            "Solo se puede usar en sistemas Mac"
        ],
        answer: "Interfaz visual con widgets para análisis de datos"
    },
    {
        question: "¿Cuál de las siguientes tareas de minería de datos es de tipo predictivo?",
        options: [
            "Segmentación de clientes",
            "Clasificación de correos como spam o no spam",
            "Agrupación basada en comportamiento de compra",
            "Reducción de dimensionalidad"
        ],
        answer: "Clasificación de correos como spam o no spam"
    },
    {
        question: "Una tienda analiza transacciones para encontrar productos que suelen comprarse juntos. ¿Qué técnica debe aplicar?",
        options: [
            "Clasificación",
            "Agrupamiento",
            "Asociación",
            "Regresión"
        ],
        answer: "Asociación"
    },
    {
        type: "matching",
        question: "Relaciona el sector con la aplicación de minería de texto",
        terms: [
            "Redes sociales",
            "Mantenimiento",
            "Finanzas",
            "Salud"
        ],
        definitions: [
            "Analizar reacciones del público en tiempo real",
            "Detectar fallos mediante reportes técnicos",
            "Detectar fraude analizando documentos de clientes",
            "Agrupar literatura médica para investigación"
        ],
        answer: {
            "Redes sociales": "Analizar reacciones del público en tiempo real",
            "Mantenimiento": "Detectar fallos mediante reportes técnicos",
            "Finanzas": "Detectar fraude analizando documentos de clientes",
            "Salud": "Agrupar literatura médica para investigación"
        }
    },
    {
        question: "¿Cuál es una aplicación típica de las reglas de asociación?",
        options: [
            "Predicción del clima",
            "Análisis de sentimiento",
            "Cestas de mercado",
            "Detección de fallos"
        ],
        answer: "Cestas de mercado"
    },
    {
        type: "matching",
        question: "Relaciona cada tipo de tarea con su propósito general",
        terms: [
            "Agrupamiento",
            "Asociación",
            "Regresión",
            "Clasificación"
        ],
        definitions: [
            "Encontrar grupos naturales sin etiquetas",
            "Descubrir relaciones frecuentes entre elementos",
            "Predecir valores continuos",
            "Predecir clases o categorías"
        ],
        answer: {
            "Agrupamiento": "Encontrar grupos naturales sin etiquetas",
            "Asociación": "Descubrir relaciones frecuentes entre elementos",
            "Regresión": "Predecir valores continuos",
            "Clasificación": "Predecir clases o categorías"
        }
    },
    {
        question: "¿Cuál es un riesgo ético importante de la minería de texto?",
        options: [
            "Fallas en el resumen automático",
            "Baja calidad del texto digitalizado",
            "Uso indebido de datos personales sin consentimiento",
            "Limitación para textos de marketing"
        ],
        answer: "Uso indebido de datos personales sin consentimiento"
    },
    {
        question: "¿Cuál es la diferencia principal entre clasificación y predicción en minería de datos?",
        options: [
            "Clasificación predice valores continuos y predicción predice etiquetas",
            "Clasificación trabaja con series temporales; predicción con texto",
            "Clasificación predice clases; predicción estima valores numéricos",
            "Ambas se utilizan solo en sistemas de recomendación"
        ],
        answer: "Clasificación predice clases; predicción estima valores numéricos"
    },
    {
        question: "Un analista quiere visualizar datos de 100 atributos en 2 dimensiones sin perder mucha información. ¿Qué técnica debería aplicar?",
        options: [
            "Autoencoder",
            "PCA",
            "LDA",
            "Clustering"
        ],
        answer: "PCA"
    },
    {
        type: "matching",
        question: "Relaciona el concepto con su definición",
        terms: [
            "Predicción numérica",
            "Regresión polinomial",
            "Modelado predictivo",
            "Variable dependiente"
        ],
        definitions: [
            "Uso de datos históricos para estimar resultados futuros",
            "Modelo con variables elevadas a potencias",
            "Estimación de valores continuos",
            "Valor que se desea predecir"
        ],
        answer: {
            "Predicción numérica": "Uso de datos históricos para estimar resultados futuros",
            "Regresión polinomial": "Modelo con variables elevadas a potencias",
            "Modelado predictivo": "Estimación de valores continuos",
            "Variable dependiente": "Valor que se desea predecir"
        }
    },
    {
        question: "¿Cuál de las siguientes tareas busca encontrar valores atípicos o inusuales?",
        options: [
            "Clasificación",
            "Regresión",
            "Agrupamiento",
            "Detección de anomalías"
        ],
        answer: "Detección de anomalías"
    },
    {
        question: "¿Cuál es la primera fase del proceso de minería de texto?",
        options: [
            "Extracción de información",
            "Visualización de resultados",
            "Preprocesamiento del texto",
            "Análisis de sentimientos"
        ],
        answer: "Preprocesamiento del texto"
    },
    {
        question: "Un medio digital quiere resumir automáticamente artículos extensos para sus lectores. ¿Qué subtarea del PNL es más útil?",
        options: [
            "Tokenización",
            "Categorización de texto",
            "Resumen automático",
            "Clasificación supervisada"
        ],
        answer: "Resumen automático"
    },
    {
        question: "¿Qué indica un valor de p < 0.05 en los coeficientes de un modelo de regresión?",
        options: [
            "Que la variable es irrelevante",
            "Que debe eliminarse del modelo",
            "Que la variable es estadísticamente significativa",
            "Que el modelo es incorrecto"
        ],
        answer: "Que la variable es estadísticamente significativa"
    },
    {
        type: "matching",
        question: "Relaciona cada técnica con su aplicación",
        terms: [
            "Regresión logística",
            "Regresión lineal",
            "Series temporales",
            "Clasificación"
        ],
        definitions: [
            "Estimar la probabilidad de aprobación de crédito",
            "Predecir precios de viviendas",
            "Proyectar ventas mensuales",
            "Determinar si un email es spam"
        ],
        answer: {
            "Regresión logística": "Estimar la probabilidad de aprobación de crédito",
            "Regresión lineal": "Predecir precios de viviendas",
            "Series temporales": "Proyectar ventas mensuales",
            "Clasificación": "Determinar si un email es spam"
        }
    },
    {
        question: "¿Cuál es la principal suposición del clasificador Naive Bayes?",
        options: [
            "Que los atributos son dependientes entre sí",
            "Que las clases son mutuamente excluyentes",
            "Que los atributos son independientes dado el valor de clase",
            "Que todos los datos son normales"
        ],
        answer: "Que los atributos son independientes dado el valor de clase"
    },
    {
        question: "¿Cuál de los siguientes NO es un paso del proceso KDD?",
        options: [
            "Traducción automática del texto",
            "Limpieza de datos",
            "Minería de datos",
            "Evaluación de patrones"
        ],
        answer: "Traducción automática del texto"
    },
    {
        question: "¿Cuál es el objetivo principal de la visualización dentro del proceso de minería de datos?",
        options: [
            "Almacenar datos en gráficos visuales",
            "Presentar resultados estéticamente",
            "Facilitar el reconocimiento de patrones y la toma de decisiones",
            "Sustituir el análisis estadístico"
        ],
        answer: "Facilitar el reconocimiento de patrones y la toma de decisiones"
    },
    {
        question: "¿Por qué se usan gráficos de densidad suave en visualización de datos?",
        options: [
            "Para mostrar relaciones causales",
            "Para crear modelos predictivos",
            "Por su estética y suavidad en la representación de distribuciones",
            "Para análisis multivariado exclusivamente"
        ],
        answer: "Por su estética y suavidad en la representación de distribuciones"
    },
    {
        question: "¿Cuál es una característica de los autoencoders?",
        options: [
            "Solo sirven para clasificación",
            "Requieren etiquetado previo",
            "Son redes neuronales que comprimen y reconstruyen datos",
            "Funcionan solo con datos categóricos"
        ],
        answer: "Son redes neuronales que comprimen y reconstruyen datos"
    },
    {
        question: "¿Cuál de las siguientes afirmaciones sobre minería de datos es verdadera?",
        options: [
            "La minería de datos puede descubrir conocimiento útil a partir de datos que antes eran desconocidos",
            "La minería de datos solo sirve para analizar bases de datos relacionales",
            "La minería de datos reemplaza completamente el análisis estadístico tradicional"
        ],
        answer: "La minería de datos puede descubrir conocimiento útil a partir de datos que antes eran desconocidos"
    },
    {
        question: "Una empresa de ventas en línea ha recopilado millones de registros sobre las compras de sus clientes. El equipo de análisis ha identificado la necesidad de eliminar registros duplicados, corregir errores tipográficos y eliminar campos incompletos antes de extraer patrones de comportamiento. ¿Qué etapa del proceso KDD están realizando?",
        options: [
            "Limpieza de datos",
            "Evaluación de patrones",
            "Minería de datos"
        ],
        answer: "Limpieza de datos"
    },
    {
        question: "¿En qué se diferencian la minería de datos y la minería web?",
        options: [
            "La minería de datos usa algoritmos, y la web no",
            "La minería web se enfoca en hipervínculos, contenido web y registros",
            "No existe diferencia técnica",
            "La minería de datos se usa solo en Excel"
        ],
        answer: "La minería web se enfoca en hipervínculos, contenido web y registros"
    },
    {
        question: "¿Cuál NO es un tipo de minería web?",
        options: [
            "Minería de contenido web",
            "Minería de usuarios móviles",
            "Minería de estructuras web",
            "Minería de uso web"
        ],
        answer: "Minería de usuarios móviles"
    },
    {
        question: "¿En cuál de los siguientes casos usarías regresión logística?",
        options: [
            "Predecir el precio de una casa",
            "Estimar la probabilidad de fraude en una transacción",
            "Calcular ingresos anuales",
            "Pronosticar el tráfico vehicular diario"
        ],
        answer: "Estimar la probabilidad de fraude en una transacción"
    },
    {
        question: "¿Qué caracteriza a un sistema de recomendación basado en contenido?",
        options: [
            "Usa la historia de otros usuarios para recomendar",
            "Considera solo atributos del ítem y preferencias previas del usuario",
            "No requiere retroalimentación previa",
            "Se basa únicamente en ubicación geográfica"
        ],
        answer: "Considera solo atributos del ítem y preferencias previas del usuario"
    },
    {
        type: "matching",
        question: "Relaciona la técnica con su función en minería de texto",
        terms: [
            "PoS tagging",
            "Tokenización",
            "Análisis de sentimientos",
            "NER"
        ],
        definitions: [
            "Asigna etiquetas gramaticales a las palabras",
            "Divide el texto en unidades significativas",
            "Detecta emociones en los textos",
            "Reconoce nombres propios y ubicaciones"
        ],
        answer: {
            "PoS tagging": "Asigna etiquetas gramaticales a las palabras",
            "Tokenización": "Divide el texto en unidades significativas",
            "Análisis de sentimientos": "Detecta emociones en los textos",
            "NER": "Reconoce nombres propios y ubicaciones"
        }
    },
    {
        question: "¿Cuál NO es una ventaja directa de reducir la dimensionalidad?",
        options: [
            "Reducir el tiempo de cómputo",
            "Mejorar la interpretación de resultados",
            "Aumentar el tamaño del conjunto de datos",
            "Eliminar variables irrelevantes"
        ],
        answer: "Aumentar el tamaño del conjunto de datos"
    },
    {
        question: "¿Cuál es la diferencia principal entre regresión lineal y regresión logística?",
        options: [
            "La lineal predice categorías; la logística predice valores continuos",
            "La logística transforma variables numéricas en texto",
            "La lineal predice valores continuos; la logística estima probabilidades de clases",
            "Ambas se usan únicamente con variables categóricas"
        ],
        answer: "La lineal predice valores continuos; la logística estima probabilidades de clases"
    },
    {
        question: "¿Cuál es una diferencia entre minería de datos y OLAP?",
        options: [
            "OLAP explora datos conocidos; la minería de datos busca descubrir patrones ocultos",
            "Minería de datos solo analiza texto, mientras que OLAP solo analiza números",
            "OLAP se basa en inteligencia artificial, mientras que minería de datos no"
        ],
        answer: "OLAP explora datos conocidos; la minería de datos busca descubrir patrones ocultos"
    },
    {
        question: "Durante el análisis de un conjunto de datos, se detecta una distribución con dos picos (bimodal). ¿Qué indica esto?",
        options: [
            "Que hay un error en el gráfico",
            "Que los datos tienen valores atípicos mal codificados",
            "Que existen dos subpoblaciones diferentes en los datos",
            "Que no se pueden usar algoritmos de minería"
        ],
        answer: "Que existen dos subpoblaciones diferentes en los datos"
    },
    {
        question: "Un investigador analiza los comentarios sobre candidatos políticos en redes sociales para identificar opiniones dominantes. ¿Qué combinación de técnicas usaría?",
        options: [
            "Web Scraping + análisis de sentimientos",
            "Agrupamiento jerárquico",
            "Redes neuronales profundas",
            "Regresión lineal múltiple"
        ],
        answer: "Web Scraping + análisis de sentimientos"
    },
    {
        type: "matching",
        question: "Relaciona cada algoritmo con su característica principal",
        terms: [
            "Redes neuronales",
            "k-NN",
            "Árboles de decisión",
            "Naive Bayes"
        ],
        definitions: [
            "Aprenden patrones mediante capas interconectadas",
            "Clasifica por similitud con vecinos más cercanos",
            "Organiza decisiones en estructura jerárquica",
            "Asume independencia entre atributos"
        ],
        answer: {
            "Redes neuronales": "Aprenden patrones mediante capas interconectadas",
            "k-NN": "Clasifica por similitud con vecinos más cercanos",
            "Árboles de decisión": "Organiza decisiones en estructura jerárquica",
            "Naive Bayes": "Asume independencia entre atributos"
        }
    },
    {
        question: "¿En qué caso es ilegal el Web Scraping?",
        options: [
            "Cuando se usa para fines educativos",
            "Cuando se extraen datos de acceso público",
            "Cuando se extraen datos no públicos sin autorización",
            "Cuando se usan bibliotecas de Python"
        ],
        answer: "Cuando se extraen datos no públicos sin autorización"
    },
    {
        type: "matching",
        question: "Relaciona la técnica de selección con su principio",
        terms: [
            "Umbral de correlación",
            "Normalización",
            "Algoritmo genético",
            "Umbral de varianza"
        ],
        definitions: [
            "Elimina variables redundantes",
            "Escala atributos a un mismo rango",
            "Selecciona atributos basados en simulación evolutiva",
            "Elimina características con poca variabilidad"
        ],
        answer: {
            "Umbral de correlación": "Elimina variables redundantes",
            "Normalización": "Escala atributos a un mismo rango",
            "Algoritmo genético": "Selecciona atributos basados en simulación evolutiva",
            "Umbral de varianza": "Elimina características con poca variabilidad"
        }
    },
    {
        question: "¿Qué distingue a la regresión polinomial?",
        options: [
            "Solo se aplica a datos categóricos",
            "Agrega términos no lineales de las variables independientes",
            "Utiliza algoritmos genéticos",
            "Se limita a funciones logarítmicas"
        ],
        answer: "Agrega términos no lineales de las variables independientes"
    },
    {
        type: "matching",
        question: "Relaciona el paso del proceso KDD con su descripción",
        terms: [
            "Evaluación de patrones",
            "Presentación del conocimiento",
            "Integración de datos",
            "Transformación de datos"
        ],
        definitions: [
            "Identificar patrones verdaderamente interesantes",
            "Visualizar los patrones descubiertos",
            "Combinar múltiples fuentes de datos",
            "Consolidar datos en formas apropiadas para minería"
        ],
        answer: {
            "Evaluación de patrones": "Identificar patrones verdaderamente interesantes",
            "Presentación del conocimiento": "Visualizar los patrones descubiertos",
            "Integración de datos": "Combinar múltiples fuentes de datos",
            "Transformación de datos": "Consolidar datos en formas apropiadas para minería"
        }
    },
    {
        question: "¿Cuál es el objetivo del análisis de sentimientos?",
        options: [
            "Determinar la estructura gramatical de un texto",
            "Traducir palabras a diferentes idiomas",
            "Detectar opiniones y emociones en el texto",
            "Agrupar documentos por longitud"
        ],
        answer: "Detectar opiniones y emociones en el texto"
    },
    {
        question: "¿Cuál de los siguientes problemas es un ejemplo de regresión?",
        options: [
            "Predecir si un cliente cancelará su suscripción",
            "Determinar el precio estimado de una vivienda",
            "Clasificar correos como importantes o no",
            "Detectar patrones de acceso no autorizados"
        ],
        answer: "Determinar el precio estimado de una vivienda"
    },
    {
        type: "matching",
        question: "Relaciona cada herramienta de minería de datos con su característica",
        terms: [
            "WEKA",
            "Orange",
            "RapidMiner",
            "SAS"
        ],
        definitions: [
            "Fuerte en métodos de clasificación",
            "Permite crear visualizaciones con poca experiencia previa",
            "Destaca en análisis predictivo",
            "Potente pero costoso, orientado a grandes empresas"
        ],
        answer: {
            "WEKA": "Fuerte en métodos de clasificación",
            "Orange": "Permite crear visualizaciones con poca experiencia previa",
            "RapidMiner": "Destaca en análisis predictivo",
            "SAS": "Potente pero costoso, orientado a grandes empresas"
        }
    },
    {
        type: "matching",
        question: "Relaciona la herramienta con su característica destacada",
        terms: [
            "Orange",
            "SAS",
            "RapidMiner",
            "DataMelt"
        ],
        definitions: [
            "Análisis visual con componentes llamados widgets",
            "Alta escalabilidad y enfoque estadístico",
            "Análisis predictivo y minería de datos con interfaz amigable",
            "Enfocada en visualización científica en Java"
        ],
        answer: {
            "Orange": "Análisis visual con componentes llamados widgets",
            "SAS": "Alta escalabilidad y enfoque estadístico",
            "RapidMiner": "Análisis predictivo y minería de datos con interfaz amigable",
            "DataMelt": "Enfocada en visualización científica en Java"
        }
    },
    {
        question: "¿Cuál es uno de los principales desafíos del filtrado colaborativo?",
        options: [
            "Requiere supervisión médica",
            "Es costoso computacionalmente",
            "Las matrices de calificación suelen ser dispersas",
            "Funciona solo con imágenes"
        ],
        answer: "Las matrices de calificación suelen ser dispersas"
    },
    {
        question: "¿Qué hace el clasificador k-vecinos más cercanos (k-NN)?",
        options: [
            "Predice etiquetas usando redes neuronales profundas",
            "Asigna una clase basada en los k ejemplos más cercanos",
            "Construye árboles de decisión basados en distancia",
            "Usa probabilidad condicional para clasificar datos"
        ],
        answer: "Asigna una clase basada en los k ejemplos más cercanos"
    },
    {
        question: "¿En qué consiste el filtrado colaborativo basado en usuarios?",
        options: [
            "Se usa el contenido del producto para hacer recomendaciones",
            "Se utilizan usuarios similares para predecir preferencias del usuario objetivo",
            "Se predicen las etiquetas sin datos previos",
            "Se seleccionan los productos más vendidos"
        ],
        answer: "Se utilizan usuarios similares para predecir preferencias del usuario objetivo"
    },
    {
        question: "¿Cuál es uno de los principales desafíos al analizar datos de redes sociales?",
        options: [
            "Fácil acceso a los datos",
            "Tamaño, ruido y dinamismo de los datos",
            "Costos elevados del hardware",
            "Ausencia de algoritmos de clasificación"
        ],
        answer: "Tamaño, ruido y dinamismo de los datos"
    },
    {
        question: "¿Cuál es una aplicación común del análisis de redes sociales en minería de datos?",
        options: [
            "Identificar estructuras de red neuronal profunda",
            "Predecir conexiones entre usuarios y medir influencia",
            "Crear gráficos de barras",
            "Determinar el costo de algoritmos"
        ],
        answer: "Predecir conexiones entre usuarios y medir influencia"
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mezclar preguntas tipo matching y de opción múltiple
MDQuestions.forEach((question, index) => {
    if (question.type === "matching") {
        // Validar que 'answer' tenga pares válidos
        const pairs = Object.entries(question.answer);
        if (pairs.length > 0) {
            // Separar términos y definiciones
            const terms = pairs.map(([term, _]) => term);
            const definitions = pairs.map(([_, definition]) => definition);

            // Mezclar ambos por separado (rompe la relación directa)
            shuffleArray(terms);
            shuffleArray(definitions);

            // Asignar mezclados
            question.terms = terms;
            question.definitions = definitions;

            // Mostrar en consola para verificar mezcla
            console.log(`Pregunta ${index} - ${question.question}`);
            console.log("Términos mezclados:", question.terms);
            console.log("Definiciones mezcladas:", question.definitions);
        } else {
            console.error(`Pregunta ${index}: el campo 'answer' está vacío o mal estructurado.`);
        }
    } else if (Array.isArray(question.options)) {
        // Mezclar opciones de elección múltiple
        shuffleArray(question.options);
    } else {
        console.error(`Pregunta ${index}: 'options' no es un arreglo válido.`);
    }
});



