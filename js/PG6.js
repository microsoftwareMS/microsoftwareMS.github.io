export const TCEQuestions = [
    {
        question: 'Al utilizar la interfaz de línea de comandos (CLI) en Cisco Packet Tracer para configurar parámetros específicos de una interfaz de red física o lógica en un router o switch (como asignar una dirección IP, configurar el estado "no shutdown", definir el modo switchport, etc.), es necesario navegar a través de la jerarquía de modos de operación del IOS de Cisco para aplicar estos comandos.<br>Después de haber ingresado al modo EXEC Privilegiado (Privileged EXEC Mode) y estar listo para realizar configuraciones, ¿Cuál es el siguiente modo de configuración principal y el comando típico para acceder al nivel donde se aplican directamente los comandos a una interfaz específica como GigabitEthernet0/1 o Vlan1?',
        options: [
            "El siguiente paso es ingresar directamente al modo de Configuración de Interfaz (Interface Configuration Mode) desde el modo EXEC Privilegiado usando el comando config interface <tipo/número>.",
            "Los comandos específicos de interfaz se aplican directamente desde el modo EXEC Privilegiado sin necesidad de cambiar a otro modo de configuración.",
            "El siguiente paso es ingresar al modo de Configuración Global (Global Configuration Mode) usando el comando configure terminal, y desde este modo, acceder al modo de Configuración de Interfaz (Interface Configuration Mode) utilizando el comando interface <tipo/número>.",
            "El modo requerido es el modo de Configuración de Línea (Line Configuration Mode), al que se accede usando el comando line interface <tipo/número>."
        ],
        answer: "El siguiente paso es ingresar al modo de Configuración Global (Global Configuration Mode) usando el comando configure terminal, y desde este modo, acceder al modo de Configuración de Interfaz (Interface Configuration Mode) utilizando el comando interface <tipo/número>."
    },
    {
        question: 'Anteriormente las empresas tenían redes físicas separadas para diferentes servicios como datos, voz telefónica y video. Esto generaba altos costos y complejidad de gestión. La solución moderna es la "convergencia de redes".<br>¿Cuál es el principio fundamental de una red convergente y su mayor beneficio?',
        options: [
            "Una red convergente solo usa conexiones inalámbricas (Wi-Fi) para todos los servicios, eliminando el cableado.",
            "Una red convergente asigna una dirección IP fija única a cada dispositivo en la red para facilitar su localización.",
            "Una red convergente transporta distintos tipos de tráfico (como datos, voz y video) usando una <strong>única infraestructura de red compartida</strong>, generalmente basada en IP y Ethernet. Esto reduce costos y simplifica la administración al consolidar la red física.",
            "Una red convergente cifra automáticamente todo el tráfico sin necesidad de configuración adicional."
        ],
        answer: "Una red convergente transporta distintos tipos de tráfico (como datos, voz y video) usando una <strong>única infraestructura de red compartida</strong>, generalmente basada en IP y Ethernet. Esto reduce costos y simplifica la administración al consolidar la red física."
    },
    {
        question: "En una red, tanto los switches como los routers son equipos importantes, pero cada uno tiene un trabajo principal diferente basado en cómo mueven el tráfico de datos.<br>¿Cuál es la diferencia fundamental entre la tarea principal de un switch de red  y la de un router?",
        options: [
            "Un switch es el responsable de asignar direcciones IP a los dispositivos de red. Un router es el responsable de crear VLANs y poner puertos en ellas.",
            "Ambos, switch y router, hacen lo mismo: conectan cualquier dispositivo usando su dirección IP, pero el switch es más rápido para redes inalámbricas y el router para redes cableadas.",
            "Un router conecta dispositivos dentro de la misma red local o segmento usando las direcciones MAC. Un switch conecta diferentes redes o segmentos usando las direcciones IP.",
            "Un switch conecta dispositivos dentro de la misma red local o segmento usando las direcciones MAC para decidir a dónde enviar el tráfico. Un router conecta diferentes redes o segmentos usando las direcciones IP para encontrar la mejor ruta para el tráfico."
        ],
        answer: "Un switch conecta dispositivos dentro de la misma red local o segmento usando las direcciones MAC para decidir a dónde enviar el tráfico. Un router conecta diferentes redes o segmentos usando las direcciones IP para encontrar la mejor ruta para el tráfico."
    },
    {
        question: "En los switches Cisco, la VLAN 1 está configurada por defecto cuando el switch sale de fábrica. Esta VLAN tiene un rol particular antes de que se realicen configuraciones personalizadas.<br>¿Cuál describe mejor la función o característica principal de la VLAN 1 por defecto en un switch Cisco?",
        options: [
            "Es la VLAN a la que pertenecen por defecto todos los puertos de acceso del switch, y es la VLAN nativa predeterminada en los enlaces troncales (trunk links), actuando como el dominio de difusión inicial.",
            "Es la única VLAN que se puede usar para la interfaz de administración del switch y no se puede eliminar.",
            "Es una VLAN especial que Cisco reserva únicamente para tráfico de control y nunca para datos de usuario.",
            "Todo el tráfico que viaja por la VLAN 1 debe ir siempre etiquetado (tagged), incluso en puertos de acceso."
        ],
        answer: "Es la VLAN a la que pertenecen por defecto todos los puertos de acceso del switch, y es la VLAN nativa predeterminada en los enlaces troncales (trunk links), actuando como el dominio de difusión inicial."
    },
    {
        question: "En el diseño de redes empresariales, una práctica de seguridad y gestión recomendada es la configuración de una VLAN dedicada, conocida como VLAN de Administración. Esta VLAN se utiliza para transportar específicamente el tráfico de gestión de los dispositivos de red (como switches, routers, puntos de acceso), incluyendo protocolos como SSH, SNMP, Syslog, entre otros.<br>Desde el punto de vista de la seguridad y la eficiencia, ¿Cuál es el beneficio principal de utilizar una VLAN de Administración separada en una red?",
        options: [
            "Aislar el tráfico de administración del tráfico de datos de los usuarios finales. Esto reduce la superficie de ataque, ya que los usuarios en otras VLANs no pueden acceder directamente a las interfaces de gestión de los dispositivos, y permite aplicar políticas de seguridad y listas de control de acceso (ACLs) específicas para el tráfico de gestión.",
            "Permitir que los dispositivos de red descubran automáticamente la configuración de red de otros dispositivos en la misma VLAN sin configuración manual.",
            "Facilitar la implementación de redundancia física en la red, asegurando que haya rutas alternativas disponibles para el tráfico de datos si un enlace principal falla.",
            "Garantizar que el tráfico de administración siempre tenga la máxima prioridad en la red, incluso bajo condiciones de alta congestión de datos, mediante la aplicación automática de Quality of Service (QoS)."
        ],
        answer: "Aislar el tráfico de administración del tráfico de datos de los usuarios finales. Esto reduce la superficie de ataque, ya que los usuarios en otras VLANs no pueden acceder directamente a las interfaces de gestión de los dispositivos, y permite aplicar políticas de seguridad y listas de control de acceso (ACLs) específicas para el tráfico de gestión."
    },
    {
        question: "Cuando un administrador de red realiza cambios en la configuración de un router o switch Cisco utilizando la interfaz de línea de comandos (CLI) y sale del modo de configuración global o de interfaz, estos cambios se aplican inmediatamente y están activos en el dispositivo. Sin embargo, esta configuración activa reside en una memoria volátil.<br>¿Cuál es el término utilizado en Cisco IOS para referirse a esta configuración que está actualmente cargada en la memoria RAM del dispositivo, que está en uso en tiempo real y que se perderá si el dispositivo se reinicia o pierde energía sin haber sido guardada?",
        options: [
            "flash-config. Este término se refiere a un archivo de configuración almacenado en la memoria Flash del dispositivo, utilizado principalmente para la recuperación de contraseñas.",
            "startup-config. Esta es la configuración guardada en la memoria NVRAM del dispositivo que se carga automáticamente durante el proceso de arranque (boot) del equipo.",
            "running-config. Esta es la configuración operativa actual que reside en la RAM del dispositivo y refleja todos los comandos que se han aplicado y están activos en ese momento.",
            "backup-config. Este término se usa para un archivo de configuración guardado manualmente en un servidor externo, como un servidor TFTP, para propósitos de respaldo."
        ],
        answer: "running-config. Esta es la configuración operativa actual que reside en la RAM del dispositivo y refleja todos los comandos que se han aplicado y están activos en ese momento."
    },
    {
        question: 'En una red de campus universitario en crecimiento, la red LAN física original era una sola gran red plana donde todos los dispositivos (estudiantes, profesores, personal administrativo, servidores de biblioteca, etc.) estaban en el mismo segmento de red. Esto ha llevado a problemas de rendimiento debido al exceso de tráfico de difusión (broadcast), riesgos de seguridad porque cualquier dispositivo puede "ver" el tráfico de otros departamentos, y dificultades para aplicar políticas de seguridad y calidad de servicio (QoS) diferenciadas. La dirección de TI ha decidido implementar VLANs como una solución fundamental.<br>Desde una perspectiva conceptual y de diseño de red, ¿Cuál es el principal propósito y el beneficio más significativo de implementar VLANs en esta red, abordando los problemas descritos?',
        options: [
            "Las VLANs convierten el tráfico unicast dentro de la red en tráfico multicast, lo que permite una entrega de datos más rápida y eficiente a múltiples destinos simultáneamente.",
            "Las VLANs actúan como firewalls de Capa 2, cifrando automáticamente todo el tráfico que pasa a través de los switches para proteger los datos sensibles de intercepciones.",
            "Las VLANs segmentan lógicamente una única infraestructura física de red en múltiples dominios de difusión (broadcast domains) más pequeños y aislados. Esto reduce significativamente el tamaño de las tormentas de difusión, mejora el rendimiento general al limitar el tráfico innecesario a segmentos específicos y aumenta la seguridad al aislar el tráfico entre diferentes grupos de usuarios o servicios.",
            "Las VLANs garantizan que cada dispositivo en la red reciba una dirección IP pública única de un rango específico, facilitando el acceso directo desde Internet sin necesidad de NAT (Network Address Translation)."
        ],
        answer: "Las VLANs segmentan lógicamente una única infraestructura física de red en múltiples dominios de difusión (broadcast domains) más pequeños y aislados. Esto reduce significativamente el tamaño de las tormentas de difusión, mejora el rendimiento general al limitar el tráfico innecesario a segmentos específicos y aumenta la seguridad al aislar el tráfico entre diferentes grupos de usuarios o servicios."
    },
    {
        question: "En una red LAN conmutada (switched network) tradicional sin VLANs, todos los dispositivos conectados a los switches forman parte de un único dominio de difusión. Esto significa que un frame de difusión (broadcast frame) enviado por un dispositivo es recibido por todos los demás dispositivos en esa red física. La implementación de VLANs es una técnica fundamental para optimizar y asegurar estas redes.<br>Desde la perspectiva del tráfico de difusión, ¿Cuál es el efecto directo y primordial de configurar múltiples VLANs en una infraestructura de switching?",
        options: [
            "Las VLANs permiten que el tráfico de difusión se propague libremente entre todos los switches de la red, ignorando las fronteras físicas y lógicas, para garantizar que todos los dispositivos reciban toda la información de red.",
            "Las VLANs convierten automáticamente todos los frames de difusión en frames unicast o multicast antes de reenviarlos a través de la red, eliminando así la necesidad de dominios de difusión.",
            "Cada VLAN configurada se convierte en un dominio de difusión independiente y aislado. El tráfico de difusión originado por un dispositivo miembro de una VLAN específica se limita únicamente a los dispositivos dentro de esa misma VLAN y no cruza los límites hacia otras VLANs.",
            "Las VLANs incrementan el tamaño del dominio de difusión general al consolidar múltiples segmentos de red en un único gran segmento lógico."
        ],
        answer: "Cada VLAN configurada se convierte en un dominio de difusión independiente y aislado. El tráfico de difusión originado por un dispositivo miembro de una VLAN específica se limita únicamente a los dispositivos dentro de esa misma VLAN y no cruza los límites hacia otras VLANs."
    },
    {
        question: "Un administrador de red necesita configurar un switch Cisco Catalyst para permitir el acceso remoto por CLI (Command Line Interface) utilizando protocolos como Telnet o SSH. Para esto, es necesario configurar las líneas de Terminal Virtual (VTY), que son las líneas lógicas usadas para conexiones de entrada remotas. La configuración implica definir métodos de autenticación (como contraseñas o usuarios locales) y especificar qué protocolos de transporte remoto están permitidos.<br>Considerando que el administrador ya se encuentra en el modo EXEC Privilegiado del switch (#), ¿Cuál es el comando correcto para ingresar al modo de configuración específico donde se aplican los ajustes a las líneas VTY (por ejemplo, el rango de la primera línea VTY hasta la quinta)?",
        options: [
            "line vty 0 4",
            "configure vty 0 4",
            "terminal vty 0 4",
            "interface vty 0 4"
        ],
        answer: "line vty 0 4"
    },
    {
        question: "En los switches Cisco, el Dynamic Trunking Protocol (DTP) permite que los puertos negocien automáticamente si deben convertirse en puertos de acceso o enlaces troncales (trunk links) con el dispositivo conectado. El comando switchport mode dynamic desirable es una de las opciones de configuración para controlar esta negociación en un puerto específico.<br>Cuando se configura un puerto de switch con el comando switchport mode dynamic desirable, ¿Cuál es el comportamiento principal y esperado de este puerto con respecto a la formación de un enlace troncal?",
        options: [
            "El puerto <strong>activa</strong> la negociación de DTP e intenta <strong>activamente</strong> formar un enlace troncal. Si el puerto vecino está configurado como trunk, dynamic desirable, o dynamic auto, se establecerá un enlace troncal.",
            "El puerto espera <strong>pasivamente</strong> la negociación de DTP. Solo se convertirá en un enlace troncal si el puerto vecino está configurado como trunk o dynamic desirable y lo inicia.",
            "El puerto <strong>desactiva</strong> la negociación de DTP y fuerza al puerto a operar siempre como un puerto de acceso, independientemente de la configuración del dispositivo conectado.",
            "El puerto se convierte en un enlace troncal <strong>permanente</strong> y descarta cualquier paquete DTP recibido, asumiendo que el dispositivo vecino también está configurado estáticamente como trunk."
        ],
        answer: "El puerto <strong>activa</strong> la negociación de DTP e intenta <strong>activamente</strong> formar un enlace troncal. Si el puerto vecino está configurado como trunk, dynamic desirable, o dynamic auto, se establecerá un enlace troncal."
    },
    {
        question: "La VLAN 1 es la configuración de fábrica en los switches Cisco; los puertos están en ella por defecto y es la VLAN nativa en los troncales. Usar esta VLAN para todo en una red real presenta riesgos de seguridad conocidos.<br>Para mejorar la seguridad de la red, ¿Qué se recomienda generalmente hacer con la VLAN 1 en una red profesional?",
        options: [
            "Poner un límite muy bajo en la cantidad de dispositivos que pueden ser asignados a la VLAN 1 para controlar el tráfico de difusión.",
            "Cambiar el número de identificación de la VLAN 1 a otro número, como 99 o 100, para que los atacantes no la conozcan fácilmente.",
            "Deshabilitar completamente el protocolo Spanning Tree Protocol (STP) en la VLAN 1 para evitar bucles de red que la afecten.",
            "No usar la VLAN 1 para datos de usuarios ni para la administración de los equipos. Se deben crear VLANs separadas para esos fines y cambiar la VLAN nativa en los enlaces troncales a una VLAN diferente y sin uso."
        ],
        answer: "No usar la VLAN 1 para datos de usuarios ni para la administración de los equipos. Se deben crear VLANs separadas para esos fines y cambiar la VLAN nativa en los enlaces troncales a una VLAN diferente y sin uso."
    },
    {
        image: "img/img_TCE/image1.png",
        question: "Asumiendo que ya se encuentra en el modo de configuración global (#configure terminal) en el Switch2, ¿cuál es la secuencia correcta de comandos Cisco IOS CLI para configurar el puerto FastEthernet0/1 como un puerto de acceso en la VLAN 10?",
        options: [
            "Ingrese al modo de configuración de la interfaz FastEthernet0/1, configure una dirección IP en el puerto con ip address 192.168.1.1 255.255.255.0, y luego active la interfaz con el comando no shutdown.",
            "Ingrese al modo de configuración de la interfaz con interface FastEthernet0/1, configure el modo de operación del puerto como acceso usando switchport mode access, y luego asigne el puerto a la VLAN 10 con switchport access vlan 10.",
            "Desde el modo de configuración global, use el comando vlan 10 interface FastEthernet0/1 para asignar directamente el puerto a la VLAN deseada sin cambiar al modo de configuración de interfaz.",
            "Utilice el comando vlan database para crear la VLAN 10, luego ingrese al modo de configuración de la interfaz FastEthernet0/1 y configure el puerto como troncal usando switchport mode trunk."
        ],
        answer: "Ingrese al modo de configuración de la interfaz con interface FastEthernet0/1, configure el modo de operación del puerto como acceso usando switchport mode access, y luego asigne el puerto a la VLAN 10 con switchport access vlan 10.",
        type: "imageWithOptions"
    },
    {
        question: "Un administrador de red está configurando un enlace troncal (trunk link) estático entre dos switches Cisco. Para asegurar que el enlace permanezca siempre como troncal y para evitar cualquier potencial problema o vulnerabilidad asociado al Dynamic Trunking Protocol (DTP), el administrador planea usar la siguiente secuencia de comandos en la interfaz del switch conectada al otro switch:<br>Switch(config)# interface <tipo/número><br>Switch(config-if)# switchport mode trunk<br>Switch(config-if)# switchport nonegotiate<br>Considerando esta secuencia de comandos, ¿Cuál es la función específica que cumple el comando switchport nonegotiate cuando se aplica a un puerto ya configurado explícitamente como switchport mode trunk?",
        options: [
            "Deshabilita la negociación del Dynamic Trunking Protocol (DTP) en la interfaz. Esto impide que la interfaz envíe o procese mensajes DTP, forzándola a operar de forma estática como un enlace troncal y eliminando la posibilidad de que DTP altere el modo del puerto.",
            "Configura el puerto para que sea un puerto de acceso y lo asigna a la VLAN nativa del switch. Esto asegura que solo el tráfico sin etiquetar pueda ser enviado o recibido por esta interfaz, bloqueando todo el tráfico etiquetado.",
            "Permite que la interfaz negocie el ancho de banda y el modo dúplex (half o full duplex) con el dispositivo conectado, optimizando así el rendimiento del enlace troncal para el tráfico de múltiples VLANs y protocolos de red.",
            "Define la encapsulación de tramas que se utilizará en el enlace troncal, como 802.1Q o ISL, basándose en la capacidad de hardware de la interfaz y la versión del IOS, preparando el puerto para etiquetar el tráfico de las VLANs."
        ],
        answer: "Deshabilita la negociación del Dynamic Trunking Protocol (DTP) en la interfaz. Esto impide que la interfaz envíe o procese mensajes DTP, forzándola a operar de forma estática como un enlace troncal y eliminando la posibilidad de que DTP altere el modo del puerto."
    },
    {
        question: 'Cuando se conecta un switch que maneja múltiples VLANs a otro switch o dispositivo de red compatible (como un router o servidor virtualizado) a través de un único enlace físico que debe transportar tráfico de todas esas VLANs (un "enlace troncal" o trunk link), es necesario un mecanismo para identificar a qué VLAN pertenece cada frame Ethernet que viaja por dicho enlace.<br>¿Cuál es el estándar ampliamente adoptado que define la forma en que se "etiquetan" los frames Ethernet en estos enlaces troncales para indicar a qué VLAN corresponden, permitiendo así que los switches y dispositivos en el otro extremo del enlace puedan clasificar y procesar el tráfico correctamente dentro de su VLAN asignada?',
        options: [
            "IEEE 802.11. Este estándar define las especificaciones para redes locales inalámbricas (Wi-Fi).",
            "EEE 802.1Q. Este estándar inserta un campo de etiqueta (tag field) en el encabezado Ethernet del frame, el cual contiene el identificador de la VLAN (VLAN ID).",
            "IEEE 802.3. Este estándar define las especificaciones físicas y de enlace de datos para Ethernet cableado.",
            "IEEE 802.1D. Este estándar define el protocolo Spanning Tree Protocol (STP), utilizado para prevenir bucles de red en topologías redundantes."
        ],
        answer: "EEE 802.1Q. Este estándar inserta un campo de etiqueta (tag field) en el encabezado Ethernet del frame, el cual contiene el identificador de la VLAN (VLAN ID)."
    },
    {
        question: "Cuando se configura un puerto en un switch Cisco Catalyst para que actúe como un enlace troncal (trunk link), uno de los comandos esenciales que se utiliza es switchport mode trunk. Este comando se aplica dentro del modo de configuración de interfaz para el puerto específico.<br>¿Cuál es la acción directa que realiza el comando switchport mode trunk en el puerto del switch donde se aplica?",
        options: [
            "Configura el puerto para negociar automáticamente su modo de operación con el dispositivo conectado, pudiendo convertirse en troncal o acceso según lo determine el Dynamic Trunking Protocol (DTP).",
            "Desactiva todas las funciones de seguridad de Capa 2 en el puerto, como el snooping de DHCP o la inspección de ARP dinámica, para optimizar el rendimiento del enlace.",
            "Asigna automáticamente el puerto a la VLAN nativa configurada, bloqueando cualquier tráfico proveniente de o destinado a otras VLANs.",
            "Establece que el puerto operará forzosamente como un enlace troncal, capaz de transportar tráfico para múltiples VLANs, típicamente usando encapsulación 802.1Q para etiquetar los frames."
        ],
        answer: "Establece que el puerto operará forzosamente como un enlace troncal, capaz de transportar tráfico para múltiples VLANs, típicamente usando encapsulación 802.1Q para etiquetar los frames."
    },
    {
        question: "Si la máscara de subred en formato decimal punteado es 255.255.255.252, ¿cuál es la notación CIDR (longitud de prefijo) correspondiente a esta máscara?",
        options: [
            "/30",
            "/29",
            "/31",
            "/28"
        ],
        answer: "/30"
    },
    {
        question: "En una red local de una sucursal conectada a la red corporativa principal a través de una conexión WAN, los dispositivos dentro de la sucursal (PCs, impresoras) necesitan enviar tráfico destinado a recursos ubicados en la red principal o en Internet. ¿Cuál es el dispositivo de red que debe configurarse en la configuración TCP/IP de cada dispositivo de la sucursal para que puedan enviar tráfico fuera de su subred local?",
        options: [
            "Dirección IP local.",
            "Servidor DNS (Domain Name System).",
            "Switch de acceso.",
            "Default Gateway (Puerta de Enlace Predeterminada)."
        ],
        answer: "Default Gateway (Puerta de Enlace Predeterminada)."
    },
    {
        question: "¿Cuál es el objetivo principal de la implementación de CIDR (Classless Inter-Domain Routing) en redes IP modernas?",
        options: [
            "Reemplazar el sistema de clases de red (A, B, C) y permitir el uso más flexible y eficiente del espacio de direcciones IP mediante máscaras de longitud variable.",
            "Simplificar la configuración manual de rutas estáticas en routers pequeños.",
            "Aumentar la seguridad de las redes al requerir autenticación para el enrutamiento entre diferentes clases.",
            "Garantizar que todos los dispositivos de una red utilicen la misma máscara de subred sin importar la topología."
        ],
        answer: "Reemplazar el sistema de clases de red (A, B, C) y permitir el uso más flexible y eficiente del espacio de direcciones IP mediante máscaras de longitud variable."
    },
    {
        question: "¿Cuál es la característica principal del enrutamiento estático en la configuración de redes IP?",
        options: [
            "Los routers aprenden y comparten dinámicamente información sobre las rutas óptimas a través de protocolos de enrutamiento.",
            "La ruta de los paquetes se determina basándose en la carga y la latencia actual de los enlaces de red.",
            "Las rutas hacia otros segmentos de red son configuradas manualmente por el administrador de red y no se actualizan automáticamente en respuesta a cambios en la topología.",
            "Los paquetes se envían simultáneamente a todos los puertos excepto el de origen para encontrar el destino."
        ],
        answer: "Las rutas hacia otros segmentos de red son configuradas manualmente por el administrador de red y no se actualizan automáticamente en respuesta a cambios en la topología."
    },
    {
        question: "Si se le asigna la red IP 192.168.10.0/27 para segmentar una red, ¿cuál es la máscara de subred correspondiente en formato decimal punteado (dotted-decimal) que deberá configurar en los dispositivos de esta subred?",
        options: [
            "255.255.255.240",
            "255.255.255.0",
            "255.255.255.224",
            "255.255.255.252"
        ],
        answer: "255.255.255.224"
    },
    {
        question: "¿Cuál es una característica clave que distingue a los protocolos de enrutamiento Classless (como OSPF o EIGRP) de los protocolos Classful?",
        options: [
            "Utilizan exclusivamente el conteo de saltos como la métrica principal para determinar la mejor ruta.",
            "Envían información de máscara de subred en sus actualizaciones de enrutamiento, lo que permite el uso de VLSM y CIDR.",
            "Se limitan a operar únicamente dentro de redes con una máscara de subred fija y uniforme en todas partes.",
            "Requieren que cada router de la red conozca la máscara de subred por defecto para cada clase de red."
        ],
        answer: "Envían información de máscara de subred en sus actualizaciones de enrutamiento, lo que permite el uso de VLSM y CIDR."
    },
    {
        question: "¿Cual es el principal beneficio habilitado por VLSM (Variable Length Subnet Masking) en el diseno de redes IP?<br>La capacidad de usar máscaras de subred de diferente longitud dentro de la misma red principal clasificada,",
        options: [
            "permitiendo una asignación de direcciones IP más eficiente y granular.",
            "La necesidad de usar la misma máscara de subred para todas las subredes derivadas de una red principal.",
            "Un método para asignar direcciones IP privadas que no son enrutables en Internet.",
            "La posibilidad de enrutar paquetes sin conocer la máscara de subred de destino."
        ],
        answer: "permitiendo una asignación de direcciones IP más eficiente y granular."
    },
    {
        question: "¿Qué ocurre si una ACL no contiene ninguna sentencia de permiso explícita?",
        options: [
            "El tráfico se enruta sin aplicar la ACL.",
            "Todo el tráfico se permite por defecto.",
            "El router muestra un error de configuración.",
            "Todo el tráfico se niega por la regla implícita deny all."
        ],
        answer: "Todo el tráfico se niega por la regla implícita deny all."
    },
    {
        question: "¿Cuál de los siguientes softwares se utiliza comúnmente para el monitoreo y la gestión de redes en tiempo real?",
        options: [
            "Nagios, Zabbix y PRTG Network Monitor, que permiten supervisar dispositivos, servicios y tráfico de red.",
            "Adobe Photoshop, CorelDRAW y GIMP, orientados a la edición y diseño gráfico digital.",
            "AutoCAD, SketchUp y Revit, que se emplean para diseñar estructuras físicas y arquitectónicas.",
            "Visual Studio, NetBeans y Eclipse, usados principalmente en el desarrollo de software y programación."
        ],
        answer: "Nagios, Zabbix y PRTG Network Monitor, que permiten supervisar dispositivos, servicios y tráfico de red."
    },
    {
        question: "¿Qué es una MIB (Management Information Base) en el contexto de SNMP?",
        options: [
            "Un sistema operativo específico para dispositivos Cisco.",
            "Un protocolo para encriptar datos enviados entre dispositivos de red.",
            "Una base de datos jerárquica que define los objetos gestionables en un dispositivo y que el agente ofrece al manager.",
            "Una aplicación para configurar manualmente routers y switches desde una consola local."
        ],
        answer: "Una base de datos jerárquica que define los objetos gestionables en un dispositivo y que el agente ofrece al manager."
    },
    {
        question: "¿Cuál de las siguientes opciones describe una limitación fundamental de los protocolos de enrutamiento Classful (como RIPv1 o IGRP) en comparación con los protocolos Classless modernos?",
        options: [
            "Requieren la configuración manual de todas las rutas en cada router de la red.",
            "Utilizan un algoritmo de estado de enlace para calcular las mejores rutas.",
            "No envían información de máscara de subred en sus actualizaciones de enrutamiento y, por lo tanto, no soportan Variable Length Subnet Masking (VLSM).",
            "Solo pueden enrutar paquetes dentro de la misma red de área local (LAN)."
        ],
        answer: "No envían información de máscara de subred en sus actualizaciones de enrutamiento y, por lo tanto, no soportan Variable Length Subnet Masking (VLSM)."
    },
    {
        question: "En una red de campus universitario que cuenta con subredes IP separadas para administración, laboratorios y residencias estudiantiles, y que necesita permitir la comunicación entre estas subredes y también el acceso a internet, ¿qué dispositivo de red es esencialmente responsable de dirigir los paquetes de datos entre las diferentes subredes y hacia la red externa (internet)?",
        options: [
            "Hub",
            "Switch",
            "Firewall",
            "Router"
        ],
        answer: "Router"
    },
    {
        question: "¿Cuál de las siguientes afirmaciones describe mejor la función principal de un NMS?",
        options: [
            "Monitorear y administrar dispositivos de red desde una interfaz centralizada.",
            "Reemplazar automáticamente hardware defectuoso en la red.",
            "Ejecutar comandos directamente en un router sin requerir autenticación.",
            "Proporcionar conectividad inalámbrica a clientes finales."
        ],
        answer: "Monitorear y administrar dispositivos de red desde una interfaz centralizada."
    },
    {
        question: "¿Cuál de las siguientes acciones forma parte del proceso de Fault Management en una red empresarial?",
        options: [
            "Aplicar políticas de control de acceso basadas en usuarios.",
            "Detectar automáticamente un enlace caído y generar una alerta al administrador.",
            "Configurar manualmente direcciones IP en los switches.",
            "Medir el uso de CPU y memoria en un servidor durante 24 horas."
        ],
        answer: "Detectar automáticamente un enlace caído y generar una alerta al administrador."
    },
    {
        question: "¿Qué describe el modelo FCAPS dentro de la gestión de redes?",
        options: [
            "Un conjunto de herramientas para configurar routers y switches de forma remota.",
            "Una metodología para diseñar la topología física de redes empresariales.",
            "Un protocolo de comunicación para intercambiar datos entre dispositivos de red.",
            "Un marco que organiza la gestión de redes en cinco áreas clave: fallos, configuración, contabilidad, desempeño y seguridad."
        ],
        answer: "Un marco que organiza la gestión de redes en cinco áreas clave: fallos, configuración, contabilidad, desempeño y seguridad."
    },
    {
        question: "¿Cuál de las siguientes funciones corresponde al componente Performance Management del modelo FCAPS?",
        options: [
            "Registrar cambios de configuración realizados en dispositivos.",
            "Monitorear el uso de recursos para garantizar niveles óptimos de servicio.",
            "Realizar auditoría financiera sobre el uso de recursos.",
            "Detectar accesos no autorizados a la red."
        ],
        answer: "Monitorear el uso de recursos para garantizar niveles óptimos de servicio."
    },
    {
        question: "¿En cuál de los siguientes escenarios es más apropiado usar el protocolo SNMP?",
        options: [
            "Para bloquear el acceso a sitios web no autorizados desde la red de la empresa.",
            "Para asignar direcciones IP automáticamente a dispositivos en una red local.",
            "Para monitorear el tráfico, el estado y el rendimiento de routers y switches desde una consola central.",
            "Para cifrar la comunicación entre dos servidores en una red corporativa."
        ],
        answer: "Para monitorear el tráfico, el estado y el rendimiento de routers y switches desde una consola central."
    },
    {
        question: "¿Cuál es el propósito de un OID (Object Identifier) en la gestión mediante SNMP?",
        options: [
            "Identificar de forma única cada objeto o variable dentro de una MIB para su consulta o monitoreo.",
            "Establecer direcciones IP estáticas para los dispositivos en una red.",
            "Definir el tipo de conexión física entre dos dispositivos en la red.",
            "Servir como contraseña para acceder a un dispositivo gestionado."
        ],
        answer: "Identificar de forma única cada objeto o variable dentro de una MIB para su consulta o monitoreo."
    },
    {
        question: "Al configurar una ruta estática utilizando el comando ip route en un router simulado en Packet Tracer, ¿Cuáles son los argumentos esenciales que se deben especificar inmediatamente después del comando para definir hacia dónde enviar el tráfico destinado a una red o host remotos?",
        options: [
            "La dirección IP de origen del router y el tipo de protocolo de enrutamiento (por ejemplo, RIP, OSPF).",
            "El nombre del router local y el tiempo de vida (TTL) de la ruta configurada.",
            "El estado administrativo de la interfaz (shutdown/no shutdown) y el bandwidth del enlace.",
            "La red de destino (o host) y su máscara, junto con la dirección IP del siguiente salto o la interfaz de salida."
        ],
        answer: "La red de destino (o host) y su máscara, junto con la dirección IP del siguiente salto o la interfaz de salida."
    },
    {
        question: "¿Dónde debe aplicarse una ACL estándar para optimizar el filtrado de tráfico?",
        options: [
            "En cualquier interfaz, entrada o salida.",
            "Solo en interfaces seriales.",
            "Lo más cerca del destino del tráfico.",
            "Lo más cerca del origen del tráfico."
        ],
        answer: "Lo más cerca del destino del tráfico."
    },
    {
        question: "¿Cuál de los siguientes beneficios obtiene una empresa al implementar una gestión de red eficiente y bien estructurada?",
        options: [
            "Disminución automática del consumo eléctrico de los equipos de red.",
            "Mayor disponibilidad de servicios y rápida detección de fallos que reducen el tiempo de inactividad.",
            "Reducción de la necesidad de realizar copias de seguridad periódicas.",
            "Eliminación total de amenazas de seguridad en la infraestructura de red."
        ],
        answer: "Mayor disponibilidad de servicios y rápida detección de fallos que reducen el tiempo de inactividad."
    },
    {
        question: "¿Qué función cumple un NMS (Network Management System) en la gestión de redes?",
        options: [
            "Se encarga únicamente de la autenticación de usuarios mediante credenciales.",
            "Proporciona acceso a Internet a través de servicios de un proveedor de red (ISP).",
            "Supervisa, configura y administra dispositivos de red desde una plataforma centralizada.",
            "Realiza exclusivamente copias de seguridad de los archivos compartidos en la red."
        ],
        answer: "Supervisa, configura y administra dispositivos de red desde una plataforma centralizada."
    },
    {
        question: "¿Qué configuración bloquea correctamente tráfico HTTP desde la red 10.0.0.0/24 hacia la red 192.168.1.0/24?",
        options: [
            "access-list 100 deny udp 10.0.0.0 0.0.0.255 192.168.1.0 0.0.0.255 eq 80",
            "access-list 100 deny ip any any",
            "access-list 100 permit tcp any any eq 80",
            "access-list 100 deny tcp 10.0.0.0 0.0.0.255 192.168.1.0 0.0.0.255 eq 80"
        ],
        answer: "access-list 100 deny tcp 10.0.0.0 0.0.0.255 192.168.1.0 0.0.0.255 eq 80"
    },
    {
        question: "¿Cuál de las siguientes sentencias representa correctamente una ACL estándar que bloquea tráfico desde la IP 192.168.10.10?",
        options: [
            "access-list 1 deny 192.168.10.10 0.0.0.0",
            "access-list 10 deny host 192.168.10.10 eq 80",
            "access-list 1 deny 192.168.10.10 255.255.255.255",
            "access-list 101 deny tcp 192.168.10.10 0.0.0.0 any eq 80"
        ],
        answer: "access-list 1 deny 192.168.10.10 0.0.0.0"
    },
    {
        question: "Un administrador de red necesita recopilar información sobre el uso del ancho de banda de varios switches. ¿Cuál de las siguientes opciones representa el uso adecuado de SNMP en esta situación?",
        options: [
            "Utilizar SNMP para encriptar todo el tráfico de red entre usuarios finales.",
            "Usar SNMP para asignar direcciones IP dinámicas a los hosts de la red.",
            "Configurar los switches para que respondan a consultas SNMP desde un servidor de monitoreo.",
            "Implementar SNMP para establecer túneles VPN entre routers remotos."
        ],
        answer: "Configurar los switches para que respondan a consultas SNMP desde un servidor de monitoreo."
    },
    {
        question: "¿Cuál es el comando correcto para aplicar la ACL número 101 en la dirección de entrada de la interfaz GigabitEthernet0/1?",
        options: [
            "ip access-group 101 in",
            "interface GigabitEthernet0/1 access-group 101 in",
            "access-list 101 in",
            "apply access-list 101 on GigabitEthernet0/1 in"
        ],
        answer: "ip access-group 101 in"
    },
    {
        question: "¿Cuál es el propósito principal de la gestión de redes en una infraestructura de comunicaciones?",
        options: [
            "Diseñar redes inalámbricas rápidas para mejorar la conectividad.",
            "Supervisar el tráfico de red para evitar posibles ciberataques.",
            "Administrar, monitorear, mantener y optimizar el rendimiento de la red.",
            "Instalar dispositivos físicos para ampliar la cobertura de red."
        ],
        answer: "Administrar, monitorear, mantener y optimizar el rendimiento de la red."
    },
    {
        question: "¿Cuál de las siguientes afirmaciones sobre el protocolo SNMP es correcta?",
        options: [
            "Es un protocolo de capa de red que emplea TCP para enviar comandos de configuración a routers.",
            "Es un protocolo que forma parte de OSI pero no se relaciona con el conjunto TCP/IP.",
            "Es un estándar de capa física utilizado para la transmisión de datos entre switches y hubs.",
            "Es un protocolo de capa de aplicación que usa UDP para facilitar la gestión de dispositivos de red mediante los puertos 161 y 162."
        ],
        answer: "Es un protocolo de capa de aplicación que usa UDP para facilitar la gestión de dispositivos de red mediante los puertos 161 y 162."
    },
    {
        question: "¿Cuál es el principal beneficio habilitado por VLSM (Variable Length Subnet Masking) en el diseño de redes IP?",
        options: [
            "La capacidad de usar máscaras de subred de diferente longitud dentro de la misma red principal, permitiendo una asignación de direcciones IP más eficiente y granular.",
            "La necesidad de usar la misma máscara de subred para todas las subredes derivadas de una red principal.",
            "Un método para asignar direcciones IP privadas que no son enrutables en Internet.",
            "La posibilidad de enrutar paquetes sin conocer la máscara de subred de destino."
        ],
        answer: "La capacidad de usar máscaras de subred de diferente longitud dentro de la misma red principal, permitiendo una asignación de direcciones IP más eficiente y granular."
    },
    {
        question: "¿Cuál es una diferencia importante entre las versiones de SNMP (v1, v2c y v3)?",
        options: [
            "SNMPv2c elimina el uso de agentes y solo funciona con gestores.",
            "SNMPv3 es incompatible con los protocolos TCP/IP y funciona solo con protocolos propietarios.",
            "SNMPv1 fue diseñado exclusivamente para redes inalámbricas, mientras que v2c es para redes cableadas.",
            "SNMPv3 incluye mejoras de seguridad como autenticación y cifrado, a diferencia de las versiones anteriores."
        ],
        answer: "SNMPv3 incluye mejoras de seguridad como autenticación y cifrado, a diferencia de las versiones anteriores."
    },
    {
        question: "¿Cuál es una función clave de un SNMP Agent en un dispositivo gestionado?",
        options: [
            "Establecer túneles VPN entre dispositivos gestionados para comunicaciones seguras.",
            "Dirigir el tráfico de red hacia los puertos con mayor rendimiento disponible.",
            "Proveer acceso remoto cifrado para la configuración manual de dispositivos.",
            "Ejecutar localmente una base de datos MIB y responder o notificar eventos al manager según variables de gestión."
        ],
        answer: "Ejecutar localmente una base de datos MIB y responder o notificar eventos al manager según variables de gestión."
    }
];

TCEQuestions.forEach((question, index) => {
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


