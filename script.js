const questions = {
    matematicas: [
        {
            question: "¿Qué representan las distorsiones temporales en la transmisión de datos?",
            options: ["Aumento de la amplitud de la señal", "Pérdida de información", "Cambios en la forma de la onda", "Reducción de la frecuencia de la señal"],
            answer: "Cambios en la forma de la onda"
        },
        {
            question: "¿Por qué la velocidad de transmisión de datos es más rápida en señales digitales que en analógicas?",
            options: ["Mayor ancho de banda", "Menor atenuación de la señal", "Mayor resistencia al ruido", "Menor interferencia electromagnética"],
            answer: "Mayor ancho de banda"
        },
        {
            question: "¿Qué tipo de señal es más difícil de reproducir cuando se contamina con ruido debido a su naturaleza continua?",
            options: ["Señal cuadrada", "Señal sinusoidal", "Señal de pulso", "Señal triangular"],
            answer: "Señal sinusoidal"
        },
        {
            question: "¿Qué efecto tiene el ruido y la atenuación en la tasa de errores por bit en sistemas con un mayor número de estados de señalización?",
            options: ["La tasa de errores es constante", "No afecta la tasa de errores", "Aumenta la tasa de errores", "Disminuye la tasa de errores"],
            answer: "Aumenta la tasa de errores"
        },
        {
            question: "¿Qué tipo de modulación es ASK y cuál es una de sus limitaciones principales?",
            options: ["Modulación de amplitud; ineficacia en la transmisión de datos", "Modulación de frecuencia; baja eficiencia espectral", "Modulación de amplitud; sensibilidad a cambios de fase", "Modulación de fase; susceptibilidad al ruido"],
            answer: "Modulación de amplitud; ineficacia en la transmisión de datos"
        },
        {
            question: "¿Qué implica la modulación y codificación de datos en la capa física de la comunicación de datos?",
            options: ["La transmisión de información a través de canales de comunicación", "La corrección de errores en la transmisión de datos", "La generación de señales analógicas a partir de datos digitales", "La conversión de señales analógicas a digitales"],
            answer: "La transmisión de información a través de canales de comunicación"
        },
        {
            question: "¿Cuál es la principal desventaja de la modulación por desplazamiento de frecuencia (FSK) en comparación con otras técnicas?",
            options: ["Mayor susceptibilidad al ruido", "Menor alcance de transmisión", "Menor velocidad de transmisión", "Requiere un ancho de banda más amplio"],
            answer: "Requiere un ancho de banda más amplio"
        },
        {
            question: "¿Qué representan los datos digitales en la transmisión de señales analógicas?",
            options: ["Señales portadoras", "Señales de reloj", "Señales moduladas", "Señales convertidas"],
            answer: "Señales portadoras"
        },
        {
            question: "¿Por qué es importante la suficiente energía en la señal recibida en la transmisión de datos?",
            options: ["Para aumentar la interferencia en la señal", "Para que la circuitería electrónica en el receptor pueda detectar la señal adecuadamente", "Para disminuir la atenuación en la señal", "Para reducir la calidad de la señal"],
            answer: "Para que la circuitería electrónica en el receptor pueda detectar la señal adecuadamente"
        },
        {
            question: "¿Qué papel juegan las interferencias en la transmisión de datos?",
            options: ["Pueden distorsionar o destruir la señal", "Reducen la velocidad de transmisión", "Mejoran la calidad de la señal", "Aumentan la amplitud de la señal"],
            answer: "Pueden distorsionar o destruir la señal"
        },
        {
            question: "¿Qué ventaja tiene la RDSI en comparación con ADSL en términos de llamadas a la red de la empresa?",
            options: ["Ofrece mayor calidad de voz en llamadas a la red de la empresa", "Permite llamadas a la red de la empresa sin restricciones", "No permite llamadas a la red de la empresa", "No requiere marcado para llamadas a la red de la empresa"],
            answer: "Permite llamadas a la red de la empresa sin restricciones"
        },
        {
            question: "¿Qué estándar se fundamenta en un canal de comunicación compartido en el que compiten los dispositivos transmisores?",
            options: ["IEEE 802.15", "IEEE 802.3", "IEEE 802.11", "IEEE 802.16"],
            answer: "IEEE 802.3"
        },
        {
            question: "En el contexto de la transmisión de datos, ¿qué implica la multiplexación por división de tiempo en la banda base?",
            options: ["Los datos se transmiten en múltiples canales de frecuencia", "Los datos se transmiten como diferencias de voltaje", "Los datos se transmiten en una portadora de alta frecuencia", "Los datos se transmiten en una banda de frecuencias alrededor de la portadora"],
            answer: "Los datos se transmiten como diferencias de voltaje"
        },
        {
            question: "¿Qué protocolo se equipará a las redes Ethernet semidúplex en una red WLAN?",
            options: ["IEEE 802.3", "ALOHA", "CSMA/CA", "CSMA/CD"],
            answer: "CSMA/CA"
        },
        {
            question: "¿Cuál es la principal diferencia entre el modo de enlace Simplex y el Duplex?",
            options: ["Simplex permite la comunicación en ambas direcciones simultáneamente, mientras que Duplex solo permite una dirección a la vez", "Simplex y Duplex son términos intercambiables y no tienen diferencias significativas", "Simplex solo se utiliza en redes cableadas, mientras que Duplex solo se utiliza en redes inalámbricas", "Simplex permite la comunicación en una sola dirección, mientras que Duplex permite la comunicación en ambas direcciones"],
            answer: "Simplex permite la comunicación en una sola dirección, mientras que Duplex permite la comunicación en ambas direcciones"
        },
        {
            question: "¿Qué dispositivo determina la ruta de los paquetes de datos en una red informática?",
            options: ["Hub", "Switch", "Modem", "Router"],
            answer: "Router"
        },
        {
            question: "¿Qué protocolo se destaca por reducir el riesgo de colisión en redes inalámbricas?",
            options: ["CSMA/CD", "ALOHA", "CSMA/CA", "IEEE 802.3"],
            answer: "CSMA/CA"
        },
        {
            question: "¿Qué protocolo es especialmente importante en las transmisiones realizadas en redes inalámbricas para reducir el riesgo de colisión?",
            options: ["IEEE 802.3", "ALOHA", "CSMA/CD", "CSMA/CA"],
            answer: "CSMA/CA"
        },
        {
            question: "¿Qué tipo de enlace permite la comunicación en ambas direcciones de forma simultánea?",
            options: ["Duplex", "Semiduplex", "Asíncrono", "Simplex"],
            answer: "Duplex"
        },
        {
            question: "En el contexto de la transmisión de datos, ¿qué implica la multiplexación por división de tiempo en la banda base?",
            options: ["Los datos se transmiten en múltiples canales de frecuencia", "Los datos se transmiten en una banda de frecuencias alrededor de la portadora", "Los datos se transmiten como diferencias de voltaje", "Los datos se transmiten en una portadora de alta frecuencia"],
            answer: "Los datos se transmiten como diferencias de voltaje"
        },
        {
            question: "¿Qué implica la presencia de señales no deseadas en la transmisión de datos?",
            options: ["Reduce la atenuación", "Facilita la detección de errores", "Aumenta la interferencia", "Mejora la calidad de la señal"],
            answer: "Aumenta la interferencia"
        },
        {
            question: "¿Qué tipo de distorsión se produce cuando la atenuación de la señal varía con la frecuencia?",
            options: ["Distorsión de amplitud", "Distorsión de fase", "Distorsión de atenuación", "Distorsión armónica"],
            answer: "Distorsión de atenuación"
        },
        {
            question: "¿Qué dispositivo se puede utilizar para igualar la atenuación dentro de una banda de frecuencias definidas en una señal?",
            options: ["Amplificador de potencia", "Ecualizador", "Filtro pasa altos", "Modulador de frecuencia"],
            answer: "Ecualizador"
        },
        {
            question: "¿En qué tipo de sistemas se implementan sistemas con un mayor número de estados de señalización?",
            options: ["Sistemas de transmisión por cable", "Sistemas de comunicación inalámbrica", "Sistemas de fibra óptica", "Sistemas de transmisión satelital"],
            answer: "Sistemas de fibra óptica"
        },
        {
            question: "¿Cuál es la principal ventaja de utilizar la modulación de fase (PM) en la transmisión de datos analógicos?",
            options: ["Menor ancho de banda requerido", "Mayor inmunidad al ruido", "Mayor velocidad de transmisión", "Mejor calidad de la señal"],
            answer: "Mayor inmunidad al ruido"
        },
        {
            question: "¿Qué tipo de modulación es más eficiente que ASK en términos de aprovechamiento del ancho de banda?",
            options: ["Modulación por desplazamiento de frecuencia", "Modulación por desplazamiento de fase", "Modulación de frecuencia", "Modulación de amplitud en cuadratura"],
            answer: "Modulación de amplitud en cuadratura"
        },
        {
            question: "¿Qué técnica de modulación transforma los datos digitales en señales analógicas?",
            options: ["Modulación por desplazamiento de fase", "Modulación por desplazamiento de frecuencia", "Modulación por desplazamiento de amplitud", "Modulación delta"],
            answer: "Modulación por desplazamiento de amplitud"
        },
        {
            question: "¿Cuál es la relación entre el periodo y la frecuencia de una señal periódica?",
            options: ["T = f^2", "T = 2f", "T = f", "T = 1/f"],
            answer: "T = 1/f"
        },
        {
            question: "¿Qué importancia tiene la eficiencia de la transmisión en la comunicación de datos?",
            options: ["Maximizar los errores en la transmisión", "Minimizar los errores en la transmisión", "Reducir la velocidad de transmisión", "Aumentar la interferencia en la transmisión"],
            answer: "Minimizar los errores en la transmisión"
        },
        {
            question: "¿Qué protocolo se basa en que dos o más dispositivos no pueden realizar envíos al mismo tiempo para evitar colisiones?",
            options: ["Frame Relay", "ALOHA", "IEEE 802.3", "CSMA/CA"],
            answer: "CSMA/CA"
        },
        {
            question: "¿Qué posibilidad ofrece ADSL en caso de fallo eléctrico en comparación con RDSI?",
            options: ["Continuar con la comunicación de voz", "Interrumpir toda comunicación", "Ambas anteriores", "Continuar con la comunicación de datos"],
            answer: "Continuar con la comunicación de voz"
        },
        {
            question: "¿Qué tecnología se basa en el estándar Ethernet para redes cableadas modernas de mayores velocidades de transmisión?",
            options: ["Gigabit Ethernet", "Token Ring", "ATM", "FDDI"],
            answer: "Gigabit Ethernet"
        },
        {
            question: "¿Qué protocolo es especialmente importante en las transmisiones realizadas en redes inalámbricas?",
            options: ["CSMA/CA", "ALOHA", "IEEE 802.3", "Frame Relay"],
            answer: "CSMA/CA"
        },
        {
            question: "¿Cuál es una función de la capa física en la comunicación de datos?",
            options: ["Encriptar los mensajes", "Establecer la conexión entre dispositivos", "Gestionar las direcciones IP", "Controlar el flujo de datos"],
            answer: "Establecer la conexión entre dispositivos"
        },
        {
            question: "¿Qué término se utiliza para describir la tasa de símbolo en las técnicas de transmisión?",
            options: ["Tasa de baudios", "Tasa de modulación", "Tasa de transmisión", "Tasa de bits"],
            answer: "Tasa de bits"
        },
        {
            question: "¿Qué tipo de redes pueden lograr una utilización mucho mejor que 1/e en comparación con ALOHA ranurado?",
            options: ["Redes MAN", "Redes LAN", "Redes PAN", "Redes WAN"],
            answer: "Redes LAN"
        },
        {
            question: "¿Qué significa la sigla ISDN en una red de telecomunicaciones?",
            options: ["Integrated Signal Data Network", "Internet Service Data Network", "Integrated Services Digital Network", "International System for Digital Networking"],
            answer: "Integrated Services Digital Network"
        },
        {
            question: "¿Qué tipo de redes se equiparán a las redes Ethernet semidúplex en cuanto a la necesidad de un protocolo que regule el uso del medio?",
            options: ["Redes PAN", "Redes WAN", "Redes MAN", "Redes WLAN"],
            answer: "Redes WLAN"
        },
        {
            question: "¿Qué representa el desplazamiento en fase de π/4 radianes en una señal periódica?",
            options: ["Un aumento en la amplitud de la señal", "Una disminución en la frecuencia de la señal", "Un cambio en la forma de la onda", "Una rotación de la fase de la señal"],
            answer: "Una rotación de la fase de la señal"
        },
        {
            question: "¿Qué tipo de señalización se utiliza en la técnica ASK para representar los elementos de señal?",
            options: ["Pulsos de luz", "Ondas senoidales", "Cambios de fase", "Variaciones de frecuencia"],
            answer: "Pulsos de luz"
        },
        {
            question: "¿Cuál es la función de la modulación delta en la conversión de datos analógicos a digitales?",
            options: ["Transformar los datos en señales analógicas", "Mejorar la calidad de la señal", "Reducir la tasa de errores por bit", "Aumentar la velocidad de transmisión"],
            answer: "Reducir la tasa de errores por bit"
        },
        {
            question: "¿Qué tipo de modulación es más eficiente que ASK en términos de velocidad de transmisión?",
            options: ["Modulación por desplazamiento de fase", "Modulación de amplitud en cuadratura", "Modulación por desplazamiento de frecuencia", "Modulación de frecuencia"],
            answer: "Modulación de amplitud en cuadratura"
        },
        {
            question: "¿Por qué la técnica ASK es sensible a cambios repentinos de la ganancia?",
            options: ["Porque representa los datos mediante pulsos de luz", "Porque la amplitud de la señal varía con la información transmitida", "Porque es una técnica de modulación ineficaz", "Porque utiliza múltiples niveles de amplitud"],
            answer: "Porque la amplitud de la señal varía con la información transmitida"
        },
        {
            question: "¿Qué representa una señal de reloj en la transmisión de datos?",
            options: ["Sincronizar la transmisión de datos", "Amplificar la transmisión de datos", "Distorsionar la transmisión de datos", "Eliminar la transmisión de datos"],
            answer: "Sincronizar la transmisión de datos"
        },
        {
            question: "¿Qué implica la relación entre velocidad de transmisión y ancho de banda en la comunicación de datos?",
            options: ["A menor velocidad de transmisión, mayor ancho de banda requerido", "A menor velocidad de transmisión, menor ancho de banda requerido", "A mayor velocidad de transmisión, menor ancho de banda requerido", "A mayor velocidad de transmisión, mayor ancho de banda requerido"],
            answer: "A mayor velocidad de transmisión, mayor ancho de banda requerido"
        },
        {
            question: "¿Qué ofrece la RDSI en términos de calidad de voz en comparación con ADSL?",
            options: ["No transmite voz", "Menor calidad de voz", "Mayor calidad de voz", "Misma calidad de voz"],
            answer: "Mayor calidad de voz"
        },
        {
            question: "¿Cuál es la diferencia más significativa entre Ethernet original y el IEEE 802.3?",
            options: ["Agregado de un delimitador de inicio de trama (SFD) y un pequeño cambio en el campo Tipo que incluye la Longitud", "Cambio en el formato de tramas y un pequeño cambio en el campo Tipo que incluye la Longitud", "Eliminación del control de flujo y un pequeño cambio en el campo Tipo que incluye la Longitud", "Cambio en el método de acceso y un pequeño cambio en el campo Tipo que incluye la Longitud"],
            answer: "Agregado de un delimitador de inicio de trama (SFD) y un pequeño cambio en el campo Tipo que incluye la Longitud"
        },
        {
            question: "¿Qué término se utiliza para describir la tasa a la que cambia la señal en las técnicas de transmisión?",
            options: ["Tasa de baudios", "Tasa de modulación", "Tasa de bits", "Tasa de símbolo"],
            answer: "Tasa de símbolo"
        },
        {
            question: "¿Qué protocolo se utilizaba una señal de reloj para marcar cuándo se podía iniciar una comunicación?",
            options: ["ALOHA", "Ethernet", "CSMA/CA", "IEEE 802.11"],
            answer: "ALOHA"
        },
        {
            question: "¿Qué tipo de enlace se establece por el modo de enlace directo según el funcionamiento en la transmisión de datos?",
            options: ["Simplex", "Síncrono", "Duplex", "Enlace directo"],
            answer: "Duplex"
        },
        {
            question: "¿Qué método de acceso define el estándar IEEE 802.3?",
            options: ["Ethernet original", "CSMA/CD", "ALOHA", "CSMA/CA"],
            answer: "CSMA/CD"
        },
        {
            question: "En el contexto de la transmisión de datos, ¿qué se emplea en redes de banda ancha para cables de gran longitud?",
            options: ["Amplificadores", "Repetidores digitales", "Routers", "Modems"],
            answer: "Repetidores digitales"
        },
    ],
    historia: [
        { question: "¿Quién fue el primer presidente de los Estados Unidos?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
        // Añadir más preguntas para historia
    ],
    ciencias: [
        { question: "¿Cuál es el elemento químico con símbolo 'O'?", options: ["Oro", "Oxígeno", "Osmio", "Osmio"], answer: "Oxígeno" },
        // Añadir más preguntas para ciencia
    ],
    literatura: [
        { question: "¿Quién escribió 'Cien años de soledad'?", options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Julio Cortázar"], answer: "Gabriel García Márquez" },
        // Añadir más preguntas para literatura
    ],
    geografia: [
        { question: "¿Cuál es el continente más grande del mundo?", options: ["África", "Asia", "América", "Europa"], answer: "Asia" },
        // Añadir más preguntas para geografía
    ],
    arte: [
        {
            question: "Interculturalidad significa el contacto e intercambio entre culturas en términos equitativos y en:",
            options: ["Afinidad política", "Condiciones económicas", "Comparticiones de riquezas", "Condiciones de igualdad"],
            answer: "Condiciones de igualdad"
        },
        {
            question: "En sí, la interculturalidad intenta romper con la historia hegemónica de una cultura dominante y otras subordinadas y, de esa manera, reforzar las identidades tradicionalmente excluidas para construir, tanto en la vida cotidiana como en las ........................ un convivir de respeto y legitimidad entre todos los grupos de la sociedad.",
            options: ["Organizaciones políticas", "Instituciones sociales", "Organizaciones administrativas", "Instituciones financieras"],
            answer: "Instituciones sociales"
        },
        {
            question: "La Plurinacionalidad, que ha sido la gran bandera integradora del movimiento indígena y su propuesta política estratégica, es la contribución que han hecho los pueblos indígenas a la teoría política ecuatoriana; sin embargo, desde su surgimiento ha sido más discutida por la ........................................ y el derecho que por la teoría política.",
            options: ["Sociología", "Antropología", "Psicología", "Arqueología"],
            answer: "Antropología"
        },
        {
            question: "El primer momento de construcción de la Plurinacionalidad como proyecto político está caracterizado por una fuerte lucha de resistencia contra la presión del capitalismo sobre el campo. Aquí, el proceso de lucha por la ……………. y mejores condiciones de vida posibilita la unificación nacional del movimiento indígena, cuyo elemento principal fue poner en escena política sus reivindicaciones específicas.",
            options: ["Revindication personal", "Tenencia de bienes muebles", "Organización política", "Tenencia de la tierra"],
            answer: "Tenencia de la tierra"
        },
        {
            question: "De acuerdo con Pedrero-García, Moreno-Fernández y Moreno-Crespo (2017), “la educación intercultural es la propuesta educativa inclusiva que favorece el conocimiento y el intercambio cultural como la valoración positiva de la diversidad cultural en términos de convivencia, innovación curricular y fomento de la participación comunitaria” (p.13), es decir, motiva la intervención de todos los miembros de la comunidad educativa. Asimismo, contribuye a la interacción entre las diferentes culturas, con lo cual se pudieran evitar el:",
            options: ["Compromiso político", "Colonialismo", "Racismo y la xenofobia", "Interés colectivo"],
            answer: "Racismo y la xenofobia"
        },
        {
            question: "La promulgación en el 2010 de la Ley Orgánica de Educación Superior (LOES) y la Ley Orgánica de Educación Intercultural (LOEI) en el 2011, donde se reconoce la educación en valores interculturales de las nuevas generaciones como premisa para lograr la verdadera convivencia intercultural, en la cual se garanticen y protejan los ................................. sin exclusión alguna por razones culturales, color de la piel, religión o procedencia.",
            options: ["Derechos políticos", "Derechos de todos los ecuatorianos", "Derechos económicos", "Derechos de liderazgo"],
            answer: "Derechos de todos los ecuatorianos"
        },
        {
            question: "La diversidad humana del Ecuador se da en medio de una variedad de climas, espacios geográficos y realidades ambientales. Esta no es solo una singularidad del país, sino también la base de la formación de:",
            options: ["Identidades políticas y económicas", "Identidades regionales", "Identidades provinciales", "Intereses personales"],
            answer: "Identidades regionales"
        },
        {
            question: "En las realidades geográficas y poblacionales diversas se han ido consolidando a lo largo de nuestra historia, entidades regionales con y políticos propios. Esos espacios territoriales tienen poblaciones que han desarrollado identidades, con su historia, sus costumbres, su manera de hablar y su comida muy característica.",
            options: ["Perfiles profesionales", "Intereses económicos", "Perfiles culturales", "Ambiciones políticas"],
            answer: "Perfiles culturales"
        },
        {
            question: "Una de las mayores riquezas de Ecuador es la diversidad existente, sea esta de carácter geográfico, ambiental o cultural, así como la existencia de nacionalidades y pueblos indígenas. La información estadística debe ser mirada en una perspectiva temporal donde históricamente los pueblos y nacionalidades indígenas fueron la mayoría de la población ecuatoriana y, la cual, con los procesos de modernización del siglo XX, fue adaptándose a otros patrones culturales, cuya base constituye el:",
            options: ["Mestizaje y la modernización", "Mestizaje y el colonialismo", "Mestizaje y los pueblos montubios", "Mestizaje y la población afroecuatoriana"],
            answer: "Mestizaje y la modernización"
        },
        {
            question: "Según la definición adoptada por el CODENPE, 'se entiende por nacionalidad al pueblo o conjunto de pueblos milenarios anteriores y constitutivos del ………………. que se autodefinen como tales, tienen una común identidad histórica, idioma, cultura, que viven en un territorio determinado, mediante sus instituciones y formas tradicionales de organización social, económica, jurídica, política y ejercicio de autoridad propia'.",
            options: ["Estado ecuatoriano", "Gobierno actual", "Estado con plenos poderes", "Gobierno colonial español"],
            answer: "Estado ecuatoriano"
        },
        {
            question: "A partir de la década del ………, las organizaciones indígenas actuaron en representación de los pueblos indígenas, lo que genera una nueva estructuración en términos de pueblos o nacionalidades sujetas a la legalidad incorporada en la actual normatividad, que fija criterios de identidad aplicables a la población indígena.",
            options: ["Cuarenta", "Gobierno anterior", "Setenta", "Ochenta"],
            answer: "Cuarenta"
        },
        {
            question: "Los montubios son personas que a pesar del ocultamiento social en la que viven, siguen dando muestras de la enorme riqueza cultural que poseen, el en una de sus obras el poder político del Ecuador decía “Qué la historia nacional, sus procesos, acontecimientos y relatos deben ser revisados” con este pensamiento invitaba hacer una reconstrucción desde el litoral porque la historia está construida solo con la información y las fuentes con una visión serrana.",
            options: ["Presidente Roldós (1979-1981)", "Presidente Moreno (2017-2021)", "Presidente Borja (1988-1992)", "Presidente Hurtado (1981-1984)"],
            answer: "Presidente Hurtado (1981-1984)"
        },
        {
            question: "Los montubios es uno de los grupos sociales más olvidados por los diferentes gobiernos, son gente sencilla, trabajadora, capaces de emprender cualquier tipo de actividad vinculada con el campo, personas con apariencia similar a la gente urbana, pero con diferentes costumbres, dialecto, cultura y su modo de ser distinto, cohabitan en las principales ciudades de la:",
            options: ["Región Costa del Ecuador", "Región Insular del Ecuador", "Región Oriental del Ecuador", "Región Sierra del Ecuador"],
            answer: "Región Costa del Ecuador"
        },
        {
            question: "“El escritor guayaquileño (1903-1941), uno de los principales exponentes de temáticas sobre el montubio, cuenta que estos pueblos formaron parte de las milicias rurales que lucharon en las guerras de la independencia contra el yugo español, bajo la tutela del mariscal Antonio José de Sucre y del Libertador Simón Bolívar, agrupados en los batallones de Yaguachi y Daule”. (Barona, 2014).",
            options: ["Joaquín Gallegos Lara", "Demetrio Aguilera Malta", "José de la Cuadra", "Enrique Gil Gilbert"],
            answer: "José de la Cuadra"
        },
        {
            question: "En el Ecuador tradicional, a la mayoría de los afrodescendientes los podemos encontraren dos asentamientos convencionales: en la costa en la provincia de Esmeraldas, y en la sierra en las provincias de Imbabura y Carchi. Hoy, sin embargo, el número de población afrodescendiente es prioritariamente urbana y se ubica en las provincias de Guayas, Pichincha, Los Ríos, Santo Domingo, Imbabura. En la actualidad, hay un incremento, del año 2001 al 2010, de un:",
            options: ["72.01% de población afrodescendiente en el Ecuador", "42.01% de población afrodescendiente en el Ecuador", "52.01% de población afrodescendiente en el Ecuador", "62.01% de población afrodescendiente en el Ecuador"],
            answer: "42.01% de población afrodescendiente en el Ecuador"
        },
        {
            question: "Su espíritu de libertad y resistencia les permite en 1553, en las costas de Esmeraldas, con forma y organizar en conjunto con población indígena, el Reino de los Zambos, liderado por el héroe nacional cimarrón ……. El cimarronaje y más estrictamente “el palenque” se convirtió en el escenario de construcción de territorios autónomos que expresaba una cultura de la resistencia, libertad, evidenciada en sus saberes, baile y música.",
            options: ["Abdón Calderón", "Joaquín de Olmedo", "Luis Vargas Torres", "Alonso de Illescas"],
            answer: "Alonso de Illescas"
        },
        {
            question: "En estos espacios se desarrollaron y fortalecieron identidades y acciones colectivas que hicieron a muchos de los afrodescendientes ecuatorianos libertos, razón por la cual se puede establecer como cierto “el orgullo afro” de ser generadores de ...................................; y con esto la relativa consolidación de su autoestima.",
            options: ["Su propia conquista", "Su propia identidad", "Su propia libertad", "Su propia riqueza"],
            answer: "Su propia libertad"
        },
        {
            question: "“El que no tiene de inga tiene de mandinga”, se dice, para indicar que hay gran presencia indígena o negra en el mestizaje ecuatoriano. Para ello han influido, desde luego, las propias raíces étnicas, pero también han tenido que ver las situaciones regionales y, desde luego, el proceso de urbanización. El hecho es que, ahora, la inmensa mayoría de la población se declara mestiza. El Censo de 2010 arrojó una cifra de 9’411.890, es decir un:",
            options: ["87,42% DE LA POBLACIÓN", "57,42% DE LA POBLACIÓN", "77,42% DE LA POBLACIÓN", "67,42% DE LA POBLACIÓN"],
            answer: "77,42% DE LA POBLACIÓN"
        },
        {
            question: "Los mestizos no son una realidad homogénea, sino un hecho de diversidad. Una de las imágenes más difundidas es la del, el típico “cholo” de raíz campesina. Allí está también el mestizo urbano, el “plazuela” de barrio o el “chulla” quiteño. En la cultura regional azuaya el mestizaje se expresa en la “chola cuencana”, que patentiza una realidad, que también se da en los sectores populares de otros ámbitos del país: la mujer que trabaja, muchas veces jefa de familia.",
            options: ["Mestizo amazónico", "Mestizo serrano", "Mestizo costeño", "Mestizo pastuso"],
            answer: "Mestizo serrano"
        },
        {
            question: "El Ecuador es un Estado……………………………………, que debe respetar y estimular el desarrollo de todas las lenguas existentes en su territorio, así como la identidad cultural de las nacionalidades que existen a su interior, como las nacionalidades: Kichwa, Shuar, Achuar, Chachi, Epera, Huaorani, Siona, Secoya, Awa, Tsáchila y Cofán, Zápara, entre otros.",
            options: ["Con cuatro regiones naturales", "Pluricultural y Multiétnico", "Con múltiples recursos naturales", "Pacífico por excelencia"],
            answer: "Pluricultural y Multiétnico"
        },
        {
            question: "En nuestro país, los pueblos y nacionalidades indígenas juegan un rol protagónico. Últimamente se ha logrado incorporar en la nueva Constitución Política de la República, los derechos colectivos de las nacionalidades indígenas. En el artículo 1 de la Constitución Política vigente, el inciso Tercero dice: “El Estado respeta y estimula el desarrollo de todas las:",
            options: ["Comidas típicas de los ecuatorianos", "Costumbres de los ecuatorianos", "Tradiciones de los ecuatorianos", "Lenguas de los ecuatorianos"],
            answer: "Lenguas de los ecuatorianos"
        },
        {
            question: "El castellano es el idioma oficial. El Kichwa, el Shuar y los demás idiomas ancestrales son de uso oficial para los pueblos indígenas en los términos que fija la Ley”; y el .........................., Numeral 1, dice: “Mantener, desarrollar y fortalecer su identidad y tradiciones en lo espiritual, cultural, lingüístico, social, político y económico”.",
            options: ["Artículo 84", "Artículo 64", "Artículo 54", "Artículo 74"],
            answer: "Artículo 84"
        },
        {
            question: "En el ámbito de lenguas indígenas, la DINEIB (Dirección Nacional de Educación Intercultural Bilingüe) se creó en el año de 1988, como instancia encargada de llevar adelante la tarea educativa, se ve en la necesidad de crear una instancia que regule, estandarice y desarrolle a las lenguas indígenas. En la actualidad son:",
            options: ["15 lenguas reconocidas en nuestro país", "12 lenguas reconocidas en nuestro país", "14 lenguas reconocidas en nuestro país", "13 lenguas reconocidas en nuestro país"],
            answer: "14 lenguas reconocidas en nuestro país"
        },
        {
            question: "Las costumbres son hábitos adquiridos cuando alguna práctica o acto es repetido frecuentemente. Dichas costumbres se asumen por parte de toda la comunidad y se van transmitiendo de generación a generación lo que las transforman en:",
            options: ["Tradiciones de nuestro país", "Costumbres de nuestro país", "Lenguas de nuestro país", "Platos típicos de nuestro país"],
            answer: "Tradiciones de nuestro país"
        },
        {
            question: "Ecuador, al ser un país pluriétnico y multicultural, se destaca por la celebración de muchas costumbres, las mismas que son celebradas a lo largo y ancho de este país. Sin embargo, aquí abordamos una de las costumbres más conocidas por los ecuatorianos, selecciónela:",
            options: ["Quemamos al viejo cada fin de año", "La fiesta de Reyes Magos cada 6 de enero", "Fiesta del Inti Raymi", "Día del trabajo"],
            answer: "Quemamos al viejo cada fin de año"
        },
        {
            question: "El Ecuador cuenta con varias tradiciones que se destacan como identidad nacional. Han permanecido a lo largo del tiempo, y se ha convertido en una herencia cultural. Estas tradiciones manifiestan la plurinacionalidad y la pluriculturalidad, que se extienden a lo largo de todo el territorio nacional, a continuación, seleccione una tradición:",
            options: ["La fiesta de Reyes Magos cada 6 de enero", "La impuntualidad", "Regateamos o pedimos la yapa", "Quemamos al viejo cada fin de año"],
            answer: "La fiesta de Reyes Magos cada 6 de enero"
        },
        {
            question: "Ecuador ha sido un país de cazadores, recolectores y pescadores de manera que siempre buscó tener………Con el paso del tiempo los pobladores ecuatorianos empezaron a explorar el mundo de la agricultura, la domesticación de animales e incluso el intercambio de productos entre las tres principales regiones de Ecuador Continental: Costa, Sierra y Amazonía.",
            options: ["Productos de importación", "Productos con valor agregado", "Productos frescos y naturales", "Productos de exportación"],
            answer: "Productos frescos y naturales"
        },
        {
            question: "La cocina ecuatoriana ha tenido varias influencias a lo largo de la historia gastronómica del país, sin embargo, existen dos grandes culturas que han tenido un mayor impacto en la gastronomía ecuatoriana………. Culturas que son precisamente quienes han logrado influenciar y generar un cambio significativo en la cocina nacional; tanto en productos como en técnicas de cocción, nos estamos refiriendo a:",
            options: ["La cultura Valdivia y Chorrera", "La cultura Inca y los conquistadores de España", "La cultura Manteña – Huancavilca", "La cultura Milagro – Quevedo"],
            answer: "La cultura Inca y los conquistadores de España"
        },
        {
            question: "En la actualidad se está poniendo mucho interés en recuperar nuestra ............... a través de la investigación nutricional de productos nativos, recordando que las recetas tradicionales y ancestrales cuentan una historia y muestran la cultura del país.",
            options: ["Identidad cultural", "Identidad ambiental", "Identidad artística", "Identidad gastronómica"],
            answer: "Identidad gastronómica"
        },
        {
            question: "Los chefs han puesto un granito de arena en este proceso de recuperación identidad a través de la gastronomía, gracias al …………………… tanto dulces como saladas y las dan a conocer a través de diferentes medios que pueden ser virtuales, en conferencias, entre otros.",
            options: ["Desarrollo de la agricultura", "Desarrollo de recetas", "Compromiso de pueblos y nacionalidades", "Intervencionismo de los Afroecuatorianos"],
            answer: "Desarrollo de recetas"
        },
        {
            question: "Es definida como un multiverso simbólico, compuesto de ideas, valores y emociones, contenido en la conciencia y en la comunicación, incrustado en el modo de vida, y orientado hacia la virtud o perfectibilidad humana, con el que los miembros de un grupo social experimentan y construyen los significados y sentidos de su vida. Nos estamos refiriendo a la definición de:",
            options: ["Cultura", "Plurinacionalidad", "Lengua o idioma nativo", "Multicultural"],
            answer: "Cultura"
        },
        {
            question: "Los seres humanos estamos tan impregnados de cultura que, como los, ni siquiera percibimos su existencia. Encontramos tan «normal» las maneras de comportarnos o relacionamos, y las formas en que sentimos, pensamos, juzgamos o percibimos el mundo, que nos parecen sencillamente «naturales».",
            options: ["Peces en el agua", "Peces en el pesebre", "Peces en el mar", "Peces en los ríos"],
            answer: "Peces en el agua"
        },
        {
            question: "Es el conjunto de bienes tangibles e intangibles, que constituyen la herencia de un grupo humano, que refuerzan emocionalmente su sentido de comunidad con una identidad propia y que son percibidos por otros como característicos. También es considerado como producto de la creatividad humana se hereda, se transmite, se modifica y optimiza de individuo a individuo y de generación a generación. Nos estamos refiriendo a la definición de:",
            options: ["Cultura", "Multicultural", "Patrimonio Cultural", "Plurinacionalidad"],
            answer: "Patrimonio Cultural"
        },
        {
            question: "Ecuador cuenta con varias declaratorias de patrimonio cultural de la humanidad, puesto que, en 1978, la Unesco realiza la declaración de Quito como la primera ciudad Patrimonio Cultural de la Humanidad. En el mismo año se encuentran inscritas dentro del patrimonio natural mundial las Islas Galápagos. Más tarde, en 1983, se incluye el centro histórico de la ciudad de Cuenca y el Parque Nacional Sangay. La lengua Zápara se declara bien cultural de la humanidad dentro del:",
            options: ["Patrimonio Material, en 2000", "Patrimonio Inmaterial, en 2001", "Patrimonio Natural, en 2002", "Patrimonio Cultural de la Humanidad, en 2003"],
            answer: "Patrimonio Inmaterial, en 2001"
        },
        {
            question: "Del siguiente listado, seleccione una opción que corresponde a los bienes culturales tangibles, hechos por las sociedades de nuestro pasado:",
            options: ["Lenguas nativas de nuestro país", "Celebraciones y Conocimientos", "Patrimonios Arquitectónicos", "Saberes, tradiciones y creencias"],
            answer: "Patrimonios Arquitectónicos"
        },
        {
            question: "Del siguiente listado, seleccione una opción que corresponde a los bienes culturales intangibles, hechos por las sociedades de nuestro pasado:",
            options: ["Patrimonios Arquitectónicos", "Patrimonio Arqueológico", "Saberes, tradiciones y creencias", "Patrimonio natural"],
            answer: "Saberes, tradiciones y creencias"
        },
        {
            question: "El objeto de la presente Ley es definir las competencias, atribuciones y obligaciones del Estado, los fundamentos de la política pública orientada a garantizar el ejercicio de los derechos culturales y la interculturalidad; así como ordenar la institucionalidad encargada del ámbito de la cultura y el patrimonio a través de la integración y funcionamiento del Sistema Nacional de Cultura. Se refiere al:",
            options: ["Art. 2.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 3.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 1.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 4.- Ley Orgánica de Cultura del Ecuador 2017"],
            answer: "Art. 1.- Ley Orgánica de Cultura del Ecuador 2017"
        },
        {
            question: "La presente Ley es aplicable a todas las actividades vinculadas al acceso, fomento, producción, circulación y promoción de la creatividad, las artes, la innovación, la memoria social y el patrimonio cultural, así como a todas las entidades, organismos e instituciones públicas y privadas que integran el Sistema Nacional de Cultura; a las personas, comunidades, comunas, pueblos y nacionalidades, colectivos y organizaciones culturales que forman parte del Estado plurinacional e intercultural ecuatoriano. Se refiere al:",
            options: ["Art. 1.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 4.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 3.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 2.- Ley Orgánica de Cultura del Ecuador 2017"],
            answer: "Art. 2.- Ley Orgánica de Cultura del Ecuador 2017"
        },
        {
            question: "La Ley Orgánica de Cultura responderá a los siguientes principios: - Diversidad cultural. Se concibe como el ejercicio de todas las personas a construir y mantener su propia identidad cultural, a decidir sobre su pertenencia a una o varias comunidades culturales y a expresar dichas elecciones; a difundir sus propias expresiones culturales y tener acceso a expresiones culturales diversas; - Interculturalidad. Favorece el diálogo de las culturas diversas, pueblos y nacionalidades, como esencial para el ejercicio de los derechos consagrados en la Constitución y en la presente Ley, en todos los espacios y ámbitos de la sociedad. Ambas se refieren al:",
            options: ["Art. 1.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 4.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 3.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 2.- Ley Orgánica de Cultura del Ecuador 2017"],
            answer: "Art. 4.- Ley Orgánica de Cultura del Ecuador 2017"
        },
        {
            question: "Son fines de la presente Ley: - Fomentar el diálogo intercultural en el respeto de la diversidad; y fortalecer la identidad nacional, entendida como la conjunción de las identidades diversas que la constituyen; - Fomentar e impulsar la libre creación, la producción, valoración y circulación de productos, servicios culturales y de los conocimientos y saberes ancestrales que forman parte de las identidades diversas, y promover el acceso al espacio público de las diversas expresiones de dichos procesos. Ambas se refieren al:",
            options: ["Art. 2.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 3.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 1.- Ley Orgánica de Cultura del Ecuador 2017", "Art. 4.- Ley Orgánica de Cultura del Ecuador 2017"],
            answer: "Art. 3.- Ley Orgánica de Cultura del Ecuador 2017"
        },
        {
            question: "Según Karla Rodríguez Burgos: “La democracia es un sistema político en el que se tiene el derecho al voto para elegir a los representantes en elecciones periódicas; sin embargo, a lo largo del tiempo, a este concepto se le han agregado ciertas características, como: derechos, libertades, requisitos económicos, sociales y políticos que han llevado a pensar que la democracia es un:",
            options: ["Sistema económico respaldado por el FMI", "Sistema político que ya no puede existir más", "Sistema económico apoyado por el BID", "Sistema político que siempre debe existir en la sociedad"],
            answer: "Sistema político que ya no puede existir más"
        },
        {
            question: "Según el Dr. Augusto Durán Ponce: “Democracia es una forma de …………., que reconoce la titularidad del poder a la sociedad; es una forma de organización del Estado, en la cual las decisiones colectivas son adoptadas por el pueblo, en base a mecanismos de participación directa o indirecta”.",
            options: ["Organización particular", "Organización administrativa", "Organización social", "Organización económica"],
            answer: "Organización social"
        },
        {
            question: "En definitiva, “Democracia es un derecho de las personas y un proceso mediante el cual .......... se integra en la toma de decisiones de los gobiernos de la ciudad, provincial o nacional”.",
            options: ["La ciudadanía", "El fiscal de la nación", "El gobierno", "Los asambleístas"],
            answer: "La ciudadanía"
        },
        {
            question: "El retorno a la democracia en 1979 abrió en el país una alta expectativa de días mejores para sus habitantes. Sin duda, contar con gobiernos democráticos es por hoy, la forma más generalizada en el mundo y la más deseable en comparación con los:",
            options: ["Régimen es totalitarios", "Régimen es aduaneros", "Régimen es políticos", "Régimen es autoritarios"],
            answer: "Régimen es autoritarios"
        },
        {
            question: "Se entiende “………” como el espacio público y los procesos (actores, estructuras, relaciones) que regulan permanentemente (procedimientos, normas, leyes, instituciones, mandatos y ordenanzas) las relaciones de poder en una sociedad, y que son válidas, legítimas (en democracia) y obligatorias (en otros sistemas y regímenes, pero también en democracia) para todos sus integrantes. Nos estamos refiriendo a:",
            options: ["LA POLÍTICA", "EL GOBIERNO", "EL ESTADO", "LA ASAMBLEA"],
            answer: "LA POLÍTICA"
        },
        {
            question: "Durante el último periodo democrático, 1979-2016, lo que más se ha buscado es resaltar cuatro procesos destacados de lucha por la garantía de derechos en el Ecuador. Dichos procesos están relacionados con la protección de los derechos civiles, los derechos de las mujeres, de los pueblos indígenas y el derecho a un:",
            options: ["Régimen político", "Medio ambiente sano", "Régimen totalitario", "Régimen autoritario"],
            answer: "Medio ambiente sano"
        },
        {
            question: "Históricamente, los ……………………………… ecuatorianos no han realizado las funciones de mediación, moderación y representación, típicamente asignadas a los partidos políticos. En lugar de ello, más bien, han sido descritos (ya sea por analistas políticos o por el pueblo ecuatoriano), como oportunistas, personalistas o elitistas.",
            options: ["ASAMBLEISTAS", "FUNCIONARIOS", "PARTIDOS POLÍTICOS", "GOBERNANTES"],
            answer: "PARTIDOS POLÍTICOS"
        },
        {
            question: "Lo partidos políticos, a menudo han sido utilizados por sus líderes únicamente como un .................., a los partidos les ha faltado en general una coherencia ideológica o programática, han tenido una estructura y organización interna débiles, y han demostrado una marcada propensión hacia la fragmentación y declive a la vez.",
            options: ["FUENTE DE RIQUEZA", "MODUS VIVENDI", "CAPRICHO PERSONAL", "VEHÍCULO ELECTORAL"],
            answer: "VEHÍCULO ELECTORAL"
        },
        {
            question: "“Jamás incautaré un centavo de los ahorros de los ecuatorianos”. Frase célebre que corresponde al siguiente exmandatario de nuestro país:",
            options: ["LENIN MORENO GARCES", "JORGE JAMIL MAHUAD WITT", "JAIME ROLDÓS AGUILERA", "LUCIO GUTIÉRREZ BORBÚA"],
            answer: "JORGE JAMIL MAHUAD WITT"
        },
        {
            question: "“O cambiamos al Ecuador, o morimos en el intento”. Frase célebre que corresponde al siguiente exmandatario de nuestro país:",
            options: ["LUCIO GUTIÉRREZ BORBÚA", "JAIME ROLDÓS AGUILERA", "LENIN MORENO GARCES", "JORGE JAMIL MAHUAD WITT"],
            answer: "LUCIO GUTIÉRREZ BORBÚA"
        },
        {
            question: "“Los desastres que se han dado en mi gobierno es culpa de Correa”. Frase célebre que corresponde al siguiente exmandatario de nuestro país:",
            options: ["LENIN MORENO GARCES", "LUCIO GUTIÉRREZ BORBÚA", "JORGE JAMIL MAHUAD WITT", "JAIME ROLDÓS AGUILERA"],
            answer: "LENIN MORENO GARCES"
        },
        {
            question: "“Este Ecuador amazónico, desde siempre y hasta siempre; ¡Viva la Patria!”. Frase célebre que corresponde al siguiente exmandatario de nuestro país:",
            options: ["JAIME ROLDÓS AGUILERA", "LUCIO GUTIÉRREZ BORBÚA", "JORGE JAMIL MAHUAD WITT", "RAFAEL CORREA DELGADO"],
            answer: "JAIME ROLDÓS AGUILERA"
        },
        {
            question: "“El bienestar del ser humano debe estar siempre por encima del capital”. Frase célebre que corresponde al siguiente exmandatario de nuestro país:",
            options: ["LUCIO GUTIÉRREZ BORBÚA", "JAIME ROLDÓS AGUILERA", "RAFAEL CORREA DELGADO", "JORGE JAMIL MAHUAD WITT"],
            answer: "RAFAEL CORREA DELGADO"
        },
        {
            question: "Los orígenes de los partidos políticos en el mundo moderno datan de ……, principalmente, como consecuencia de la instauración en América y Europa de regímenes democráticos caracterizados por la existencia de cuerpos colegiados (parlamentos) y comités electorales. Esto no quiere decir que previo al nacimiento de los partidos políticos no existían otras formas de asociación y organización política; al contrario, la palabra partido era comúnmente utilizada para referirse a aquellas organizaciones o grupos de personas que compartían intereses comunes.",
            options: ["Mediados del siglo XIX", "Mediados del siglo XVIII", "Mediados del siglo XXI", "Mediados del siglo XX"],
            answer: "Mediados del siglo XIX"
        },
        {
            question: "Político y arquitecto ecuatoriano, fue presidente de la república entre 1992 y 1996. Comenzó a gobernar con un programa de carácter claramente neoliberal que apuntaló al sector económico (en especial el bancario y empresarial) y desalentó el social, por lo que hubo de hacer frente a numerosos conflictos internos. Nos estamos refiriendo a:",
            options: ["RAFAEL CORREA DELGADO", "SIXTO DURAN BALLEN", "ABDALÁ BUCARAM ORTIZ", "JORGE JAMIL MAHUAD WITT"],
            answer: "SIXTO DURAN BALLEN"
        },
        {
            question: "Político y abogado ecuatoriano, fue presidente del Ecuador durante el período comprendido entre el 10 de agosto de 1996 y 6 de febrero de 1997, el cual finalizó con su destitución por parte del Congreso por incapacidad mental para gobernar. Fue prófugo de la justicia ecuatoriana por 20 años, exiliado en Panamá, hasta que los juicios en los cuales se le acusaba prescribieron. Nos estamos refiriendo a:",
            options: ["JAIME ROLDÓS AGUILERA", "JORGE JAMIL MAHUAD WITT", "ABDALÁ BUCARAM ORTIZ", "RAFAEL CORREA DELGADO"],
            answer: "ABDALÁ BUCARAM ORTIZ"
        },
        {
            question: "Es un médico y político ecuatoriano. Fue presidente de la República del Ecuador desde el 20 de abril de 2005 hasta el 15 de enero de 2007. El presidente y sus ministros garantizaron la dolarización y el cumplimiento de los compromisos internacionales del Ecuador, asumir el pago de la deuda externa, en 13.000 millones de dólares. Nos estamos refiriendo a:",
            options: ["SIXTO DURAN BALLEN", "ABDALÁ BUCARAM ORTIZ", "RAFAEL CORREA DELGADO", "ALFREDO PALACIOS GONZALES"],
            answer: "ALFREDO PALACIOS GONZALES"
        },
        {
            question: "Es un abogado y político ecuatoriano, fue elegido como presidente del Ecuador en 1998, no culminó su periodo presidencial ya que fue cesado en sus funciones en enero del 2000. Creó una legislación de cambio bancario, en donde se destinaron los requerimientos del estado para atender todos los inconvenientes de los bancos privados que habían caído en quiebra, les dieron $ 8.000 millones de dólares. Nos estamos refiriendo a:",
            options: ["SIXTO DURAN BALLEN", "JORGE JAMIL MAHUAD WITT", "ABDALÁ BUCARAM ORTIZ", "RAFAEL CORREA DELGADO"],
            answer: "JORGE JAMIL MAHUAD WITT"
        },
        {
            question: "Catedrático universitario y político ecuatoriano. Fue presidente de la República del Ecuador desde el 22 de enero de 2000 hasta el 15 de enero de 2003. En su mandato hubieron protestas por las subidas de las tarifas de los combustibles, el gas doméstico y el transporte público, así como el incremento del IVA del 12% al 15%. Nos estamos refiriendo a:",
            options: ["SIXTO DURAN BALLEN", "JORGE JAMIL MAHUAD WITT", "ABDALÁ BUCARAM ORTIZ", "GUSTAVO NOBOA BEJARANO"],
            answer: "GUSTAVO NOBOA BEJARANO"
        },
        {
            question: "Político ecuatoriano que fue presidente de Ecuador (2007-2017), siendo el mandatario ecuatoriano que más tiempo ha permanecido en el poder de forma continua. Su Gobierno sea ha denominado “Socialismo del Siglo XXI Revolución Ciudadana. Muy querido por la mayoría del pueblo ecuatoriano, por las amplias reformas políticas, económicas, sociales, educativas, etc. que fortalecieron el BUEN VIVIR y bienestar de sus habitantes. Nos estamos refiriendo a:",
            options: ["JORGE JAMIL MAHUAD WITT", "ABDALÁ BUCARAM ORTIZ", "SIXTO DURAN BALLEN", "RAFAEL CORREA DELGADO"],
            answer: "RAFAEL CORREA DELGADO"
        },
        {
            question: "Un grupo de personas integrantes de la sociedad criolla de Quito se reunió en la casa de Manuela Cañizares para definir una estrategia. Cuentan que esa madrugada, ante la desmotivación de algunos de los presentes, Manuela les increpó con una dura frase: “¡Cobardes...hombres de poca fe, nacidos para la servidumbre ¿De qué tenéis miedo...? ¡No hay tiempo que perder...!”. Nos estamos refiriendo a:",
            options: ["La noche del 9 de agosto de 1822", "La noche del 9 de octubre de 1820", "La noche del 19 de agosto de 1821", "La noche del 9 de agosto de 1809"],
            answer: "La noche del 9 de agosto de 1809"
        },
        {
            question: "En la madrugada del ……., se conformó la Junta Soberana de Gobierno, que tuvo como autoridades principales al Marqués de Selva Alegre, Juan Pío Montufar, y al obispo José Cuero y Caicedo, como presidente y vicepresidente respectivamente. Los doctores Juan de Dios Morales, Manuel Rodríguez de Quiroga y Juan Larrea fueron nombrados como secretarios de Estado, despachos de lo Interior, de Gracia, Justicia y Hacienda.",
            options: ["02 DE AGOSTO DE 1809", "10 DE AGOSTO DE 1809", "10 DE AGOSTO DE 1810", "09 DE AGOSTO DE 1809"],
            answer: "10 DE AGOSTO DE 1809"
        },
        {
            question: "Fue el “grito” que dio origen al calificativo de: “Quito Luz de América” y \"Primer grito de independencia\". En definitiva, los sucesos del son considerados como el Primer Grito de la Independencia de Ecuador, pues fue la llamarada que motivó a otros patriotas a tomar la posta.",
            options: ["02 de agosto de 1809", "09 de agosto de 1809", "10 de agosto de 1809", "10 de agosto de 1810"],
            answer: "10 de agosto de 1809"
        },
        {
            question: "Los notables guayaquileños proclamaron su independencia. José Joaquín de Olmedo fue la figura del pronunciamiento. Junto a él estuvieron, entre otros, Febres Cordero, el jefe militar; Escobedo, Jimena, Roca y Espantoso, que formaron parte de las juntas, Provisional y Suprema, que se sucedieron en el mando. Nos estamos refiriendo a la fecha del:",
            options: ["9 de octubre de 1810", "12 de octubre de 1492", "12 de octubre de 1820", "9 de octubre de 1820"],
            answer: "9 de octubre de 1820"
        },
        {
            question: "La revolución había logrado que la ciudad de Guayaquil quedara libre del dominio español, pero la provincia del mismo nombre permanecía en manos del dominio español. En pocos días, las tropas de la ciudad lograron liberar varios pueblos: Samborondón, el día:",
            options: ["10 de octubre de 1820", "12 de octubre de 1492", "12 de octubre de 1820", "9 de octubre de 1810"],
            answer: "10 de octubre de 1820"
        },
        {
            question: "La revolución había logrado que la ciudad de Guayaquil quedara libre del dominio español, pero la provincia del mismo nombre permanecía en manos del dominio español. En pocos días, las tropas de la ciudad lograron liberar varios pueblos: Daule, el día:",
            options: ["11 de octubre de 1820", "10 de octubre de 1820", "9 de octubre de 1810", "12 de octubre de 1490"],
            answer: "11 de octubre de 1820"
        },
        {
            question: "La revolución había logrado que la ciudad de Guayaquil quedara libre del dominio español, pero la provincia del mismo nombre permanecía en manos del dominio español. En pocos días, las tropas de la ciudad lograron liberar varios pueblos: Naranjal, el día:",
            options: ["9 de octubre de 1810", "10 de octubre de 1820", "12 de octubre de 1492", "15 de octubre de 1820"],
            answer: "15 de octubre de 1820"
        },
        {
            question: "Histórica batalla con la que el ejército del Gral. Antonio José de Sucre inició su victoriosa campaña por la libertad de nuestra patria. En dicha batalla, librada el 19 de agosto de 1821, las tropas patriotas comandadas por el Gral. José Mires derrotaron a las fuerzas españolas del Crnel. González, que enviadas por Aymerich habían venido desde Quito para tratar de poner fin a la Revolución del 9 de octubre de 1820 con la que Guayaquil había proclamado su independencia. Nos estamos refiriendo a la:",
            options: ["BATALLA DE GUAYAQUIL", "BATALLA DE TARQUI", "BATALLA DE PICHINCHA", "BATALLA DE CONE (YAGUACHI)"],
            answer: "BATALLA DE CONE (YAGUACHI)"
        },
        {
            question: "La batalla que selló la libertad a nuestra patria fue librada entre las tropas realistas del Gral. Melchor Aymerich y las fuerzas patriotas conducidas por el Gral. Antonio José de Sucre. Al amanecer del ……………, en las faldas del Pichincha y teniendo como premio la libertad, la ciudad y el pueblo de Quito fueron emocionados testigos del momento más gloriosos de su historia.",
            options: ["10 de agosto de 1809", "19 de agosto de 1821", "24 de mayo de 1822", "9 de octubre de 1820"],
            answer: "24 de mayo de 1822"
        },
        {
            question: "En el Parte, luego de la batalla, el Gral. Sucre dice: “Los resultados de la jornada han sido la ocupación de la ciudad de Quito y sus fuertes el 25 por la tarde, la posesión y tranquilidad de todo el departamento y la toma de 1.100 prisioneros de tropa, 160 oficiales, 14 piezas de artillería, 1.700 fusiles, fornituras, cornetas, banderas, cajas de guerra y cuantos elementos de guerra poseía el ejército español”. Nos estamos refiriendo a la Batalla del:",
            options: ["19 de agosto de 1821", "9 de octubre de 1820", "10 de agosto de 1809", "24 de mayo de 1822"],
            answer: "24 de mayo de 1822"
        },
        {
            question: "Allá por los años de 1830, circulaba todavía la idea de que el fundamento histórico del Ecuador era el Reino de Quito, por tanto, ni los guayaquileños, ni los cuencanos se sentían a esa altura identificados con ese mítico reino. Aunque el texto de Juan de Velasco que argumentaba sobre la existencia del Reino de Quito ya estaba escrito, sin embargo, no había sido todavía apropiado e interpretado como fundamento histórico. Por esta razón, acudieron a un nombre extraído de los estudios de los ............................................. que habían medido el meridiano de la tierra un siglo atrás, que aludía a un hecho geográfico, importante, pero no específico, puesto que de la línea ecuatorial participan muchos países. A pesar de ello, el nombre encontrado se impuso por su neutralidad.",
            options: ["GEODÉSICOS ALEMANES", "GEODÉSICOS", "GEODÉSICOS FRANCESES", "GEODÉSICOS INGLESES"],
            answer: "GEODÉSICOS FRANCESES"
        },
        {
            question: "Él es una corriente económica y política asociada al capitalismo. Sostiene que la economía se debe regir por el libre comercio, estar desregulada y privatizada, es decir, con MENOR INTERVENCIÓN SOCIAL de las políticas del Estado. Julia Máxima Uriarte, 22 de mayo 2020.",
            options: ["SOCIALISMO", "NEOLIBERALISMO", "CONSERVADORISMO", "COMUNISMO"],
            answer: "NEOLIBERALISMO"
        },
        {
            question: "Teóricamente el ………………………………………… tiende a privilegiar en el corto plazo, al individuo como AGENTE ECONÓMICO AL LIBRE MERCADO, promueve la PRIVATIZACIÓN Y DESCENTRALIZACIÓN DE LAACTIVIDAD ECONÓMICA Y SOCIAL. Niega la presencia de la descomposición social creada por la propia guerra económica del mercado; su conducción ha tenido en el aumento de la pobreza y en el ahondamiento de las diferencias sociales. Badillo Coronado, Vinicio, 11-04-2017.",
            options: ["ENFOQUE NEOLIBERAL Y MONETARISTA", "ENFOQUE COMUNISTA Y LIBERALISTA", "ENFOQUE SOCIALISTA Y DEMOCRÁTICO", "ENFOQUE FINANCIERO Y MONETARISTA"],
            answer: "ENFOQUE NEOLIBERAL Y MONETARISTA"
        },
        {
            question: "Promueve un conjunto de estrategias económicas que tienen impacto social y que generan una gran diferencia de CLASES. Por ejemplo, solo aquellos que tienen acceso a los servicios privados, como la educación, podrán alcanzar un mejor desarrollo profesional. La mayoría de quienes no tienen acceso a ese tipo de servicios, no pueden progresar. Nos estamos refiriendo a:",
            options: ["COMPETENCIA", "DESIGUALDAD", "MONOPOLIO", "LIBRE MERCADO"],
            answer: "DESIGUALDAD"
        },
        {
            question: "Promueve que el poder sea controlado por una minoría elitista que acapara la PRODUCTIVIDAD y la oferta de servicios. Quienes no tienen o no pueden generar dinero, no logran llevar a cabo sus propios negocios, pero sí son necesarios como mano de obra del sistema productivo. Nos estamos refiriendo a:",
            options: ["MONOPOLIO", "COMPETENCIA", "LIBRE MERCADO", "DESIGUALDAD"],
            answer: "MONOPOLIO"
        },
        {
            question: "Promueve el comercio sin fronteras y con pocas restricciones del Estado para comercializar con los diferentes gobiernos. Nos estamos refiriendo a:",
            options: ["MONOPOLIO", "LIBRE MERCADO", "DESIGUALDAD", "COMPETENCIA"],
            answer: "LIBRE MERCADO"
        },
        {
            question: "En 1983, la política económica estuvo orientada a favorecer los INTERESES ECONÓMICOS DE SECTORES PRIVADOS PRIVILEGIADOS, representados por la oligarquía, los mismos que, con el apoyo de los organismos multilaterales de crédito, presionaron al gobierno de ……. para que el Banco Central asumiera las deudas contraídas con la banca externas. Así, la deuda asumida en dólares por el sector privado se transformó en deuda en sucres, mientras que el Estado asumió los compromisos en dólares con el exterior.",
            options: ["OSWALDO HURTADO LARREA", "JAIME ROLDÓS AGUILERA", "JORGE JAMIL MAHUAD WITT", "LUCIO GUTIÉRREZ BORBÚA"],
            answer: "OSWALDO HURTADO LARREA"
        },
        {
            question: "En 1999, durante la presidencia de Jamil Mahuad (1998-2000), se produjo la mayor crisis financiera de la historia del país (Feriado Bancario). Su origen empieza en 1994, con la promulgación de la LEY GENERAL DE INSTITUCIONES DEL SISTEMA FINANCIERO. Impulsada por ……………………………………… y el Fondo Monetario Internacional (FMI), esta ley disminuyó el control del Banco Central y de la SUPERINTENDENCIA DE BANCOS sobre las entidades financieras privadas. El Estado, una vez más, salió al rescate del sector privado, en esta oportunidad haciéndose cargo de 72% de las entidades crediticias a un costo de 4.000 millones de dólares (informe preliminar).",
            options: ["RAFAEL CORREA DELGADO", "ABDALÁ BUCARAM ORTIZ", "SIXTO DURAN BALLEN", "JORGE JAMIL MAHUAD WITT"],
            answer: "SIXTO DURAN BALLEN"
        },
        {
            question: "Doctrina económica, política y social que defiende una organización social en la que no existe la propiedad privada ni la diferencia de clases, y en la que los medios de producción estarían en manos del Estado, que distribuiría los bienes de manera equitativa y según las necesidades. Diccionario, Definiciones de Oxford Lenguajes. Nos estamos refiriendo al:",
            options: ["CONSERVADORISMO", "COMUNISMO", "NEOLIBERALISMO", "SOCIALISMO SIGLO XXI"],
            answer: "COMUNISMO"
        },
        {
            question: "Término usado para definir la ideología de gobiernos y movimientos políticos progresistas que hoy se encuentran gobernando una buena parte de América Latina. Los sectores políticos y “académicos” de la derecha se empeñan en descalificar el término, extrañarse frente a él, pedir explicaciones exactas como si se tratara de la receta de un pastel. Se trata de un proyecto en construcción, que es un planteamiento de la izquierda renovada, la búsqueda de un camino para salir de una realidad de gran desigualdad. Nos estamos refiriendo al:",
            options: ["COMUNISMO", "SOCIALISMO SIGLO XXI", "NEOLIBERALISMO", "CONSERVADORISMO"],
            answer: "SOCIALISMO SIGLO XXI"
        },
        {
            question: "Son aquellos que se puede restaurar por procesos naturales a una velocidad superior a la del consumo por los seres humanos, tenemos: la flora, la fauna, el agua, los alimentos, entre otros; nos estamos refiriendo a los:",
            options: ["Recursos Renovable", "Recursos de fuente Inagotables", "Recursos Económicos", "Recursos no Renovables"],
            answer: "Recursos Renovable"
        },
        {
            question: "Son los que existen en una cantidad concreta y limitada, pertenecen a la tierra y, muchos de ellos, se han formado durante miles de años; aquí encontramos los combustibles fósiles como el petróleo, el carbón, el gas natural además de los metales; nos estamos refiriendo a los:",
            options: ["Recursos de fuente Inagotables", "Recursos Económicos", "Recursos Renovables", "Recursos no Renovables"],
            answer: "Recursos no Renovables"
        },
        {
            question: "La confirmación de la existencia de petróleo crudo en el Ecuador se dio en 1911 con la perforación del primer pozo Ancón 1, por la empresa inglesa Anglo en la …………………………… y más tarde, 56 años después, en 1967, con la perforación del pozo Lago Agrio 1, en la Amazonia, a cargo de la operadora Texaco Gulf.",
            options: ["Golfo de Guayaquil", "General Villamil Playas", "Península de Santa Elena", "Puerto de Balao"],
            answer: "Península de Santa Elena"
        },
        {
            question: "Las tres refinerías que opera la Empresa Pública Petroecuador trabajan al máximo de su capacidad y en la actualidad procesan ............................................., lo que permite tener un abastecimiento seguro y oportuno de combustibles en todo el país.",
            options: ["175 mil barriles de crudo por día", "155 mil barriles de crudo por día", "165 mil barriles de crudo por día", "185 mil barriles de crudo por día"],
            answer: "175 mil barriles de crudo por día"
        },
        {
            question: "La ….............. es la energía que se obtiene del viento. Se trata de un tipo de energía cinética producida por el efecto de las corrientes de aire. Esta energía la podemos convertir en electricidad a través de un generador eléctrico. Es una energía renovable, limpia que no contamina y que ayuda a reemplazar la energía producida a través de los combustibles fósiles.",
            options: ["ENERGÍA SOLAR", "ENERGÍA EÓLICA", "ENERGÍA HIDROELÉCTRICA", "ENERGÍA ELECTROMAGNÉTICA"],
            answer: "ENERGÍA EÓLICA"
        },
        {
            question: "En Ecuador, la energía eólica se está aprovechando en la isla San Cristóbal con una capacidad de 2,4 y en la provincia de Loja, en el cerro Villonaco, con una potencia instalada de 16.5 MW, además está en construcción un proyecto en la isla Baltra con una capacidad de 2.25 MW. Por otra parte, tenemos el Proyecto Eólico …...................., ubicado a 84 Km. al sureste de la ciudad de Cuenca, en el cantón Santa Isabel y Saraguro, tiene una capacidad de generación de al menos 30MW, convirtiéndose en el proyecto de energía eólica más grande del Ecuador.",
            options: ["“Minas de Huascachaca”", "“Minas de Portovelo”", "“Minas de Nambija”", "“Minas de Ponce Enríquez”"],
            answer: "“Minas de Huascachaca”"
        },
        {
            question: "Cuando el agua se acumula en la represa para luego caer desde la altura sobre una turbina hidráulica, haciéndola girar y produciendo electricidad con los generadores eléctricos ubicados en la sala de máquinas. Luego, se eleva su tensión para transportar la energía e incorporarse a la red eléctrica. Ejemplo: “Coca Codo Sinclair”. Nos estamos refiriendo a la Represa Hidroeléctrica de tipo:",
            options: ["EMBALSE", "ALIGERADAS O DE CONTAFUERTES", "GRAVEDAD", "PASADA"],
            answer: "EMBALSE"
        },
        {
            question: "Este tipo de central hidroeléctrica, aprovechan el desnivel natural del río para luego derivar el agua por un canal hasta la central en donde se mueven turbinas que pueden ser de eje vertical (si el río tiene una pendiente pronunciada) u horizontal (si la pendiente es baja), generando energía eléctrica de manera similar a las centrales de embalse. Este tipo de centrales operan de forma continua ya que no tienen capacidad para almacenar el agua. Ejemplo: “Daule Peripa”. Nos referimos a:",
            options: ["EMBALSE", "PASADA", "ALIGERADAS O DE CONTAFUERTES", "GRAVEDAD"],
            answer: "PASADA"
        },
        {
            question: "El producto interior bruto (PIB) es un indicador económico que refleja el valor monetario de todos los....................................................producidos por un país o región en un determinado periodo de tiempo, normalmente un año. Se utiliza para medir la riqueza que genera un país. (Sevilla Arias, Andrés).",
            options: ["Bienes y productos finales", "Bienes y muebles", "Bienes y servicios finales", "Bienes y productos materiales"],
            answer: "Bienes y servicios finales"
        },
        {
            question: "El PIB en el Ecuador durante los últimos 4 años fue en promedio ………………………………… en valores constantes, con un incremento en el 2017 de $1.641,63 millones de dólares, 2,4% más respecto al 2016. En el 2020, la economía del país se vio afectada radicalmente con una disminución de $5.571 millones de dólares (7,8%) respecto al 2019, debido a la aparición del COVID-19, provocando una pandemia a nivel mundial, que no solo fue el inicio de una crisis sanitaria, sino que a su vez generó serios problemas económicos.",
            options: ["$50.253 millones de dólares", "$70.253 millones de dólares", "$80.253 millones de dólares", "$60.253 millones de dólares"],
            answer: "$70.253 millones de dólares"
        },
        {
            question: "Cuando comparamos el producto interior bruto de un trimestre con el trimestre anterior, obtenemos la ………………………, es decir, el CRECIMIENTOECONÓMICO que está experimentando el país.",
            options: ["TASA DE VARIACIÓN INTER – SEMESTRAL", "TASA DE VARIACIÓN INTER – ANUAL", "TASA DE VARIACIÓN INTER – MENSUAL", "TASA DE VARIACIÓN INTER-TRIMESTRAL"],
            answer: "TASA DE VARIACIÓN INTER-TRIMESTRAL"
        },
        {
            question: "Ecuador es el mayor productor y exportador de …………………………… y su presencia internacional va en aumento, con un promedio anual de ventas extranjeras cerca de seis millones de toneladas métricas comercializadas en los diferentes continentes.",
            options: ["Banano del mundo", "Café del mundo", "Camarón del mundo", "Cacao del mundo"],
            answer: "Banano del mundo"
        },
        {
            question: "Ecuador se encuentra entre los principales productores de granos de cacao, ocupa el ………………………………, representa el 7% de la producción mundial total. El continente africano con el 73.3% lidera la producción mundial, seguido por el continente americano con una participación del 16.7% y Asia y Oceanía con el 19%.",
            options: ["Tercer lugar a nivel mundial", "Segundo lugar a nivel mundial", "Cuarto lugar a nivel mundial", "Primer lugar a nivel mundial"],
            answer: "Tercer lugar a nivel mundial"
        },
        {
            question: "Durante el primer trimestre del 2021, las exportaciones pesqueras de Ecuador sumaron $ 417,97 millones, superando en 9,11 % el monto registrado en el primer trimestre del 2020, según cifras de la Cámara Nacional de Pesquería, que además resaltó que más de 100.000 personas trabajan directamente en el sector. Uno de sus productos ícono y más cotizados en el mercado internacional, el atún, convierte al Ecuador en …………………………………, después de Tailandia; el país cuenta con la flota atunera más potente del Pacífico oriental: tiene 116 embarcaciones, con una capacidad de 93.000 toneladas.",
            options: ["El segundo productor en el mundo", "El líder mundial como productor", "El primer productor en el mundo", "El tercer productor en el mundo"],
            answer: "El segundo productor en el mundo"
        },
        {
            question: "Este indicador económico incluye todas las transacciones de productos y servicios, de importación y exportación que tiene un país, con otros países. Por ejemplo: el comercio exterior de México con Estados Unidos incluye las importaciones y exportaciones entre los 2 países. Es su relación comercial desde cerca. Nos referimos a:",
            options: ["COMERCIO EXTERIOR", "COMERCIO INTERIOR", "IMPORTACIONES", "EXPORTACIONES"],
            answer: "COMERCIO EXTERIOR"
        },
        {
            question: "“Es el instrumento para la determinación y gestión de los ingresos y egresos del Estado, e incluye todos los ingresos y egresos del sector público, con excepción de los pertenecientes a la seguridad social, la banca pública, las empresas públicas y los gobiernos autónomos descentralizados.” Nos referimos a:",
            options: ["Presupuesto General del Ministerio de Educación", "Presupuesto General del Ministerio de Turismo", "Presupuesto General del Estado", "Presupuesto General del Ministerio de Salud"],
            answer: "Presupuesto General del Estado"
        },
        {
            question: "Se entiende por ......................... al conjunto de obligaciones pendientes de pago que mantiene el Estado o Sector Público, a una determinada fecha, frente a sus acreedores.",
            options: ["Renegociación de la deuda", "Presupuesto General del Estado", "Deuda Pública", "Deuda por cobrar"],
            answer: "Deuda Pública"
        },
        {
            question: "Educación y salud, entre los servicios que más aportan al PIB, aunque Ecuador ha sido comúnmente visto como un país que depende del SECTOR PRIMARIO, la realidad es que los servicios son el sector que más aporta al Producto Interno Bruto (PIB). En 2018 el SECTOR TERCIARIO o también conocido como de servicios fue el que más pesó en la economía nacional. En total su valor agregado bruto (VAB) representó el ……………………………………………, según cifras del Banco Central (BCE).",
            options: ["70,60% del PIB de Ecuador", "65,60% del PIB de Ecuador", "60,60% del PIB de Ecuador", "75,60% del PIB de Ecuador"],
            answer: "65,60% del PIB de Ecuador"
        },
        {
            question: "Fenómeno multidimensional que incluye factores comerciales, financieros, tecnológicos y macroeconómicos, los cuales tienen distintos efectos sobre la desigualdad en el ingreso entre los hogares dentro un país. Se refiere a:",
            options: ["NEOLIBERALISMO", "GLOBALIZACIÓN", "FONDO MONETARIO INTERNACIONAL", "COMERCIO EXTERIOR"],
            answer: "GLOBALIZACIÓN"
        },
        {
            question: "El termino ……………………… es otra forma de nombrar a la nueva fase de acumulación de capital que se ha caracterizado por el predominio del mercado desregulado, es decir, con una mínima intervención estatal, colocando a ciertos Estados-Nación en una posición de debilidad. Al mismo tiempo, ha favorecido la destrucción de las identidades sociales basadas en la relación asalariada.",
            options: ["GLOBALIZACIÓN", "FONDO MONETARIO INTERNACIONAL", "COMERCIO EXTERIOR", "NEOLIBERALISMO"],
            answer: "GLOBALIZACIÓN"
        },
        {
            question: "La libre circulación de mercancías y capitales ha generado algunos aspectos positivos para la economía global, aunque no siempre se han visto reflejados en la población. Que los mismos productos se puedan consumir en distintos países con las mismas características es uno de los símbolos de la globalización comercial. Se refiere a:",
            options: ["La extensión de la comunicación", "Las oportunidades de negocios", "La desaparición de las fronteras económicas", "El intercambio lingüístico"],
            answer: "La desaparición de las fronteras económicas"
        },
        {
            question: "La aparición de las plataformas en línea que ofrecen series de televisión y que se han convertido en fenómenos culturales globales. Los videojuegos, la música y el cine se han hecho todavía más globales y han servido, sobre todo, para que el inglés se haya convertido en la lengua franca más utilizada en las últimas décadas. En este espacio global, el español también ha ido ganando terreno. Se refiere a:",
            options: ["Las oportunidades de negocios", "La extensión de la comunicación", "La desaparición de las fronteras económicas", "El intercambio lingüístico"],
            answer: "El intercambio lingüístico"
        },
        {
            question: "Entre los problemas que algunos ven al proceso globalizador está una cierta disminución de la soberanía nacional. Como los países están tan interrelacionados en lo económico, social, político y cultural, cualquier desvío de las pautas generales es visto con recelo. Por ejemplo, cuando un grupo de países obliga a otro a adoptar determinadas políticas económicas que van contra la mayoría de su población, será negativo para su sociedad. Nos referimos a:",
            options: ["Pérdida de la identidad nacional", "Concentración del capital en grandes multinacionales", "Intervencionismo extranjero", "Aumento del desempleo"],
            answer: "Intervencionismo extranjero"
        },
        {
            question: "Uno de los aspectos más criticados por los detractores de la globalización económica es la fuga de empresas nacionales a países donde los costes de producción son más bajos. Por un lado, al desaparecer los puestos de trabajo se ha incrementado el paro en los países subdesarrollados y se abarata la mano de obra. Por otro, se han precarizado los empleos y se han perdido derechos que formaban parte del llamado estado del bienestar. Nos referimos a:",
            options: ["Concentración del capital en grandes multinacionales", "Intervencionismo extranjero", "Pérdida de la identidad nacional", "Aumento del desempleo"],
            answer: "Aumento del desempleo"
        },
        {
            question: "La libre circulación de mercancías y capitales ha generado algunos aspectos positivos para la economía global, aunque no siempre se han visto reflejados en la población. Los negociantes cuentan con mayores alternativas para colocar su dinero. Así, lo pueden trasladar de un país a otro en busca de mayor renta. Nos referimos a:",
            options: ["Mayor rentabilidad – inversionistas", "El intercambio lingüístico", "La desaparición de las fronteras económicas", "La extensión de la comunicación"],
            answer: "Mayor rentabilidad – inversionistas"
        },
        {
            question: "Muchas naciones tienen un producto interior bruto más bajo que la cifra de negocio de las grandes compañías, lo que sitúa a sus Estados en una posición de inferioridad. Sobre todo, a aquellos que se encuentran en vías de desarrollo. Es por eso que son muchos quienes ven menos ventajas y más desventajas de la globalización. Nos referimos a:",
            options: ["Intervencionismo extranjero", "Aumento del desempleo", "Pérdida de la identidad nacional", "Concentración del capital en grandes multinacionales"],
            answer: "Concentración del capital en grandes multinacionales"
        },
        {
            question: "La modernización capitalista provoca cambios debido al desarrollo de las fuerzas productivas a través del conocimiento científico y la aplicación de tecnologías y nuevas formas de organización del trabajo. Todo en busca de nuevos mercados y lugares donde abaratar costos para incrementar ganancias. Nos referimos a:",
            options: ["Globalización económica", "Neoliberalismo", "Comercio exterior", "Fondo Monetario Internacional"],
            answer: "Globalización económica"
        },
        {
            question: "Estamos viviendo un mundo caracterizado por diferentes FENÓMENOS CONTRADICTORIOS; por un lado, están los desafíos de cómo enfrentar la globalización económica, la competitividad y la modernización; y por otro lado surgen los retos de cómo encarar la INJUSTICIA, LA DESIGUALDAD Y LA POBREZA. Nos referimos a:",
            options: ["Neoliberalismo", "Comercio exterior", "Globalización económica", "Globalización económica versus desigualdad"],
            answer: "Globalización económica versus desigualdad"
        },
        {
            question: "Los organismos internacionales, particularmente el Fondo Monetario Internacional (FMI), el Banco Mundial (BM) y la Organización Mundial de Comercio (OMC), como las entidades más representativas del ……………………., desempeñan un rol principal en el proceso de globalización. Galo Viteri Díaz, notas sobre Globalización.",
            options: ["SOCIALISMO", "COMUNISMO", "CONSERVADORISMO", "CAPITALISMO"],
            answer: "CAPITALISMO"
        },
        {
            question: "A lo largo de los últimos sesenta años, estos organismos mundiales, han venido adaptándose al cambio de las circunstancias para tratar de cumplir con un éxito más bien modesto las funciones que tenían asignadas. Como su principal inspirador en el orden político internacional, ............., han pasado por épocas de desprestigio y momentos de graves crisis.",
            options: ["La Organización de las Naciones Unidas (ONU)", "El Fondo Monetario Internacional (FMI)", "La Organización Mundial de Comercio", "El Banco Mundial (BM)"],
            answer: "La Organización de las Naciones Unidas (ONU)"
        },
        {
            question: "Si en América Latina se hiciera un concurso de popularidad sobre organismos internacionales es poco probable que …………………………… resultara ganador. ¿La razón? Los controvertidos programas de ajuste estructural de la economía (reducción del déficit fiscal, eliminación de subsidios, devaluación de la moneda, etc.)",
            options: ["La Organización Mundial de Comercio", "El Banco Mundial (BM)", "El Fondo Monetario Internacional (FMI)", "La Organización de las Naciones Unidas (ONU)"],
            answer: "El Fondo Monetario Internacional (FMI)"
        },
        {
            question: "Martín-Aceña, catedrático de la Universidad de Alcalá, quien acaba de publicar un libro sobre los 75 años de la fundación del ................................, señala que muchas de las intervenciones de este organismo generan numerosas protestas debido a la severidad de los ajustes que el organismo pide que apliquen los gobiernos como condición para que puedan recibir sus préstamos.",
            options: ["El Fondo Monetario Internacional (FMI)", "El Banco Mundial (BM)", "La Organización Mundial de Comercio", "La Organización de las Naciones Unidas (ONU)"],
            answer: "El Fondo Monetario Internacional (FMI)"
        },
        {
            question: "La institución otorga préstamos con bajo interés, créditos sin intereses y donaciones a los países en desarrollo que apoyan una amplia gama de inversiones en educación, salud, administración pública, infraestructura, desarrollo del sector privado y financiero, agricultura y gestión ambiental y de recursos naturales. Nos estamos refiriendo a:",
            options: ["El Banco Mundial (BM)", "La Organización Mundial de Comercio", "La Organización de las Naciones Unidas (ONU)", "El Fondo Monetario Internacional (FMI)"],
            answer: "El Banco Mundial (BM)"
        },
        {
            question: "Como aspecto negativo, .................. ha financiado proyectos que provocaron daño ambiental masivo, por ejemplo: La represa Sardar Sarovar en India, que causó el desplazamiento de más de 240.000 personas a sitios de tierras pobres, sin agua potable y sin electricidad.",
            options: ["La Organización Mundial de Comercio", "El Banco Mundial (BM)", "El Fondo Monetario Internacional (FMI)", "La Organización de las Naciones Unidas (ONU)"],
            answer: "El Banco Mundial (BM)"
        },
        {
            question: "En pocas palabras, la ………………………………………………. es la única organización internacional que se ocupa de las normas globales que rigen el comercio entre los países. Su principal función es garantizar que las corrientes comerciales circulen con la máxima fluidez, previsibilidad y libertad posibles.",
            options: ["La Organización Mundial de Comercio", "El Banco Mundial (BM)", "El Fondo Monetario Internacional (FMI)", "La Organización de las Naciones Unidas (ONU)"],
            answer: "La Organización Mundial de Comercio"
        },
        {
            question: "Aunque siempre se alegado que el LIBRE COMERCIO es beneficioso para todos, para los países pobres no es así, ya que estos tienen industrias poca desarrolladas, que se caracterizan por ser poco competitivas, por lo que se les hace sumamente difícil competir en una economía globalizada, afectando especialmente a …................... logrando que éstas en vez de crecer y prosperar, queden en la ruina y terminen desapareciendo.",
            options: ["EMPRESAS TRANSNACIONALES", "ORGANISMOS FINANCIEROS INTERNACIONALES", "PEQUEÑAS Y MEDIANAS EMPRESAS", "MEDIANAS Y GRANDES EMPRESAS"],
            answer: "PEQUEÑAS Y MEDIANAS EMPRESAS"
        },
        {
            question: "Este organismo, es la única institución que puede administrar procedimientos de arbitraje y conciliación de inversiones al amparo de los principales conjuntos de normas en tratados de inversión, contratos y legislación. Ninguna otra institución goza de autoridad para arreglar diferencias relacionadas a inversiones internacionales con gobiernos o estados contratantes. Nos estamos refiriendo a:",
            options: ["El CIADI", "La Organización de las Naciones Unidas (ONU)", "El Banco Mundial (BM)", "El Fondo Monetario Internacional (FMI)"],
            answer: "El CIADI"
        },
        {
            question: "Es una institución del Banco Mundial con sede en Washington, dedicada a arreglar diferencias relacionadas a inversiones internacionales. Nos referimos a:",
            options: ["El Fondo Monetario Internacional (FMI)", "El CIADI", "La Organización de las Naciones Unidas (ONU)", "El Banco Mundial (BM)"],
            answer: "El CIADI"
        },
        {
            question: "En las últimas décadas los países de ………………………………… han experimentado importantes reformas en los sistemas de salud, y a pesar de los esfuerzos y avances positivos en procesos de descentralización y participación en salud, en su mayoría no han logrado los objetivos de disminución de inequidades, mayor eficiencia, y mejora de la calidad de los servicios.",
            options: ["América Latina", "Norte América", "América del sur", "Centro América"],
            answer: "América Latina"
        },
        {
            question: "Un indicador muy importante en el área de la salud es aquella que hace referencia al número y tasa de Médicos que trabajan en los establecimientos de salud por años, según regiones y provincias en el período 2000 - 2016, información relevante cuando tomamos como referencia que la Organización Mundial de la Salud OMS establece una tasa de ………………………………… el mínimo necesario para prestar esencial servicio de salud.",
            options: ["13 médicos por cada 10.000 habitantes", "43 médicos por cada 10.000 habitantes", "33 médicos por cada 10.000 habitantes", "23 médicos por cada 10.000 habitantes"],
            answer: "23 médicos por cada 10.000 habitantes"
        },
        {
            question: "El Gobierno del Presidente ............................................. (2007-2016) propuso transformar el sistema de salud en un “sistema de acceso universal, gratuito y de excelente calidad”, propuesta que puso en marcha desde el inicio de su período mediante la gratuidad progresiva y la declaración de emergencia para mejorar la infraestructura e incrementar el equipamiento, medicinas y recursos humanos en salud.",
            options: ["Alfredo Palacios", "Abdalá Bucaram", "Rafael Correa", "Lucio Gutiérrez"],
            answer: "Rafael Correa"
        },
        {
            question: "En el 2005 se impulsó desde la presidencia de ………………………… el programa de Aseguramiento Universal en Salud (PROAUS) que promovió una política nacional en aseguramiento en salud a través de mecanismos de compra de servicios. El objetivo de PROAUS fue brindar un sistema de aseguramiento que comprendía prestaciones integrales con calidad, eficiencia y equidad, bajo una concepción de protección social y una lógica de aseguramiento público, priorizando a la población que vive en condiciones de extrema pobreza y pobreza.",
            options: ["LUCIO GUTIÉRREZ", "RAFAEL CORREA", "Alfredo Palacios", "ABDALÁ BUCARAM"],
            answer: "Alfredo Palacios"
        },
        {
            question: "En el Ecuador en la última década los procesos de reformas y transformación del sector salud (TSSE) han sido la agenda prioritaria de los gobiernos y ministros de salud. Desde el 2005 al 2007 se impulsó el Aseguramiento Universal en Salud (AUS) que seguía los lineamientos internacionales propuestos por el Banco Mundial. A partir del 2007 se inició el proceso de transformación del sector salud hacia el acceso universal gratuito, y es en el 2008 que la nueva Constitución de la República (3,4) declara a la salud como un derecho humano inalienable y al Estado como garante del .................................................... de la población para la atención y prevención de enfermedades.",
            options: ["Acceso universal pagado", "Acceso por pensionado", "Acceso universal gratuito", "Acceso particular privado"],
            answer: "Acceso universal gratuito"
        },
        {
            question: "La educación debe centrarse en el ser humano y su desarrollo holístico en el marco del respeto a los derechos humanos, al medio ambiente y a la democracia. Por esto se define su carácter de participativa, obligatoria, intercultural, democrática, incluyente, diversa y de calidad. Debe impulsar la equidad de género, la justicia, la solidaridad y la paz; estimulando el sentido crítico, el arte y la cultura física, la iniciativa individual y comunitaria, y el desarrollo de competencias y capacidades para crear y trabajar (art. 27), reconociendo y respetando los derechos de las comunidades, los pueblos y las nacionalidades a una ………………………………………………",
            options: ["Educación cultural", "Educación intercultural bilingüe.", "Educación inclusiva", "Educación ambiental"],
            answer: "Educación intercultural bilingüe."
        },
        {
            question: "La ................. proyecta la necesidad de enseñar la igualdad, su objetivo principal es que todos participen en el proceso de enseñanza – aprendizaje, no solo los educadores y los alumnos, sino también los padres y la comunidad. Se trata de integrar a todos, con igualdad de derechos, al proceso educativo.",
            options: ["Educación intercultural", "Educación ambiental", "Educación inclusiva", "Educación cultural"],
            answer: "Educación inclusiva"
        },
        {
            question: "Históricamente, el sistema educativo ecuatoriano ha mantenido un desarrollo desigual y diferenciado fruto de ……………… y una ineficaz cobertura de servicios públicos en el territorio (SEMPLADES, 2017). En tiempos recientes, se han realizado grandes esfuerzos para revertir esta situación (SEMPLADES, 2017). Entre los avances significativos de los últimos años se pueden mencionar: aumento de cobertura, gratuidad de la enseñanza pública, impulso a la inclusión, crecimiento de tasas de matriculación e incremento del financiamiento, entre otros (SEMPLADES, 2017).",
            options: ["La igualdad y la inclusión social", "La equidad y la inclusión económica", "La igualdad y la inclusión ambiental", "Inequidades socioeconómica"],
            answer: "Inequidades socioeconómica"
        },
        {
            question: "La educación ecuatoriana ha atravesado diversos cambios que deben entenderse como la aplicación progresiva de un nuevo modelo regulatorio, enmarcado en la concepción de que un buen sistema educativo es la mejor garantía para conseguir la ............................. para las futuras generaciones, y es una condición indispensable para el Buen Vivir (Senplades, 2017).",
            options: ["Igualdad y la inclusión social", "Equidad y la inclusión turística", "Igualdad y la inclusión ambiental", "Igualdad y la inclusión económica"],
            answer: "Igualdad y la inclusión social"
        },
        {
            question: "De acuerdo a la Organización para la Cooperación y el Desarrollo Económicos (OCDE), el …………………… es el que más impacto tiene en el crecimiento económico y en la reducción de la pobreza (OECD, 2009). La generación de empleos productivos es clave para fomentar el crecimiento económico, reducir la pobreza e incrementar la cohesión social (OECD, 2014).",
            options: ["Empleo inadecuado", "Empleo adecuado", "Empleo formal", "Empleo informal"],
            answer: "Empleo formal"
        },
        {
            question: "A la inversa, el empleo que engloba a los trabajadores que, aunque reciben un pago por su trabajo, no tienen una relación laboral reconocida y no pueden hacer cumplir sus derechos laborales. Nos referimos a:",
            options: ["El empleo inadecuado", "El empleo formal", "El empleo adecuado", "El empleo informal"],
            answer: "El empleo informal"
        },
        {
            question: "Incluye a los trabajadores que tienen una relación laboral reconocida y que hacen cumplir sus derechos laborales (tales como seguridad social, beneficios no salariales de liquidación o finiquito al término de la relación de trabajo). Nos referimos al:",
            options: ["Empleo adecuado", "Empleo inadecuado", "Empleo informal", "Empleo formal"],
            answer: "Empleo formal"
        },
        {
            question: "Históricamente Ecuador se ha ubicado entre los países con mayor desigualdad en la distribución de la renta en América Latina. La desigualdad, uno de los mayores problemas de la sociedad ecuatoriana, se ha visto influenciada por la inestabilidad política existente en los años 90 e inicios del 2000; especialmente por la aplicación de políticas económicas poco vinculadas al ............................... y a la realidad nacional.",
            options: ["Interés social", "Interés empresarial", "Interés bancario", "Interés particular"],
            answer: "Interés social"
        },
        {
            question: "Es un cálculo que se realiza para determinar el ingreso que recibe, en promedio, cada uno de los habitantes de un país; es decir, en promedio, cuánto es el ingreso que recibe una persona para subsistir. Este cálculo se obtiene dividiendo el ingreso nacional entre la población total de un país. Nos referimos a:",
            options: ["El ingreso por importaciones", "El ingreso per cápita", "El ingreso por las remesas de los migrantes", "El ingreso por exportaciones"],
            answer: "El ingreso per cápita"
        },
        {
            question: "La pobreza tiene muchas dimensiones, pero sus causas son el desempleo, la exclusión social y la alta vulnerabilidad de determinadas poblaciones a los desastres, las enfermedades y otros fenómenos que les impiden ser productivas. Es necesario destacar que existen una serie de factores que acaban generando grandes desigualdades entre los habitantes del planeta. Dicha diferencia deriva, en determinados casos, en que existan personas que no tienen los recursos necesarios para poder cubrir sus ………………………….",
            options: ["Necesidades de autorrealización", "Necesidades de estimación", "Necesidades básicas", "Necesidades de seguridad"],
            answer: "Necesidades básicas"
        },
        {
            question: "Una persona se encuentra en …………………………… cuando tiene al menos una carencia social (en los seis indicadores de rezago educativo, acceso a servicios de salud, acceso a la seguridad social, calidad y espacios de la vivienda, servicios básicos en la vivienda y acceso a la alimentación) y su ingreso económico es mínimo.",
            options: ["Situación de pobreza", "Situación de extrema pobreza", "Situación media alta", "Situación media"],
            answer: "Situación de pobreza"
        },
        {
            question: "Es deber del Estado, la sociedad y la familia, dentro de sus respectivos ámbitos, adoptarlas medidas políticas, administrativas, económicas, legislativas, sociales y jurídicas que sean necesarias para la plena vigencia, ejercicio efectivo, garantía, protección y exigibilidad de la totalidad de los derechos de niños; niñas y adolescentes. El Estado y la sociedad formularán y aplicarán políticas públicas sociales y económicas; y destinarán recursos económicos suficientes, en forma estable, permanente y oportuna. Se refiere al:",
            options: ["Art. 7.- del Código de la niñez y adolescencia", "Art. 8.- del Código de la niñez y adolescencia", "Art. 6.- del Código de la niñez y adolescencia", "Art. 5.- del Código de la niñez y adolescencia"],
            answer: "Art. 8.- del Código de la niñez y adolescencia"
        },
        {
            question: "Todos los niños, niñas y adolescentes son iguales ante la ley y no serán discriminados por causa de su nacimiento, nacionalidad, edad, sexo, etnia; color, origen social, idioma, religión, filiación, opinión política, situación económica, orientación sexual, estado de salud, discapacidad o diversidad cultural o cualquier otra condición propia o de sus progenitores, representantes o familiares. El Estado adoptará las medidas necesarias para eliminar toda forma de discriminación. Se refiere al:",
            options: ["Art. 7.- del Código de la niñez y adolescencia", "Art. 5.- del Código de la niñez y adolescencia", "Art. 8.- del Código de la niñez y adolescencia", "Art. 6.- del Código de la niñez y adolescencia"],
            answer: "Art. 6.- del Código de la niñez y adolescencia"
        },
        {
            question: "Las personas que poseen un pequeño nivel de educación o escolaridad, que sirve para desempeñar distinto papeles y etapas en la vida de un individuo como son el de padre da familia, derechos de ciudadano o miembros de una comunidad (Bujanda y Zuñiga, 2008). Nos referimos a:",
            options: ["ANALFABETO ABSOLUTO", "ANALFABETO TECNOLÓGICO", "ANALFABETO LABORAL", "ANALFABETO FUNCIONAL"],
            answer: "ANALFABETO FUNCIONAL"
        },
        {
            question: "Las últimas cifras del Instituto Nacional de Estadística y Censos (INEC), recogidas a finales de 2021, revelan que, desde 2018, la tasa de analfabetismo en Ecuador no se ha reducido de manera importante. Entre 2018 y 2021, el porcentaje de personas que no sabían leer ni escribir pasó del ……… Esto quiere decir que en el país todavía hay 764.610 analfabetos.",
            options: ["5,5% a 5%.", "4,5% a 4%.", "7,5% a 7%.", "6,5% a 6%."],
            answer: "6,5% a 6%."
        },
        {
            question: "Cuando un individuo no asiste nunca en su vida a un centro educativo y no tiene noción de lo que es leer ni escribir podemos decir que esta persona tiene un grado cero de ser una persona alfabetizada. Un individuo al no tener ninguna clase de educación se vuelve obsoleto para la sociedad al no ser productivo, sin poder proporcionar un desarrollo económico para una sociedad. Nos referimos a:",
            options: ["ANALFABETO ABSOLUTO", "ANALFABETO TECNOLÓGICO", "ANALFABETO FUNCIONAL", "ANALFABETO LABORAL"],
            answer: "ANALFABETO ABSOLUTO"
        },
        {
            question: "Los estudios consultados concuerdan en que es completamente necesario el acompañamiento estatal en esta problemática de la migración. Como se puede ver, la migración es un ......... que causa efectos en varios niveles. La responsabilidad del Estado en garantizar los derechos y deberes de todos los ciudadanos, en el lugar en que se encuentren y en la situación en la que estén, no puede ser evadida.",
            options: ["Problema cultural", "Problema social", "Problema ambiental", "Problema político"],
            answer: "Problema social"
        },
        {
            question: "El proceso migratorio que se registra en el Ecuador a partir del año 2000 se masifica y dispersa en el ámbito nacional, exacerbado a raíz de la crisis financiera de fines de los años noventa (8 de marzo de 1999), cuya causa-entre otras-se originan por el cierre de ................, y por las pérdidas estimadas en alrededor de USD 6.170 millones como efecto del salvataje bancario, de acuerdo al informe del Banco Central del Ecuador (BCE).",
            options: ["17 Bancos Comerciales", "37 Bancos Comerciales", "27 Bancos Comerciales", "07 Bancos Comerciales"],
            answer: "17 Bancos Comerciales"
        },
        {
            question: "El propósito de un Gobierno, con respecto al estudio del ………………………, no es otra cosa, sino la de planificar el desarrollo de las actividades económicas y sociales del decenio próximo, tanto por parte del gobierno central como de los gobiernos seccionales, e indudablemente será también de primordial utilidad para el sector privado que requiere este tipo de información para sus planes de expansión y crecimiento.",
            options: ["POA", "PEA", "PIB", "PAC"],
            answer: "PEA"
        },
        {
            question: "La población económicamente activa de un país es la cantidad de personas que se han integrado al mercado de trabajo. La población activa de un país está compuesta por todos los habitantes en edad laboral (de 15 años en adelante), que o bien trabaja en un empleo remunerado o bien se halla en plena búsqueda de empleo. La sigla de esta definición es:",
            options: ["PEA", "POA", "PIB", "PAC"],
            answer: "PEA"
        },
        {
            question: "La ……………………………………………………, no puede considerarse un área individual de aprendizaje. Necesariamente implica la introducción del paradigma de la sostenibilidad en todas las áreas de conocimiento y en los discursos de enseñanza, desde una mirada integral y transversal, que dé un giro a la estructura y objetivo de la educación desde su concepción (Álvarez y Vega, 2009).",
            options: ["Educación Ambiental para el Desarrollo Sostenible", "Organización Mundial de Comercio", "Declaración Universal de Derechos Humanos", "Organización de la Naciones Unidas"],
            answer: "Educación Ambiental para el Desarrollo Sostenible"
        },
        {
            question: "Establece los parámetros de relación y reproducción social con relación a la naturaleza. Para Bayón (2006), esta debe estar sustentada en la relación del hombre con su medio ambiente, y en dicha relación está implícito el conjunto de estilos, costumbres y condiciones de vida de una sociedad con una identidad propia, basada en tradiciones, valores y conocimientos. Nos referimos a:",
            options: ["Cultura social", "Cultura ambiental", "Cultura de paz", "Cultura política"],
            answer: "Cultura ambiental"
        },
        {
            question: "Ecuador vive un momento crucial que demanda de todos los ciudadanos recuperar principios y valores, detener la violencia que afecta en especial a los sectores vulnerables de la sociedad, impulsar cambios estructurales, incentivar el diálogo como mecanismo idóneo para la solución de conflictos, concretar acuerdos nacionales y allanar el camino hacia una …………………………….",
            options: ["Cultura de paz", "Cultura política", "Cultura ambiental", "Cultura social"],
            answer: "Cultura de paz"
        },
        {
            question: "La Conferencia General de la ……………………, sostiene que la paz no significa solamente ausencia de conflictos armados, y pone de manifiesto que, no hay paz cuando existen flagrantes violaciones de los derechos humanos, puesto que la paz tiene un contenido que es la exigencia de justicia entre las sociedades y el reconocimiento de la igualdad y la dignidad de todos los pueblos y las culturas.",
            options: ["UNESCO", "OEA", "ONU", "OMS"],
            answer: "UNESCO"
        },
        {
            question: "Valor universal, anhelado y necesario en el mundo, no se ha cristalizado y es precaria, debido a las constantes amenazas producto de la violencia, que se da en todos los ámbitos, en los estados, en conflictos armados, en actos terroristas, en los hogares; por el armamentismo y las armas nucleares, por el antagonismo entre los Estados, por las divisiones ideológicas y religiosas, por la injusticia, la represión, la explotación económica y en general, por el menosprecio de la dignidad del hombre. Nos referimos a:",
            options: ["Cultura por la paz", "Cultura social", "Cultura ambiental", "Cultura política"],
            answer: "Cultura por la paz"
        },
        {
            question: "“GARANTIZAR A LAS PERSONAS CON DISCAPACIDAD EL ACCESO EFECTIVO A LA JUSTICIA, SIN DISCRIMINACIÓN Y EN IGUALDAD DE CONDICIONES QUE LOS DEMÁS”. La presente categoría corresponde a una de las 12 políticas de la Agenda Nacional para la Igualdad en Discapacidades. Nos referimos a:",
            options: ["Política 9: Seguridad social", "Política 11: Libre de violencia", "Política 12: Política pública", "Política 10: Legislación y justicia"],
            answer: "Política 10: Legislación y justicia"
        },
        {
            question: "“ASEGURAR EL ACCESO DE LAS PERSONAS CON DISCAPACIDAD AL MEDIO FISICO, A LA COMUNICACIÓN Y LA INFORMACION”. La presente categoría corresponde a una de las 12 políticas de la Agenda Nacional para la Igualdad en Discapacidades. Nos referimos a:",
            options: ["política 7: Accesibilidad", "política 8: turismo", "Política 6: trabajo", "Política 5: Educación"],
            answer: "política 7: Accesibilidad"
        },
        {
            question: "“PROMOVER EL RECONOCIMIENTO DE LOS DERECHOS DE LAS PERSONAS CON DISCAPACIDAD, EL RESPETO A SU DIGNIDAD Y LA DEBIDA VALORACIÓN”. La presente categoría corresponde a una de las 12 políticas de la Agenda Nacional para la Igualdad en Discapacidades. Nos referimos a:",
            options: ["Política 4: Salud", "Política 3: Prevención", "Política 1: Sensibilización", "Política 2: Participación"],
            answer: "Política 1: Sensibilización"
        },
        {
            question: "“FOMENTAR EL EJERCICIO DE LOS DERECHOS SOCIALES, CIVILES Y POLÍTICOS, Y DE LAS LIBERTADES FUNDAMENTALES DE LAS PERSONAS CON DISCAPACIDAD”. La presente categoría corresponde a una de las 12 políticas de la Agenda Nacional para la Igualdad en Discapacidades. Nos referimos a:",
            options: ["Política 2: Participación", "Política 4: Salud", "Política 3: Prevención", "Política 1: Sensibilización"],
            answer: "Política 2: Participación"
        },
        {
            question: "“Todos los seres humanos nacen libres e iguales en dignidad y derechos”, es la primera frase de ...……………………………………………………, adoptada por la Asamblea General de las Naciones Unidas en 1948. Hoy, más de 50 años más tarde, aún existen millones de personas con discapacidad cuyos derechos humanos se encuentran seriamente limitados o totalmente negados.",
            options: ["El Fondo Monetario Internacional", "La Declaración Universal de Derechos Humanos", "La Organización Mundial de Comercio", "La Organización de la Naciones Unidas"],
            answer: "La Declaración Universal de Derechos Humanos"
        },
        {
            question: "El Banco Mundial (2014) define la ………………………… como el “proceso de empoderamiento de personas y grupos para que participen en la sociedad y aprovechen sus oportunidades. Da voz a las personas en las decisiones que influyen en su vida a fin de que puedan gozar de igual acceso a los mercados, los servicios y los espacios políticos, sociales y físicos”.",
            options: ["Equidad de género", "Inclusión social", "Igualdad en discapacidades", "Igualdad de género"],
            answer: "Inclusión social"
        },
        {
            question: "La presente ley será de aplicación y observancia por toda persona natural y jurídica que se encuentre o actúe en el territorio ecuatoriano. Las mujeres ecuatorianas en situación de movilidad humana que se encuentren en el exterior serán sujetos de protección y asistencia de las misiones diplomáticas u oficinas consulares del Ecuador, cualquiera sea su condición migratoria. Nos referimos al:",
            options: ["Artículo 4.- Definiciones: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres", "Artículo 2.- Finalidad: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres", "Artículo 3.- Ámbito: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres", "Artículo 1.- Objeto: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres"],
            answer: "Artículo 3.- Ámbito: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres"
        },
        {
            question: "Esta ley tiene como finalidad prevenir y erradicar la violencia ejercida contra las mujeres mediante la transformación de los patrones socioculturales y estereotipos que naturalizan, reproducen, perpetúan y sostienen la desigualdad entre hombres y mujeres, así como atender, proteger y reparar a las víctimas de violencia. Nos referimos al:",
            options: ["Artículo 2.- Finalidad: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres", "Artículo 4.- Definiciones: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres", "Artículo 1.- Objeto: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres", "Artículo 3.- Ámbito: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres"],
            answer: "Artículo 2.- Finalidad: Ley orgánica integral para prevenir y erradicar la violencia contra las mujeres"
        },
        {
            question: "Se define como “la imparcialidad en el trato que reciben mujeres y hombres de acuerdo con sus necesidades respectivas ya sea con un trato igualitario o con uno diferenciado pero que se considera equivalente en lo que se refiere a los derechos, los beneficios, las obligaciones y las posibilidades”. Nos referimos a:",
            options: ["Igualdad de género", "Equidad de género", "Igualdad en discapacidades", "Inclusión social"],
            answer: "Equidad de género"
        },
        {
            question: "Esta definición nos aclara que se debe tomar muy en cuenta los intereses, las necesidades y las prioridades tanto de las mujeres como de los hombres, reconociéndose la diversidad de los diferentes grupos de mujeres y de hombres. Nos referimos a:",
            options: ["Igualdad en discapacidades", "Inclusión social", "Equidad de género", "Igualdad de género"],
            answer: "Igualdad de género"
        }
    ],
};

let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;
let totalQuestions = 0;
let timer;
let timeLeft = 3600; // 1 hora en segundos
let correctAnswers = 0;
let incorrectAnswers = 0;

document.querySelectorAll('.subjectBox').forEach(box => {
    box.addEventListener('click', function() {
        const subject = this.getAttribute('data-subject');
        startQuiz(subject);
    });
});

document.getElementById('checkAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', showNextQuestion);

function startQuiz(subject) {
    // Define la cantidad de preguntas y puntos según la materia seleccionada
    const questionsCount = subject === 'arte' ? 30 : 20;
    const pointsPerQuestion = subject === 'arte' ? 2 : 1;
    
    // Obtén las preguntas aleatorias
    totalQuestions = questionsCount;
    selectedQuestions = getRandomQuestions(questions[subject], questionsCount);
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    
    // Oculta la selección de materia y muestra el quiz
    document.getElementById('subjectSelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('checkAnswer').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('progressBarContainer').style.display = 'block';
    document.getElementById('timer').style.display = 'block';
    
    startTimer();
    showNextQuestion();
}

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function showNextQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = selectedQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <div class="question">
            <p>${currentQuestionIndex + 1}. ${question.question}</p>
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        </div>
    `;

    document.getElementById('checkAnswer').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'none';

    // Reiniciar la clase de estilo de respuesta en la pregunta anterior
    document.querySelectorAll('.question').forEach(questionDiv => {
        questionDiv.querySelectorAll('label').forEach(label => {
            label.classList.remove('correct', 'incorrect');
        });
    });
    
    // Hacer los inputs seleccionables
    document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]').forEach(input => {
        input.disabled = false;
    });

    // Limpiar la selección previa
    document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]').forEach(input => {
        input.checked = false;
    });

    // Actualizar la barra de progreso
    updateProgressBar();

    currentQuestionIndex++;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question' + (currentQuestionIndex - 1) + '"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        const question = selectedQuestions[currentQuestionIndex - 1];
        const pointsPerQuestion = totalQuestions === 30 ? 2 : 1;
        
        document.querySelectorAll('input[name="question' + (currentQuestionIndex - 1) + '"]').forEach(option => {
            if (option.value === question.answer) {
                option.parentElement.classList.add('correct');
            } else if (option.checked) {
                option.parentElement.classList.add('incorrect');
            }
        });
        
        if (answer === question.answer) {
            score += pointsPerQuestion;
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        
        document.getElementById('checkAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'block';
        document.querySelectorAll('input[name="question' + (currentQuestionIndex - 1) + '"]').forEach(input => {
            input.disabled = true;
        });
    } else {
        alert('Por favor, selecciona una respuesta antes de comprobar.');
    }
}

function endQuiz() {
    document.getElementById('quizContainer').innerHTML = '<p>Quiz terminado!</p>';
    document.getElementById('progressBarContainer').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('score').innerHTML = `
        <p>Tu puntuación es ${score} puntos. (Sobre ${totalQuestions * (totalQuestions === 30 ? 2 : 1)} puntos)</p>
        <p>Respuestas correctas: ${correctAnswers}</p>
        <p>Respuestas incorrectas: ${incorrectAnswers}</p>
    `;
    document.getElementById('score').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('checkAnswer').style.display = 'none';
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timerValue').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        updateProgressBar();
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percentage = ((currentQuestionIndex / selectedQuestions.length) * 100).toFixed(2);
    progressBar.style.width = `${percentage}%`;
}
