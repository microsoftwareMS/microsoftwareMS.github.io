export const RCQuestions = [
    {
        question: "¿Qué aspecto de TCP en su cabecera se encarga del control de flujo?",
        options: [
            "Longitud de cabecera",
            "Puerto de origen",
            "Numero de secuencia",
            "Tamaño de ventana"
        ],
        answer: "Tamaño de ventana"
    },
    {
        question: "Escoja cuál de los siguientes es una dirección pública",
        options: [
            "172.31.34.6",
            "10.45.7.2",
            "192.168.5.1",
            "172.32.56.7"
        ],
        answer: "172.32.56.7"
    },
    {
        question: "MPLS es:",
        options: [
            "Una característica de IP que reduce el ancho de banda de la conexión",
            "Una característica de IP que se orienta a redes de conexión",
            "Una característica de IP que incrementa el tamaño del paquete de datos",
            "Una característica de IP que mejora el rango de direcciones"
        ],
        answer: "Una característica de IP que se orienta a redes de conexión"
    },
    {
        question: "Cuando el servidor va a atender una petición inicia la conexión enviándole al cliente un flag SYN",
        options: ["Verdadero", "Falso"],
        answer: "Falso"
    },
    {
        question: "Si el administrador así lo desea, puede cambiar el número de puerto de un servicio ya conocido por ejemplo un servidor Web",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "En una red de naturaleza no confiable quien se encarga de revisar los errores son los hosts",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "En el algoritmo de la ruta más corta se pueden tener valores negativos",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "El prefijo que identifica a un host en una red con dirección IPv6 es:",
        options: [
            "/48",
            "/128",
            "/64",
            "/32"
        ],
        answer: "/64"
    },
    {
        question: "Cuando se va a liberar una conexión se envía un flag",
        options: [
            "RST",
            "ACK",
            "FIN",
            "SYN"
        ],
        answer: "FIN"
    },
    {
        question: "Localhost en IPv4 es ::1",
        options: ["Verdadero", "Falso"],
        answer: "Falso"
    },
    {
        question: "Uno de los siguientes NO se utiliza como medios de cobre para redes",
        options: [
            "STP",
            "UTP",
            "Coaxial",
            "Fibra óptica"
        ],
        answer: "Fibra óptica"
    },
    {
        question: "Esta capturando información mediante un sniffer o analizador de paquetes, en eso observa que la dirección de destino es FF-FF-FF-FF-FF-FF, por lo tanto, la comunicación que se está generando es un:",
        options: [
            "Broadcast",
            "Unicast",
            "Multicast",
            "Anycast"
        ],
        answer: "Broadcast"
    },
    {
        question: "La dirección IP 1001110000.00010000.11101110.11100000 es de clase",
        options: ["A", "E", "C", "D", "B"],
        answer: "B"
    },
    {//Aqui va de tipo completar escrito//
        question: "Complete: En la codificación ---------- los 0 se representan mediante una transición de voltaje de alto a bajo, y los 1 se representan como una transición de voltaje de bajo a alto",
        type: "text",
        answer: "manchester"
    },
    {
        question: "El encabezado IPv6 consta de 40 octetos",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "La dirección IP 8.8.8.8 es una dirección Publica",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "Existen tres áreas funcionales de los estándares de la capa física, de las que se presentan, escoja la que no corresponde",
        options: ["Codificación", "Componentes físicos", "Señalización", "Protocolos"],
        answer: "Protocolos"
    },
    {//Aqui va de tipo completar escrito//
        question: "¿Cuántos bits posee una dirección MAC?",
        type: "text",
        answer: ["48 bits", "48"],
    },
    {
        question: "El tiempo de vida de un paquete TTL es establecido por",
        options: ["El usuario", "El receptor", "El emisor", "El switch"],
        answer: "El emisor"
    },
    {
        question: "Usted se ha comprado un celular que soporta 5Ghz y desea usar esta señal por su velocidad, se va a comprar un router, para poder usar esa frecuencia el router debe de soportar el estándar:",
        options: ["802.11g", "802.11b", "802.11n"],
        answer: "802.11n"
    },
    {
        question: "¿Qué tipo de conector se utiliza en los cables coaxiales?",
        options: ["SC", "RJ11", "BNC", "RJ45"],
        answer: "BNC"
    },
    {
        question: "Si el administrador así lo desea, puede cambiar el numero de puerto de un servicio ya conocido por ejemplo un servidor Web",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "En el algoritmo de la ruta más corta se pueden tener valores negativos",
        options: ["Verdadero", "Falso"],
        answer: "Falso"
    },
    {
        question: "Microsoft ofrece direcciones Link Local que no se enrutan y que empiezan con:",
        options: ["FE70", "FE80", "FG80", "FF80"],
        answer: "FE80"
    },
    {
        type: "matching",
        question: "Seleccione según los tipos de cable",
        terms: ["Consola:", "Directo:", "Cruzado:"],
        definitions: ["utilizado para interconectar dispositivos similares (por ejemplo, conectar un switch a otro switch o un router a otro router sin necesidad de un dispositivo intermedio).", "cable exclusivo de Cisco utilizado para conectarse al puerto de consola de un router o de un switch.", "por lo general, se utiliza para interconectar un host (como una computadora) con un switch o un switch con un router."],
        answer: {"Consola:": "cable exclusivo de Cisco utilizado para conectarse al puerto de consola de un router o de un switch.", "Directo:": "por lo general, se utiliza para interconectar un host (como una computadora) con un switch o un switch con un router.", "Cruzado:": "utilizado para interconectar dispositivos similares (por ejemplo, conectar un switch a otro switch o un router a otro router sin necesidad de un dispositivo intermedio)."}
    },
    {
        question: "Cada vez que el paquete es procesado por un switch su TTL disminuye en 1",
        options: ["Verdadero", "Falso"],
        answer: "Falso"
    },
    {
        question: "En las primeras instalaciones de ethernet se utilizó el tipo de cable:",
        options: ["STP", "Telefónico", "UTP", "Coaxial"],
        answer: "Coaxial"
    },
    {
        question: "El cambio de numero de vueltas por par de hilos limita el efecto negativo del crosstalk",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "Esta capturando información mediante un sniffer o analizador de paquetes, en eso observa que la dirección de destino 224.0.0.1, por lo tanto, la comunicación que se está generando es un:",
        options: ["Unicast", "Broadcast", "Anycast", "Multicast"],
        answer: "Multicast"
    },
    {
        question: "La capa que se encarga de tomar el paquete IP y prepararlo para transmitirlo a través del medio de comunicación es:",
        options: ["Capa física", "Capa de red", "Capa de enlace de datos", "Capa de transporte"],
        answer: "Capa de enlace de datos"
    },
    {
        question: "¿A que red pertenece la siguiente dirección? 10.45.67.190/19",
        options: ["10.45.67.160", "10.45.64.0", "10.45.32.0", "10.45.64.255"],
        answer: "10.45.64.0"
    },
    {//Aqui va de tipo completar escrito//
        question: "Complete lo siguiente: (escriba en minúsculas) ------------------ se trata de una perturbación causada por los campos eléctricos o magnéticos de una señal de un hilo a la señal de un hilo adyacente.",
        type: "text",
        answer: "crosstalk"
    },
    {
        question: "Un router recibe un paquete con una MTU de 2000 y debe de enviarlo por un medio que solo soporta MTU de 1500, entonces el router:",
        options: ["Almacena el paquete", "Descarta el paquete", "Devuelve el paquete", "Divide el paquete"],
        answer: "Divide el paquete"
    },
    {
        question: "Para utilizar un conector en un cable UTP se utiliza el tipo de conector",
        options: ["RJ-25", "RJ-11", "RJ-45", "RJ-12"],
        answer: "RJ-45"
    },
    {
        type: "matching",
        question: "Ordene los cables según el estándar T568B",
        terms: ["2", "1", "7", "3", "8", "6", "4", "5"],
        definitions: ["Café", "Naranja", "Blanco/verde", "Azul", "Blanco/azul", "Verde", "Blanco/café", "Blanco/naranja"],
        answer: {"2": "Naranja", "1": "Blanco/naranja", "7": "Blanco/café", "3": "Blanco/verde", "8": "Café", "6": "Verde", "4": "Azul", "5": "Blanco/azul"}
    },
    {
        type: "matching",
        question: "Empareje según el tipo de comunicación:",
        terms: ["Half Duplex", "Half Duplex usa", "Full Duplex usa", "Full Duplex"],
        definitions: ["Punto a Punto", "La comunicación es unidireccional", "La comunicación es bidireccional", "CSMA/CD"],
        answer: {"Half Duplex": "La comunicación es unidireccional", "Half Duplex usa": "CSMA/CD", "Full Duplex usa": "Punto a Punto", "Full Duplex": "La comunicación es bidireccional"}
    },
    {
        question: "En una red Ethernet se ha producido una colisión, esto indica que:",
        options: ["Los paquetes son muy pequeños para ser detectados", "Dos equipos enviaron paquetes de forma secuencial", "Dos equipos han transmitido al mismo tiempo", "Ningún equipo ha detectado una señal portadora"],
        answer: "Dos equipos han transmitido al mismo tiempo"
    },
    {
        question: "Su ISP tiene asignada la dirección 178.9.0.0/16, le han solicitado a Ud. dividir la red en 260 subredes ¿Qué mascara debe poner para tal solicitud?",
        options: ["255.255.255.128", "255.255.254.0", "255.255.128.0", "255.255.240.0"],
        answer: "255.255.255.128"
    },
    {
        question: "Cuando se desea enviar un mensaje a todos los equipos de una red LAN se envía un broadcast",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        type: "matching",
        question: "Ordene las capas del modelo OSI",
        terms: ["SESION", "APLICACIÓN", "ENLACE DE DATOS", "FISICA", "PRESENTACIÓN", "TRANSPORTE", "RED"],
        definitions: ["6", "2", "1", "5", "7", "3", "4"],
        answer: {"SESION": "5", "APLICACIÓN": "7", "ENLACE DE DATOS": "2", "FISICA": "1", "PRESENTACIÓN": "6", "TRANSPORTE": "4", "RED": "3"}
    },
    {
        question: "Por rendimiento, todas las conexiones físicas son iguales a la hora de conectarse a una red",
        options: ["Verdadero", "Falso"],
        answer: "Falso"
    },
    {
        question: "En la máscara de red expresada en binario, los números 0 indican:",
        options: ["La porción de Host", "El router por defecto", "La porción de Red", "No indica nada"],
        answer: "La porción de Host"
    },
    {
        question: "La siguiente descripción 'Controla los dispositivos de hardware y los medios que crean la red' se refiere a que capa del modelo TCP/IP",
        options: ["Transporte", "Aplicación", "Internet", "Acceso a la red"],
        answer: "Acceso a la red"
    },
    {
        question: "La dirección 172.31.5.4 es una dirección:",
        options: ["Publica clase B", "Publica clase A", "Privada clase B", "Publica clase C"],
        answer: "Privada clase B"
    },
    {
        type: "multiple-choice",
        question: "Considerando la máscara 255.255.240.0, de las siguientes direcciones que aparecen escoja solo aquellas que sean direcciones de red",
        options: ["192.168.160.0", "172.16.118.0", "10.45.224.0", "145.156.172.0"],
        answer: ["192.168.160.0", "10.45.224.0"]
    },
    {
        question: "Observe el siguiente gráfico e indique que representa lo marcado en verde en la captura de wireshark",
        image: "img/img_RC/ipv4.png",
        options: [
            "Dirección IPv4",
            "Dirección IPv6",
            "Dirección MAC",
            "Número de puerto"
        ],
        answer: "Dirección IPv4",
        type: "imageWithOptions"
    },
    {
        question: "El cable que proporciona una mejor protección contra el ruido es:",
        options: ["UTP", "ATP", "STP"],
        answer: "STP"
    },
    {
        question: "Ud. ubica la siguiente dirección a una PC 179.45.67.95 255.255.255.240, pero le da error, eso se por:",
        options: ["La dirección ya está puesta en otro pc y no se puede usar", "La dirección es pública y solo se pone en servidores", "La dirección es de broadcast y no se puede usar", "La dirección es de red y no se puede usar"],
        answer: "La dirección es de broadcast y no se puede usar"
    },
    {
        question: "Una dirección mac consta de",
        options: ["32 bits", "128 bits", "48 bits", "48 Bytes"],
        answer: "48 bits"
    },
    {
        question: "Un PC va a ser cambiado de ubicación a otra área que se encuentra en otra LAN, cuál de las siguientes opciones es la correcta",
        options: ["La dirección MAC será la misma no importa en qué LAN este el equipo", "La dirección MAC va a cambiar pues la maquina cambio de LAN", "La dirección MAC se asigna de forma dinámica", "La dirección IP será la misma no importa en qué LAN este el equipo"],
        answer: "La dirección MAC será la misma no importa en qué LAN este el equipo"
    },
    {
        type: "matching",
        question: "Ubique las capas del modelo TCP/IP con sus descripciones",
        terms: ["Internet:", "Transporte:", "Aplicación:", "Acceso a la red:"],
        definitions: ["Admite las comunicaciones entre distintos dispositivos.", "Representa datos para el usuario.", "Controla los dispositivos de hardware.", "Determina el mejor camino a través de la red."],
        answer: {"Internet:": "Determina el mejor camino a través de la red.", "Transporte:": "Admite las comunicaciones entre distintos dispositivos.", "Aplicación:": "Representa datos para el usuario.", "Acceso a la red:": "Controla los dispositivos de hardware."}
    },
    {
        question: "Observe el siguiente gráfico e indique que representa lo marcado en verde en la captura de wireshark",
        image: "img/img_RC/ipv6.png",
        options: [
            "Dirección IPv4",
            "Número de puerto",
            "Dirección IPv6",
            "Dirección MAC"
        ],
        answer: "Dirección IPv6",
        type: "imageWithOptions"
    },
    {
        type: "matching",
        question: "Escoja los tipos de señales según el tipo de medio",
        terms: ["Cable de cobre:", "Conexiones inalámbricas:", "Cable de fibra óptica:"],
        definitions: ["Patrones de luz", "Patrones de microondas", "Patrones de pulsos eléctricos"],
        answer: {"Cable de cobre:": "Patrones de pulsos eléctricos", "Conexiones inalámbricas:": "Patrones de microondas", "Cable de fibra óptica:": "Patrones de luz"}
    },
    {
        type: "matching",
        question: "Ordene el proceso por el que pasan los datos",
        terms: ["Capa física:", "Capa de transporte:", "Medios:"],
        definitions: ["Envían señales uno a la vez", "Segmenta los datos del usuario", "Codifica tramas"],
        answer: {"Capa física:": "Codifica tramas", "Capa de transporte:": "Segmenta los datos del usuario", "Medios:": "Envían señales uno a la vez"}
    },
    {
        question: "Ud. desea implementar una red con una velocidad de 1000 Mb/s, para tal motivo su cableado se basará en:",
        options: [
            "Cable categoría 5 UTP", 
            "Cable categoría 6 UTP", 
            "Cable coaxial", 
            "Cable categoría 3 UTP"
        ],
        answer: "Cable categoría 6 UTP"
    },
    {
        question: "En el encabezado de IPv4, el servicio diferenciado determina:",
        options: [
            "El origen del paquete", 
            "La ubicación del paquete", 
            "El tamaño del paquete", 
            "La prioridad del paquete"
        ],
        answer: "La prioridad del paquete"
    },
    {
        question: "El protocolo que asocia una dirección IP con una dirección MAC es:",
        options: [
            "SMTP", 
            "ARP", 
            "HTTP", 
            "DNS"
        ],
        answer: "ARP"
    },
    {
        question: "¿Cuál de las siguientes es una capa que no existe en el modelo OSI?",
        options: [
            "Aplicación", 
            "Red", 
            "Internet", 
            "Transporte"
        ],
        answer: "Internet"
    },
    {
        question: "Las señales de EMI y RFI pueden distorsionar y dañar las señales de datos que transportan los medios de cobre:",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "La subcapa LLC está definida por el estándar IEEE 802.2:",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "La dirección de broadcast de 34.56.23.219/18 es:",
        options: [
            "34.56.255.255", 
            "34.56.63.255", 
            "34.56.128.255", 
            "35.56.0.255"
        ],
        answer: "34.56.63.255"
    },
    {
        question: "Los protocolos de la capa de red especifican el direccionamiento del paquete:",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "Una dirección IPv6 consta de 128 bits:",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        type: "matching",
        question: "Escoja según corresponda",
        terms: ["Bus:", "Anillo:", "Estrella:", "Estrella extendida:"],
        definitions: ["Dispositivos intermediarios centrales interconectan otras topologías en estrella.", "Los dispositivos finales se conectan a un dispositivo intermediario central.", "Todos los sistemas finales se encadenan entre sí y terminan de algún modo en cada extremo.", "Los sistemas finales se conectan a su respectivo vecino."],
        answer: {"Bus:": "Todos los sistemas finales se encadenan entre sí y terminan de algún modo en cada extremo.", "Anillo:": "Los sistemas finales se conectan a su respectivo vecino.", "Estrella:": "Los dispositivos finales se conectan a un dispositivo intermediario central.", "Estrella extendida:": "Dispositivos intermediarios centrales interconectan otras topologías en estrella."}
    },
    {
        question: "¿Cuál es la máxima dirección a la que puede llegar un nodo si otro nodo tiene la dirección 172.56.34.78 255.255.240.0?",
        options: [
            "172.56.48.255", 
            "172.56.47.255", 
            "172.56.48.254", 
            "172.56.47.254"
        ],
        answer: "172.56.47.254"
    },
    {
        question: "Una NIC es una interfaz que conecta un dispositivo a la red.",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "Se ha comprado un router inalámbrico para una subred, por lo general se ubica la primera dirección de la red para el router, Ud. consulta una dirección de un pc y esta tiene la dirección 192.168.34.142/28, entonces Ud. pone al router la dirección 192.168.34.113/28, pero la Pc que tiene no hace ping al router, el problema es:",
        options: [
            "La ip del router es una dirección de broadcast", 
            "La Ip del router no esta en la misma red que la Pc", 
            "La ip del Pc es una dirección de red", 
            "No se puede utilizar una máscara /28 con esa dirección"
        ],
        answer: "La Ip del router no esta en la misma red que la Pc"
    },
    {
        question: "La encapsulación de la capa de red permite transmitir los datos con una sobrecarga máxima:",
        options: ["Verdadero", "Falso"],
        answer: "Falso"
    },
    {
        question: "Un servidor DHCP se encarga de asignar direcciones IP dinámicas:",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "La capa de red agrega un encabezado para que los paquetes puedan enrutarse:",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "La dirección 17.65.191.255 255.255.224.0 es una dirección de:",
        options: ["Red", "Broadcast", "Nodo", "Es una dirección incorrecta"],
        answer: "Broadcast"
    },
    {
        question: "Con un analizador de protocolos ha detectado una dirección FFFF.FFFF.FFFF.FFFF, eso le indica que una computadora de su LAN:",
        options: ["Está fallando", "Ha enviado un Broadcast", "Ha enviado un Multicast", "Ha enviado un Unicast"],
        answer: "Ha enviado un Broadcast"
    },
    {
        question: "Todas las direcciones IP que empiecen con el numero 220 pertenecen a la clase:",
        options: ["D", "A", "E", "C", "B"],
        answer: "C"
    },
    {
        type: "multiple-choice",
        question: "Considerando la máscara /29, de las siguientes direcciones que aparecen escoja solo aquellas que sean direcciones de broadcast",
        options: ["172.43.78.123", "10.45.67.151", "56.23.45.117", "192.168.34.103"],
        answer: ["10.45.67.151", "192.168.34.103"]
    },
    {
        question: "Ip se describe como un protocolo no confiable entonces",
        options: [
            "IP no tiene la capacidad de administrar paquetes no entregados o dañados", 
            "IP es no confiable pero incluye datos de sincronización", 
            "IP no confía en el receptor", 
            "IP no confía en el emisor"
        ],
        answer: "IP no tiene la capacidad de administrar paquetes no entregados o dañados"
    },
    {
        question: "El efecto de anulación de los pares de hilos UTP se da por",
        options: [
            "Su revestimiento", 
            "Su trenzado", 
            "Su longitud", 
            "Sus colores"
        ],
        answer: "Su trenzado"
    },
    {
        question: "Todas aquellas direcciones IP que empiezan en binario con 1111, pertenecen a la clase",
        options: ["B", "A", "E", "D", "C"],
        answer: "E"
    },
    {
        question: "¿Cuál de las siguientes tareas las puede hacer sin Internet?",
        options: [
            "Mirar videos, películas o capítulos de programas de televisión a petición.", 
            "Jugar juegos grabados en la computadora", 
            "Acceder a trabajos curriculares y entregarlos.", 
            "Buscar el camino menos congestionado hacia su destino al observar videos de cámaras Web que muestran el clima y el tráfico"
        ],
        answer: "Jugar juegos grabados en la computadora"
    },
    {
        question: "Para detección de errores cada trama de ethernet contiene un:",
        options: [
            "Dirección de origen", 
            "Dirección de destino", 
            "Encabezado", 
            "Tráiler"
        ],
        answer: "Tráiler"
    },
    {
        question: "El numero en binario 10010001, representa al:",
        options: ["155", "205", "195", "145"],
        answer: "145"
    },
    {
        question: "Según el siguiente gráfico, el paquete",
        image: "img/img_RC/dns.png",
        options: [
            "Sale del PC al servidor",
            "Sale del servidor al PC",
            "Ha sido rechazado por el Router",
            "Está generando un Broadcast"
        ],
        answer: "Sale del PC al servidor",
        type: "imageWithOptions"
    },
    {
        question: "Observe el siguiente gráfico e indique que representa lo marcado en verde en la captura de wireshark",
        image: "img/img_RC/mac.png",
        options: [
            "Dirección MAC",
            "Dirección IPv6",
            "Número de puerto",
            "Dirección IPv4"
        ],
        answer: "Dirección MAC",
        type: "imageWithOptions"
    },
    {
        question: "En su casa busca conectarse de forma inalámbrica a una velocidad cercana a los 600 Mbps, con su celular, entonces una característica a buscar en su celular es que su wifi cumpla con el estándar:",
        options: [
            "802.11g", 
            "802.11a", 
            "802.11b", 
            "802.11n"
        ],
        answer: "802.11n"
    },
    {
        type: "multiple-choice",
        question: "Escoja las responsabilidades de la subcapa MAC (seleccione 2)",
        options: ["Establecimiento se sesiones", "Encaminamiento de paquetes", "Control de acceso al medio", "Encapsulación de datos"],
        answer: ["Control de acceso al medio", "Encapsulación de datos"]
    },
    {
        question: "Una dirección IPv4 consta de 32 Bytes",
        options: [
            "Verdadero",
            "Falso"
        ],
        answer: "Falso"
    },
    {
        question: "El protocolo ARP asocia 2 tipos de direcciones, una dirección MAC y una dirección:",
        options: [
            "Puerto",
            "IP",
            "TCP",
            "URL"
        ],
        answer: "IP"
    },
    {
        question: "Una máscara 255.255.252.0 puede tener:",
        options: [
            "1022 hosts",
            "1000 hosts",
            "1024 hosts",
            "512 hosts"
        ],
        answer: "1022 hosts"
    },
    {
        question: "En la máscara de red expresada en binario, los números 1 indican:",
        options: [
            "La porción de Red",
            "No indica nada",
            "El router por defecto",
            "La porción de Host"
        ],
        answer: "La porción de Red"
    },
    {
        question: "Cuando varios dispositivos comparten una misma dirección IP pública, se dice que estos usan una tecnología:",
        options: [
            "Pat",
            "Isp",
            "Nat",
            "Tcp"
        ],
        answer: "Nat"
    },
    {
        question: "Observe el siguiente gráfico e indique que representa lo marcado en verde en la captura de wireshark",
        image: "img/img_RC/port.png",
        options: [
            "Dirección IPv4",
            "Dirección MAC",
            "Número de puerto",
            "Dirección IPv6"
        ],
        answer: "Número de puerto",
        type: "imageWithOptions"
    },
]