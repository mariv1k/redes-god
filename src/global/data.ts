import { QuestionData } from "./types";

const questionsData: QuestionData[] = [
  {
    id: 1,
    title: "El empleo de la DIFUSIÓN en una red LAN permite:",
    choices: [
      "El envío de información a todas las estaciones de la red transmitiendo un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo un paquete.",
      "El envío de información a una sola estación de la red transmitiendo más de un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo más de un paquete.",
    ],
    solution: "b",
    explanation: "Además de identificar a un computador individual, el protocolo IP puede asignar una dirección que haga referencia a un conjunto de máquinas con las direcciones de multidifusión. La convención para estas direcciones en IPv4 especifica el uso de las clase D (1110...). La dirección MAC tiene como bit más significativo un 1. Al encaminar un paquete de multidifusión, el encaminador deberá relacionar la dirección con los miembros de ese grupo.",
  },
  {
    id: 2,
    title: "La tecnología de difusión no es apropiada para redes WAN ya que:",
    choices: [
      "Los errores en los medios de difusión son muy frecuentes.",
      "El encaminamiento en una red de difusión es más lento que en una WAN punto a punto.",
      "Las redes de difusión emplean velocidades de transmisión muy reducidas.",
      "El elevado número de equipos que interconecta provocaría un estado de colisión permanente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 3,
    title:
      "El empleo de datagramas en una red de conmutación de paquetes se caracteriza por:",
    choices: [
      "En las redes de conmutación de paquetes no se emplean datagramas, se establecen circuitos físicos.",
      "Especificar en cada paquete los nodos intermedios que debe atravesar para alcanzar su destino.",
      "Determinar un camino a través de los nodos de la red para que los paquetes alcancen su destino.",
      "Especificar en cada paquete el origen y el destino para que los nodos intermedios determinen un camino en la red para cada paquete transmitido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 4,
    title:
      "Si en una red de conmutación de paquetes basada en datagramas un nodo deja de funcionar es cierto que:",
    choices: [
      "Sólo los paquetes en tránsito en el nodo no alcanzarán su destino.",
      "Todos los paquetes que hayan pasado por ese nodo han de ser reenviados.",
      "Todas las estaciones de la red quedan incomunicadas.",
      "Las estaciones que emplean ese nodo para intercambiar paquetes han de determinar una nueva ruta para sus destinos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 5,
    title:
      "La transmisión de una señal de información a todas las estaciones de una red de comunicaciones es posible en las redes de tipo:",
    choices: [
      "Punto a punto.",
      "Difusión.",
      "Monodifusión.",
      "Conmutación de paquetes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 6,
    title: "Las redes de conmutación de paquetes se caracterizan por:",
    choices: [
      "Establecer circuitos físicos de comunicación extremo a extremo para los paquetes de información.",
      "Difundir información a todos las estaciones de la red de comunicaciones con la transmisión de un sólo paquete de información.",
      "Existir un único camino físico entre cualquier par de estaciones de la red punto a punto.",
      "Presentar congestión ante un elevado volumen de tráfico de paquetes en la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 7,
    title: "Las redes de difusión de caracterizan por:",
    choices: [
      "Presentar colisiones en la transmisión simultánea de varios equipos de la red.",
      "Encaminar paquetes entre diferentes equipos de la red para alcanzar un destino determinado.",
      "Necesitar múltiples transmisiones de un mismo paquete para ser enviado a todos los equipos de la red.",
      "Permitir tolerancia a fallos al disponer de varios medios de comunicación para interconectar los equipos de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 8,
    title:
      "En qué tipo de redes de comunicaciones NO es necesario el proceso de encaminamiento en la comunicación entre cualesquiera dos equipos?",
    choices: [
      "Redes de difusión.",
      "Redes punto a punto.",
      "Redes de conmutación de paquetes con datagramas.",
      "Redes de conmutación de paquetes con circuitos virtuales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 9,
    title:
      "Si en una red de datagramas es necesario el envío de UN paquete de información a TODOS los equipos existentes en la red, es cierto que:",
    choices: [
      "Es suficiente con la transmisión del paquete en el medio físico compartido.",
      "Es suficiente con la transmisión del paquete en el medio físico del equipo que lo transmite.",
      "Es necesaria la transmisión del paquete en todos los medios físicos de la red de datagramas.",
      "Es necesario que el equipo emisor transmita el paquete de información tantas veces como equipos existen en la red de datagramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 10,
    title:
      "Si en una red de difusión un equipo en la red deja de funcionar es cierto que:",
    choices: [
      "No afecta a la comunicación entre los demás equipos de la red.",
      "Los equipos más cercanos al que ha dejado de funcionar no pueden intercambiar información.",
      "Los equipos más alejados del que ha dejado de funcionar no pueden intercambiar información.",
      "Ningún equipo de la red podrá transmitir o recibir información.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 11,
    title:
      "La tecnología de difusión se diferencia de la tecnología punto a punto en:",
    choices: [
      "En la tecnología de difusión es necesario el encaminamiento de información entre nodos intermedios.",
      "En la tecnología de difusión, todas las estaciones pueden transmitir una señal física a cualquier estación de la red.",
      "En la tecnología punto a punto es posible enviar un paquete de información a todas las estaciones de la red con una sola transmisión en un medio físico.",
      "En la tecnología punto a punto la conectividad física entre todas las estaciones de la red precisa de un coste de cableado menor que en la tecnología de difusión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 12,
    title:
      "Un circuito virtual en una red de conmutación de paquetes se caracteriza por:",
    choices: [
      "Establecer un camino entre estaciones dentro de un medio físico de difusión.",
      "Establecer un camino entre estaciones a través de varios medios físicos y nodos intermedios.",
      "Establecer un camino diferente para cada paquete transmitido por una estación a un mismo destino.",
      "No realizar establecimiento ni liberación del circuito en redes con tecnología punto a punto.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 13,
    title: "La multidifusión en una red de comunicaciones permite:",
    choices: [
      "Identificar un conjunto de equipos dentro de una red de difusión con una dirección única.",
      "Agrupar varias direcciones físicas de equipos en una sola dirección física.",
      "Transmitir un paquete de información para cada estación de un grupo de multidifusión.",
      "Transmitir un paquete de información a TODAS las estaciones de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 14,
    title: "En relación con los tipos de red...",
    choices: [
      "Una red con topología en estrella no es el mejor ejemplo de medio de difusión.",
      "Una red en BUS suele ser de titularidad pública.",
      "La red de Ethernet es un ejemplo de red punto a punto.",
      "La unión de redes LAN no puede formar redes WAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 15,
    title:
      "En relación con la tecnología de transmisión empleada en las redes de computadores...",
    choices: [
      "En las redes de difusión no se permite el uso de mensajes de broadcast.",
      "En las redes punto a punto no se pueden emplear mensajes de multicast.",
      "Los mensajes multicast llegan a todas las máquinas de una red.",
      "Ninguna de las anteriores es correcta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 16,
    title: "Una de las características principales de una red LAN es que:",
    choices: [
      "Emplea tecnología de difusión y son de titularidad pública.",
      "La velocidad generalmente es alta en anillo pero baja en BUS.",
      "Emplea medio compartido por todas las estaciones.",
      "Su topología no puede ser punto a punto, que está reservada a las WAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 17,
    title:
      "Una empresa con oficinas en Madrid, Berlín y Moscú tendrá sus sedes conectadas a través de:",
    choices: ["LAN.", "WAN.", "MAN.", "Ethernet."],
    solution: "",
    explanation: "",
  },
  {
    id: 18,
    title:
      "Atendiendo al tipo de redes y topologías vistas en clase, ES FALSO que:",
    choices: [
      "Una red con topología en BUS permita enviar mensajes MULTICAST.",
      "Una red en estralla emplea un concentrador o nodo central que canaliza el tráfico de datos.",
      "Una red en BUS nunca empleará Ethernet como método de acceso al medio.",
      "Una red en árbol es un ejemplo de red punto a punto.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 19,
    title: "En relación con los tipos de red...",
    choices: [
      "Una red con topología en estrella es el mejor ejemplo de medio de difusión.",
      "Una red en BUS suele ser de titularidad privada.",
      "Una red en anillo no puede ser un ejemplo de red de difusión.",
      "Todas las redes punto a punto son de titularidad pública.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 20,
    title: "En el encaminamiento o conmutación, podemos decir que:",
    choices: [
      "El datagrama ofrecerá un servicio orientado a conexión.",
      "La comnutación de circuitos se diseña para tráfico de datos.",
      "En la conmutación de paquetes no podemos elegir entre datagramas y circuitos virtuales.",
      "En circuitos virtuales los datos se transmiten en unidades discretas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 21,
    title: "En una red Token Ring 802.4, la estación monitora:",
    choices: [
      "Genera una trama testigo cada cierto tiempo para que los equipos puedan enviar datos.",
      "Elimina las tramas perdidas por el anillo cuando no lo hace la propia estación emisora.",
      "Marca el bit M de la trama testigo, pero no de las tramas de datos.",
      "Vigila y gestiona la inclusión de nuevas estaciones al anillo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 22,
    title: "Una red punto a punto...",
    choices: [
      "Es una red cuya tecnología de transmisión emplea un enlace directo entre dos dispositivos.",
      "Es una red cuyo nivel fisico se estructura en una topología de bus.",
      "Es una red en la que los dispositivos emplean protocolo ETHERNET de nivel de enlace.",
      "Es una red de conmutación de circuitos con la propiedad de envío de tramas broadcast.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 23,
    title: "Una red con topología en anillo...",
    choices: [
      "Especifica sus protocolos y arquitectura en el estándar IEEE 802.5.",
      "Se emplea, generalmente, más en la construcción de redes WAN que en la de redes MAN.",
      "Es más eficiente que una topología en bus cuando se emplea en redes LAN grandes.",
      "Emplea conexiones punto a punto a nivel de enlace, de ahí que el coste de su implantación sea menos elevado que en una topología en bus.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 24,
    title: "Las redes de área extendida (WAN):",
    choices: [
      "Suelen disponer de un medio con mucho mayor ancho de banda que la suma de las redes de área local que interconectan.",
      "Están formadas por enlaces de difusión con una topología en bus normalmente.",
      "Se crean ampliando en como mucho 25 nuevos equipos una red de área local.",
      "Pueden ser públicas y privadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 25,
    title:
      "Respecto a las redes de área local 802.3 definidas por el IEEE, es FALSO que:",
    choices: [
      "Emplean la técnica CSMA/CD para el control de acceso al medio.",
      "Utilizan un control de acceso al medio con escucha, con detección de colisión.",
      "Conforman una red con buen rendimiento para bajo tráfico.",
      "Un equipo puede enviar dos tramas seguidas sin tiempo de espera.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 26,
    title:
      "De acuerdo con la técnica de compartición del medio empleada en algunas redes LA se puede afirmar que:",
    choices: [
      "Una red en anillo IEEE 802.5 emplea un método de selección distribuida.",
      "Una red Ethernet IEEE 802.3 emplea el método ALOHA ranurado.",
      "Una red wifi IEE 802.11 emplea un método de reserva centralizada.",
      "Una red óptica FDDI emplea el método CSMA persistente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 27,
    title:
      "En una red de conmutación de circuitos que une dos equipos terminales es FALSO que:",
    choices: [
      "Se requiera de funciones de establecimiento, transferencia y desconexión o liberación del circuito.",
      "Se emplee caminos físicos fijos entre origen y destino.",
      "No haya desaprovechamiento de canales de comunicación cuando no hay transmisión de información.",
      "Se empleen en comunicaciones full-duplex cuando se implementen en aplicaciones de telefonia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 28,
    title:
      "Una comunicación a través de circuitos virtuales se caracteriza porque:",
    choices: [
      "Los paquetes de datos que se transmiten pueden no llegar a su destino en el mismo orden que se transmiten desde el origen.",
      "Los paquetes contienen un identificador que identifica el circuito virtual y no se requieren direcciones origen y destino que distingan los extremos de la comunicación.",
      "Proporciona servicios no orientados a conexión.",
      "Siempre necesitan de protocolos de encaminamiento dinámico o adaptativo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 29,
    title:
      "Ante un posible fallo en un equipo cualquiera de una red de computadores, el resto de equipos de la red pueden comunicarse entre sí en:",
    choices: [
      "Una topología en árbol.",
      "Una topología en bus.",
      "Una topología en estrella.",
      "Una topología en punto a punto.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 30,
    title:
      "Cuando en el nivel n de una arquitectura de red es necesaria la fragmentación para enviar información a la capa par, es cierto que:",
    choices: [
      "En cada fragmento se incorpora la cabecera del protocolo de nivel n-1.",
      "Sólo en el último fragmento se incorpora la cabecera del protocolo de nivel n.",
      "Sólo en el primer fragmento se incorpora la cabecera del protocolo de nivel n.",
      "Sólo en el primer fragmento se incorpora la cabecera del protocolo de nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 31,
    title:
      "La comunicación entre las capas pares de nivel n de una arquitectura se inicia:",
    choices: [
      "Cuando en un extremo la capa n solicita al nivel inferior n-1 un envío de datos.",
      "Cuando en un extremo la capa n+1 solicita a la capa inferior n un envío de datos.",
      "Cuando en un extremo la capa n+1 solicita a la capa inferior n-1 un envío de datos.",
      "Cuando en un extremo la capa n solicita a la capa par n-1 un envío de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 32,
    title:
      "La comunicación vertical en una arquitectura de red se caracteriza porque:",
    choices: [
      "Se establece entre las capas pares de nivel físico.",
      "Se establece entre la capa n y la capa par n en el otro extremo.",
      "Se establece entre la capa n+1 y la capa n-1 adyacentes de la arquitectura.",
      "Se establece entre la capa n y la capa n-1 adyacentes de la arquitectura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 33,
    title:
      "La comunicación horizontal REAL en una arquitectura red se produce:",
    choices: [
      "Entre las capas pares de todos los niveles de la arquitectura de red.",
      "Entre las capas pares del nivel más bajo de la arquitectura de red.",
      "Entre las capas pares del nivel más alto de la arquitectura de red.",
      "Entre las capas adyacentes de todos los niveles de la arquitectura de red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 34,
    title: "La solicitud de un servicio de la capa n a la capa n-1 provoca:",
    choices: [
      "La comunicación entre las capas pares del nivel n.",
      "La comunicación entre las capas pares del nivel n-1.",
      "La comunicación entre la capa n y la capa par n-1.",
      "La comunicación entre las capas adyacentes n+1 y n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 35,
    title:
      "Si en una arquitectura de red, la capa n no detecta un error en la transmisión de un paquete a la capa par del otro extremo, es cierto que:",
    choices: [
      "El error debe intentar detectarlo la capa par n.",
      "El error debe intentar detectarlo la capa par n+1.",
      "El error debe intentar detectarlo la capa adyacente n+1.",
      "El error debe intentar detectarlo la capa adyacente n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 36,
    title:
      "El dispositivo de interconexión entre dos redes que trabaja a nivel físico se denomina:",
    choices: ["Repetidor.", "Puente.", "Router.", "Pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 37,
    title:
      "La interconexión de dos redes Ethernet conectadas a través de una WAN con arquitectura TCP/IP, ha de realizarse con:",
    choices: ["Un repetidor.", "Un puente.", "Un router.", "Una pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 38,
    title:
      "La comunicación horizontal en una arquitectura de red se caracteriza porque,",
    choices: [
      "Se establece entre las capas que son adyacentes en la arquitectura.",
      "Se establece entre la capa n y la capa par n-1 de la arquitectura.",
      "Se establece entre las capas pares de la arquitectura.",
      "Se establece entre las capas n+1 y n-1 de la arquitectura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 39,
    title: "Sobre el funcionamiento de una arquitectura de red es cierto que:",
    choices: [
      "El número de niveles está asociado al número de equipos que existen en la red de comunicaciones.",
      "Las capas de diferentes niveles en la arquitectura establecen comunicaciones a nivel horizontal.",
      "Las capas pares de la arquitectura establecen comunicaciones a nivel vertical.",
      "La comunicación entre las capas pares del nivel 1 siempre es horizontal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 40,
    title:
      "Si la capa n de una arquitectura de red recibe dos paquetes de la capa inferior n-1, es cierto que:",
    choices: [
      "En la cabecera del protocolo de nivel n se indica si los paquetes son fragmentos para unir.",
      "En la cabecera del protocolo de nivel n-1 se indica si los paquetes son fragmentos a unir.",
      "Si uno de los paquetes no incorpora la cabecera del protocolo n-1, serán dos fragmentos a unir.",
      "Si uno de los paquetes no incorpora la cabecera el protocolo n, serán dos fragmentos a unir.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 41,
    title:
      "El formato de los paquetes de información que una arquitectura de red transmite en el medio físico se caracteriza por:",
    choices: [
      "Incorporar SIEMPRE las cabeceras de todos los niveles de la arquitectura de red.",
      "Incorporar SIEMPRE la cabecera del nivel más alto de la arquitectura.",
      "Incorporar SIEMPRE la cabecera del nivel más bajo de la arquitectura.",
      "Incorporar SIEMPRE al principio del paquete la cabecera de nivel más alto de la arquitectura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 42,
    title:
      "La solicitud de un servicio de la capa n a la capa n-1 se denomina:",
    choices: [
      "Comunicación vertical entre capas.",
      "Comunicación horizontal de la capa n.",
      "Comunicación horizontal de la capa n-1.",
      "Comunicación vertical entre capas pares del nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 43,
    title:
      "Cuál de los siguientes dispositivos se requiere para interconectar dos LANs con la misma tecnología Ethernet que se encuentran ubicadas a varias decenas de kilómetros y además comparten recursos físicos y mismo direccionamiento, a través de enlaces WAN punto a punto?",
    choices: [
      "HUB.",
      "Puente (‘Bridge’).",
      "Conmutador (‘Switch’).",
      "Encaminador (‘Router’).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 44,
    title:
      "La distorsión de una señal de pulsos que se propaga por un medio físico se produce:",
    choices: [
      "Siempre, debido a la existencia del ancho de banda del medio.",
      "Siempre que se supere la velocidad de transmisión del teorema de Nyquist.",
      "Siempre que se supere la velocidad de transmisión del teorema de Shannon.",
      "Sólo cuando el medio físico presenta una relación señal-ruido mayor de 30 dB.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 45,
    title:
      "Sea un medio físico con ancho de banda B y sin presencia de ruido, si se transmite una señal de pulsos con dos niveles de codificación, es cierto que:",
    choices: [
      "Se pueden producir errores si se emplea una velocidad de transmisión de B bps.",
      "Se pueden producir errores si se emplea una velocidad de transmisión de 2*B bps.",
      "Se pueden producir errores si se emplea una velocidad de transmisión de 4*B bps.",
      "La velocidad de transmisión no afecta a la existencia de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 46,
    title:
      "La transmisión de señales digitales empleando la codificación Manchester, se caracteriza por:",
    choices: [
      "Los bits de datos se identifican empleando valores de tensión opuestos en signo.",
      "Los bits de datos se identifican empleando valores de fase diferente en la señal.",
      "Los bits de datos incorporan información de sincronización.",
      "Emplear una codificación de múltiples niveles para conseguir velocidades de transmisión elevadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 47,
    title: "La presencia de ruido cruzado en un cable eléctrico, provoca:",
    choices: [
      "La reducción en el ancho de banda del medio físico.",
      "La reducción de la velocidad de transmisión en el medio físico.",
      "La limitación en el número de niveles de codificación de la señal de datos.",
      "El aumento en el ancho de banda del medio físico",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 48,
    title: "La técnica de modulación QAM se caracteriza por:",
    choices: [
      "Establecer 4 cambios de fase y 2 cambios de amplitud en la señal portadora.",
      "Establecer 8 cambios de fase y 2 cambios de amplitud en la señal portadora.",
      "Aumentar el ancho de banda del medio físico.",
      "Reducir la relación señal-ruido del medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 49,
    title:
      "La transmisión de dos señales de pulsos por un medio físico de ancho de banda B, se consigue:",
    choices: [
      "Empleando la multiplexión en el tiempo (TDM).",
      "Empleando la modulación PSK con frecuencia de portadora de 2*B Hz.",
      "Empleando la modulación ASK con frecuencia de portadora de 2*B Hz.",
      "No es posible transmitir dos señales de pulsos por un mismo medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 50,
    title:
      "En qué situación un cable coaxial es más adecuado que un cable UTP?",
    choices: [
      "Cuando se realiza transmisión en banda modulada.",
      "Cuando se realiza transmisión en banda base.",
      "Cuando el ruido de impulso es muy bajo.",
      "Cuando la distancia de comunicación es superior a 1 Km.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 51,
    title:
      "Qué factor limita la distancia máxima de comunicación que puede conseguirse en una fibra óptica?",
    choices: [
      "La potencia del haz de luz emitido en la fibra.",
      "El número de haces incidentes en la fibra.",
      "El tipo de dispositivo emisor de luz empleado.",
      "No existe limitación en la distancia de comunicación empleada en una fibra óptica.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 52,
    title:
      "Qué tipo de fibra es la más adecuada para el empleo de la técnica de multiplexado por longitud de onda?",
    choices: [
      "Fibra multimodo.",
      "Fibra índice gradual.",
      "Fibra monomodo.",
      "Cualquier tipo de fibra es adecuada para esta técnica.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 53,
    title:
      "Sea un medio físico con ancho de banda B que permite una velocidad máxima de transmisión de V bps. Si el ancho de banda B aumenta al doble, es cierto que",
    choices: [
      "La velocidad máxima de transmisión será 2V bps.",
      "La velocidad máxima de transmisión será 4V bps.",
      "La velocidad máxima de transmisión no se verá modificada.",
      "La relación señal-ruido del medio físico se reduce a la mitad.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 54,
    title:
      "Sea un medio físico con una relación señal-ruido de 10 dB, si la potencia de la señal de ruido aumenta al doble, la nueva relación señal ruido será:",
    choices: ["7 dB.", "12 dB.", "20 dB.", "La misma, 10 dB."],
    solution: "",
    explanation: "",
  },
  {
    id: 55,
    title:
      "La transmisión de señales digitales empleando la codificación manchester, se caracteriza por:",
    choices: [
      "Los bits de datos se identifican en las transiciones de tensión en cada bit.",
      "Los bits de datos se identifican empleando valores de tensión opuestos en signo.",
      "Los bits de datos se identifican empleando valores de fase diferente en la señal.",
      "La señal de datos manchester no incluye información de sincronización.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 56,
    title: "La técnica de modulación QAM se caracteriza por:",
    choices: [
      "Emplear valores diferentes de amplitud de la señal portadora para identificar grupos de bits.",
      "Emplear valores diferentes de fase de la señal portadora para identificar grupos de bits.",
      "Emplear valores diferentes de fase y amplitud de la señal portadora para identificar grupos de bits.",
      "Emplear más ancho de banda en la señal modulada que la modulación FSK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 57,
    title:
      "Dado un cable eléctrico UTP para transmisión de señales de datos, es cierto que:",
    choices: [
      "Emplea el trenzado para reducir el ruido de impulso en el cable.",
      "Emplea el trenzado para reducir el ruido cruzado en el cable.",
      "Permite una mayor velocidad de transmisión a menor valor de categoría del cable UTP.",
      "Si se elimina el trenzado de pares en el cable UTP, al nuevo cable se le denomina cable STP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 58,
    title:
      "El medio físico que permite velocidades de transmisión de 100 Gbps a distancias de varios kilómetros es:",
    choices: [
      "Fibra óptica multimodo.",
      "Fibra óptica de índice gradual.",
      "Fibra óptica monomodo con multiplexión de longitudes de onda.",
      "Ondas electromagnéticas empleando la frecuencia portadora de 5 GHz.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 59,
    title:
      "La ventaja de la comunicación satelital frente a otro tipo de comunicación inalámbrica es:",
    choices: [
      "Mayor cobertura geográfica para los usuarios de la red.",
      "Menor coste económico de los dispositivos emisores y receptores.",
      "Mayor ancho de banda disponible al usuario final.",
      "El empleo de las mismas frecuencias portadoras que la tecnología Wi-Fi.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 60,
    title:
      "Si se desea transmitir información a través de un medio físico empleando una señal de pulsos con 4 niveles y a una velocidad de 90000 bps, el medio físico necesita un ancho de banda mínimo de:",
    choices: ["30000 Hz.", "45000 Hz.", "90000 Hz.", "22500 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 61,
    title:
      "La codificación en banda base que no presenta problemas de sincronización en secuencias consecutivas de unos y ceros es,",
    choices: [
      "Codificación binaria sin retorno a cero bipolar.",
      "Codificación binaria sin retorno a cero unipolar.",
      "Codificación binaria con retorno a cero unipolar.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 62,
    title:
      "Qué tipo de modulación analógica permite transmitir información a mayor velocidad si se emplea un mismo ancho de banda?",
    choices: [
      "Modulación ASK.",
      "Modulación PSK.",
      "Modulación FSK.",
      "Modulación QPSK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 63,
    title:
      "Indica en cuál de los siguientes medios físicos la dispersión intramodal es mayor.",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 5.",
      "Fibra óptica monomodo.",
      "Fibra óptica multimodo -> dispersión intermodal",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 64,
    title:
      "Una señal de pulsos que se transmite adecuadamente por un medio físico puede presentar errores si:",
    choices: [
      "Aumenta el ancho de banda del medio físico.",
      "Se reduce la velocidad de transmisión de la señal.",
      "Aumenta la relación señal-ruido en el medio físico.",
      "Se reduce la relación señal-ruido en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 65,
    title:
      "En qué tipo de señalización en BANDA BASE pueden existir más problemas de sincronización emisor–receptor?",
    choices: [
      "Codificación binaria unipolar sin retorno a cero.",
      "Codificación binaria bipolar con retorno a cero.",
      "Codificación Mánchester",
      "Codificación PCM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 66,
    title:
      "El aumento de la velocidad de transmisión MÁXIMA en un medio físico empleando codificación Manchester es posible:",
    choices: [
      "Aumentando el número de niveles de la señal.",
      "Reduciendo la relación señal-ruido.",
      "Aumentando el ancho de banda del medio físico.",
      "Aumentando el número de armónicos que componen la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 67,
    title:
      "La transmisión de 2 canales de información con ancho de banda B1 y B2, por un medio físico empleando multiplexión en frecuencia (FDM), precisa:",
    choices: [
      "Un medio físico con un ancho de banda igual al MAYOR de los valores B1 y B2.",
      "Un medio físico con un ancho de banda inferior al valor B1+B2.",
      "Un medio físico con un ancho de banda superior al valor B1+B2.",
      "Un medio físico con un ancho de banda igual al MENOR de los valores B1 y B2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 68,
    title: "La técnica de modulación QPSK se caracteriza por:",
    choices: [
      "Precisar mayor ancho de banda para la señal modulada que la modulación QAM.",
      "Establecer menos cambios de fase que la modulación QAM.",
      "Establecer más portadoras que la modulación QAM.",
      "Establecer los mismos cambios de amplitud que la modulación QAM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 69,
    title: "A mayor categoría de un cable eléctrico UTP, es cierto que:",
    choices: [
      "Presenta menor relación señal-ruido.",
      "Presenta un menor ancho de banda.",
      "Presenta una mayor velocidad máxima de transmisión.",
      "Presenta una mayor tensión eléctrica en las señales transmitidas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 70,
    title: "El cable coaxial de 75 Ohmios de impedancia se emplea para:",
    choices: [
      "Transmisión de señales en banda base.",
      "Multiplexar en el tiempo señales PCM.",
      "Transmisión de canales de datos multiplexados en frecuencia.",
      "Reducir la relación señal-ruido respecto de los cables de 50 Ohmios de impedancia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 71,
    title:
      "Qué factor NO limita la distancia máxima de comunicación que puede conseguirse en una fibra óptica?",
    choices: [
      "El tipo de fibra óptica empleada.",
      "La velocidad de transmisión empleada.",
      "La potencia del dispositivo emisor de luz.",
      "El número de canales multiplexados por longitud de onda",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 72,
    title:
      "Cuántos armónicos componen una señal periódica de pulsos con periodo 1 ms y transmitida por un medio fisico de 5000 Hz de ancho de banda?",
    choices: ["5.", "6.", "10000.", "Infinitos."],
    solution: "",
    explanation: "",
  },
  {
    id: 73,
    title:
      "Determina la velocidad máxima de transmisión para una señal de pulsos con 2 niveles de tensión en un medio físico full-duplex con multiplexión por frecuencia (simétrica para transmisión y recepción) y ancho de banda de 1000 Hz.",
    choices: ["1000 bps.", "2000 bps.", "4000 bps.", "8000 bps"],
    solution: "",
    explanation: "",
  },
  {
    id: 74,
    title:
      "Dada una señal de pulsos transmitida a la velocidad máxima permitida de un medio Físico de ancho de banda B Hz y con R dB de relación señal ruido, si R aumenta de valor, es cierto que:",
    choices: [
      "La velocidad máxima de transmisión en el medio permanece invariable.",
      "La velocidad máxima de transmisión en el medio disminuye.",
      "La velocidad máxima de transmisión en el medio aumenta.",
      "El ancho de banda B del medio aumenta de valor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 75,
    title:
      "En la transmisión de una señal digital con Codificación Binaria Unipolar SIN Retorno a Cero, cuando se envía una secuencia de varios 0 consecutivos, es cierto que:",
    choices: [
      "Los bits de datos se identifican en las transiciones de tensión en cada bit.",
      "Los bits de datos se identifican empleando valores de tensión opuestos en signo.",
      "Los bits de datos se identifican empleando el mismo periodo de muestreo en receptor y emisor.",
      "Los bits de datos no pueden identificarse.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 76,
    title:
      "Se desea realizar la transmisión en un medio físico de dos señales de datos digitales con velocidades de 32 Kbps y 64 Kbps respectivamente. Si se emplea la multiplexión en el tiempo, el medio físico precisa de una velocidad de transmisión de:",
    choices: ["64 Kbps.", "96 Kbps.", "128 Kbps.", "256 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 77,
    title:
      "Dado un cable eléctrico UTP para transmisión de señales de datos, es cierto que:",
    choices: [
      "A mayor categoría disminuye la velocidad máxima de transmisión.",
      "Si aumenta la longitud del cable se reducirá la velocidad máxima de transmisión.",
      "Si aumenta la relación señal-ruido se reducirá la velocidad máxima de transmisión.",
      "Si aumenta la longitud del cable aumentará el ancho de banda disponible.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 78,
    title:
      "La fibra óptica que permite la transmisión de un haz de luz con datos a mayor distancia es:",
    choices: [
      "Fibra óptica monomodo.",
      "Fibra óptica de índice gradual.",
      "Fibra óptica multimodo.",
      "Todas las fibras ópticas permiten la transmisión a la misma distancia máxima.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 79,
    title:
      "Sobre la transmisión de datos empleando ondas electromagnéticas, es cierto que:",
    choices: [
      "Si dos señales emplean la misma velocidad de transmisión siempre interfieren entre ellas.",
      "Todas las ondas electromagnéticas se propagan a la misma distancia.",
      "Todas las ondas electromagnéticas se emplean para transmisión de datos.",
      "Si dos señales emplean frecuencias diferentes no interfieren entre ellas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 80,
    title:
      "De las técnicas de modulación presentes en la actualidad, se puede afirmar que:",
    choices: [
      "En ASK se trata de modificar la fase de la onda moduladora.",
      "PSK es la técnica más sensible al ruido.",
      "El mejor método es FSK, porque las frecuencias de una señal son teóricamente infinitas.",
      "QAM es una modulación combinada PSK y ASK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 81,
    title: "La codificación QAM vista en clase se caracteriza porque:",
    choices: [
      "A diferencia de MFSK, QAM sólo modifica la fase para codificar varios bits como elemento de señal.",
      "A diferencia de QPSK, se transmiten menor número de bits por unidad de tiempo.",
      "Modifica la fase y amplitud de una señal portadora haciendo uso de una señal moduladora.",
      "Proporciona menor velocidad de modulación que una codificación en banda modulada ASK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 82,
    title: "Es falso que la modulación PSK:",
    choices: [
      "Tiene diferentes variantes en función del número de niveles que se emplean para modular.",
      "Es más sensible a errores de ganancia que la modulación ASK.",
      "Es una modulación analógica.",
      "Transmite una señal modulada que se obtiene de modificar una señal portadora con una moduladora.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 83,
    title:
      "Se quiere implementar un sistema de comunicaciones que tenga un ancho de banda de 100Mhz y que consiga una relación S/NdB de 80dB. ¿Cuál será la capacidad máxima del canal de comunicación?",
    choices: ["≈5315 Mbps.", "≈ 2657 Mbps.", "≈ 634 Mbps.", "≈ 1268 Mbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 84,
    title: "En relación con la modulación PSK se puede afirmar que:",
    choices: [
      "Es una modulación analógica en amplitud donde la señal portadora modifica su valor en función del valor de una señal moduladora",
      "Es una modulación en fase con señal moduladora digital y señal portadora analógica",
      "Es una modulación en fase que permite codificar hasta 2 bits por elemento de señal",
      "Es una modulación en frecuencia y en fase con señal moduladora digital y portadora digital",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 85,
    title:
      "Se quiere implementar un sistema de comunicaciones que tenga un ancho de banda de 50Mhz y que consiga una relación S/NdB de 60dB. ¿Cuál será la capacidad máxima del canal de comunicación?",
    choices: ["≈ 996.5 Mbps.", "≈1993 Mbps.", "≈ 296.5 Mbps.", "≈ 593 Mbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 86,
    title: "La codificación QPSK se caracteriza porque:",
    choices: [
      "Permite enviar datos digitales mediante señales analógicas, empleando amplitudes distintas en la señal modulada.",
      "Permite enviar datos analógicos mediante señales analógicas, empleando frecuencias distintas en la señal modulada.",
      "Es una variante de la modulación PSK que permite codificar datos de 4 bits en señales analógicas con distinta fase.",
      "Es una modulación que emplea 4 fases distintas que forman desplazamientos de 90º.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 87,
    title:
      "Se quiere implementar un sistema de comunicaciones que tenga un ancho de banda de 50Khz y que consiga una relación S/dB de 2dB. ¿Cuál será la capacidad máxima del canal de comunicación?",
    choices: ["≈ 137 Kbps.", "≈ 68.5 Kbps.", "≈ 116 Kbps.", "≈ 232 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 88,
    title:
      "La interconexión de dos redes Ethernet empleando un repetidor se caracteriza por:",
    choices: [
      "Los paquetes Ethernet de difusión emitidos por un equipo se transmiten en las dos redes Ethernet interconectadas.",
      "Los paquetes Ethernet dirigidos a una dirección MAC SOLO son transmitidos en la red donde se encuentra esa dirección MAC.",
      "Los paquetes Ethernet de difusión emitidos por un equipo SOLO se transmiten en la red donde está el equipo.",
      "Emplear el algoritmo Spanning-Tree para aprender qué direcciones MAC existen en cada red Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 89,
    title:
      "Qué tipo de servicio ofrecido por el nivel de enlace reenvía paquetes de datos sin controlar el flujo?",
    choices: [
      "Servicio sin conexión ni reconocimiento.",
      "Servicio sin conexión y con reconocimiento.",
      "Servicio con conexión y con reconocimiento.",
      "Servicio de ventana deslizante.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 90,
    title:
      "Indica qué tipos de errores pueden detectar tanto los códigos de detección de paridad como los códigos de redundancia cíclica (CRC),",
    choices: [
      "Errores en un número par de bits.",
      "Errores en ráfaga de 7 bits de longitud.",
      "Errores en ráfaga de longitud menor que el grado del polinomio generador.",
      "No existen tipos de errores que detecten ambos códigos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 91,
    title:
      "En qué protocolo de ventana deslizante pueden recibirse paquetes de datos con secuencias no consecutivas?",
    choices: [
      "Protocolo de parada y espera.",
      "Protocolo de ventana deslizante de 1 bit.",
      "Protocolo de ventana deslizante con repetición NO selectiva.",
      "Protocolo de ventana deslizante con repetición selectiva.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 92,
    title:
      "Sobre la transmisión de paquetes Ethernet empleando el mecanismo CSMA/CD, es cierto que:",
    choices: [
      "Un equipo reenvía los paquetes Ethernet que sufren errores CRC.",
      "El destinatario de un paquete Ethernet solicita el reenvío del paquete cuando detecta una colisión.",
      "Existe un número máximo de intentos en el reenvío de un paquete que ha sufrido una colisión",
      "El tiempo de espera aleatorio para el reenvío de un paquete que ha sufrido una colisión es siempre el mismo en cada intento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 93,
    title: "En cuanto al mecanismo CSMA/CA es cierto que,",
    choices: [
      "Permite evitar colisiones en el envío de datos cuando existen varios dispositivos inalámbricos en el mismo radio de cobertura.",
      "Es una mejora sobre el CSMA/CD y permite un uso más eficiente de redes cableadas.",
      "Es un mecanismo con menos pasos que el CSMA/CD para su uso en redes inalámbricas.",
      "Se fundamenta en escuchar el medio a la vez que se transmite para ver si se está produciendo una colisión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 94,
    title:
      "Cómo se denomina el mecanismo en el que no existen colisiones a la hora de transmitir paquetes en las redes inalámbricas?",
    choices: ["CSMA/CD con RTS/CTS.", "CSMA/CA con RTS/CTS.", "DCF.", "PCF."],
    solution: "",
    explanation: "",
  },
  {
    id: 95,
    title:
      "La interconexión de dos redes Ethernet empleando un router se caracteriza por:",
    choices: [
      "Los paquetes Ethernet de difusión se reenvían en los segmentos Ethernet interconectados.",
      "Los paquetes Ethernet dirigidos a una dirección MAC de otro segmento son reenviados por el router.",
      "El router puede procesar los paquetes dirigidos a las direcciones MAC de sus interfaces.",
      "El router puede procesar todos los paquetes Ethernet transmitidos en un segmento Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 96,
    title:
      "Sobre las características de un protocolo de nivel de enlace es cierto que:",
    choices: [
      "La cola de los paquetes elimina los errores en los bits del paquete.",
      "La SVT (Secuencia de Verificación de Trama) se incorpora en la cola del paquete.",
      "La SVT permite corregir errores en el paquete de datos.",
      "Incorpora en la cabecera del paquete información para la detección de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 97,
    title:
      "Sobre el funcionamiento del protocolo de ventana deslizante con repetición SELECTIVA es cierto que:",
    choices: [
      "Si el emisor REENVÍA un paquete de datos que ESTÁ en la ventana del receptor, el receptor lo descarta.",
      "Si el emisor tiene un tiempo de espera de ACK MAYOR que el tiempo de llenado de su ventana, reenviará paquetes que pueden ser rechazados en el receptor.",
      "El receptor RECHAZA cualquier paquete de datos que no llegue en orden.",
      "El emisor y el receptor SIEMPRE tienen el mismo tamaño de ventana.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 98,
    title:
      "Qué protocolo NO está definido en el modelo de referencia IEEE 802?",
    choices: ["LLC.", "IP.", "VLAN.", "Ethernet."],
    solution: "",
    explanation: "",
  },
  {
    id: 99,
    title:
      "Sobre la transmisión de paquetes Ethernet dirigidos a la dirección MAC de difusión es cierto que:",
    choices: [
      "Un conmutador Ethernet NO reenvía los paquetes Ethernet de difusión entre sus puertos.",
      "Un concentrador Ethernet NO reenvía los paquetes Ethernet de difusión entre sus puertos.",
      "Un router reenvía los paquetes Ethernet de difusión entre sus interfaces Ethernet.",
      "Un puente reenvía los paquetes Ethernet de difusión entre los segmentos que interconecta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 100,
    title:
      "Indica qué mecanismo de detección de errores es más adecuado para detectar errores en ráfaga en el medio físico:",
    choices: [
      "Paridad par de bloques de 8 bits.",
      "Paridad impar de bloques de 8 bits.",
      "Paridad por filas y columnas de un bloque de 8 bits.",
      "CRC.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 101,
    title:
      "Sobre el funcionamiento de un protocolo de ventana deslizante NO SELECTIVO es cierto que:",
    choices: [
      "Si se produce un error en la transmisión de un paquete de datos, el emisor reenvía únicamente el paquete afectado.",
      "Si el emisor tiene un tamaño de ventana mayor que 2, si un paquete de datos sufre un error se enviarán paquetes que se rechazarán en el receptor.",
      "Si la ventana del emisor es mayor que 3, no se reenvían paquetes de datos que serán rechazados.",
      "El tamaño de ventana del receptor es siempre mayor que 2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 102,
    title:
      "Sobre el funcionamiento del protocolo de ventana deslizante con repetición SELECTIVA es cierto que:",
    choices: [
      "Si el emisor envía un paquete de datos que no está en la ventana del receptor, el receptor lo descarta.",
      "Si el emisor tiene un tiempo de espera de ACK MENOR que el tiempo de llenado de su ventana, reenviará paquetes que se rechazarán en el receptor.",
      "El receptor rechaza cualquier paquete de datos que no llegue en orden.",
      "La ventana del emisor tendrá un tiempo de llenado MENOR que el tiempo de llegada de un ACK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 103,
    title:
      "Sobre el funcionamiento del mecanismo CSMA/CD de Ethernet es cierto que:",
    choices: [
      "Una estación puede detectar colisiones en todo momento.",
      "Una estación detecta colisiones mientras realiza la transmisión de un paquete Ethernet.",
      "Una estación detecta colisiones al finalizar la transmisión de un paquete Ethernet.",
      "Una estación detecta colisiones en la recepción de un paquete Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 104,
    title:
      "Sobre el proceso de APRENDIZAJE en los puentes Ethernet es cierto que:",
    choices: [
      "Una dirección MAC puede estar asociada a más de un puerto simultáneamente.",
      "Asocia direcciones MAC origen con puertos.",
      "Asocia direcciones MAC destino con puertos.",
      "Una dirección MAC NO puede cambiar el puerto al que está asociada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 105,
    title:
      "Indica qué funcionalidad del nivel de enlace NO dispone el protocolo Ethernet:",
    choices: [
      "Delimitación de tramas.",
      "Control del flujo.",
      "Detección de errores.",
      "Direccionamiento de equipos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 106,
    title:
      "En un protocolo de parada y espera donde sólo existe numeración de los paquetes de datos (los ACK son NO numerados) y se aplica sobre un medio físico con una cierta tasa de error, es cierto que:",
    choices: [
      "No se producen nunca errores en los paquetes de datos transmitidos.",
      "No se producen nunca duplicaciones de datos en el receptor.",
      "El receptor y emisor están siempre sincronizados.",
      "No se producen nunca errores en los paquetes de confirmación (ACK) transmitidos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 107,
    title:
      "Sobre la transmisión de paquetes Ethernet de difusión es cierto que:",
    choices: [
      "Un conmutador Ethernet NO reenvía los paquetes Ethernet de difusión entre sus puertos.",
      "Un concentrador Ethernet NO reenvía los paquetes Ethernet de difusión entre sus puertos.",
      "Un router NO reenvía los paquetes Ethernet de difusión entre sus interfaces Ethernet.",
      "Un puente NO reenvía los paquetes Ethernet de difusión entre los segmentos que interconecta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 108,
    title:
      "Sobre el proceso de REENVÍO en los puentes Ethernet, es cierto que:",
    choices: [
      "Una dirección MAC puede estar asociada a más de un puerto.",
      "Asocia direcciones MAC origen con puertos.",
      "Asocia direcciones MAC destino con puertos.",
      "Una dirección MAC puede no estar asociada a ningún puerto.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 109,
    title:
      "Codificaciones Indica el sistema de señalización empleado en Ethernet 100BaseFX:",
    choices: ["Manchester.", "4D-PAM5.", "NRZI.", "8B/10B."],
    solution: "",
    explanation: "",
  },
  {
    id: 110,
    title: "En un sistema de codificación 4B/5B, es cierto que:",
    choices: [
      "Los símbolos a enviar son indiferentes mientras no se repitan entre ellos.",
      "Se usa en Fast Ethernet para llegar a los 100 Mbps pero al transmitir un 25% más para introducir la sincronización esto se traduce en una velocidad menor para el usuario.",
      "Define un conjunto de 16 símbolos de 5 bits.",
      "Define un conjunto de 32 símbolos de 5 bits.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 111,
    title:
      "Qué tecnología Ethernet NO precisa la introducción de bits de sincronización en los paquetes Ethernet?",
    choices: [
      "Ethernet 1000BaseT.",
      "Ethernet 100BaseTX.",
      "Ethernet 100BaseFX.",
      "Ethernet 1000BaseLX.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 112,
    title:
      "Indica en qué tecnología Ethernet NO se introducen bits de sincronización en todos los bytes del paquete Ethernet:",
    choices: ["10BaseT.", "100BaseFX.", "100BaseTX.", "1000BaseLX."],
    solution: "",
    explanation: "",
  },
  {
    id: 113,
    title: "Indica el sistema de señalización empleado en Ethernet 100BaseTX:",
    choices: ["Manchester.", "4D-PAM5.", "MLT-3.", "8B/10B."],
    solution: "",
    explanation: "",
  },
  {
    id: 114,
    title: "Qué tecnología Ethernet NO emplea codificación NRZI?",
    choices: [
      "Ethernet 1000BaseT.",
      "Ethernet 1000BaseCX.",
      "Ethernet 100BaseLX.",
      "Ethernet 1000BaseSX.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 115,
    title:
      "Qué tipo de tecnología Ethernet es compatible con Ethernet 10BaseT al emplear el CSMA/CD?",
    choices: [
      "Ethernet 1000BaseT.",
      "Ethernet 10GBaseT.",
      "Ethernet 5GBaseT.",
      "Ethernet 2.5GBaseT.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 116,
    title:
      "La transmisión de paquetes Ethernet con la tecnología 100BaseX se caracteriza por:",
    choices: [
      "Emplear el mismo tipo de señalización que en Ethernet 10BaseT.",
      "Emplear el mismo mecanismo de sincronización en fibra óptica que en cable eléctrico.",
      "Emplear un formato de paquete MAC distinto que en Ethernet 10BaseT.",
      "Estar definida para emplear solamente el medio físico de fibra óptica.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 117,
    title:
      "Sobre el funcionamiento de un conmutador Ethernet con la tecnología IEEE 802.1Q, es cierto que:",
    choices: [
      "El formato de paquete IEEE 802.1Q es el mismo que Ethernet 802.3.",
      "Sólo soporta el empleo de paquetes con el formato IEEE 802.1Q.",
      "La interconexión entre conmutadores IEEE 802.1Q se gestiona con el protocolo GVRP.",
      "Establece un único dominio de difusión entre todos los puertos de enlace de acceso del conmutador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 118,
    title:
      "El empleo de un conmutador Ethernet con la tecnología IEEE 802.1Q, permite que:",
    choices: [
      "Un paquete de difusión procedente de un enlace de acceso se reenvía a todos los puertos troncales del conmutador.",
      "Un paquete de difusión procedente de un enlace troncal se reenvía sólo a los puertos del conmutador asociados a la misma VLAN etiquetada en el paquete de difusión.",
      "Un paquete de difusión procedente de un enlace troncal se reenvía sólo a los puertos troncales asociados a la misma VLAN.",
      "Un paquete de difusión procedente de un enlace troncal se reenvía a todos los puertos troncales del conmutador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 119,
    title:
      "Sobre el funcionamiento de un conmutador Ethernet VLAN es cierto que,",
    choices: [
      "Los paquetes de difusión de una VLAN son reenviados sólo a los puertos troncales del conmutador asociados a la misma VLAN.",
      "Los paquetes de difusión de una VLAN son reenviados a puertos pertenecientes a cualquier VLAN.",
      "Los paquetes ARP Request transmitidos en una VLAN son reenviados a todos los puertos del conmutador asociados a la misma VLAN.",
      "Los paquetes ARP Reply transmitidos en una VLAN son reenviados a todos los puertos troncales y de acceso asociados a la misma VLAN",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 120,
    title:
      "Sobre el funcionamiento de un conmutador Ethernet VLAN es cierto que,",
    choices: [
      "Los paquetes de difusión de una VLAN son reenviados a todos los puertos troncales del conmutador.",
      "Los paquetes de difusión de una VLAN son reenviados a todos los puertos del conmutador VLAN.",
      "Los paquetes de difusión de una VLAN son reenviados sólo a los puertos de acceso del conmutador asociados a la misma VLAN.",
      "Los paquetes de difusión de una VLAN pueden ser reenviados a puertos troncales y de acceso asociados a la misma VLAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 121,
    title: "En cuanto a la seguridad de las redes Wi-Fi, es cierto que:",
    choices: [
      "Todos los protocolos derivados de TKIP intercambian una nueva clave en cada paquete para el cifrado del siguiente paquete.",
      "El mecanismo de cifrado AES fue diseñado para ser irrompible por fuerza bruta.",
      "Todos los mecanismos de cifrado se basan en el intercambio de una clave inicial.",
      "El estándar WPA3 es el más seguro porque no realiza el intercambio de una clave inicial de cifrado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 122,
    title: "Indica qué afirmación es cierta sobre las normas WPA y WPA2.",
    choices: [
      "Ambas normas emplean el algoritmo de cifrado AES.",
      "WPA2 no soporta el mecanismo de autenticación PSK.",
      "Ambas normas permiten el algoritmo de cifrado RC4.",
      "WPA2 introduce nuevos mecanismos de autenticación más seguros que en WPA.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 123,
    title: "El mecanismo CSMA/CA de las redes IEEE 802.11x se caracteriza por:",
    choices: [
      "Evitar las colisiones entre equipos asociados a un punto de acceso (AP).",
      "Reducir la probabilidad de colisiones entre equipos asociados a un punto de acceso (AP).",
      "Permitir el uso de diferentes frecuencias para las estaciones asociadas a un punto de acceso.",
      "Reenviar los paquetes ACK que sufren errores al ser transmitidos en el aire.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 124,
    title:
      "Indica la normativa de redes LAN inalámbricas que proporciona más número de canales (frecuencias) diferentes para establecer la comunicación:",
    choices: [
      "IEEE 802.11b.",
      "IEEE 802.11g.",
      "IEEE 802.11n.",
      "Todas las normativas de redes LAN inalámbricas emplean el mismo número de canales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 125,
    title:
      "Indica qué mecanismo de autenticación es más inseguro para obtener el acceso no autorizado a una red Wi-Fi:",
    choices: ["WPA-TKIP.", "WPA2-PSK.", "EAP/TLS.", "EAP/PEAP"],
    solution: "",
    explanation: "",
  },
  {
    id: 126,
    title:
      "Indica en qué normativa del IEEE es posible no emplear el protocolo IEEE 802.2 para enviar paquetes a la capa MAC:",
    choices: [
      "MAC IEEE 802.3.",
      "MAC IEEE 802.11.",
      "MAC IEEE 802.1Q.",
      "En todos los protocolos MAC del IEEE es necesario el empleo del protocolo IEEE 802.2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 127,
    title:
      "En qué normativa inalámbrica del IEEE no se emplean tramas Beacon Frame para identificar redes Wi-Fi (ESSID)?",
    choices: [
      "IEEE 802.11b.",
      "IEEE 802.11g.",
      "IEEE 802.11n.",
      "Todas las normas IEEE 802.11x emplean las tramas Beacon Frame.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 128,
    title:
      "Indica con qué mecanismo de las redes IEEE 802.11x se consigue que dos estaciones asociadas a un AP puedan detectar siempre sus transmisiones:",
    choices: ["RTS/CTS.", "CSMA/CA.", "CSMA/CD.", "WEP."],
    solution: "",
    explanation: "",
  },
  {
    id: 129,
    title: "Qué mecanismo de cifrado en redes Wi-Fi es actualmente seguro?",
    choices: ["WPA2/AES.", "WPA2/TKIP.", "WPA2/PEAP.", "WPA2/TLS."],
    solution: "",
    explanation: "",
  },
  {
    id: 130,
    title:
      "La integración del modelo IEEE 802.x en la arquitectura TCP/IP se consigue:",
    choices: [
      "Añadiendo las capas del modelo IEEE 802.x encima de la capa de transporte de TCP/IP.",
      "Añadiendo las capas del modelo IEEE 802.x encima de la capa de aplicación de TCP/IP.",
      "Añadiendo las capas del modelo IEEE 802.x debajo de la capa de enlace de TCP/IP.",
      "Añadiendo las capas del modelo IEEE 802.x debajo de la capa de red de TCP/IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 131,
    title:
      "En qué normativa inalámbrica del IEEE no se emplea el mecanismo RTS/CTS en el acceso al medio?",
    choices: [
      "IEEE 802.11b.",
      "IEEE 802.11g.",
      "IEEE 802.11n.",
      "Todas las normas IEEE 802.11x soportan el mecanismo RTS/CTS.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 132,
    title:
      "Sobre las tramas de señalización (Beacon Frame) de la norma IEEE 802.11x, es cierto que:",
    choices: [
      "Permiten la autenticación de clientes en un punto de acceso (AP).",
      "Son transmitidas por los puntos de acceso (AP) periódicamente.",
      "Son transmitidas por los clientes para conocer la existencia de una red inalámbrica en un entorno.",
      "Permiten conocer el número de estaciones dentro de la cobertura de una red inalámbrica ad-hoc.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 133,
    title:
      "Cuál de las siguientes afirmaciones es cierta para el protocolo RIPv2?",
    choices: [
      "Introduce una mejora con respecto a RIPv1 porque mide el camino de menos coste y no el camino con menos saltos.",
      "Implementa el algoritmo de Dijkstra para asignar la métrica menor y por tanto el camino a seguir.",
      "Es más eficiente que RIPv1 por hacer uso de la multidifusión.",
      "Usa las mismas tablas que RIPv1 pero las actualiza más a menudo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 134,
    title:
      "Sobre el empleo de la multidifusión en el protocolo IPv4, es FALSO que:",
    choices: [
      "Se precisa de un protocolo para la gestión del envío de paquetes de multidifusión.",
      "El protocolo OSPF informa sobre direcciones de multidifusión activas.",
      "Los algoritmos de encaminamiento emplean la multidifusión para un procesamiento más eficiente de los paquetes de información.",
      "El protocolo BGP no emplea multidifusión en el envío de información de encaminamiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 135,
    title: "Cuál de las siguientes afirmaciones es FALSA para IPv6?",
    choices: [
      "Permite simplificaciones en los algoritmos de encaminamiento",
      "Las máscaras de red de IPv6 tienen la misma longitud que las de IPv4.",
      "Define un sistema de cabeceras más flexible que IPv4.",
      "Soporta monodifusión (anycast).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 136,
    title:
      "Qué algoritmo de encaminamiento no tiene en cuenta valores de métrica al gestionar las tablas de encaminamiento?",
    choices: ["OSPF.", "BGP.", "RIPv1.", "RIPv2."],
    solution: "",
    explanation: "",
  },
  {
    id: 137,
    title:
      "En qué parte de un paquete IPv6 se incorpora la información sobre prioridad del paquete?",
    choices: [
      "En la cabecera de extensión de prioridad.",
      "En la cabecera de extensión de opciones para el destino.",
      "En la cabecera de extensión de encaminamiento.",
      "En la cabecera IPv6.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 138,
    title:
      "Qué protocolo de encaminamiento emplea la capa de transporte para informar de las tablas de encaminamiento a otros routers?",
    choices: ["OSPF.", "RIPv1.", "RIPv2.", "BGP."],
    solution: "",
    explanation: "",
  },
  {
    id: 139,
    title:
      "Qué protocolo de encaminamiento no emplea métricas de optimización en la tabla de encaminamiento?",
    choices: [
      "OSPF.",
      "RIPv2.",
      "BGP.",
      "Todos los protocolos de encaminamiento optimizan rutas a los destinos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 140,
    title: "Sobre el protocolo de encaminamiento IPv6 es cierto que,",
    choices: [
      "Aumenta el número de direcciones IPv4 empleando la clase reservada D.",
      "Es posible el intercambio de paquetes IPv4 a través de una red IPv6.",
      "El tamaño de la cabecera de nivel de red en un paquete IPv6 es siempre fija.",
      "El protocolo IPv6 aumenta el valor del campo TTL para permitir redes IP más extensas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 141,
    title: "Sobre el protocolo de encaminamiento RIP es cierto que,",
    choices: [
      "Si un interfaz de un router RIP falla, RIP informa del fallo al resto de routers RIP.",
      "RIP informa de todos los destinos que conoce a todos los routers de los segmentos a los que está conectado.",
      "Si RIP detecta una métrica mayor a un destino modifica el valor de la métrica para actualizarla.",
      "Un mensaje RIP con información de destinos es reenviado a todos los segmentos de red existentes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 142,
    title:
      "Si un paquete IP es enviado a la dirección 224.0.0.255 es cierto que,",
    choices: [
      "El paquete es procesado por todos los equipos de todos los grupos de multidifusión de Internet.",
      "La dirección IP de destino se cambia por 224.255.255.255 para que llegue a todos los equipos de la red donde es transmitido.",
      "Los routers que reciben este paquete lo envían a todos los routers multicasting de Internet.",
      "El paquete sólo es procesado por los equipos que pertenecen a este grupo de multidifusión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 143,
    title: "Sobre el protocolo de encaminamiento BGP es cierto que,",
    choices: [
      "Emplea el algoritmo de Dijkstra para obtener la solución de encaminamiento en la red.",
      "Intercambia información entre los routers empleando la multidifusión.",
      "Utiliza conexiones UDP para el envío de los mensajes BGP en la red.",
      "Los routers BGP disponen de un conocimiento global de los SA de Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 144,
    title:
      "Qué característica tienen en común el protocolo de encaminamiento OSPF y el protocolo RIP versión 2?",
    choices: [
      "Emplean la misma métrica para determinar el coste del camino a un destino.",
      "Pueden enviar un mensaje de información a todos los routers de una LAN empleando multidifusión.",
      "Pueden enviar mensajes a routers que no sean adyacentes (que no están en la misma LAN).",
      "RIP versión 2 y OSPF no tienen ninguna característica en común.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 145,
    title:
      "Sobre los mensajes BGP Keepalive definidos en el protocolo BGP es cierto que:",
    choices: [
      "Se intercambian en el establecimiento de la comunicación entre dos routers BGP.",
      "Se envían a todos los routers BGP del troncal de Internet empleando multidifusión.",
      "Se envían periódicamente entre cada par de routers que establecen una conexión BGP.",
      "Informan de errores o actualizaciones en los destinos existen en un sistema autónomo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 146,
    title:
      "Indica cuál de las siguientes funciones NO es realizada por un router IP.",
    choices: [
      "Encaminamiento de paquetes analizando las entradas de la tabla de encaminamiento.",
      "Modificación de las direcciones IP destino en los paquetes IP cuando son encaminados.",
      "Gestión del flujo de información asignando velocidades de transmisión a diferentes clases de tráfico.",
      "Filtrado de paquetes que pueden ser encaminados o no (firewall).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 147,
    title:
      "En qué situación el protocolo de encaminamiento OSPF será más adecuado que emplear RIP?",
    choices: [
      "Interconexión de redes LAN con tecnología diferente.",
      "Interconexión de redes LAN sin bucles.",
      "Interconexión de redes LAN con menos de 10 saltos de distancia máxima.",
      "Interconexión de redes LAN donde las distancias entre redes pueden reducirse.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 148,
    title: "Indica cuál de los siguientes NO es un mensaje del protocolo BGP:",
    choices: ["BGP Hello.", "BGP Open.", "BGP Notification.", "BGP Keepalive."],
    solution: "",
    explanation: "",
  },
  {
    id: 149,
    title:
      "Sobre la estructura de una tabla de encaminamiento de un router IP es cierto que,",
    choices: [
      "Las entradas de una tabla pueden tener direcciones de red de destino repetidas.",
      "Las entradas de una tabla pueden tener direcciones de puerta de enlace repetidas.",
      "En una tabla puede existir más de una entrada de puerta de enlace por defecto.",
      "Todas las entradas de una tabla deben tener la máscara de red con el mismo valor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 150,
    title: "Sobre el funcionamiento del algoritmo de Karn es cierto que:",
    choices: [
      "Reduce el valor del temporizador de espera de los ACK cuando éstos expiran.",
      "Aumenta al doble del RTT el valor del temporizador de espera de los ACK cuando estos expiran.",
      "Adapta el valor del temporizador de espera de los ACK al RTT de los paquetes TCP confirmados.",
      "Determina un valor fijo de temporizador de espera de ACK para una conexión TCP en el establecimiento de la conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 151,
    title:
      "Indica qué afirmación es cierta sobre el funcionamiento del protocolo TCP:",
    choices: [
      "La ventana de congestión se incrementa siempre en el doble del valor anterior.",
      "La ventana de congestión se decrementa siempre en el doble del valor del MSS.",
      "La ventana de congestión SIEMPRE es mayor que la ventana de recepción.",
      "La ventana del emisor nunca es mayor que la ventana del receptor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 152,
    title:
      "Qué protocolo de aplicación de la arquitectura de red TCP/IP NO emplea ni el protocolo TCP ni el UDP?",
    choices: ["HTTP.", "DNS.", "ICMP.", "PING."],
    solution: "",
    explanation: "",
  },
  {
    id: 153,
    title: "Cómo es posible reducir la congestión en una red TCP/IP?",
    choices: [
      "Aumentando la velocidad de transmisión en las redes conectadas.",
      "Aumentando el número de saltos entre cualquier origen y destino.",
      "Aumentando la capacidad de proceso de las CPUs de los routers.",
      "Aumentando el número de protocolos de encaminamiento empleados.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 154,
    title:
      "Qué protocolo de la arquitectura TCP/IP permitirá identificar que no existe una aplicación determinada funcionando en un computador?",
    choices: ["IP.", "DNS.", "TCP.", "IGMP."],
    solution: "",
    explanation: "",
  },
  {
    id: 155,
    title:
      "Qué protocolo de la arquitectura de red TCP/IP permite reenviar la información transportada en un paquete Ethernet que sufre una alteración en el medio físico?",
    choices: ["IP.", "ICMP.", "TCP.", "UDP."],
    solution: "",
    explanation: "",
  },
  {
    id: 156,
    title:
      "Si en una conexión TCP entre dos extremos A y B en Internet, un paquete TCP emitido por A llega al destino con errores de CRC es cierto que,",
    choices: [
      "El extremo A no envía más paquetes TCP hasta que recibe el ACK del paquete que sufre el error.",
      "El extremo A reenvía el paquete TCP y aumenta el tamaño de la ventana de congestión.",
      "El extremo A reenvía el paquete TCP y reduce el tamaño de la ventana de congestión.",
      "Cuando expire el temporizador de espera de ACK del paquete que sufre el error, el emisor reduce el valor del tiempo de espera del ACK del paquete reenviado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 157,
    title:
      "Indica cuál de los siguientes factores afecta a la congestión en una red con arquitectura TCP/IP,",
    choices: [
      "Capacidad de proceso de la CPU de un router.",
      "Protocolo de nivel de aplicación empleado.",
      "Protocolo de nivel de enlace empleado.",
      "Protocolo de gestión de tablas de encaminamiento empleado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 158,
    title:
      "Sobre los algoritmos de control del flujo del protocolo TCP es cierto que,",
    choices: [
      "La ventana del emisor puede aumentar por encima del valor de la ventana del receptor.",
      "El retardo en la llegada de un ACK provocan el aumento de la ventana de congestión del emisor.",
      "La pérdida de un ACK provoca la reducción de la ventana de congestión del emisor.",
      "El retardo en la llegada de un ACK reduce a la mitad el tiempo de espera del ACK del reenvío.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 159,
    title:
      "Indica cuál de los siguientes factores NO afecta a la congestión en una red con arquitectura TCP/IP,",
    choices: [
      "Capacidad de proceso de la CPU de un router.",
      "Fragmentación de paquetes en la red.",
      "Protocolo de nivel de enlace empleado.",
      "Número de dispositivos que transmiten información simultáneamente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 160,
    title:
      "Sobre el control de flujo de datos en el protocolo TCP es cierto que,",
    choices: [
      "El elemento emisor de TCP tiene un tamaño de ventana fijo negociado en el establecimiento de la conexión.",
      "El tamaño de la ventana de un receptor TCP disminuye si aumenta el retardo en la llegada de ACK’s.",
      "El tamaño de la ventana de un emisor TCP aumentará si expiran temporizadores de espera de ACK.",
      "Si un emisor TCP recibe un paquete ACK aumenta el tamaño de su ventana de congestión en el valor del MSS.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 161,
    title:
      "Qué factores NO provocan un aumento de la congestión en una red TCP/IP?",
    choices: [
      "Valores de MTU diferentes en toda la red.",
      "Tablas de encaminamiento muy complejas.",
      "Porcentaje de uso de la CPU de los routers para encaminamiento inferiores al 40%.",
      "El empleo de protocolos sin control del flujo como UDP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 162,
    title:
      "El intercambio de información en una red LAN de difusión NO se caracteriza por,",
    choices: [
      "Permitir una única transmisión de una trama al medio físico para que todas las estaciones la reciban.",
      "Aumentar el número de colisiones en el medio físico cuanto menor sea el número de estaciones en la red.",
      "Producirse colisiones en el medio físico cuando dos o más estaciones transmiten datos simultáneamente.",
      "Necesitar un esquema de direccionamiento para las estaciones de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 163,
    title:
      "La comunicación entre dos equipos a través de una red de conmutación de paquetes por circuitos virtuales se caracteriza por que,",
    choices: [
      "Para transmitir las señales, se establece un camino físico exclusivo entre los dos equipos empleando conmutadores.",
      "Los paquetes de datos pueden llegar al equipo destino desordenados, debido a que han circulado por distintos caminos en la red.",
      "Ofrece un servicio de alta calidad, adecuado para la transmisión de datos.",
      "En general, no requiere de una conexión previa para poder enviar los datos, ni de una desconexión al acabar.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 164,
    title: "Conforme al modelo OSI, es FALSO que,",
    choices: [
      "Un protocolo de nivel N se construye usando los servicios que ofrece el nivel N-1.",
      "Un protocolo define el dialogo entre entidades de distintos niveles de la arquitectura.",
      "Los servicios que ofrece un nivel pueden ser orientados a conexión o no orientados aconexión.",
      "Los servicios de tipo no confirmado no requieren utilizar las primitivas Response yConfirm.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 165,
    title:
      "La realización de un servicio que la capa n+1 solicita a la capa n, se realiza",
    choices: [
      "Intercambiando PDU's entre entidades pares del nivel n.",
      "Intercambiando PDU's entre entidades pares del nivel n+1.",
      "Intercambiando IDU's entre entidades pares del nivel n.",
      "Intercambiando SDU's entre entidades pares del nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 166,
    title:
      "El intercambio de información de forma fiable entre dos estaciones interconectadas conuna red WAN con arquitectura de red OSI, es funcionalidad de,",
    choices: [
      "La capa de enlace.",
      "La capa de red.",
      "La capa de sesión.",
      "La capa de transporte.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 167,
    title:
      "Dentro del modelo OSI, una de las funciones que gestiona el nivel de transporte es,",
    choices: [
      "El establecimiento del camino virtual que seguirán los paquetes en la red.",
      "El establecimiento y liberación de conexiones entre los equipos origen y destino.",
      "Controlar el acceso de múltiples usuarios de forma simultánea al mismo servidor.",
      "La encriptación de los datos cuando se requiere confidencialidad.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 168,
    title:
      "En una arquitectura de red, la capa n puede reorganizar los paquetes que ha fragmentadola capa n+1,",
    choices: [
      "Nunca, la reordenación la debe realizar la capa n+1.",
      "Nunca, la reordenación la debe realizar la capa n-1.",
      "Empleando las cabeceras del protocolo de nivel n.",
      "Empleando las cabeceras del protocolo de nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 169,
    title: "En referencia a la arquitectura de red TCP/IP, es cierto que,",
    choices: [
      "Esta basada la transmisión de paquetes de datos mediante conmutación de circuitosvirtuales.",
      "El nivel de red ofrece una transmisión de datos fiable al nivel de transporte, conrecuperación de los paquetes que tienen errores.",
      "Define protocolos concretos para todos los niveles de su arquitectura, excepto para elAcceso a la Red, para el cual se utilizan protocolos de otras arquitecturas.",
      "No permite comunicaciones orientadas a conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 170,
    title:
      "La transmisión de una señal con información a través de un medio físico se realizacorrectamente si,",
    choices: [
      "Los armónicos de mayor frecuencia de la señal son transmitidos y los de menor frecuenciano.",
      "El ancho de banda del medio físico permite la transmisión de los 10 armónicos de mayorfrecuencia que componen la señal.",
      "Los armónicos de menor frecuencia de la señal se encuentran dentro del ancho de banda delmedio físico.",
      "El ancho de banda del medio físico es igual a la frecuencia del armónico de primer orden dela señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 171,
    title:
      "Una señal digital periódica de 8 bits, con un periodo de 10ms, se envía por un medio conun ancho de banda ideal de 240Hz que comienza en la frecuencia 280Hz. ¿Cuántascomponentes armónicas de la señal llegarán correctamente al destino?",
    choices: ["2.", "3.", "4.", "5."],
    solution: "",
    explanation: "",
  },
  {
    id: 172,
    title:
      "Aumentar la velocidad de modulación en una señal digital de pulsos que se transmite porun medio físico produce,",
    choices: [
      "El aumento del ancho de banda del medio físico.",
      "El aumento del valor de frecuencia de los armónicos que componen la señal.",
      "La reducción en la velocidad de transmisión de información de la señal.",
      "El aumento en la velocidad de propagación de la señal en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 173,
    title:
      "Cuál de los siguientes tipos de ruido que pueden afectar a una transmisión se produceprincipalmente en los circuitos emisores y receptores de un equipo?",
    choices: [
      "Cruzado o diafonía.",
      "Autocoplamiento.",
      "Impulsivo.",
      "Térmico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 174,
    title:
      "Indica con qué tipo de modulación analógica es posible alcanzar mayor velocidad detransmisión de datos en un mismo medio físico,",
    choices: [
      "Modulación ASK.",
      "Modulación FSK.",
      "Modulación PCM.",
      "La velocidad máxima de transmisión no depende del tipo de modulación empleada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 175,
    title:
      "La modulación analógica QAM de múltiples niveles se caracteriza por,",
    choices: [
      "Emplear la modulación PSK y FSK.",
      "Emplear la modulación PSK y ASK.",
      "Emplear la modulación ASK y FSK.",
      "Emplear la modulación PCM y PSK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 176,
    title:
      "Determina qué velocidad de transmisión se necesita en un medio físico para multiplexaren el tiempo dos señales PCM: una de 64Kbps y otra de 32 Kbps,",
    choices: ["64 Kbps.", "32 Kbps.", "128 Kbps.", "96 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 177,
    title:
      "En que se diferencian los estándares de multiplexado E1 (europeo) y T1 (americano)?",
    choices: [
      "Las tramas del E1 duran 125µs y las del T1 la mitad.",
      "El E1 multiplexa 30 canales de voz digital mientras que el T1 multiplexa 24.",
      "El T1 emplea multiplexado por división de frecuencia y el E1 por división en el tiempo.",
      "El T1 incluye información de control en las tramas, pero el E1 no.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 178,
    title:
      "Para enviar una señal digital de datos a una distancia de 100m, ¿qué medio detransmisión de los siguientes permite alcanzar una velocidad de transmisión mayor?",
    choices: [
      "STP.",
      "UTP categoría 3.",
      "UTP categoría 5.",
      "Cable coaxial de 50 ohmios.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 179,
    title:
      "El medio físico más adecuado para las comunicaciones intercontinentales es,",
    choices: [
      "Fibra óptica multimodo.",
      "Fibra óptica monomodo.",
      "Fibra óptica de índice gradual.",
      "Cable STP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 180,
    title:
      "Sobre los tipos de fibra óptica para transmisión de señales digitales, es cierto que,",
    choices: [
      "La fibra monomodo provoca más distorsión intermodal que la fibra multimodo.",
      "La multimodo permite transmitir pulsos de luz a mayor frecuencia que la monomodo.",
      "Para una misma distancia, la multimodo tiene un mayor ancho de banda que la monomodo.",
      "Para un mismo ancho de banda, la monomodo permite transmitir a mayores distancias.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 181,
    title:
      "En relación a las técnicas de contienda para el acceso a un medio compartido, es FALSOque,",
    choices: [
      "Con la transmisión ALOHA, un equipo no tiene en cuenta la posible existencia de una señalen el medio físico antes de enviar la suya.",
      "Con transmisión CSMA, un equipo puede enviar una trama de datos cuando no detecta lapresencia de otra señal en el medio físico.",
      "Tanto con ALOHA como con CSMA, pueden existir colisiones al transmitir datos.",
      "En general, la transmisión de tipo CSMA ofrece un menor rendimiento que la ALOHA.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 182,
    title:
      "El campo de secuencia de verificación de trama (FCS) de una trama de enlace en un protocolo de la arquitectura OSI es parte de la,",
    choices: [
      "PCI de enlace.",
      "SDU de enlace.",
      "ICI de enlace.",
      "IDU de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 183,
    title:
      "Respecto a los tipos de servicio que puede ofrecer el nivel de enlace al de red, es cierto que,",
    choices: [
      "El servicio con conexión y con reconocimiento de tramas es el más rápido.",
      "Los servicios sin confirmación se utilizan cuando el medio físico tiene una tasa de error alta.",
      "El servicio sin conexión y sin confirmación es el más adecuado para redes locales de calidad.",
      "Los servicios con confirmación son necesariamente orientados a conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 184,
    title:
      "Habitualmente, en un protocolo orientado a bit, ¿qué operación realiza un emisor para evitar la interpretación incorrecta de secuencias de bits de datos que coinciden con el código del delimitador 01111110?",
    choices: [
      "Añade un cero después de cada secuencia de cinco unos seguidos.",
      "Sustituye cada secuencia de cinco unos seguidos por un cero.",
      "Cambia cada secuencia de seis unos seguidos por una secuencia de cinco unos y un cero.",
      "Duplica el código del delimitador cada vez que aparece entre los bits de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 185,
    title:
      "Cuál es el valor del campo de detección de errores que hay que asociar a la secuencia debits de datos ‘100011’ utilizando un código CRC con el polinomio generador x2+1?",
    choices: ["00.", "01.", "10.", "11."],
    solution: "",
    explanation: "",
  },
  {
    id: 186,
    title:
      "Para que en el envío de paquetes de información en un protocolo de ventana deslizante seaproveche adecuadamente el medio físico, debe verificarse que:",
    choices: [
      "El emisor pueda enviar paquetes durante todo el tiempo de espera de un ACK.",
      "El emisor tenga un tamaño de ventana igual a 1.",
      "El receptor tenga un tamaño de ventana igual a 1.",
      "El receptor tenga un tamaño de ventana mayor que el emisor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 187,
    title:
      "El aprovechamiento del medio físico en un protocolo de ventana deslizante selectivo, NOdepende de,",
    choices: [
      "La tasa de error en el medio físico.",
      "El número medio de envíos de paquetes necesarios para enviar un paquete de formacorrecta.",
      "La velocidad de transferencia en el medio físico.",
      "El número medio de reenvíos de paquetes necesarios para enviar un paquete de formacorrecta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 188,
    title:
      "Si un protocolo de parada y espera emplea sólo numeración de las tramas de datos, escierto que:",
    choices: [
      "Pueden producirse errores de duplicación.",
      "Pueden producirse errores de sincronización emisor - receptor.",
      "Pueden producirse errores de duplicación y de sincronización.",
      "No pueden producirse errores de duplicación ni de sincronización.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 189,
    title:
      "Cuál es la principal causa de la pérdida de sincronización de los asentimientos oconfirmaciones en un proceso emisor de un protocolo de parada y espera?",
    choices: [
      "La llegada de datos duplicados al receptor.",
      "La pérdida de las tramas de asentimiento.",
      "La utilización de un temporizador en el emisor con demasiado tiempo de espera.",
      "Que el receptor tarde demasiado tiempo en enviar el asentimiento de una trama de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 190,
    title:
      "Cuál de los siguientes tipos de trama de supervisión del protocolo HDLC sirve paraindicar una confirmación negativa de una trama con errores cuando se utiliza envíocontinuo con repetición no selectiva?",
    choices: ["RR.", "RNR.", "REJ.", "SREJ."],
    solution: "",
    explanation: "",
  },
  {
    id: 191,
    title:
      "Una empresa con oficinas en Madrid, Paris y Berlín está probablemente conectada a través de una red:",
    choices: ["LAN.", "WAN.", "MAN.", "Ethernet."],
    solution: "",
    explanation: "",
  },
  {
    id: 192,
    title:
      "La seguridad y privacidad son temas que preocupan especialmente a redes con topología en:",
    choices: ["Estrella.", "Bus.", "Árbol.", "Malla."],
    solution: "",
    explanation: "",
  },
  {
    id: 193,
    title:
      "En el modelo OSI, el cifrado y descifrado de los datos son responsabilidad del nivel:",
    choices: ["Físico.", "Enlace", "Presentación.", "Sesión."],
    solution: "",
    explanation: "",
  },
  {
    id: 194,
    title:
      "El desplazamiento en fase correspondiente a un desplazamiento de ¾ de ciclo se corresponde con:",
    choices: ["0º.", "90º.", "3π/2.", "3π/4."],
    solution: "",
    explanation: "",
  },
  {
    id: 195,
    title:
      "Se pretende digitalizar la voz humana. Sabiendo que ésta contiene normalmente frecuencias entre 0Hz y los 4000Hz, y que se emplean 8 bits por muestra, la velocidad del proceso será:",
    choices: ["8000 bps.", "4000 Kbps.", "64.000 bps.", "32.000 bps"],
    solution: "",
    explanation: "",
  },
  {
    id: 196,
    title:
      "De las técnicas de modulación analógica presentes en la actualidad, se puede afirmar que:",
    choices: [
      "ASK sólo permite dos niveles de amplitud para codificar bits.",
      "PSK no es susceptible a la degradación por atenuación que afecta a ASK.",
      "El mejor método es FSK, porque las frecuencias de una señal son teóricamente infinitas.",
      "QPSK es una modulación combinada FSK-ASK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 197,
    title:
      "Si un npolinomio generador de CRC es etiquetado como x12+x6+x5+1, la secuencia binaria equivalente es:",
    choices: [
      "100000110001.",
      "0111110011110.",
      "100001100001.",
      "1000001100001.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 198,
    title: "Un factor de exactitud de una señal PCM reconstruida es:",
    choices: [
      "Número de bits usados en la cuantización.",
      "Velocidad en baudios.",
      "Frecuencia de la señal portadora.",
      "El ancho de banda de la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 199,
    title:
      "La codificación Manchester es una técnica de banda base que permite:",
    choices: [
      "Conseguir mayor velocidad de envío de datos que la Manchester diferencial de tipo Delta.",
      "Incluir una señal de reloj para sincronizar al emisor y receptor.",
      "El envío por la línea de un nivel de componente continua superior a cero.",
      "Ninguna de las anterires.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 200,
    title:
      "A medida que se incrementa la velocidad de envío de datos (en bps), el ancho de banda de la señal:",
    choices: [
      "Se decrementa.",
      "Se incrementa.",
      "Se duplica.",
      "Permanece constante.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 201,
    title:
      "En relación a los medios de transmisión empleados en la actualidad, se puede afirmar que:",
    choices: [
      "El par trenzado permite un envío de frecuencias mayor que el cable coaxial.",
      "La fibra óptica permite mayores velocidades, a pesar de una mayor atenuación de la señal.",
      "Las redes LAN no pueden emplear medios “no guiados”.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 202,
    title:
      "La velocidad máxima de transmisión en un canal de comunicación con frecuencia máxima 20000Hz y frecuencia mínima 12000Hz, y un ruido de línea debido a calentamiento térmico de 20dB:",
    choices: ["≈ 19765bps.", "≈ 29962bps.", "≈ 53265bps.", "≈ 62500bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 203,
    title:
      "El campo de control b1b2b3b4b5b6b7b8: ‘11000000’ en una trama HDLC indicaría:",
    choices: [
      "Que no es una trama HDLC válida.",
      "La presencia de una trama de supervisión.",
      "La presencia de una trama de información.",
      "La presencia de una trama no numerada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 204,
    title:
      "La velocidad de transmisión para una línea que emplea modulación PSK con 22.5º de separación entre puntos de fase y una velocidad de modulación de 1602 baudios es:",
    choices: ["4806 baudios.", "3204 bps.", "6408 bps.", "4806 bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 205,
    title:
      "Si una onda senoidal que se ha empleado para transmitir información en el  medio físico completa un ciclo en 10 segundos. ¿Cuál es su frecuencia?",
    choices: ["4Hz.", "0,75 bps.", "0,5 Hz.", "0,1 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 206,
    title: "En la siguiente situación de la Red de Petri:",
    choices: [
      "Si T2 se dispara una vez, en la red sólo N4 poseerá testigo.",
      "Si T2 se dispara, en la red N4 poseerá testigo.",
      "Si T2 se dispara dos veces, en la red N1 y N3 poseerán testigo.",
      "Si T2 se dispara una vez, habrá testigos en todos los nodos menos en N1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 207,
    title:
      "Qué codificación se emplea en el siguiente gráfico para enviar al medio el carácter ‘y’ (01111001)?",
    choices: [
      "NRZ.",
      "Manchester diferencial.",
      "RZ bipolar.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 208,
    title: "La modulación QAM está relacionada con:",
    choices: ["ASK y FSK.", "FSK y PSK.", "PSK y ASK.", "2-PSK y 2-FSK."],
    solution: "",
    explanation: "",
  },
  {
    id: 209,
    title:
      "Si la distancias Hamming entre palabras de un código vienen determinadas por el siguiente conjunto de distancias {3,4,5,4}, es posible corregir el siguiente número de errores:",
    choices: ["2.", "3.", "4.", "1."],
    solution: "",
    explanation: "",
  },
  {
    id: 210,
    title:
      "El proceso generación de CRC es una de las funciones básicas asociadas a un nivel OSI. Concretamente:",
    choices: [
      "Nivel de enlace.",
      "Nivel de transporte",
      "Nivel IP.",
      "Nivel físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 211,
    title:
      "La funcionalidad de encaminamiento es necesaria en los nodos de una red de,",
    choices: [
      "Difusión en bus.",
      "Difusión en anillo.",
      "Conmutación de circuitos.",
      "Conmutación de paquetes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 212,
    title:
      "El empleo de circuitos virtuales en una red de conmutación de paquetes se caracteriza por que,",
    choices: [
      "Para cada paquete transmitido se establece un camino en la red de comunicaciones.",
      "Todos los paquetes de una comunicación emplean la misma ruta al ser transmitidos.",
      "Cada nodo decide el camino a seguir para cada paquete transmitido.",
      "Si un nodo de un circuito falla, la comunicación no se interrumpe entre el origen y el destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 213,
    title:
      "Una red de conmutación de paquetes basada en datagramas se caracteriza por,",
    choices: [
      "Realizar el encaminamiento de los paquetes más lentamente que en una red de circuitos virtuales.",
      "Realizar el encaminamiento de los paquetes más rápidamente que en una red de circuitos virtuales.",
      "Encaminar los paquetes por rutas con más saltos que las rutas en una red de circuitos virtuales.",
      "Encaminar los paquetes por rutas con menos saltos que las rutas en una red de circuitos virtuales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 214,
    title:
      "Si en una red de conmutación de paquetes basada en circuitos virtuales se produce congestión, es cierto que,",
    choices: [
      "Los circuitos virtuales establecidos funcionarán adecuadamente y no se permitirán establecer nuevos circuitos.",
      "Todos los circuitos virtuales establecidos sufrirán una ralentización en el encaminamiento de los paquetes.",
      "Los nuevos circuitos virtuales que se establezcan sufrirán un encaminamiento más rápido de los paquetes.",
      "En una red de circuitos virtuales no se produce congestión, se produce saturación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 215,
    title:
      "La interconexión de dos redes de difusión con diferente direccionamiento y diferente protocolo de nivel de enlace y que emplean la arquitectura TCP/IP, ha de realizarse con,",
    choices: ["Un repetidor.", "Un puente.", "Un router.", "Una pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 216,
    title:
      "La comunicación entre la capa n de la arquitectura de red de un equipo y la capa n+1 de la arquitectura de otro equipo distinto se realiza,",
    choices: [
      "Empleando la comunicación horizontal entre la capa n y la capa n+1.",
      "Empleando la comunicación vertical entre la capa n y la capa n+1.",
      "Empleando los servicios de la capa n-1 de los dos extremos.",
      "La comunicación entre capas de distintos equipos y diferente nivel no es posible.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 217,
    title:
      "La PDU del nivel n que se envía al nivel n del otro extremo incorpora,",
    choices: [
      "Las PCI de todos los niveles de la arquitectura de red.",
      "Las PCI de los niveles n y superiores al n.",
      "Las PCI de los niveles n e inferiores al n.",
      "Sólo la PCI del nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 218,
    title:
      "Si un servicio que ofrece un nivel de la arquitectura de red es orientado a conexión, es cierto que,",
    choices: [
      "El servicio es siempre fiable y no se produce pérdida de datos.",
      "La comunicación puede llevarse a cabo aunque uno de los extremos no esté listo.",
      "El extremo no iniciador del servicio es quién realiza la solicitud de conexión.",
      "Siempre debe realizarse la desconexión después de realizar el servicio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 219,
    title:
      "El nivel de red en la arquitectura de red TCP/IP presenta la característica de,",
    choices: [
      "Encaminamiento de los paquetes de información con circuitos virtuales.",
      "Encaminamiento de los paquetes de información con datagramas.",
      "Establecer una conexión con el otro extremo para verificar si puede enviar paquetes IP.",
      "Identificar caminos predefinidos en la red para el envío de los paquetes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 220,
    title:
      "En una red con arquitectura TCP/IP, ¿ qué protocolo de la arquitectura permite detectar que un paquete IP no ha alcanzado su destino ?",
    choices: [
      "El protocolo de aplicación cuando se emplea TCP en la capa de transporte.",
      "El protocolo UDP.",
      "El protocolo ICMP.",
      "El protocolo IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 221,
    title:
      "Sobre el establecimiento de conexiones en la capa de transporte de TCP/IP es cierto que,",
    choices: [
      "Una estación puede realizar conexiones al mismo puerto destino de diferentes máquinas.",
      "Una estación puede realizar varias conexiones con el mismo número de puerto origen.",
      "Una estación no puede recibir conexiones desde diferentes estaciones a un mismo número de puerto.",
      "Un estación puede establecer dos conexiones con los mismos puertos y direcciones IP origen y destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 222,
    title:
      "Si se desea transmitir información con una señal de pulsos a través de un medio físico con un ancho de banda de 10000 Hz y a una velocidad de 90000 bps, la señal de pulsos necesita un número de niveles mínimo de,",
    choices: ["4.", "5.", "16.", "32."],
    solution: "",
    explanation: "",
  },
  {
    id: 223,
    title: "El nivel de ruido de un medio físico limita,",
    choices: [
      "El número de niveles que pueden emplearse para una señal de pulsos en ese medio.",
      "El ancho de banda del medio físico.",
      "El número de componentes frecuenciales que pueden transmitirse por el medio físico.",
      "La velocidad de propagación de la señal en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 224,
    title:
      "Qué tipo de codificación emplea transiciones para interpretar los bits de información ?",
    choices: [
      "Codificación binaria sin retorno a cero bipolar.",
      "Codificación binaria con retorno a cero unipolar.",
      "Codificación binaria con retorno a cero bipolar.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 225,
    title: "Qué tipo de modulación analógica es menos sensible al ruido ?",
    choices: [
      "Modulación FSK.",
      "Modulación PSK.",
      "Modulación ASK.",
      "Modulación PCM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 226,
    title:
      "Cuál es el ancho de banda máximo de la señales analógicas que pueden enviarse a través de un medio físico de 100 KHz de ancho de banda empleando una modulación PCM de 4 bits ?",
    choices: ["25 KHz.", "100 KHz.", "50 KHz.", "12.5 KHz."],
    solution: "",
    explanation: "",
  },
  {
    id: 227,
    title:
      "Indica en cuál de los siguientes medios físicos el ruido cruzado o diafonía es mayor:",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 5.",
      "Cable STP categoría 5.",
      "Fibra óptica multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 228,
    title:
      "La transmisión de datos empleando fibra óptica NO se caracteriza por,",
    choices: [
      "Emplear un único haz de luz en las fibras monomodo.",
      "Permitir velocidades de transmisión de 100 Mbps a distancias de cientos de kilómetros.",
      "Ser inmune al ruido electromagnético externo.",
      "Tener una relación señal-ruido muy baja.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 229,
    title: "La técnica de contienda CSMA-CD se caracteriza por,",
    choices: [
      "Realizar un reparto del medio físico estableciendo prioridades.",
      "Reenviar paquetes que han sufrido colisión sin comprobar el estado del medio físico.",
      "No reenviar los paquetes que sufren una colisión.",
      "Comprobar el medio físico antes de reenviar un paquete después de producirse una colisión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 230,
    title:
      "Los protocolos de nivel de enlace orientados a bit se caracterizan por,",
    choices: [
      "No añadir información redundante en los datos de los paquetes.",
      "Delimitar los paquetes con secuencias de bits especiales.",
      "Presentar menos errores en el medio físico que los orientados a carácter.",
      "Añadir información redundante en la cabecera de los paquetes de nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 231,
    title:
      "En un protocolo de nivel de enlace no orientado a conexión y con confirmación es cierto que,",
    choices: [
      "El emisor de un paquete de datos no sabe si llegará correctamente a su destino.",
      "El receptor de la información no puede rechazar un envío de datos.",
      "Si un paquete de datos sufre un error en el medio, el emisor no puede detectarlo.",
      "El emisor no enviará nunca paquetes de datos a una estación que no está activa.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 232,
    title:
      "En un protocolo de ventana deslizante de envío continuo con repetición NO selectiva es cierto que,",
    choices: [
      "La ventana del emisor referencia las tramas ya enviadas correctamente al receptor.",
      "El receptor acepta los paquetes con secuencias que están dentro de su ventana.",
      "La ventana del emisor tiene un tamaño que no varía durante el funcionamiento del protocolo.",
      "La ventana del receptor tiene un tamaño mayor que el número de secuencias de numeración.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 233,
    title:
      "La numeración de los paquetes de datos en un protocolo de parada y espera evita,",
    choices: [
      "Los errores de duplicación.",
      "Los errores de sincronización.",
      "Los errores en el medio físico debido al ruido.",
      "La pérdida de ACKs en el medio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 234,
    title:
      "Si dos estaciones utilizan el protocolo HDLC como protocolo de nivel de enlace es cierto que,",
    choices: [
      "El intercambio de datos siempre es unidireccional.",
      "El nivel de red reenvía los paquetes HDLC que sufren errores en el medio físico.",
      "Las dos estaciones intercambian datos con un protocolo de parada y espera.",
      "Es necesario el establecimiento de una conexión antes del intercambio de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 235,
    title:
      "Si un equipo transmite un paquete PPP y alguno de los bits que lo componen sufre una alteración, es cierto que,",
    choices: [
      "El receptor del paquete lo rechaza.",
      "El receptor envía un NACK del paquete.",
      "El receptor solicita el reenvío del paquete erróneo.",
      "Expira el temporizador del protocolo PPP y el emisor reenvía el paquete del que no ha recibido ACK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 236,
    title:
      "Qué factores producen un aumento de la congestión en una red TCP/IP ?",
    choices: [
      "Valores de MTU iguales en toda la red.",
      "Tablas de encaminamiento muy grandes.",
      "Porcentaje de uso de la CPU de los routers para encaminamiento inferiores al 40%.",
      "El empleo de protocolos con control del flujo como TCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 237,
    title:
      "Si un equipo con dirección IP pública envía un paquete TCP SYN dirigido a una dirección IP privada, es cierto que",
    choices: [
      "El equipo recibirá un mensaje Destination Unreachable.",
      "El equipo recibirá un mensaje TTL exceeded in transit.",
      "El equipo recibirá un mensaje Source Quench.",
      "El equipo recibirá un paquete TCP RST.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 238,
    title: "Sobre el protocolo de encaminamiento RIP es cierto que,",
    choices: [
      "Cuando se aplica a redes con más de 16 saltos obtiene soluciones mejores que con OSPF.",
      "Está diseñado para funcionar más eficientemente en Internet que con redes LAN.",
      "Una entrada en una tabla RIP puede actualizarse con una métrica mayor.",
      "Las entradas en una tabla RIP no requieren de actualizaciones cada cierto tiempo para seguir activas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 239,
    title: "Sobre el protocolo de encaminamiento OSPF NO es cierto que,",
    choices: [
      "Emplea el algoritmo de Dijkstra para obtener la solución de encaminamiento en la red.",
      "Intercambia menos información de encaminamiento que RIP.",
      "Utiliza la difusión para el envío de los mensajes OSPF en la red.",
      "En la red se designan unos routers que establecen el diálogo OSPF para obtener la solución de encaminamiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 240,
    title:
      "La dirección de los equipos origen y destino de un paquete NO aparece en la cabecera del mismo si se trata de redes del tipo,",
    choices: [
      "Difusión en bus.",
      "Difusión en anillo.",
      "Conmutación con circuitos virtuales.",
      "Conmutación con datagramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 241,
    title:
      "El empleo de datagramas en una red de conmutación de paquetes se caracteriza por que,",
    choices: [
      "Para cada paquete transmitido se establece un camino en la red de comunicaciones.",
      "Todos los paquetes de una comunicación emplean siempre la misma ruta al ser transmitidos.",
      "En cada nodo se decide el camino a seguir para cada paquete.",
      "Si un nodo de la red falla, la comunicación se interrumpe entre el origen y el destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 242,
    title:
      "Si en una red de difusión en bus se envía un paquete dirigido a la dirección MAC de una estación es cierto que,",
    choices: [
      "Todas las estaciones de la red pueden procesar el paquete.",
      "Todas las estaciones de la red reciben el paquete.",
      "Sólo una estación de la red recibe el paquete.",
      "Sólo las estaciones del grupo al que pertenece la estación reciben el paquete.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 243,
    title:
      "Si en una red de conmutación de paquetes basada en datagramas se produce congestión, es cierto que,",
    choices: [
      "Los nodos de la red no tienen suficiente capacidad de encaminamiento.",
      "Los nodos de la red precisan de líneas de comunicación a mayor velocidad de transmisión.",
      "Es necesario aumentar el envío de información de las estaciones en la red para reducir la congestión.",
      "En una red de datagramas no se produce congestión, se produce saturación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 244,
    title:
      "La interconexión de dos redes de difusión con el mismo protocolo de nivel de enlace y que presente el menor número de colisiones ha de realizarse con,",
    choices: ["Un repetidor.", "Un puente.", "Un router.", "Una pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 245,
    title:
      "La comunicación entre la capa n de la arquitectura de red de un equipo A y la capa n de la arquitectura de otro equipo distinto B se realiza,",
    choices: [
      "Empleando la comunicación horizontal entre la capa n-1 de A y la capa n-1 de B.",
      "Empleando la comunicación vertical entre la capa n y la capa n+1 de A.",
      "Empleando los servicios de la capa n+1 de los dos extremos.",
      "La comunicación entre capas de distintos equipos y el mismo nivel no es posible.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 246,
    title: "La SDU del nivel n que se envía al nivel n-1 incorpora,",
    choices: [
      "Las PCI de todos los niveles de la arquitectura de red.",
      "Las PCI de los niveles n y superiores al n.",
      "Las PCI de los niveles n e inferiores al n.",
      "Sólo la PCI del nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 247,
    title:
      "La fragmentación de una PDU en el nivel n de la arquitectura de red se caracteriza por,",
    choices: [
      "Enviar más de una SDU al nivel n-1 de la arquitectura.",
      "Enviar más de una SDU al nivel n del otro extremo.",
      "Enviar una sola PDU al nivel n del otro extremo.",
      "Enviar una sola SDU al nivel n-1 de la arquitectura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 248,
    title:
      "Si el nivel n de una arquitectura de red no puede intercambiar PDU’s con el nivel n del otro extremo es cierto que,",
    choices: [
      "El nivel n+1 puede intercambiar PDU’s con el nivel n+1 par.",
      "El nivel n+1 no puede emplear los servicios que le ofrece el nivel n.",
      "El nivel n-1 puede emplear los servicios que le ofrece el nivel n.",
      "El nivel n+1 puede emplear los servicios ofrecidos por el nivel n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 249,
    title:
      "Si un servicio que ofrece un nivel de la arquitectura de red es NO orientado a conexión, es cierto que,",
    choices: [
      "Es necesario que el extremo no iniciador del servicio acepte la solicitud de realización.",
      "La comunicación puede llevarse a cabo aunque uno de los extremos no esté listo.",
      "El servicio se realiza sólo si los dos extremos de la comunicación están preparados.",
      "El servicio tarda más tiempo en realizarse que en el caso orientado a conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 250,
    title:
      "En una red con arquitectura TCP/IP, ¿ qué protocolo de la arquitectura permite detectar que un paquete UDP no ha alcanzado su destino ?",
    choices: [
      "El protocolo de la capa de aplicación.",
      "El protocolo UDP.",
      "El protocolo TCP.",
      "El protocolo IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 251,
    title:
      "Si se desea transmitir información con una señal de pulsos a través de un medio físico con un ancho de banda de 10000 Hz, una relación señal-ruido de 10 dB y a una velocidad de 90000 bps, la señal de pulsos necesita un número de niveles mínimo de,",
    choices: [
      "4.",
      "5.",
      "16.",
      "La señal no puede ser transmitida por ese medio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 252,
    title:
      "Qué relación señal-ruido es la menos adecuada para transmitir señales por un medio físico?",
    choices: ["10 dB.", "20 dB.", "-10 dB.", "-20 dB."],
    solution: "",
    explanation: "",
  },
  {
    id: 253,
    title:
      "Qué tipo de codificación permite alcanza mayores tasas de velocidad de transmisión ?",
    choices: [
      "Codificación binaria sin retorno a cero bipolar.",
      "Codificación binaria con retorno a cero unipolar.",
      "Codificación binaria con retorno a cero bipolar.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 254,
    title:
      "Qué tipo de modulación analógica es más sensible al ruido presente en el medio físico ?",
    choices: [
      "Modulación FSK.",
      "Modulación PSK.",
      "Modulación ASK.",
      "Modulación PCM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 255,
    title:
      "Qué velocidad de transmisión es necesaria para enviar a través de un medio físico 2 señales analógicas de 100 KHz de ancho de banda empleando una modulación PCM de 6 bits ?",
    choices: ["12800 Kbps.", "25600 Kbps.", "1200 Kbps.", "2400 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 256,
    title:
      "Indica en cuál de los siguientes medios físicos la dispersión intramodal es mayor.",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 5.",
      "Fibra óptica monomodo.",
      "Fibra óptica multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 257,
    title:
      "La transmisión de datos empleando enlaces vía satélite se caracteriza por,",
    choices: [
      "Tener una cobertura menor que las redes inalámbricas ad hoc.",
      "Ser muy adecuadas para el intercambio de información en tiempo real.",
      "Permitir una comunicación a un coste razonable para lugares remotos y aislados.",
      "Permitir velocidades de transmisión elevadas con un coste económico menor que la fibra óptica.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 258,
    title: "Las técnicas de contienda se caracterizan por,",
    choices: [
      "Establecer turnos para transmitir información en el medio físico.",
      "Producirse colisiones en la solicitud de turnos de transmisión.",
      "Impedir que se produzcan colisiones en el medio físico.",
      "Establecer un mecanismo de transmisión cuando se ha producido una colisión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 259,
    title:
      "Los protocolos de nivel de enlace orientados a carácter se caracterizan por,",
    choices: [
      "No añadir información redundante en los datos de los paquetes.",
      "Introducir bits redundantes en la cabecera del nivel de enlace.",
      "Presentar menos errores en el medio físico que los orientados a bit.",
      "Añadir información redundante en el campo de datos de nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 260,
    title:
      "En un medio físico donde se producen frecuentes errores y se desea transmitir información sensible al retardo (voz, vídeo) se empleará un servicio,",
    choices: [
      "No orientado a conexión y confirmado.",
      "Orientado a conexión y no confirmado.",
      "Orientado a conexión y confirmado.",
      "No orientado a conexión y no confirmado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 261,
    title:
      "En un protocolo de nivel de enlace orientado a conexión y con confirmación es cierto que,",
    choices: [
      "El emisor de un paquete de datos no sabe si llegará correctamente a su destino.",
      "El receptor de la información puede rechazar un envío de datos.",
      "Si un paquete de datos sufre un error en el medio físico, el emisor se encarga de detectarlo.",
      "El emisor no enviará nunca paquetes de datos a una estación que no está activa.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 262,
    title:
      "En un protocolo de ventana deslizante de envío continuo con repetición selectiva es cierto que,",
    choices: [
      "El emisor puede enviar paquetes que serán rechazados por el receptor.",
      "El receptor puede aceptar paquetes con secuencias que están fuera de su ventana.",
      "La ventana del emisor tiene un tamaño que no varía durante el funcionamiento del protocolo.",
      "La ventana del receptor sólo permite recibir una única trama de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 263,
    title:
      "La pérdida de un paquete de datos en un protocolo de parada y espera sin numeración de ACK’s provoca,",
    choices: [
      "Un error de duplicación.",
      "Un error de sincronización.",
      "El reenvío indefinido del mismo paquete al receptor.",
      "El reenvío de la trama perdida.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 264,
    title:
      "Si dos estaciones utilizan el protocolo PPP como protocolo de nivel de enlace es cierto que,",
    choices: [
      "El intercambio de datos siempre es unidireccional.",
      "El nivel de red IP reenvía los paquetes PPP que sufren errores en el medio físico.",
      "Las dos estaciones intercambian datos con un protocolo de parada y espera.",
      "Es posible detectar errores en la transmisión de los bits de los paquetes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 265,
    title:
      "Si un equipo transmite un paquete HDLC y alguno de los bits que lo componen sufre una alteración, es cierto que,",
    choices: [
      "El receptor del paquete lo acepta y lo envía al nivel superior para que detecte errores.",
      "El receptor puede informar al emisor de que el paquete recibido es erróneo.",
      "El emisor no puede detectar que algún paquete ha sufrido un error y la capa superior tendrá que corregirlo.",
      "El receptor corrige el error en el paquete y envía los datos al nivel superior.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 266,
    title:
      "Qué factores NO provocan un aumento de la congestión en una red TCP/IP ?",
    choices: [
      "Valores de MTU diferentes en toda la red.",
      "Tablas de encaminamiento muy complejas.",
      "Porcentaje de uso de la CPU de los routers para encaminamiento inferiores al 40%.",
      "El empleo de protocolos sin control del flujo como UDP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 267,
    title:
      "Si una red local emplea el mecanismo NAT en su router de acceso a Internet, es cierto que",
    choices: [
      "El router recibirá desde Internet paquetes dirigidos a las direcciones IP privadas internas.",
      "El router transmitirá paquetes a Internet sólo con su dirección IP como origen.",
      "Los equipos de Internet pueden establecer conexiones con los equipos de la red interna.",
      "Los equipos de la red interna no pueden establecer conexiones con equipos de Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 268,
    title: "Sobre el protocolo de encaminamiento BGP es cierto que,",
    choices: [
      "Emplea el algoritmo de Dijkstra para obtener la solución de encaminamiento en la red.",
      "Intercambia información entre los routers empleando la multidifusión.",
      "Utiliza la difusión para el envío de los mensajes BGP en la red.",
      "Los routers BGP disponen de un conocimiento global de los SA de Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 269,
    title:
      "Si un paquete IP es enviado a la dirección 224.0.0.255 es cierto que,",
    choices: [
      "El paquete es procesado por todos los equipos de todos los grupos de multidifusión de Internet.",
      "La dirección IP de destino se cambia por 224.255.255.255 para que llegue a todos los equipos de la red donde es transmitido.",
      "Los routers que reciben este paquete lo envían a todos los routers multicasting de Internet.",
      "El paquete sólo es procesado por los equipos que pertenecen a este grupo de multidifusión y se encuentran en la red donde se transmite.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 270,
    title:
      "El empleo de la tecnología punto a punto para las redes WAN se caracteriza por,",
    choices: [
      "Su bajo coste económico de cableado frente a la tecnología de difusión.",
      "El empleo de la multidifusión para establecer grupos de máquinas en un enlace punto a punto.",
      "La transmisión de un único paquete para enviar información a todos los nodos de la red.",
      "La tolerancia a fallos que presenta si existen varios caminos a un determinado destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 271,
    title:
      "La transmisión de información en una red LAN de difusión se caracteriza por,",
    choices: [
      "Una elevada tasa de error en el medio debido a la gran extensión geográfica de la red.",
      "Precisar de un esquema de direccionamiento a nivel de enlace.",
      "El empleo de algoritmos de encaminamiento para el intercambio de paquetes.",
      "Establecer caminos en la red entre cada par de equipos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 272,
    title:
      "Si un paquete que circula en una red de conmutación de paquetes por datagramas sufre un error en un enlace punto a punto con protocolo PPP es cierto que,",
    choices: [
      "La capa de transporte con TCP detecta el error y lo corrige.",
      "La capa de enlace detecta el error y lo corrige.",
      "La capa de red detecta el error y lo corrige.",
      "La capa de enlace detecta el error y la capa de red lo corrige.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 273,
    title:
      "El aumento en el número de niveles de una arquitectura de red se caracteriza por,",
    choices: [
      "Establecer funcionalidades más sencillas para cada capa dentro de la arquitectura de red.",
      "Establecer funcionalidades más complejas para cada capa dentro de la arquitectura de red.",
      "Aumentar el número de errores en la transmisión de paquetes por el medio físico.",
      "Disminuir el número de errores en la transmisión de paquetes por el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 274,
    title:
      "La realización de un servicio ofrecido por la capa n de una arquitectura de red OSI precisa de,",
    choices: [
      "El intercambio de PDU’s entre las entidades pares del nivel n.",
      "El intercambio de PDU’s entre las entidades pares del nivel n-1.",
      "El intercambio de PDU’s entre las entidades pares del nivel n+1.",
      "El intercambio de IDU’s entre las entidades pares del nivel n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 275,
    title:
      "La fragmentación de una SDU procedente del nivel n+1 en una arquitectura de red OSI se realiza,",
    choices: [
      "Añadiendo a cada fragmento de la SDU una PCI del nivel n+1.",
      "Añadiendo a cada fragmento de la SDU una ICI del nivel n.",
      "Añadiendo a cada fragmento de la SDU una PCI del nivel n.",
      "Añadiendo a cada fragmento de la SDU una ICI del nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 276,
    title:
      "La capa de transporte en la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Reducir la tasa de errores en el medio físico al emplear el protocolo UDP.",
      "Permitir un control de errores empleando el protocolo TCP.",
      "Establecer conexiones a múltiples destino empleando el mismo puerto cliente.",
      "Proporcionar siempre a la capa de aplicación una comunicación no segura, debido al funcionamiento con datagramas de la capa de red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 277,
    title:
      "En el modelo de arquitectura de red TCP/IP, los paquetes que se intercambian a nivel físico,",
    choices: [
      "Incorporan siempre las cabeceras de los protocolos de todos los niveles de la arquitectura de red.",
      "Incorporan siempre la cabecera del protocolo IP.",
      "Incorporan siempre la cabecera del protocolo IP y TCP.",
      "Incorporan siempre la cabecera del protocolo IP y UDP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 278,
    title:
      "Los paquetes IP dirigidos a la dirección IP de broadcast de una red IP se propagan,",
    choices: [
      "A través de routers, puentes y repetidores.",
      "A través de routers y puentes.",
      "A través de puentes y repetidores.",
      "A través de pasarelas, routers y puentes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 279,
    title:
      "La interconexión de dos redes LAN Ethernet a través de una red con arquitectura TCP/IP se consigue,",
    choices: [
      "Empleando dos routers, uno en cada LAN.",
      "Empleando dos puentes, uno en cada LAN.",
      "Empleando dos pasarelas, una en cada LAN.",
      "Empleando dos repetidores, uno en cada LAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 280,
    title:
      "El número de armónicos de una señal de pulsos que pueden transmitirse por un medio físico depende,",
    choices: [
      "Del ancho de banda del medio físico en el que será transmitida la señal.",
      "Del número de niveles empleado en la codificación.",
      "De la relación señal-ruido en el medio físico.",
      "De la información digital que contenga la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 281,
    title:
      "La atenuación que sufre una señal al transmitirse por un medio físico NO depende de,",
    choices: [
      "La velocidad de transferencia empleada.",
      "El ancho de banda del medio físico.",
      "La relación señal-ruido del medio físico.",
      "El número de niveles empleado en la codificación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 282,
    title: "La modulación analógica por cambio en amplitud permite,",
    choices: [
      "Transmitir cualquier señal de información a través de un medio físico con 4000 Hz de ancho de banda.",
      "Reducir la relación señal-ruido en el medio físico de transmisión.",
      "Adecuar el ancho de banda de la señal moduladora al ancho de banda del medio físico.",
      "Aumentar el ancho de banda de la señal moduladora.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 283,
    title:
      "La modulación analógica que permite la transmisión de señales con mayor calidad y mejor aprovechamiento del medio físico es,",
    choices: [
      "La modulación por cambio de frecuencia y fase.",
      "La modulación por cambio de amplitud.",
      "La modulación por cambio de frecuencia.",
      "La modulación por cambio de fase y amplitud.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 284,
    title: "La modulación digital por código de pulsos (PCM) permite,",
    choices: [
      "Transmitir señales analógicas a través de un medio digital sin ninguna pérdida de información.",
      "Aumentar la velocidad de transferencia de una señal analógica.",
      "Transmitir información analógica empleando un medio físico que propaga señales de pulsos.",
      "Incorporar una señal digital de pulsos a señales analógicas que se transmiten en un medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 285,
    title:
      "Se desea enviar por un medio físico dos señales PCM multiplexadas en el tiempo. Una de las señales se corresponde con un canal de comunicación a 36 Kbps y la otra con un canal de 96 Kbps. El medio físico transmitirá bits de información a una velocidad de,",
    choices: ["132 Kbps.", "96 Kbps.", "36 Kbps.", "3456 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 286,
    title:
      "El empleo de pares de hilos de cobre trenzados para la transmisión de señales permite evitar,",
    choices: [
      "El ruido de impulso.",
      "El ruido cruzado.",
      "El ruido térmico.",
      "La interferencia de señales externas al cable.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 287,
    title:
      "La transmisión de señales digitales de pulsos a una velocidad de 100 Mbps y distancias de 100 metros es posible empleando,",
    choices: [
      "Cable coaxial de 50 Ω.",
      "Cable coaxial de 75 Ω.",
      "Cable par trenzado categoría 3.",
      "Cable par trenzado blindado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 288,
    title: "El efecto de la dispersión intermodal en fibras ópticas es mayor,",
    choices: [
      "En las fibras monomodo.",
      "Al disminuir la velocidad de transferencia.",
      "Al aumentar la distancia de la comunicación.",
      "Al aumentar la potencia del haz de luz del emisor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 289,
    title:
      "La interconexión de dos redes LAN en un entorno industrial donde existen gran cantidad de equipos eléctricos precisa como medio físico,",
    choices: [
      "Par trenzado STP.",
      "El aire, empleando ondas electromagnéticas.",
      "Cable coaxial de 75 Ω.",
      "Par trenzado UTP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 290,
    title:
      "El servicio más rápido ofrecido por la capa de enlace cuando en el medio físico no se producen errores es el,",
    choices: [
      "Servicio orientado a conexión confirmado.",
      "Servicio no orientado a conexión no confirmado.",
      "Servicio no orientado a conexión confirmado.",
      "Servicio orientado a conexión no confirmado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 291,
    title:
      "La técnica de detección de errores empleando códigos de redundancia cíclica (CRC) se fundamenta en,",
    choices: [
      "Enviar junto a los datos a transmitir los bits asociados a los coeficientes de un polinomio generador.",
      "Enviar junto a los datos el resto de una división de secuencias de bits asociados a polinomios.",
      "Enviar junto a los datos el resto de la división de la secuencia de los bits de datos entre los bits de un polinomio generador.",
      "Enviar junto a los datos la diferencia entre los bits de datos y los bits del polinomio generador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 292,
    title:
      "El error de duplicación en el control del flujo a nivel de enlace puede producirse en el protocolo,",
    choices: [
      "Protocolo de parada y espera con numeración de datos y ACK’s.",
      "Protocolo de parada y espera con numeración de datos.",
      "Protocolo de ventana deslizante.",
      "En ninguno de los protocolos de control del flujo anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 293,
    title: "El protocolo de nivel de enlace HDLC se caracteriza por,",
    choices: [
      "Emplear tramas no numeradas para el control del flujo emisor-receptor.",
      "Emplear un control del flujo de ventana deslizante unidireccional.",
      "Emplear tramas de información y supervisión para el control del flujo emisor-receptor.",
      "Emplear el control del flujo de parada y espera para la recuperación de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 294,
    title:
      "El establecimiento de los parámetros del nivel de red en una enlace PPP se realiza empleando,",
    choices: [
      "El protocolo NCP.",
      "El protocolo LCP.",
      "El protocolo CHAP.",
      "No es posible establecer parámetros del nivel de red con un protocolo de nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 295,
    title:
      "Si se desea realizar la interconexión de dos redes con direccionamiento privado a través de Internet, es cierto que,",
    choices: [
      "Es necesario emplear un túnel IP entre los routers de acceso a Internet de las redes privadas.",
      "Es necesario que ambas redes tengan la misma dirección de red IP.",
      "Es necesario que los routers de acceso a Internet empleen NAT.",
      "No es posible, es necesario siempre el direccionamiento público.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 296,
    title:
      "Qué situación NO es indicio de presencia de congestión en una red de comunicaciones ?",
    choices: [
      "Presencia de mensajes ICMP Fragment Reaseembly Time exceded.",
      "Presencia de mensajes ICMP Host Unreachable.",
      "Porcentaje de uso de CPU para encaminamiento en los routers del 70%.",
      "Fragmentación de paquetes IP en los routers de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 297,
    title:
      "El intercambio de información de encaminamiento en el protocolo BGP se realiza,",
    choices: [
      "Estableciendo conexiones TCP entre routers frontera.",
      "Estableciendo conexiones UDP entre routers frontera.",
      "Intercambiando paquetes TCP con dirección destino 255.255.255.255.",
      "Intercambiando paquetes UDP con una dirección destino de multicast.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 298,
    title: "La versión 2 de RIP tiene en común con la versión 1 que,",
    choices: [
      "Emplean la misma dirección IP de destino en los paquetes de información.",
      "Emplean una máscara de red para identificar destinos que son subredes.",
      "Emplean conexiones UDP para el intercambio de información.",
      "Intercambian sólo los destinos que han modificado su coste en la tabla de rutas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 299,
    title: "Una conexión a una VPN empleando PPTP se caracteriza por,",
    choices: [
      "Asegurar que ningún paquete de datos del túnel se pierde en el mismo.",
      "Emplear una conexión UDP para controlar la comunicación.",
      "Verificar la autenticidad del origen del túnel con el protocolo GRE.",
      "Autenticar al usuario que realiza la conexión VPN con el protocolo TCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 300,
    title:
      "En relación a la tecnología de transmisión empleada en las redes de computadores...",
    choices: [
      "En las redes de difusión no se permite el uso de mensajes de broadcast.",
      "En las redes punto a punto no se pueden emplear mensajes de multicast.",
      "Los mensajes multicast llegan a todas las máquinas de una red.",
      "Ninguna de las anteriores es correcta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 301,
    title:
      "La velocidad de modulación para la señal representada en la figura es:",
    choices: ["3 baudios.", "2 bps.", "1 baudio.", "6 baudios."],
    solution: "",
    explanation: "",
  },
  {
    id: 302,
    title:
      "Con respecto al modelo genérico de transferencia de información entre capas...",
    choices: [
      "La ICI forma parte de los datos transferidos entre capas.",
      "La PCI no forma parte de los datos transferidos entre capas.",
      "Al conjunto ICI + SDU no se le denomina PDU.",
      "El SAP es lo mismo que la SDU.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 303,
    title:
      "Teniendo en cuenta la encapsulación de protocolos del modelo OSI. Imagina que 001 es el código de la cabecera de presentación, 101 es el código de la cabecera de sesión, 100 es el código de la cabecera de enlace, 000 es el código de la cabecera de transporte y 111 el de red. Si se envía el dato 01 al medio, el código que se formará en el cable será:",
    choices: [
      "00110100011110001.",
      "10011100010100101.",
      "00110100010001111.",
      "00100011110110010",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 304,
    title:
      "El filtrado por dirección MAC a realizar en un Router WIFI para evitar dar acceso a la red a individuos no autorizados...",
    choices: [
      "Corresponde con un filtrado a nivel físico.",
      "Corresponde con un filtrado a nivel de enlace.",
      "No permite visualizar ningún dato de nuestra red.",
      "Ninguna de las anteriores es correcta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 305,
    title:
      "Las redes de Petri se definen como sistemas de especificación de protocolos...",
    choices: [
      "De ningún modo pueden ser empleadas para la validación de protocolos.",
      "Si una transición se activa, entonces todos los testigos de sus lugares de entrada pasan a los lugares de salida.",
      "Pueden modelar situaciones de concurrencia y sincronización.",
      "El grafo de alcanzabilidad siempre es finito.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 306,
    title:
      "Especificación, validación y verificación son conceptos relacionados con el diseño e implementación de protocolos de comunicación. Concretamente:",
    choices: [
      "La validación es el proceso en el que se comprueba que un protocolo realiza las funciones que se especificaron.",
      "La especificación mediante pseudocódigo corresponde a una especificación formal de protocolos.",
      "La validación es necesaria en protocolos de comunicación.",
      "Si se especifica un protocolo posteriormente no se podría validar.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 307,
    title:
      "Si se ha enviado la trama 100100001 al cable que une dos ordenadores y el polinomio generador empleado en emisor y receptor es x3+x2+1.  El CRC será:",
    choices: ["000.", "001.", "100.", "110."],
    solution: "",
    explanation: "",
  },
  {
    id: 308,
    title:
      "En relación a la fibra óptica y su uso como medio de transmisión...",
    choices: [
      "La fibra de índice discreto posee mejor calidad que la fibra monomodo.",
      "La fibra, en general, permite una mayor separación entre repetidores, frente a otros dispositivos de transmisión.",
      "El Diodo Laser presenta peor prestación como emisor que el diodo infrarrojo IRED.",
      "Su principal desventaja es que no puede ir bajo tierra.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 309,
    title:
      "Teóricamente, una señal compuesta periódica que se lanzase desde un emisor a un receptor estaría formada:",
    choices: [
      "Sólo por frecuencias impares, debido a la atenuación del medio.",
      "Por frecuencias de igual valor que el periodo.",
      "Por un número limitado de funciones armónicas de diferente amplitud y frecuencia.",
      "Por un número ilimitado de funciones armónicas de diferente amplitud y frecuencia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 310,
    title:
      "En la transmisión de caracteres por un cable de datos que presenta un ancho de banda igual a 1350Hz, podemos asegurar que:",
    choices: [
      "El armónico 32 podrá circular por el medio si la f0 no supera los 200Hz.",
      "El armónico 30 podrá circular por el medio si la f0 no supera los 100Hz.",
      "Ningún armónico podrá circular por el medio.",
      "Si la velocidad de envío es inferior a 32bps se podrá enviar el armónico 32.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 311,
    title:
      "Qué información sobre el concepto de ancho de banda de un medio de transmisión no es cierta?",
    choices: [
      "Puede variar en función de la velocidad que necesite alcanzar la señal en el medio.",
      "Depende de las características físicas del medio de transmisión.",
      "Se mide en unidades de Hertzios.",
      "Limita la velocidad de envío de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 312,
    title:
      "Si la Potencia de una señal (PS) es de 100W y la Potencia del ruido (PN) es de 2W, la atenuación producida en el medio será de:",
    choices: [
      "16,98 dB.",
      "15 W.",
      "0.",
      "No se puede calcular con estos datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 313,
    title:
      "Qué relacion Señal/Ruido debe tener un medio físico para lograr que la velocidad de transmisión de Shanon sea superior a la velocidad de Nyquist? (Se emplean 8 niveles de señalización).",
    choices: [
      "0.",
      "13db.",
      "63.",
      "El doble de potencia de señal respecto al ruido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 314,
    title:
      "Con respecto a la señalización empleada en una red de computadores...",
    choices: [
      "Una LAN tipo Ethernet emplea normalmente modulación analógica.",
      "Una LAN token ring hace uso de una variación diferencial de Manchester.",
      "NRZ no es una señalización binaria.",
      "ASK se refiere a cambios de amplitud en lo que se conoce como modulación digital.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 315,
    title:
      "Con los datos que se muestran en la siguiente gráfica se puede deducir que se trataría de  una modulación...",
    choices: ["2-PSK.", "3-PSK.", "4-PSK.", "16-PSK."],
    solution: "",
    explanation: "",
  },
  {
    id: 316,
    title:
      "En relación a la modulación PCM, se puede afirmar que si el Bseñal= Bmedio entonces:",
    choices: [
      "El número de niveles o estados máximos para la codificación de los valores será de 2.",
      "El número de niveles o estados máximos para la codificación de los valores será de 1.",
      "No se puede cuantizar la señal.",
      "T=1/2Bmedio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 317,
    title:
      "En relación a la modulación DM o Modulación Delta, se sabe que la señal se aproxima mediante una función escalera en donde:",
    choices: [
      "El ruido de cuantización se produce cuando la señal a transmitir varía muy rápidamente.",
      "El ruido de sobrecarga se produce cuando la señal a transmitir varía lentamente.",
      "La salida de la modulación delta es una señal generalmente de entre 2 y 4 niveles.",
      "Si aumenta la frecuencia de muestreo, mayor precisión se logra y también mayor es la velocidad de envío de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 318,
    title:
      "En la multiplexación por división en el tiempo TDM, las ranuras temporales se asignan a las distintas fuentes de manera estática o dinámica...",
    choices: [
      "TDM síncrono distribuye las ranuras de forma dinámica, dejando celdas vacías si no transmite datos.",
      "TDM asíncrono se corresponde con una modulación por división en frecuencias.",
      "En el estándar norteamericano, la línea T básica posee una velocidad inferior a 2Mbps.",
      "Ninguna de las anteriores es cierta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 319,
    title:
      "Se ha recibido la trama 001 en un receptor. Según el mecanismo de Hamming para detectar y corregir errores, y teniendo en cuenta que la paridad es par, podemos afirmar que:",
    choices: [
      "La trama posee error y éste se encuentra en el bit de la posición 1.",
      "La trama posee error y éste se encuentra en el bit de la posición 2.",
      "La trama posee error y éste se encuentra en el bit de la posición 3.",
      "No se puede saber si esta trama tiene error con el método de Hamming.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 320,
    title:
      "Si los paquetes de un mensaje digital siguen el mismo camino del emisor al receptor, estamos trabajando con:",
    choices: [
      "Conmutación de circuitos.",
      "Conmutación de datagramas.",
      "Conmutación de paquetes y circuitos virtuales.",
      "Conmutación de paquetes y datagramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 321,
    title:
      "El cable de par trenzado es un medio de transmisión empleado en las redes, y es sabido que:",
    choices: [
      "Sólo se emplea en la transmisión de televisión.",
      "Su uso en telefonía es común.",
      "El cable de par trenzado de 75 ohmios sólo transmite en su interior señales digitales.",
      "El cable de par trenzado de 50 ohmios se emplea en la transmisión de señales digitales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 322,
    title:
      "En relación a los algoritmos de encaminamiento presentes en el nivel de red OSI...",
    choices: [
      "Todos tienen la prioridad de minimizar el número de redes por los que pasará un paquete (métrica) hasta que llegue a su destino.",
      "Al contrario que Bellman-Ford, Dijkstra permite el cálculo, en un único paso, del camino de coste mínimo entre todas las combinaciones de nodos.",
      "Al contrario que Dijkstra, Bellman-Ford puede elegir como trayectoria óptima aquella que presente mayor coste siempre que tenga un menor número de saltos.",
      "Nunca se calculan para encaminamiento dinámico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 323,
    title:
      "El protocolo de ventana deslizante es utilizado por diferentes protocolos de comunicación, así como por el nivel de enlace del modelo OSI. Si disponemos de 4 bits para la numeración de tramas, entonces el tamaño máximo de la ventana...",
    choices: [
      "Será de 16 para el receptor y 15 para el emisor.",
      "Será de 15 para el receptor y 14 para el emisor.",
      "Será de 15 para ambos equipos.",
      "Será de 16 para ambos equipos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 324,
    title:
      "En la delimitación por carácteres especiales, si por el medio físico circula la trama que se muestra a continuación, ¿Qué es lo que está sucediendo?",
    choices: [
      "No habrá problemas, la trama entera se leerá correctamente en el receptor.",
      "La palabra IMAGEM.ES no se leería como perteneciente a esta trama, sino a una trama posterior.",
      "Los caracteres K M P no son válidos y no llegarán al receptor como datos.",
      "No corresponde con una delimitación de caracteres sino de bits.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 325,
    title:
      "Sobre el encaminamiento de paquetes en una red de datagramas es cierto que,",
    choices: [
      "El intercambio de paquetes entre los nodos de la red es más lento que en las redes basadas en circuitos virtuales.",
      "Los paquetes intercambiados incorporan una etiqueta que indica el camino que tienen que seguir en la red.",
      "Se emplea una tecnología de difusión para interconectar todos los equipos de la red.",
      "Los paquetes dirigidos a una dirección de broadcast son reenviados a todos los routers de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 326,
    title:
      "Si en una red de difusión un paquete dirigido a la dirección MAC de broadcast sufre una colisión, es cierto que,",
    choices: [
      "Todas las estaciones que detecten la colisión reenviarán el paquete.",
      "El paquete será reenviado por la estación que lo transmitió.",
      "El paquete no será reenviado ya que va dirigido a la dirección de broadcast.",
      "No es posible, pues los paquetes de broadcast nunca sufren colisiones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 327,
    title: "La tecnología de difusión no es apropiada para redes WAN ya que,",
    choices: [
      "Los errores en los medios de difusión son muy frecuentes.",
      "El encaminamiento en una red de difusión es más lento que en una WAN punto a punto.",
      "Las redes de difusión emplean velocidades de transmisión muy pequeñas.",
      "El elevado número de equipos que interconecta provocaría un estado de colisión permanente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 328,
    title:
      "Las redes WAN proporcionan a los usuarios velocidades inferiores a las de las redes LAN ya que,",
    choices: [
      "La velocidad de transmisión en un enlace punto a punto de una red WAN es menor que en un segmento de difusión de una LAN.",
      "Un enlace punto a punto en una WAN se reparte entre más usuarios que en un segmento de una LAN.",
      "La tasa de error en el medio físico es mayor en las LAN que en las WAN.",
      "Las redes WAN no emplean la fibra óptica como medio de transmisión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 329,
    title:
      "Indica qué mecanismo permite ofrecer una calidad de servicio (QoS) en una red de comunicaciones,",
    choices: [
      "La autenticación de usuarios que acceden a la red.",
      "Aumentar el número de colisiones en el medio físico.",
      "El reparto de la velocidad de transferencia del medio físico entre los equipos.",
      "Monitorizar los tipos de paquetes transmitidos en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 330,
    title: "En una arquitectura de red de n niveles, es cierto que,",
    choices: [
      "Existe comunicación horizontal entre la capa n y la n-1 del otro extremo.",
      "Existe comunicación vertical entre la capa n-1 y la n+1.",
      "Un número elevado de niveles aumenta la velocidad de transmisión.",
      "Un número reducido de niveles hace más difícil la detección de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 331,
    title:
      "El intercambio de PDU’s entre entidades pares del nivel n se realiza,",
    choices: [
      "Enviándolas al nivel n-1 como SDU’s.",
      "Enviándolas al nivel n par como SDU’s.",
      "Enviándolas al nivel n+1 incorporando una ICI.",
      "Enviándolas al nivel n-1 como PCI’s.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 332,
    title:
      "Si una SDU es fragmentada al enviarla del nivel n al n-1, es cierto que,",
    choices: [
      "Es necesario incorporar una cabecera ICI a cada fragmento.",
      "Es necesario incorporar una cabecera PCI a cada fragmento.",
      "Sólo el primer fragmento incorpora la cabecera ICI.",
      "Las SDU’s no se fragmentan nunca.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 333,
    title:
      "Si un equipo con arquitectura TCP/IP establece una conexión al servicio SMTP y otra al servicio HTTP de un mismo servidor, es cierto que,",
    choices: [
      "Las dos conexiones pueden tener el mismo puerto origen.",
      "Las dos conexiones tienen el mismo puerto destino.",
      "Las dos conexiones tienen diferente puerto origen.",
      "Las dos conexiones tienen diferentes direcciones IP origen.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 334,
    title:
      "Si un equipo A en una red TCP/IP sobre Ethernet establece una conexión TCP a otro equipo B, los paquetes de datos TCP enviados de A a B se caracterizan por,",
    choices: [
      "Los paquetes enviados tienen los mismos números de puerto en la cabecera TCP.",
      "Los paquetes enviados tienen diferentes direcciones IP en la cabecera IP.",
      "Los paquetes enviados tienen diferentes direcciones MAC en la cabecera Ethernet.",
      "Los paquetes enviados tienen los mismos valores de Identificación en la cabecera IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 335,
    title:
      "Si dos segmentos Ethernet se interconectan empleando un puente es cierto que,",
    choices: [
      "Todos los paquetes transmitidos circulan en ambos segmentos.",
      "Los paquetes de difusión sólo circulan en el segmento transmitido.",
      "Los paquetes de broadcast de un segmento pueden provocar colisiones en el otro.",
      "No se producen colisiones nunca.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 336,
    title:
      "La velocidad máxima de transmisión que puede emplearse en un medio físico depende de,",
    choices: [
      "El tipo de codificación en niveles que se emplee.",
      "La potencia de la señal que se transmite.",
      "Los datos incorporados en los paquetes de datos.",
      "El tipo de código de detección de errores empleado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 337,
    title:
      "Por qué causa una señal NO puede transmitirse por un medio físico ?",
    choices: [
      "Porque la señal está compuesta por más armónicos que los que contiene el medio físico.",
      "Porque el ancho de banda de la señal es infinito.",
      "Porque el ancho de banda del medio no es el adecuado para el ancho de banda de la señal.",
      "Porque los armónicos principales de una señal están dentro del ancho de banda del medio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 338,
    title:
      "Qué tipo de señalización en banda base es la más adecuada para mantener la sincronización ?",
    choices: [
      "Codificación QPSK.",
      "Codificación Manchester.",
      "Codificación QAM.",
      "Codificación binaria unipolar con retorno a cero.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 339,
    title:
      "Si quiero aumentar la velocidad de transmisión con una señal de tipo QAM es necesario,",
    choices: [
      "Aumentar la amplitud de la señal modulada.",
      "Aumentar la frecuencia de la señal portadora.",
      "No es posible sin cambiar el tipo de codificación de la señal.",
      "Disminuyendo la relación señal-ruido en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 340,
    title:
      "La normativa de multiplexión en el tiempo europea (E1) y la de EEUU-Japón (T1) se diferencian en que,",
    choices: [
      "La velocidad de transmisión empleada en un canal de voz es diferente.",
      "El tiempo empleado en la transmisión de una trama básica es diferente.",
      "La normativa de EEUU-Japón emplea una velocidad mayor que la europea.",
      "El número de canales de voz en una trama es diferente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 341,
    title:
      "Si en una red Ethernet a 10 Mbps se emplea un cableado UTP de categoría 5, es cierto que,",
    choices: [
      "Podrá emplearse el mismo cableado para transmitir a 1 Gbps.",
      "Es necesario blindar el cable para transmitir a 100 Mbps.",
      "Podrá emplearse el mismo cableado para transmitir a 100 Mbps.",
      "No se podrá transmitir información, pues el cable no lo permite.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 342,
    title:
      "Indica en qué situación es necesario el empleo de la fibra óptica como medio físico de transmisión,",
    choices: [
      "Distancias de menos de 100 metros y bajas velocidades.",
      "Distancias de menos de 100 metros y ruido electromagnético elevado.",
      "Distancias de menos de 100 metros y velocidades de 100 Mbps.",
      "Distancias de 200 metros y velocidades de 10 Mbps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 343,
    title:
      "Si disponemos de una red inalámbrica de infraestructura con un switch Ethernet de hasta 100 Mbps y puntos de acceso inalámbricos a 54 Mbps, es cierto que,",
    choices: [
      "No podemos incorporar equipos en el segmento Ethernet a 10 Mbps.",
      "No podemos incorporar equipos inalámbricos a 11 Mbps.",
      "No podemos incorporar equipos en el segmento Ethernet a 1000 Mbps.",
      "No es posible emplear tarjetas inalámbricas de 11 Mbps y 54 Mbps en la misma red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 344,
    title:
      "Un operador de comunicaciones desea interconectar un router situado en la Isla de Pascua (Chile) con su sede en Europa. La infraestructura más rentable es,",
    choices: [
      "Cableado de fibra óptica oceánico.",
      "Enlace satelital.",
      "Enlace inalámbrico a 54 Mbps.",
      "Enlace inalámbrico a 11 Mbps, pues permite alcanzar mayores distancias que el de 45 Mbps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 345,
    title:
      "El servicio más lento ofrecido por la capa de enlace cuando en el medio físico no se producen errores es el,",
    choices: [
      "Servicio orientado a conexión confirmado.",
      "Servicio no orientado a conexión no confirmado.",
      "Servicio no orientado a conexión confirmado.",
      "Servicio orientado a conexión no confirmado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 346,
    title:
      "La técnica de detección de errores empleando paridad se caracteriza por,",
    choices: [
      "Ser más rápida en la detección de errores que con los códigos de redundancia cíclica.",
      "Permitir detectar más errores que con los códigos de redundancia cíclica.",
      "Detectar siempre errores en un número par de bits.",
      "Permitir detectar siempre errores en ráfaga.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 347,
    title:
      "El error de duplicación en el control del flujo a nivel de enlace se produce cuando,",
    choices: [
      "El emisor envía el mismo bloque de datos dos veces.",
      "El receptor recibe dos veces el mismo bloque de datos.",
      "El emisor envía el mismo bloque de datos con numeración distinta.",
      "El receptor interpreta como datos diferentes el reenvío de un paquete.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 348,
    title:
      "El tamaño de la ventana del emisor en una protocolo de ventana deslizante selectivo es,",
    choices: [
      "Siempre menor que la ventana del receptor.",
      "Determinado a partir del retardo en la recepción de los ACK’s.",
      "Siempre mayor que la ventana del receptor.",
      "De tamaño fijo a valor 1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 349,
    title:
      "En el protocolo de nivel de enlace HDLC , el establecimiento de un enlace balanceado se realiza transmitiendo paquetes de,",
    choices: [
      "Información.",
      "Supervisión.",
      "No numerados.",
      "No es posible establecer conexiones con el protocolo HDLC.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 350,
    title:
      "La autenticación  de un usuario empleando el protocolo PPP se realiza,",
    choices: [
      "Después de establecer la sesión PPP.",
      "Empleando el protocolo LCP.",
      "Después de realizar la negociación NCP.",
      "Empleando el protocolo IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 351,
    title:
      "Cómo puede corregirse el congestionamiento cuando éste aparece en una red TCP/IP ?",
    choices: [
      "Reduciendo el número de saltos entre origen y destino.",
      "Aumentando la velocidad de transmisión entre los routers.",
      "Aumentando el número de entradas en las tablas de rutas.",
      "Reduciendo el flujo de entrada de paquetes en la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 352,
    title:
      "Si se accede a un servidor web que se encuentra en un equipo dentro de una red privada, los equipos de Internet tienen que establecer una conexión a,",
    choices: [
      "El puerto 80 de la dirección pública del router de la red privada.",
      "El puerto 80 de la dirección privada del equipo que tiene el servicio web.",
      "El puerto 1080 de la dirección pública del router de la red privada.",
      "El puerto 1080 de la dirección privada del equipo que tiene el servicio web.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 353,
    title:
      "Si en una red se desea emplear un protocolo de encaminamiento que tenga en cuenta la velocidad de comunicación en los enlaces se empleará,",
    choices: ["BGP.", "RIP v1.", "RIP v2.", "OSPF."],
    solution: "",
    explanation: "",
  },
  {
    id: 354,
    title:
      "Si dos routers establecen 4 túneles GRE entre ellos, es cierto que,",
    choices: [
      "Cada túnel emplea pares de direcciones públicas diferentes.",
      "Cada túnel establecido emplea una conexión UDP diferente.",
      "Cada túnel establecido tendrá un identificador ‘key’ distinto.",
      "Dos routers sólo pueden establecer un túnel GRE.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 355,
    title: "Una red punto a punto ...",
    choices: [
      "Es una red cuya tecnología de transmisión emplea un enlace directo entre dosdispositivos.",
      "Es una red cuyo nivel fisico se estructura en una topología de bus.",
      "Es una red en la que los dispositivos emplean protocolo ETHERNET de nivel de enlace.",
      "Es una red de conmutación de circuitos con la propiedad de envío de tramas broadcast.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 356,
    title: "Una red con topología en anillo ...",
    choices: [
      "Especifica sus protocolos y arquitectura en el estándar IEEE 802.5.",
      "Se emplea, generalmente, más en la construcción de redes WAN que en la de redes MAN.",
      "Es más eficiente que una topología en bus cuando se emplea en redes LAN grandes.",
      "Emplea conexiones punto a punto a nivel de enlace, de ahí que el coste de su implantaciónsea menos elevado que en una topología en bus.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 357,
    title:
      "El espectro de potencias de la señal compuestas(t) = [sen(4¡ift) + cos( 4¡ift)] + (1/2). [sen(8¡ift) + cos(8¡ift)],",
    choices: [
      "Es 1.41 para la primera ftecuencia.",
      "Es 0.5 para la segunda ftecuencia.",
      "Es 0.5 para la tercera ftecuencia",
      "Es 0.7 para la cuarta frecuencia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 358,
    title:
      "En una arquitectura de red que sigue el modelo de referencia OSI/ISO ....",
    choices: [
      "La capa del nivel transporte proporciona servicios a la capa del nivel de red.",
      "La capa del nivel de enlace proporciona servicios a la capa del nivel de transporte.",
      "La PDU del nivel N contiene la PCI del nivel N y la SDU del nivel N-lo",
      "La IDU del nivel N contiene la PCI y la ICI del nivel N-l.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 359,
    title:
      "Si en un medio físico se transmite una señal con una potencia de 19mW y a ciertadistancia se miden 3mW, la perdida expresada en decibelios es:",
    choices: ["3dB.", "6dB.", "8dB.", "l2dB."],
    solution: "",
    explanation: "",
  },
  {
    id: 360,
    title:
      "El espectro de un canal está situado entre 1.5MHz y 4Mhz, ¿cuántos niveles deseñalización se necesitarán para conseguir una velocidad de transmisión máxima de 5Mbps?",
    choices: ["2.", "4.", "8.", "16."],
    solution: "",
    explanation: "",
  },
  {
    id: 361,
    title: "Es falso que la modulación PSK:",
    choices: [
      "Tiene diferentes variantes en función del número de niveles que se emplean para modular.",
      "Es más sensible a errores de ganancia que la modulación ASK.",
      "Es una modulación analógica.",
      "Transmite una señal modulada que se obtiene de modificar una señal portadora con unamoduladora.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 362,
    title: "Para codificar la secuencia de bits '10100110' se ha empleado:",
    choices: [
      "Una codificación banda base Manchester.",
      "Una codificación banda base NRZ bipolar.",
      "Una codificación banda base RZ bipolar.",
      "Una codificación banda base Manchester diferencial.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 363,
    title: "El siguiente diagrama de fase corresponde a:",
    choices: [
      "Una modulación QPSK que emplea 8 ángulos de fase .",
      "Una modulación QAM que emplea 8 amplitudes.",
      "Una modulación QAM que emplea 4 ángulos de fase y 2 amplitudes.",
      "Una modulación QPSK que emplea 2 ángulos de fase y 4 amplitudes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 364,
    title:
      "Según la forma de onda de la figura que se desplaza en un medio físico, se puede afirmarque se trata de una modulación",
    choices: ["FSK-ASK.", "PSK-FSK.", "QPSK.", "ASK-PSK."],
    solution: "",
    explanation: "",
  },
  {
    id: 365,
    title: "La fibra óptica multimodo de índice gradual,",
    choices: [
      "Tiene un núcleo de diámetro del orden de la longitud de onda de la señal transmitida.",
      "Tiene un índice de reftacción variable dentro del conductor y éste siempre es superior en laparte más alejada del núcleo del conductor.",
      "Soporta velocidades de cientos de Gigabips para decenas de kilómetros.",
      "Nunca necesita de repetidores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 366,
    title: "De las redes WIFI del tipo 802.11g, es falso que:",
    choices: [
      "Emplea el método de modulación de la 802.11a.",
      "Opera en la banda de 2.4Ghz al igual que la 802.11 b.",
      "Emplea códigos de encriptación WEP de 64bitsencriptar las comunicaciones.",
      "Permite alcanzar velocidades máximas de 54Mbps.como única posibilidad para",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 367,
    title:
      "Se quieren enviar 3 señales de voz cada una de ellas con un ancho de banda de 4Khz porun único canal. Si se emplea multiplexación FDM, el ancho de banda del canal paratransmistir debe de ser:",
    choices: [
      "12 kHz.",
      "un valor entre 12000 Hz Y24000 Hz.",
      ">12000 Hz.",
      "8Khz",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 368,
    title:
      "Se dispone de 4 emisores que quieren enviarpaquetes por un único canal empleando multiplexaciónTDM sincrona. Si el tiempo de transmisión de un paquete es de1ms, y se considera que una estación tiene datos a enviar cuando Bsu ranura de tiempo no es blanca, entonces, el tiempo de 'ocupación del canal es:",
    choices: ["16 ms.", "7 ms.", "4 ms.", "Ninguna de las anteriores."],
    solution: "",
    explanation: "",
  },
  {
    id: 369,
    title:
      "De un cable de par trenzado del tipo STP que cumple el estándar EIA-568-A, es ciertoque:",
    choices: [
      "Es más sensible a procesos de atenuación en la señal que un UTP de categoría 3.",
      "Si es de categoría 5 soporta velocidades de transmisión entorno a losindependientemente de la distancia que haya entre dispositivos.",
      "La velocidad de transmisión que soporta es independiente del paso de trenzado.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 370,
    title:
      "Cuál es la secuencia de bits a añadir tras los datos, si el Emisor desea enviar la cadenade datos '101110', sabiendo que Emisor y Receptor emplean el polinomio generador G(x)=x3+1?",
    choices: ["011", "0011", "1001", "111"],
    solution: "",
    explanation: "",
  },
  {
    id: 371,
    title:
      "Se sabe que el Receptor ha recibido la secuencia de bits 11011 y además se sabe que elEmisor emplea el código Hamming con paridad par que se asocia a un conjunto de palabrasde datos de 2 bits. ¿Cuál es el bit erróneo recibido?",
    choices: [
      "El bit erróneo es el cuarto",
      "El bit erróneo es el primero",
      "El bit erróneo es el quinto",
      "El bit erróneo es el segundo",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 372,
    title:
      "Respecto a la delimitación de tramas por bits especiales, es falso que:",
    choices: [
      "Se emplee en las cabeceras y colas de las tramas simultáneamente.",
      "Use bits de relleno para evitar que secuencias de bits especiales puedan aparecer comodatos.",
      "Determine el tamaño de la trama en función de una estimación de tiempo obtenida apartir del retardo que tarda la trama en llegar desde emisor hasta receptor",
      "Tiene como objetivo delimitar el inicio y fin de la trama de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 373,
    title:
      "Si la probabilidad de que una trama de 8 bits llegue al receptor con un error en 1 bit es0.002, ¿cuál es la probabilidad de que la trama llegue sin errores al receptor?",
    choices: ["0.998", "0.984", "0.016", "Ninguna de las anteriores"],
    solution: "",
    explanation: "",
  },
  {
    id: 374,
    title: "Una trama HDLC cuyos cuatro primeros bits sean '1011' es:",
    choices: [
      "Una trama de información que indica que el número de secuencia enviado es '011'",
      "Una trama de supervisión que indica el rechazo de tramas.",
      "Una trama no numerada de conexión en modo Balanceado Asíncrono.",
      "Una trama no numerada de desconexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 375,
    title: "Respecto al protocolo BDLC se puede afirmar que:",
    choices: [
      "Es un protocolo del nivel de red.",
      "No necesita de un campo FCS 'Frame Check Sequence'.",
      "Emplea delimitación de trama por caracteres especiales.",
      "Emplea protocolo de ventana deslizante para gestionartramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 376,
    title: "El protocolo PPP es falso que:el envío y recepción de",
    choices: [
      "Emplee paquetes LCP y NCP para autentificar el usuario.",
      "Emplee paquetes LCP para negociar la conexión del nivel de enlace.",
      "Emplee paquetes LCP para liberar el enlace de datos.",
      "Emplee paquetes NCP para negociar los parámetros del nivel de red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 377,
    title: "Respecto al protocolo RlP es falso que:",
    choices: [
      "Emplee paquetes UDP dirigidos al puerto 520.",
      "Se puedan indicar hasta 25 rutas por mensaje.",
      "Sea un protocolo de encaminamiento dinámico empleado en redes WAN.",
      "Se envíen los paquetes a la dirección multicast 224.0.0.9",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 378,
    title: "Para controlar la congestión de paquetes en una red LAN:",
    choices: [
      "Se puede limitar la velocidad de recepción de paquetes de los nodos receptores.",
      "Se puede aumentar la velocidad de envío de los nodos emisores mediante paquetes deobstrucción.",
      "Se puede enviar un paquete hacia el emisor con los bits de congestión desactivados.",
      "Se puede asignar un crédito máximo a la tasa de bits que se pueden enviar por partedel emisor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 379,
    title:
      "Se está aplicando el algoritmo de Dijkstra para generar el camino de mínimo coste ypoder emplear ese criterio para un algoritmo de encaminamiento. Si se está evaluando laiteración i=3 con T={1,2,3}. Se puede afirmar que:",
    choices: [
      "Sólo el coste L(3) ha variado con respecto a la iteración anterior",
      "Sólo el coste L(5) ha variado con respecto a la iteración anterior",
      "Sólo el coste L(6) ha variado con respecto a la iteración anterior",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 380,
    title:
      "Dado el esquema de nodos de red de la figura, ¿Cuántos paquetes habrán llegado al nodo6 al finalizar el segundo salto, si se aplica la técnica de encaminamiento por inundaciónsiendo el nodo 1 quien inicia el encaminamiento?",
    choices: ["1 paquete.", "2 paquetes.", "3 paquetes.", "4 paquetes."],
    solution: "",
    explanation: "",
  },
  {
    id: 381,
    title:
      "Si los paquetes de un mismo mensaje no siguen el mismo camino desde el emisor alreceptor, estamos trabajando con:",
    choices: [
      "Conmutación de circuitos.",
      "Conmutación de ventanas deslizantes.",
      "Conmutación de paquetes del tipo circuitos virtual es.",
      "Conmutación de paquetes del tipo datagramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 382,
    title: "El empleo de la multidifusión en una red LAN permite,",
    choices: [
      "El envío de información a todas las estaciones de la red transmitiendo un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo un paquete.",
      "El envío de información a una sola estación de la red transmitiendo más de un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo más de un paquete.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 383,
    title:
      "El empleo de circuitos virtuales en una red de conmutación de paquetes se caracteriza por,",
    choices: [
      "En las redes de conmutación de paquetes no se establecen circuitos virtuales, se establecen circuitos físicos.",
      "Especificar en cada paquete los nodos intermedios que debe atravesar para alcanzar su destino.",
      "Determinar un camino a través de los nodos de la red para que los paquetes alcancen su destino.",
      "Especificar en cada paquete el origen y el destino para que los nodos intermedios determinen un camino en la red para cada paquete transmitido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 384,
    title:
      "Si en una red de conmutación de paquetes basada en circuitos virtuales un nodo deja de funcionar es cierto que,",
    choices: [
      "Sólo los circuitos establecidos a través de ese nodo dejan de funcionar.",
      "Todos los circuitos establecidos en la red dejan de funcionar.",
      "Ningún circuito virtual deja de funcionar, los nodos modifican automáticamente el camino que no funciona.",
      "Los paquetes de un circuito virtual son redirigidos a través de otro circuito virtual.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 385,
    title:
      "La interconexión de una red de difusión y una red punto a punto que emplean la arquitectura TCP/IP, ha de realizarse con,",
    choices: ["Un repetidor.", "Un puente.", "Un router.", "Una pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 386,
    title:
      "La comunicación vertical en una arquitectura de red se caracteriza porque,",
    choices: [
      "Se establece entre las capas que son adyacentes en la arquitectura.",
      "Se establece entre la capa n y la capa par n-1 de la arquitectura.",
      "Se establece entre las capas pares de la arquitectura.",
      "Se establece entre las capas n+1 y n-1 de la arquitectura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 387,
    title:
      "Si la capa n de una arquitectura de red no puede emplear los servicios de la capa n-1, es cierto que",
    choices: [
      "La capa n+1 puede emplear los servicios de la capa n.",
      "La capa n puede emplear los servicios de la capa n+1.",
      "La capa n-1 no puede comunicarse con su entidad par.",
      "La capa n puede comunicarse con su entidad par.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 388,
    title:
      "La IDU del nivel n (que se envía al nivel n-1) incorpora en su campo de datos,",
    choices: [
      "La PDU del nivel n-1.",
      "La SDU del nivel n-1.",
      "La PCI del nivel n-1.",
      "La PCI del nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 389,
    title: "La fragmentación en un protocolo del nivel n se produce cuando,",
    choices: [
      "La SDU del nivel n+1 no cabe dentro de la PDU del nivel n.",
      "La SDU del nivel n no cabe dentro de la PDU del nivel n.",
      "La SDU del nivel n+1 no cabe dentro de la PDU del nivel n-1.",
      "La SDU del nivel n no cabe dentro de la PDU del nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 390,
    title:
      "El nivel de red en la arquitectura de red OSI NO presenta la característica de,",
    choices: [
      "Encaminamiento de los paquetes de información con circuitos virtuales.",
      "Encaminamiento de los paquetes de información con datagramas.",
      "Detectar errores en los bits de los paquetes transmitidos en un medio físico.",
      "Identificar las estaciones que existen en la red de comunicaciones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 391,
    title:
      "En una red con arquitectura TCP/IP, ¿ qué nivel de la arquitectura permite detectar errores en la transmisión de paquetes en el medio físico ?",
    choices: ["Acceso a la red.", "Interred.", "Transporte.", "Aplicación."],
    solution: "",
    explanation: "",
  },
  {
    id: 392,
    title:
      "El acceso a un servidor web, un servidor de correo y un servidor ftp que se encuentran en una misma máquina es posible gracias a,",
    choices: [
      "La multiplexación de conexiones que proporciona la capa de transporte en TCP/IP.",
      "La multiplexación de conexiones que proporciona la capa de red en TCP/IP.",
      "La existencia de varias direcciones IP para una misma máquina de Internet.",
      "La existencia de un mismo puerto TCP para los servicios de web, de correo y ftp.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 393,
    title:
      "Si se desea transmitir información a través de un medio físico empleando una señal de pulsos con 8 niveles y a una velocidad de 90000 bps, el medio físico necesita un ancho de banda mínimo de,",
    choices: ["30000 Hz.", "15000 Hz.", "90000 Hz.", "5625 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 394,
    title:
      "La velocidad de transmisión de una señal de pulsos en un medio físico NO aumenta si,",
    choices: [
      "Aumenta el ancho banda del medio físico.",
      "Aumenta la velocidad de modulación de la señal.",
      "Aumenta el número de niveles de la señal.",
      "Aumenta el número de pulsos transmitidos por segundo de la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 395,
    title:
      "La codificación en banda base que más problemas de sincronización presenta es,",
    choices: [
      "Codificación binaria sin retorno a cero bipolar.",
      "Codificación binaria con retorno a cero unipolar.",
      "Codificación binaria con retorno a cero bipolar.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 396,
    title:
      "Qué tipo de modulación analógica permite transmitir información a mayor velocidad ?",
    choices: [
      "Modulación ASK.",
      "Modulación FSK.",
      "Modulación PSK.",
      "Modulación QAM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 397,
    title:
      "Si dos señales PCM (8 bits en la cuantización) que modulan señales analógicas de 4000 Hz de ancho de banda quieren ser transmitidas empleando TDM, se precisa un canal que permita transmitir a una velocidad de,",
    choices: ["64000 bps.", "16000 bps.", "128000 bps.", "32000 bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 398,
    title:
      "La interconexión de equipos dentro de un entorno industrial (con presencia de ruido electromagnético debido a máquinas eléctricas en funcionamiento) a velocidades 100 Mbps requiere el empleo de,",
    choices: [
      "Cable UTP categoría 3.",
      "Redes Inalámbricas.",
      "Cable UTP categoría 5.",
      "Cable STP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 399,
    title:
      "El tipo de fibra óptica que presenta menos alteraciones en la señal al aumentar la distancia es,",
    choices: [
      "La fibra óptica multimodo.",
      "La fibra óptica de índice gradual.",
      "La fibra óptica monomodo.",
      "Ninguna, todas las fibras distorsionan la señal de la misma forma al aumentar la distancia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 400,
    title: "Las redes de comunicación inalámbricas se caracterizan por,",
    choices: [
      "Ser compatibles con las redes satelitales al emplear la misma frecuencia.",
      "Ser inmunes al ruido electromagnético.",
      "Permitir transmitir información a 100 Mbps.",
      "Precisar de un mecanismo de reparto del medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 401,
    title:
      "Si en un protocolo orientado a carácter aparece en el campo de datos la secuencia de caracteres DLE STX DLE DLE, se sustituirá por la secuencia,",
    choices: [
      "DLE DLE STX DLE DLE.",
      "DLE DLE STX DLE DLE DLE.",
      "DLE DLE STX DLE DLE DLE DLE.",
      "DLE STX DLE DLE DLE.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 402,
    title:
      "La detección de errores empleando la técnica de paridad por filas y columnas se caracteriza por,",
    choices: [
      "Permite detectar errores cuando se producen en un número par.",
      "Permite detectar errores sólo en filas.",
      "Permite detectar errores sólo en columnas.",
      "Permite detectar dos errores en cualquier posición de la matriz.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 403,
    title:
      "En un protocolo de ventana deslizante de envío continuo con repetición selectiva es cierto que,",
    choices: [
      "La ventana del emisor referencia las tramas ya enviadas correctamente al receptor.",
      "El receptor acepta los paquetes erróneos con secuencias que están dentro de su ventana.",
      "La ventana del emisor tiene un tamaño que no varía durante el funcionamiento del protocolo.",
      "La ventana del receptor tiene un tamaño menor que el número de secuencias de numeración.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 404,
    title:
      "Si en un protocolo de parada y espera sin numeración de datos ni de ACK’s se pierde una confirmación, es cierto que",
    choices: [
      "El receptor sufre un error de duplicación.",
      "Emisor y receptor pierden la sincronización.",
      "El receptor reenvía el ACK perdido.",
      "El emisor y receptor quedan bloqueados.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 405,
    title: "El protocolo HDLC NO presenta la característica de,",
    choices: [
      "Control del flujo con ventana deslizante.",
      "Reenvío de paquetes erróneos.",
      "Delimitación de tramas como en los protocolos orientados a bit.",
      "Autenticación en el establecimiento de conexiones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 406,
    title:
      "El protocolo PPP NO gestiona entre los extremos de la comunicación,",
    choices: [
      "La configuración del protocolo IP.",
      "El inicio de sesión de un usuario.",
      "La autenticación de los usuarios.",
      "El formato de los paquetes PPP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 407,
    title:
      "En una red LAN que disponga de un direccionamiento IP privado, es cierto que:",
    choices: [
      "No se pueden intercambiar con Internet paquetes IP con direcciones IP privadas.",
      "El mecanismo de NAT modifica la dirección IP de destino de los paquetes que salen de la red LAN hacia Internet.",
      "Cualquier máquina de Internet puede establecer una conexión a una dirección IP privada de la red LAN.",
      "El encaminamiento modifica la cabecera IP de los paquetes de la red LAN en todos los routers entre el origen y el destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 408,
    title:
      "Cuál de las siguientes situaciones indica a un router que existe congestión en la red ?",
    choices: [
      "Un router recibe mensajes host unreachable.",
      "Un router recibe mensajes TTL exceeded in transit.",
      "Un router recibe mensajes Source Quench.",
      "Un router detecta que el uso de su CPU para el encaminamiento es del 25%.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 409,
    title:
      "Un router que emplea BGP para establecer sus tablas de encaminamiento se caracteriza por,",
    choices: [
      "Conocer sólo las redes del sistema autónomo al que pertenece.",
      "Emplear como puerta de enlace por defecto el router BGP que tenga más cercano.",
      "Establecer conexiones con el resto de routers BGP de Internet.",
      "Determinar las rutas óptimas entre los diferentes destinos en Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 410,
    title:
      "Si un router envía un mensaje RIP versión 1 en una red LAN Ethernet, el paquete emplea como dirección MAC de destino,",
    choices: [
      "La dirección FF:FF:FF:FF:FF:FF.",
      "La dirección 255.255.255.255.",
      "La dirección 224.0.0.9.",
      "Una dirección MAC de multidifusión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 411,
    title:
      "Si un paquete IP atraviesa un túnel entre dos routers, su tiempo de vida TTL se decrementa en,",
    choices: [
      "En tres unidades.",
      "En dos unidades.",
      "En ninguna unidad, ya que el túnel es transparente.",
      "En el número de saltos que existan entre los dos routers que establecen el túnel.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 412,
    title:
      "El empleo de multidifusión en una red LAN de bus común se caracteriza por,",
    choices: [
      "La transmisión de un paquete de datos que será procesado por un grupo de equipos.",
      "La transmisión de un paquete de datos a cada equipo de la red que pertenece a un grupo.",
      "La transmisión de un paquete de datos a todas los equipos de la red.",
      "La transmisión de un paquete de datos a cada uno de los equipos de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 413,
    title: "Indica qué afirmación es FALSA en relación a una red de difusión,",
    choices: [
      "El número medio de colisiones en la red aumenta al incrementarse el número de equipos.",
      "El encaminamiento permite reenviar paquetes entre los equipos de la red de difusión.",
      "El direccionamiento físico es suficiente para identificar los equipos que intercambian datos.",
      "La tasa de error en el medio físico es menor que en las redes WAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 414,
    title:
      "El intercambio de paquetes entre dos equipos en una red de conmutación de paquetes con circuitos virtuales se caracteriza porque,",
    choices: [
      "El control de la congestión es menos eficiente que en una red de datagramas.",
      "La tasa de error en el medio físico es mayor que en una red de datagramas.",
      "El tiempo de encaminamiento es menor que en una red de datagramas.",
      "Es necesario un mecanismo de ordenamiento de los paquetes recibidos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 415,
    title:
      "La existencia de una dirección origen y destino en la cabecera de red de los paquetes intercambiados en una red de datagramas es necesaria para,",
    choices: [
      "Realizar un encaminamiento independiente para cada paquete de datos.",
      "Definir el mismo camino en la red para todos los paquetes.",
      "Realizar un control eficiente de la congestión en la red.",
      "Conseguir un encaminamiento más rápido que en las redes de circuitos virtuales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 416,
    title:
      "En una red de conmutación de paquetes con datagramas, un paquete que se retrasa al seguir un camino distinto del resto provoca que,",
    choices: [
      "Las capas superiores a la del nivel de red tengan que realizar el reordenamiento de la información.",
      "La capa de red solicite el reenvío del paquete que llega tarde.",
      "La capa de red reordene el paquete en el lugar que le corresponda.",
      "La capa de enlace almacene el paquete temporalmente para reordenarlo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 417,
    title:
      "La comunicación vertical en una arquitectura de red OSI se realiza,",
    choices: [
      "Intercambiando IDU’s entre capas pares.",
      "Intercambiando PDU’s entre capas adyacentes.",
      "Intercambiando SDU’s entre capas adyacentes.",
      "Intercambiando ICI’s entre capas pares.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 418,
    title:
      "Si el nivel n de una arquitectura de red ofrece un servicio fiable al nivel superior n+1, el nivel que corrige la pérdida de un paquete enviado entre la capa n y su capa par es,",
    choices: [
      "El nivel n+1 de la arquitectura.",
      "El nivel n de la arquitectura.",
      "El nivel n-1 de la arquitectura.",
      "Si el servicio es fiable en el nivel n no puede producirse la pérdida de ningún paquete.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 419,
    title:
      "Si la capa de red (IP) en la arquitectura TCP/IP fragmenta la información procedente del nivel superior, los paquetes transmitidos en el medio físico presentan,",
    choices: [
      "Cabecera del nivel superior a IP en todos los fragmentos transmitidos.",
      "Cabecera IP sólo en el primer fragmento transmitido.",
      "Cabecera IP y del nivel superior a IP en todos los fragmentos transmitidos.",
      "Cabecera IP en todos los fragmentos transmitidos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 420,
    title:
      "En el establecimiento de una conexión TCP entre dos equipos es cierto que,",
    choices: [
      "Los paquetes de datos que sufren errores son reenviados por el protocolo IP.",
      "Los paquetes de control (SYN, ACK,...) perdidos son reenviados por el protocolo TCP.",
      "Los paquetes de control (SYN, ACK,...) con errores son reenviados por el protocolo IP.",
      "Todas las afirmaciones anteriores son falsas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 421,
    title:
      "El número máximo de conexiones TCP que puede establecer un equipo es,",
    choices: [
      "Mayor que el número máximo de conexiones UDP.",
      "Menor que el número máximo de conexiones UDP.",
      "Limitado al rango de numeración de los puertos.",
      "Ilimitado, depende de la memoria disponible en el sistema.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 422,
    title:
      "Qué dispositivo de interconexión NO permite el paso a través de él de paquetes IP dirigidos a la dirección IP de broadcast de una red ?",
    choices: ["Repetidor.", "Puente.", "Router.", "Switch."],
    solution: "",
    explanation: "",
  },
  {
    id: 423,
    title: "La transmisión correcta de una señal de pulsos se consigue cuando,",
    choices: [
      "La potencia de la señal recibida es la misma que la de la transmitida.",
      "La forma de la señal recibida es exactamente la misma que la de la transmitida.",
      "El espectro de frecuencia de la señal recibida es el mismo que el de la transmitida.",
      "La información recibida es la misma que la transmitida.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 424,
    title:
      "La velocidad de transmisión máxima en un medio físico NO depende de,",
    choices: [
      "La amplitud de la señal transmitida.",
      "El ancho de banda del medio físico.",
      "La relación señal-ruido del medio físico.",
      "El número de niveles empleado en la codificación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 425,
    title:
      "La modulación es un mecanismo de transmisión de información que permite,",
    choices: [
      "Aumentar la velocidad máxima de transmisión en un medio físico.",
      "Adecuar el ancho de banda de la señal modulada al ancho de banda de la señal moduladora.",
      "Adecuar el ancho de banda de la señal moduladora al ancho de banda del medio físico.",
      "Aumentar el ancho de banda de la señal modulada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 426,
    title:
      "La modulación analógica que es menos sensible al ruido en el medio físico es,",
    choices: [
      "La modulación por cambio de frecuencia.",
      "La modulación por cambio de amplitud.",
      "La modulación por cambio de fase y frecuencia.",
      "La modulación por cambio de fase y amplitud.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 427,
    title:
      "Si un módem emplea una modulación QAM (16 niveles) con una señal portadora de 4000 Hz, la velocidad de transmisión que se consigue es,",
    choices: ["4000 bps.", "16000 bps.", "32000 bps.", "64000 bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 428,
    title:
      "Se desea enviar por un medio físico una señal PCM que codifique un canal de audio de alta calidad. El ancho de banda del canal de audio es de 100 KHz y se desea una calidad de 256 niveles de amplitud. La señal PCM será transmitida en el medio físico a una velocidad de,",
    choices: ["100 Kbps.", "800 Kbps.", "1.6 Mbps.", "256 Mbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 429,
    title: "Qué tipo de medio físico no presenta diafonía (ruido cruzado) ?",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 5.",
      "Cable STP.",
      "Fibra óptica multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 430,
    title:
      "Sobre las redes inalámbricas del tipo 802.11b y 802.11g es cierto que,",
    choices: [
      "Permiten velocidades de 100 Mbps a distancias de 100 metros.",
      "Emplean diferentes frecuencias de portadora para distintas velocidades.",
      "Precisan de un mecanismo de reparto del medio físico.",
      "Precisan de una infraestructura de cable para su funcionamiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 431,
    title:
      "En una fibra óptica monomodo, la velocidad máxima de transmisión NO depende de,",
    choices: [
      "La dispersión intermodal.",
      "La dispersión intramodal.",
      "La longitud de la fibra óptica.",
      "El número de longitudes de onda multiplexadas en el haz.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 432,
    title: "La técnica de contienda CSMA-CD se caracteriza por,",
    choices: [
      "Detectar colisiones en el medio físico antes de que se produzcan.",
      "Esperar un tiempo aleatorio para detectar colisiones en el medio físico.",
      "Transmitir siempre la información sin comprobar si el medio físico está libre.",
      "Detectar las colisiones de manera más rápida que en otras técnicas de contienda.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 433,
    title:
      "La delimitación de paquetes en el nivel de enlace se caracteriza por,",
    choices: [
      "Reducir la cantidad de información redundante en el paquete.",
      "Precisar de un mecanismo de relleno en los bits de información del paquete.",
      "Reducir la tasa de error en el medio físico.",
      "Permitir detectar colisiones en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 434,
    title:
      "El grado del polinomio generador empleado en los códigos de redundancia cíclica (CRC)  NO afecta a,",
    choices: [
      "El número de bits del resto en la operación de división de polinomios.",
      "La cantidad de información redundante en el paquete de información.",
      "La cantidad de errores en ráfaga que pueden detectarse.",
      "La frecuencia con que se producen errores en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 435,
    title:
      "El funcionamiento del protocolo HDLC en modo de ventana deslizante selectivo se controla empleando,",
    choices: [
      "Tramas no numeradas.",
      "Tramas de información RR.",
      "Tramas de supervisión SREJ.",
      "Tramas de supervisión REJ.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 436,
    title:
      "Si en un protocolo de ventana deslizante se reduce el tamaño de la ventana del emisor se consigue que,",
    choices: [
      "El emisor pueda estar inactivo más tiempo.",
      "El emisor pueda enviar más información sin esperar a recibir los ACK.",
      "El receptor pueda confirmar más paquetes de información.",
      "El receptor se congestione al recibir más paquetes de información.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 437,
    title:
      "Cuando dos redes con direccionamiento IP privado intercambian paquetes IP empleando un túnel es cierto que,",
    choices: [
      "El mecanismo de NAT transforma los paquetes para que puedan circular por Internet.",
      "Es necesario que ambas redes tengan la misma dirección de red IP.",
      "La cabecera IP de los paquetes con direccionamiento privado es modificada en el túnel.",
      "El túnel proporciona un enlace punto a punto virtual entre ambas redes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 438,
    title:
      "Qué situación puede provocar un aumento de la congestión en una red de comunicaciones ?",
    choices: [
      "El disponer del mismo valor de MTU en toda la red.",
      "El empleo de TCP como protocolo de transporte en el intercambio de datos.",
      "Un porcentaje de uso de CPU para encaminamiento en los routers del 70%.",
      "La reducción del tráfico que emplea el protocolo UDP en la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 439,
    title:
      "El intercambio de información de encaminamiento en el protocolo OSPF se realiza,",
    choices: [
      "Estableciendo conexiones TCP entre routers designados.",
      "Estableciendo conexiones UDP entre routers designados.",
      "Intercambiando paquetes con dirección destino 255.255.255.255.",
      "Intercambiando paquetes con una dirección destino de multicast.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 440,
    title:
      "La creación de un túnel PPTP entre un cliente y un servidor de túneles NO emplea,",
    choices: [
      "Paquetes PPTP echo.",
      "Paquetes LCP.",
      "Paquetes IPCP.",
      "Paquetes TCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 441,
    title: "Una conexión a una VPN empleando L2TP se caracteriza por,",
    choices: [
      "Asegurar que ningún paquete L2TP de control del túnel se pierde en el mismo.",
      "Emplear una conexión TCP para controlar el estado del túnel.",
      "Verificar la autenticidad del origen del túnel con el protocolo GRE.",
      "Autenticar al usuario que realiza la conexión VPN con el protocolo IPCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 442,
    title:
      "El empleo de la tecnología de redes punto a punto para las redes WAN se caracteriza por,",
    choices: [
      "Su bajo coste económico de cableado frente a la tecnología de difusión.",
      "La comunicación directa a nivel de enlace entre cualquier par de nodos de la red.",
      "La transmisión de un único paquete para enviar información a todos los nodos de la red.",
      "La tolerancia a fallos que presenta si existen varios caminos a un determinado destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 443,
    title:
      "La transmisión de información en una red LAN de difusión se caracteriza por,",
    choices: [
      "Una elevada tasa de error en el medio debido a la gran extensión geográfica de la red.",
      "Precisar de un esquema de direccionamiento a nivel de enlace.",
      "El empleo de algoritmos de encaminamiento para los equipos en los extremos de la red.",
      "Precisar de un esquema de direccionamiento implícito.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 444,
    title:
      "Las unidades de datos del interfaz (IDU’s) que intercambian dos niveles pares del nivel n de una arquitectura,",
    choices: [
      "Permiten la realización de un servicio ofrecido a las capas superiores.",
      "Contienen las PDU’s de los niveles inferiores al n de la arquitectura.",
      "Emplean la información de control del interfaz (ICI) para enviar la información a la capa par.",
      "No existen, las entidades pares no intercambian IDU’s.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 445,
    title:
      "La realización de un servicio ofrecido por la capa n de una arquitectura de red precisa de,",
    choices: [
      "El intercambio de PDU’s entre las entidades pares del nivel n.",
      "El intercambio de PDU’s entre las entidades pares del nivel n-1.",
      "El intercambio de PDU’s entre las entidades pares del nivel n+1.",
      "El intercambio de IDU’s entre las entidades pares del nivel n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 446,
    title:
      "La fragmentación de una SDU procedente del nivel n+1 en una arquitectura de red se realiza,",
    choices: [
      "Añadiendo a cada fragmento de la SDU una PCI del nivel n+1.",
      "Añadiendo a cada fragmento de la SDU una ICI del nivel n.",
      "Añadiendo a cada fragmento de la SDU una PCI del nivel n.",
      "Añadiendo a cada fragmento de la SDU una ICI del nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 447,
    title:
      "La capa de transporte en la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Emplear un protocolo de control del flujo en la comunicación fiable con TCP.",
      "Aumentar el aprovechamiento del medio físico empleando la multiplexación hacia abajo.",
      "Gestionar una comunicación fiable estableciendo circuitos virtuales extremo a extremo con el protocolo TCP.",
      "Proporcionar siempre a la capa de aplicación una comunicación no segura, debido al funcionamiento con datagramas de la subred.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 448,
    title:
      "La potencia de cada armónico en el espectro de frecuencias de una señal digital a transmitir por un medio físico depende,",
    choices: [
      "Del ancho de banda del medio físico en el que será transmitida.",
      "De la frecuencia de la señal portadora empleada en la modulación.",
      "De la relación señal-ruido en el medio físico.",
      "De la información digital que contenga la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 449,
    title:
      "La modulación analógica que permite la transmisión de señales con mayor calidad y mejor aprovechamiento del medio físico es,",
    choices: [
      "La modulación por cambio de amplitud y frecuencia.",
      "La modulación por cambio de amplitud.",
      "La modulación por cambio de frecuencia.",
      "La modulación por cambio de fase y amplitud.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 450,
    title:
      "La velocidad de transferencia necesaria en un medio físico para transmitir señales moduladas digitalmente, como PCM, depende de,",
    choices: [
      "El ancho de banda de la señal moduladora y su relación señal-ruido.",
      "La frecuencia de muestreo y el número de niveles empleado en la cuantización.",
      "La frecuencia de muestreo y el número de niveles de la señal moduladora.",
      "El ancho de banda del medio físico y la frecuencia de muestreo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 451,
    title:
      "La codificación en banda base que menos problemas de sincronización presenta es,",
    choices: [
      "Codificación binaria sin retorno a cero bipolar.",
      "Codificación binaria con retorno a cero unipolar.",
      "Codificación binaria con retorno a cero bipolar.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 452,
    title:
      "Indicar cual de las siguientes características NO se corresponde con una red de área local:",
    choices: [
      "Es habitual la utilización de tecnología punto a punto.",
      "Ofrecen al usuario altas velocidades de transmisión en comparación con las redes de área extendida.",
      "Interconecta equipos cercanos geográficamente.",
      "La red Token Ring (IEEE 802.5) se trata de una red de área local.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 453,
    title: "Las redes de conmutación de circuitos se caracterizan porque:",
    choices: [
      "La información a transmitir se fragmenta en unidades de información pequeña denominadas paquetes.",
      "Un caso específico de estas redes es el funcionamiento como circuitos virtuales.",
      "La comunicación origen-destino se realiza a través de una canal fijo y dedicado.",
      "Es el esquema empleado en Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 454,
    title:
      "Cuál de las siguientes funciones NO corresponde al nivel de transporte del modelo OSI?",
    choices: [
      "Proporciona una comunicación libre de errores entre dos máquinas remotas.",
      "Ofrece una serie de servicios independientes de la estructura de la subred.",
      "Gestiona varias conexiones simultáneas con el host remoto.",
      "Realiza el encaminamiento de la información desde el origen al destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 455,
    title:
      "El intercambio de PDU’s entre entidades pares del nivel n en el modelo OSI permite:",
    choices: [
      "La realización de servicios ofrecidos para la capa n-1.",
      "La realización de servicios ofrecidos por la capa n.",
      "La solicitud de servicios ofrecidos por la capa n+1.",
      "La realización de servicios solicitados con IDU’s enviadas a la capa n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 456,
    title:
      "En el modelo de arquitectura de red OSI, la fragmentación en un nivel n se produce cuando:",
    choices: [
      "El nivel no puede incorporar la Unidad de Datos del Servicio en una única PDU.",
      "El nivel no puede incorporar la IDU en una única Unidad de Datos del Protocolo.",
      "El nivel no puede incorporar la ICI en la Unidad de Datos del Servicio.",
      "El nivel no puede incorporar la PCI en la Unidad de Datos del Protocolo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 457,
    title:
      "En cuanto a las primitivas de servicio definidas por los niveles del modelo OSI, ¿Cuál de las siguientes afirmaciones es cierta?:",
    choices: [
      "Los servicios confirmados son aquellos en los que una entidad no tiene porque recibir confirmación de la realización de un servicio.",
      "Se emplea una primitiva de confirmación cuando se avisa a la entidad de un evento en la realización de un servicio.",
      "Un servicio confiable es aquél en el que el receptor realiza un acuse de la recepción del mensaje.",
      "Se emplea una primitiva de petición cuando se avisa a la entidad de un evento en la realización de un servicio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 458,
    title:
      "En relación a los dispositivos para la interconexión de redes se puede afirmar que:",
    choices: [
      "Un encaminador puede conectar redes con distinta arquitectura de red.",
      "Un puente interpreta la información a nivel de enlace para determinar si es necesario o no transmitir el paquete a un segmento de red.",
      "Una pasarela no puede conectar redes que tengan distinto nivel de red.",
      "Un repetidor es capaz de interconectar redes con distinto nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 459,
    title: "Una transición en una red de Petri se caracteriza porque:",
    choices: [
      "Sólo puede existir una transición habilitada en la red de Petri en un momento dado.",
      "Las transiciones se disparan en base a eventos de entrada a los lugares.",
      "La habilitación de la transición es indeterminista: puede estar o no habilitada.",
      "El disparo de la transición es indeterminista: puede estar o no disparada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 460,
    title:
      "Cuál de las siguientes funciones NO corresponde al nivel físico del modelo OSI?",
    choices: [
      "Especifica como se realiza la modulación de la información.",
      "Define las características de los conectores a nivel mecánico y eléctrico.",
      "Especifica el modo en que el emisor y el receptor se sincronizan.",
      "Dado un canal físico, establece un enlace lógico libre de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 461,
    title:
      "Indicar cual de las siguientes afirmaciones relativas al análisis de señales mediante series de Fourier es cierta:",
    choices: [
      "El ancho de banda de un medio representa el número de veces que la señal puede cambiar por unidad de tiempo.",
      "Los armónicos de mayor orden representan habitualmente señales senoidales de menor amplitud.",
      "Un medio de transmisión atenúa en la misma proporción a todos los armónicos.",
      "La velocidad de transmisión es la misma que la velocidad de modulación para ancho de banda telefónico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 462,
    title:
      "Considérese un medio de transmisión con un ancho de banda de 300 Hz y una frecuencia superior de corte de 450Hz. A partir de la señal representada en la figura. ¿Cuántos armónicos se transmitirán?",
    choices: ["1.", "2.", "3.", "4."],
    solution: "",
    explanation: "",
  },
  {
    id: 463,
    title:
      "Considérese que por un medio de transmisión de ancho de banda igual a 20 Hz se transmite una señal a 20 baudios. Teniendo en cuenta que se emplea modulación QAM con 16 combinaciones ¿Cuántos armónicos se transmitirán como máximo?:",
    choices: ["1.", "2.", "3.", "4."],
    solution: "",
    explanation: "",
  },
  {
    id: 464,
    title:
      "Comparando la modulación por cambio de fase con la modulación por cambio de frecuencia y amplitud se puede afirmar que:",
    choices: [
      "La modulación por cambio de fase precisa de un mayor ancho de banda.",
      "En la modulación por cambio de fase está presente la componente frecuencial de la portadora.",
      "En la modulación por cambio de fase aparece más de un espectro de la señal moduladora.",
      "En el espectro de potencia de la señal modulada por cambio de fase no aparece una componente en la frecuencia de la portadora.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 465,
    title:
      "Indicar cual de las siguientes afirmaciones relativas al efecto del ruido en la velocidad de transmisión es FALSA:",
    choices: [
      "Empleando pares de hilos de cobre trenzados para la transmisión de señales se puede evitar la atenuación de la señal.",
      "El límite de velocidad máxima establecido por el teorema de Nyquist puede superarse aumentando el número de niveles de la señal transmitida.",
      "La velocidad límite establecida por el teorema de Nyquist no puede alcanzarse en la realidad si es superior al del teorema de Shannon .",
      "El ruido de impulso puede deberse a ruido electromagnético generado por máquinas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 466,
    title:
      "Se desea enviar por un medio físico dos señales PCM multiplexadas en el tiempo. Una de las señales corresponde con un canal de comunicación de 64 Kbps y la otra con un canal de 120 Kbps. El medio físico transmitirá bits de información a una velocidad de",
    choices: ["64 Kbps.", "120 Kbps.", "184 Kbps.", "7680 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 467,
    title:
      "En cuanto a los medios de transmisión utilizados en redes de área local, se puede afirmar que es FALSO:",
    choices: [
      "En redes como Ethernet el cable STP es coaxial mientras que el UTP es de pares trenzados.",
      "El cable coaxial grueso requiere la utilización de un equipo transceptor externo al DTE para la conexión.",
      "El empleo de hubs ofrece una topología en bus, pero facilitando la interconexión.",
      "La utilización de fibra óptica ofrece un gran ancho de banda, aunque dificulta la interconexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 468,
    title:
      "Relativo a los principales tipos de fibras ópticas empleados para la interconexión de ordenadores se puede afirmar que:",
    choices: [
      "Las fibras ópticas monomodo son las que presentan un menor ancho de banda.",
      "Las fibras ópticas de índice gradual transmiten distintos haces pero tiende a igualarse la velocidad a la que se envía cada uno de ellos.",
      "En las fibras ópticas de índice de salto no aparece distorsión intramodal.",
      "La velocidad de transmisión en una fibra óptica es independiente de la codificación empleada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 469,
    title:
      "En cuanto a las técnicas de contienda empleadas para compartir el medio en LANs es cierto que:",
    choices: [
      "Hay colisiones en los datos.",
      "Es necesario realizar una reserva del medio antes de enviar los datos.",
      "Los equipos realizan el envío de datos por turnos.",
      "Este método de acceso al medio es empleado fundamentalmente en topologías tipo anillo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 470,
    title:
      "La delimitación de tramas realizada a nivel de enlace tiene por objetivo:",
    choices: [
      "Definir un conjunto de primitivas a ser empleadas por el nivel de red.",
      "Introducir un esquema de direccionamiento a nivel de enlace.",
      "Establecer un sistema de detección de errores.",
      "Realizar la sincronización entre emisor y receptor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 471,
    title:
      "El protocolo de nivel de enlace que funcione rápidamente, con pocos recursos y sin pérdida de datos debe proporcionar un servicio:",
    choices: [
      "Servicio orientado a conexión con reconocimiento.",
      "Servicio no orientado a conexión sin reconocimiento.",
      "Servicio orientado a conexión sin reconocimiento.",
      "Servicio no orientado a conexión con reconocimiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 472,
    title:
      "Sobre el tamaño de la ventana de receptor en un protocolo de ventana deslizante:",
    choices: [
      "Su valor máximo nunca debería ser mayor que el número de secuencias en la numeración.",
      "Tiene un valor uno en el protocolo de ventana deslizante con repetición selectiva.",
      "Cuanto menor sea, mejor es el aprovechamiento del medio físico.",
      "El tamaño de ventana es directamente proporcional a la cantidad de memoria libre.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 473,
    title:
      "El protocolo de control de flujo que consigue un mayor aprovechamiento del medio físico es:",
    choices: [
      "Protocolo de ventana deslizante de envío continuo no selectivo.",
      "Protocolo de ventana deslizante de envío continuo selectivo.",
      "Protocolo de ventana deslizante de envío no continuo.",
      "Protocolo de ventana deslizante con parada y espera.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 474,
    title:
      "El protocolo de nivel de enlace HDLC NO presenta la característica de:",
    choices: [
      "Envío bidireccional de datos.",
      "Control del flujo con un protocolo de ventana deslizante selectivo.",
      "Control del flujo con un protocolo de ventana deslizante no selectivo.",
      "Control del flujo con un protocolo de parada y espera.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 475,
    title:
      "La capa de red del modelo OSI funcionando como circuitos virtuales se caracteriza por:",
    choices: [
      "Implica la utilización de encaminamiento fijo para establecer el mismo camino virtual para conectar el mismo origen con el mismo destino",
      "Es empleado fundamentalmente en redes orientadas a conexión.",
      "Es más tolerante a fallos que las redes orientadas a datagramas.",
      "El modelo OSI no recoge la posibilidad de que en el nivel de red se implementen circuitos virtuales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 476,
    title:
      "Indicar cual de las siguientes afirmaciones relativas al algoritmo de encaminamiento por inundación es FALSA:",
    choices: [
      "Genera un gran número de paquetes duplicados.",
      "Debido a su sencillez se emplean fundamentalmente para el envío de mensajes poco prioritarios.",
      "Se pueden emplear mecanismos limitadores como contador de salto para evitar congestión.",
      "En determinados algoritmos se emplean cuando no se dispone de información previa de la topología de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 477,
    title:
      "Cuál es el código de Hamming para la secuencia de datos ‘00’ si se emplea paridad impar?",
    choices: ["11111", "01010", "11111", "11010"],
    solution: "",
    explanation: "",
  },
  {
    id: 478,
    title:
      "Con respecto al modelo genérico de transferencia de información entre capas...",
    choices: [
      "La PCI es la información de control del interfaz.",
      "La IDU y el SAP forman la PDU.",
      "El SAP se corresponde con la cabecera de cada servicio.",
      "La IDU esta formada por la SDU y la ICI.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 479,
    title: "En relación al modelo OSI, se puede afirmar que:",
    choices: [
      "Establecer y liberar conexiones extremo-extremo es propio del nivel de sesión.",
      "La capa de aplicación es la penúltima capa del modelo OSI.",
      "El reensamblado se realiza a nivel de transporte.",
      "La criptografía y compresión de datos es típica del nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 480,
    title:
      "Cuál será el periodo de muestreo de una señal analógica que se ha digitalizado a una velocidad de 4200 bps, con 6 bits por muestra?",
    choices: ["0 Hz.", "7000 segundos.", "0.0014 segundos.", "3500 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 481,
    title:
      "Con respecto a las técnicas de modulación de analógico a digital...",
    choices: [
      "PCM diferencial requiere un ancho de banda menor que DM.",
      "DM codifica la información analógica muestreada, en cada instante de muestreo, con un único bit.",
      "El ruido de cuantización ocurre cuando la señal varía demasiado rápido.",
      "PCM es la técnica que menor ancho de banda requiere.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 482,
    title:
      "En relación a la multiplexación de señales y las técnicas de modulación en línea, se puede afirmar:",
    choices: [
      "ADSL es un ejemplo de técnica combinada TDM y 32-QAM.",
      "Las líneas T (americanas) son un ejemplo de técnica combinada ASK y TDM.",
      "Las líneas E (europeas) respresentan un modelo de servicio combinado PCM y TDM. ",
      "Ninguna de las anteriores es correcta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 483,
    title: "En la codificación en Banda Base, es cierto que:",
    choices: [
      "En RZ bipolar se tiene 1 elemento de datos por 2 elementos de señal.",
      "En NRZ se presenta 1 elemento de señal por 2 elementos de datos.",
      "Manchester diferencial necesita menor ancho de banda que NRZ.",
      "En Manchester diferencial, si Vt=2 bps, entonces, la Vm=1 baudios.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 484,
    title:
      "La figura adjunta representa una señal senoidal analógica que se propaga según un patrón repetitivo. Podemos afirmar que la señal posee...",
    choices: [
      "Una fase de 0º.",
      "Un desfase de 90º. ",
      "Una fase de 180º",
      "Un desfase de 270º.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 485,
    title: "Un ejemplo de sistema de modulación QAM válido sería:",
    choices: [
      "32-QAM, en donde se presentan 4 amplitudes posibles y 8 fases posibles. ",
      "8-QAM, en donde se cuadriplica la velocidad de transmisión (quadbit).",
      "64-QAM, en donde se presentan 32 frecuencias y 2 amplitudes diferentes",
      "Ninguna de las anteriores es cierta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 486,
    title: "De todos los medios de transmisión guiados, se podría afirmar que:",
    choices: [
      "La categoría 6, recientemente estadarizada, posee únicamente 2 pares de cable de par trenzado.",
      "La categoría 2 permite hasta 10Mbps de velocidad de transmisión.",
      "La categoría 4 correponde a un par trenzado STP.",
      "La categoría 5 posee 4 pares de cable de par trenzado. ",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 487,
    title:
      "En relación a los estándares de redes inalámbricas presentes en la actualidad, es cierto que:",
    choices: [
      "802.11b especifica el empleo de la banda de los 5 GHz.",
      "802.11g emplea el método de modulación de 802.11b pero opera en la banda de 802.11a.",
      "801.11a fue el estandar europeo hasta hace pocos años.",
      "802.11g está estandarizado y se emplea en Europa.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 488,
    title: "En la señalización empleada en una red de computadores...",
    choices: [
      "Los enlaces transoceánicos de una red WAN emplean, normalmente, codificación Manchester.",
      "Podemos afirmar que Manchester será empleado en una gran mayoría de redes LAN. ",
      "NRZ bipolar es la codificación elegida en LAN token ring.",
      "NRZ es un ejemplo de codificación en Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 489,
    title:
      "Actualmente, la transmisión básica en banda modulada de señal analógica puede dividirse en ASK, FSK y PSK. En relación a estas técnicas, podemos señalar que:",
    choices: [
      "Hacen uso de una portadora analógica y una señal moduladora digital. ",
      "PSK se corresponde con el cambio de frecuencia de la onda para representar diferentes señales.",
      "ASK es muy eficaz, pues no le afecta el ruido electromagnético (cambios de amplitud).",
      "FSK se corresponde con modulación por desplazamiento en fase.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 490,
    title:
      "En relación a la delimitación por bits especiales presente en el nivel de Enlace del modelo OSI:",
    choices: [
      "El código a incluir al inicio y fin de la trama se corresponde con ‘0111110’.",
      "El código a incluir al inicio y fin de la trama se corresponde con ‘10000001’.",
      "Si se desea enviar 5 ‘1’ seguidos en los datos debe colocarse un ‘0’ tras el quinto ‘1’. ",
      "Si se desea enviar 6 ‘1’ seguidos en los datos debe colocarse un ‘0’ tras el sexto ‘1’.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 491,
    title:
      "Se pide obtener calcular el CRC en una trama que ha sido recibida en el equipo receptor. El polinomio generador es x5+x2+1 y los datos son 100101001. El CRC será:",
    choices: ["01001. ", "001011.", "00001. ", "No se puede obtener."],
    solution: "",
    explanation: "",
  },
  {
    id: 492,
    title:
      "La trama HDLC del nivel de enlace define un campo de control con 8 bits. Se puede afirmar que:",
    choices: [
      "10001100 indica la presencia de una trama no numerada.",
      "01001100 nos informa de la presencia de una trama de supervisión.",
      "10011111 será el campo de contol de una trama de información.",
      "00000100 es el código presente en una trama de información ",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 493,
    title:
      "PPP es un protocolo de nivel de enlace normalizado que permite una comunicación de enlace entre dos equipos. Es cierto que:",
    choices: [
      "La autenticación presente en el protocolo se consigue mediante el intercambio de paquetes NCP.",
      "La desconexión del enlace se consigue mediante el envío de paquetes LCP.",
      "Mediante CHAP se consigue una dirección IP válida.",
      "PPP no soporta el envío de otros protocolos en su interior.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 494,
    title:
      "En el protocolo de ventana deslizante, si se dispone de 5 bits para la numeración de tramas, el tamaño máximo de la ventana será de:",
    choices: ["32.", "31.", "16.", "15."],
    solution: "",
    explanation: "",
  },
  {
    id: 495,
    title: "En relación al encaminamiento de datos, es cierto que:",
    choices: [
      "El encaminamiento estático requiere mayor procesamiento en los nodos que el dinámico.",
      "Es una tarea asignada al nivel de sesión de OSI.",
      "Bellman-Ford se emplea para encaminamiento estático. ",
      "Dijkstra se utiliza como algoritmo dinámico de coste mínimo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 496,
    title:
      "Qué velocidad de transmisión (bps) se alcanzaría en un medio de ancho de banda B=5000Hz y una relación (S/N)db  igual a 20dB?",
    choices: ["386 baudios.", "33291 bps. ", "21960 bps.", "0 bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 497,
    title:
      "Con respecto a una señal representada en series de Fourier, se puede afirmar que:",
    choices: [
      "Los diferentes términos armónicos no poseen igual energía o información de la señal original. ",
      "Los armónicos impares ofrecen mayor información de la señal original que los armónicos pares.",
      "La frecuencia del armónico número 1 es exactamente igual al valor de frecuencia 10.",
      "La frecuencia de los primeros armónicos es más elevada que la frecuencia de los últimos armónicos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 498,
    title:
      "En relación a los tipos de comunicación utilizados más comúnmente en redes se puede afirmar que:",
    choices: [
      "Para la transmisión de voz lo más adecuado es una transmisión asíncrona y digital/binaria.",
      "En una comunicación síncrona se envía una señal que indica donde se encuentran los bits, siendo lo más común que se envíe en una línea separada a la de datos.",
      "En una red de difusión tipo bus no puede emplearse transmisión síncrona.",
      "Un interfaz síncrono requiere de unos pulsos de sincronización al principio de la trama para sincronizar el origen y el destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 499,
    title:
      "Indicar cual de las siguientes afirmaciones relativas a la transmisión de datos en una WAN es cierta:",
    choices: [
      "La principal diferencia entre datagramas y circuitos virtuales es que en el primer caso la información se envía dividida en fragmentos y en el segundo no.",
      "Tanto en datagramas como en circuitos virtuales la información puede llegar desordenada al destino.",
      "Los datagramas son orientados a la transmisión de datos y los circuitos virtuales son adecuados tanto para datos como para señales analógicas digitalizadas.",
      "Empleando conmutación de paquetes se establece un camino físico fijo tras la conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 500,
    title:
      "Cuál de las siguiente funciones del modelo OSI NO la realiza la capa indicada?:",
    choices: [
      "Presentación: Establece el formato de la información intercambiada.",
      "Transporte: Evitar posibles errores de encaminamiento.",
      "Red: Evitar congestión en los routers.",
      "Enlace: Su función depende de si se utiliza datagramas, circuitos virtuales o conmutación de circuitos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 501,
    title:
      "En cuanto a los protocolos y servicios establecidos por el modelo OSI se puede afirmar que:",
    choices: [
      "La información de control de interfaz es empleada para comunicar capas entre distintos equipos.",
      "Cuando se produce fragmentación en una capa es necesario introducir la información de control de interfaz para cada uno de los fragmentos.",
      "La Unidad de Datos de Interfaz constituye la información que se transmite entre capas pares.",
      "En el nivel 1 la PDU está compuesta por las PCI introducidas por cada capa y la SDU de usuario.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 502,
    title:
      "En cuanto a la utilización de redes de Petri para la especificación de protocolos, es FALSO que:",
    choices: [
      "Pueden existir transiciones sin arcos de salida.",
      "Con redes de Petri se pueden especificar protocolos de comunicación bidireccionales con numeración de tramas empleando dos bits.",
      "Pueden existir varias transiciones habilitadas que se disparan simultáneamente.",
      "Una transición se habilita cuando todos los lugares de donde provienen arcos de entrada tienen, al menos, una marca.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 503,
    title:
      "Respecto al estudio de señales empleando el desarrollo en serie de Fourier es cierto que:",
    choices: [
      "Únicamente se aplica el desarrollo en serie de Fourier a señales periódicas.",
      "Un armónico de orden n tiene mayor frecuencia que otro de orden n+1.",
      "El ancho de banda de un medio de comunicación representa el rango de frecuencias de señales de ruido que no afectan al medio.",
      "En general, a la hora de reconstruir una señal, es mejor emplear los armónicos de mayor orden.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 504,
    title:
      "Según el teorema de Nyquist, calcular cuál será la velocidad de transmisión máxima de un medio con ancho de banda de 12 KHz y una modulación QAM con 8 combinaciones.",
    choices: [
      "36 Kbps.",
      "72 Kbps.",
      "192 Kbps.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 505,
    title:
      "Calcular, para el mismo medio del ejercicio anterior, cual será la velocidad de transmisión máxima considerando una relación señal ruido de 500.",
    choices: [
      "10,7 Kbps.",
      "107,6 Kbps.",
      "2033 Kbps.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 506,
    title:
      "En cuanto a la codificación de información en banda base se puede afirmar que:",
    choices: [
      "Es necesario adaptar la codificación al medio para obtener una señal adecuada.",
      "En general, frente a banda modulada, en banda base se obtienen velocidades y distancias mayores.",
      "Existen codificaciones en banda base que incluyen sincronización.",
      "En banda base la señal que transporta la información a transmitir se denomina moduladora.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 507,
    title: "Indicar cuál de las siguientes codificaciones NO es correcta:",
    choices: ["NRZ bipolar.", "AMI.", "Manchester diferencial.", "RZ"],
    solution: "",
    explanation: "",
  },
  {
    id: 508,
    title:
      "Indicar cual de las siguientes propiedades relativas a la modulación analógica de señales digitales es FALSA:",
    choices: [
      "Tanto en modulación por cambio de frecuencia como en la modulación por cambio de amplitud el receptor no necesita conocer la portadora original.",
      "La modulación multinivel permite aumentar la velocidad de transmisión sin cambiar la velocidad de modulación.",
      "Tanto en modulación por cambio de frecuencia como en la modulación por cambio de amplitud la mayor potencia está concentrada en la componente de la portadora.",
      "Al emplear codificación por desplazamiento en amplitud el espectro de la señal original queda duplicado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 509,
    title:
      "Dado un medio con un ancho de banda de 4 KHz por el que se envía una señal con un ancho de banda de 200 Hz, determinar el rango en el que debería encontrarse la frecuencia de muestreo teniendo en cuenta el teorema de muestreo y que se consideran 8 bits por muestra:",
    choices: [
      "1000 ≥ fm ≥ 400.",
      "8000 ≥ fm ≥ 400.",
      "400 ≥ fm ≥ 50.",
      "Ninguno de los anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 510,
    title:
      "Respecto a los cables coaxiales empleados como medios de transmisión en redes locales se puede afirmar que:",
    choices: [
      "El UTP-5 permite una velocidad máxima de hasta 10 Mbps.",
      "El más empleado en redes de área local industriales es el cable coaxial de 50 Ω.",
      "El cable coaxial fino permite una velocidad de 10 Mbps a una distancia de 500 m.",
      "La principal desventaja de los cables coaxiales frente a los pares trenzados es que los primeros son poco fiables y sensibles al ruido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 511,
    title:
      "Indicar cual de las siguientes afirmaciones relativas al principio de funcionamiento de las fibras ópticas es cierta:",
    choices: [
      "La velocidad de transmisión de una fibra óptica es directamente proporcional al número de haces de luz o modos que permite transmitir.",
      "Debido a posibles interferencias de luz externa, las fibras ópticas no se emplean para la comunicación a grandes distancias (mayores a 100 km).",
      "El recubrimiento de la fibra óptica ha de tener un índice de refracción menor que el núcleo.",
      "La ley de Snell relaciona el ancho de banda del medio con el número de haces que permite transmitir.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 512,
    title:
      "Cuando distintos equipos comparten un mismo medio físico se puede afirmar que:",
    choices: [
      "Las técnicas de contienda se implementan en entornos en los que se desea gran eficiencia con altas cargas en la red.",
      "Si se desea evitar totalmente las colisiones puede emplearse un esquema de compartición basado en reserva.",
      "Las redes tipo Token ring emplean compartición basada en selección centralizada.",
      "Las técnicas de contienda tipo ALOHA requieren escuchar el medio antes de realizar la transmisión de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 513,
    title:
      "Indicar cual de las siguientes funciones NO realiza el nivel de enlace del modelo OSI:",
    choices: [
      "Direccionamiento y encaminamiento desde el nodo origen al destino.",
      "Establecimiento de conexión.",
      "Reconocimiento de tramas.",
      "Control de flujo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 514,
    title: "La delimitación de tramas por violación de código consiste en:",
    choices: [
      "Emplean codificaciones de bits que no corresponden a 1 o 0 para delimitar la trama.",
      "Se delimitan las tramas empleando un código que indica la longitud de la trama.",
      "Delimitar las tramas por su duración considerando emisor y receptor sincronizados.",
      "Se emplean bytes reservados al inicio y final de la trama.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 515,
    title:
      "Qué tipo de direccionamiento se emplea en una red en anillo tipo Token Ring?",
    choices: ["Implícito.", "Explícito.", "Preselección.", "Maestro-esclavo."],
    solution: "",
    explanation: "",
  },
  {
    id: 516,
    title:
      "La técnica de detección de errores empleando códigos de redundancia cíclica (CRC) se fundamenta en:",
    choices: [
      "Enviar junto a los datos la diferencia entre los bits de datos y los bits del polinomio generador.",
      "Enviar junto a los datos el resto de la división de la secuencia de los bits de datos entre los bits de un polinomio generador.",
      "Detecta únicamente errores en ráfagas de longitud menor que r (siendo r la longitud del CRC).",
      "Enviar junto a los datos a transmitir los bits asociados a los coeficientes de un polinomio generador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 517,
    title:
      "Dado un código con distancia Hamming 7. ¿Cuántos errores puede corregir?:",
    choices: ["2.", "3.", "7.", "15."],
    solution: "",
    explanation: "",
  },
  {
    id: 518,
    title:
      "El protocolo de parada y espera con numeración solo en las tramas de datos se caracteriza por:",
    choices: [
      "Detectar errores en 1 bit de la trama.",
      "Detectar errores en 2 bits de la trama.",
      "Presentar duplicación de mensajes en la numeración par de los paquetes.",
      "Realizar siempre el reenvío de los paquetes con numeración par.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 519,
    title:
      "El aprovechamiento óptimo de una canal que emplea un protocolo de ventana deslizante a nivel de enlace se consigue:",
    choices: [
      "Permitiendo que el emisor quede siempre bloqueado a la espera de paquetes de ACK.",
      "Permitiendo que el emisor tenga un tamaño de ventana igual al número de secuencias de la numeración.",
      "Permitiendo que el receptor tenga un tamaño de ventana igual al número de secuencias de la numeración.",
      "Permitiendo que el emisor alcance el tamaño máximo de su ventana cuando reciba el primer paquete de ACK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 520,
    title: "En una arquitectura de red de n niveles, es cierto que:",
    choices: [
      "Existe comunicación horizontal entre la capa n y la n-1 del otro extremo.",
      "Existe comunicación vertical entre la capa n-1 y la n+1.",
      "Un número elevado de niveles aumenta la velocidad de transmisión.",
      "Un número reducido de niveles hace más difícil la detección de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 521,
    title:
      "Las unidades de datos de interfaz (IDU’s) que intercambian dos niveles pares del nivel n de una arquitectura:",
    choices: [
      "Contienen la información de control del protocolo para el intercambio de información con la capa par.",
      "Contienen las PDU’s de los niveles inferiores al n de la arquitectura.",
      "Emplean la información de control del interfaz (ICI) para enviar la información a la capa par.",
      "Ninguna, las entidades pares no intercambian IDU’s.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 522,
    title:
      "Si una SDU es fragmentada al enviarla del nivel n al n-1, es cierto que:",
    choices: [
      "Es necesario incorporar una cabecera ICI a cada fragmento.",
      "Es necesario incorporar una cabecera PCI a cada fragmento.",
      "Sólo el primer fragmento incorpora la cabecera ICI.",
      "Las SDU’s no se fragmentan nunca.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 523,
    title:
      "Relativo a las máquinas de estados finitos para modelar protocolos de red se puede afirmar que:",
    choices: [
      "Una transición no puede dejar a la máquina de estados finitos en el mismo estado.",
      "Pueden existir lugares sin transiciones entrantes.",
      "Un estado debe tener por lo menos una transición a otro estado.",
      "Una máquina de estados finitos puede tener varios estados iniciales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 524,
    title: "Una red de Petri se caracteriza porque:",
    choices: [
      "Sólo puede existir una transición habilitada en la red de Petri en un momento dado.",
      "Pueden existir lugares sin transiciones entrantes.",
      "Las transiciones se disparan en base a eventos de entrada a los lugares.",
      "En el estado inicial únicamente existirá una marca en un lugar de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 525,
    title:
      "Supóngase que se transmiten un total de 8 bits a una velocidad de 640 bps por un medio que tiene una frecuencia inicial y final de corte de 100 Hz y 600 Hz respectivamente. ¿Cuántos armónicos dejará pasar el medio?:",
    choices: ["6.", "7.", "8.", "Ninguno de los anteriores."],
    solution: "",
    explanation: "",
  },
  {
    id: 526,
    title:
      "La ventaja de la codificación Manchester frente a la codificación binaria bipolar es:",
    choices: [
      "Permitir mayores velocidades de transferencia al codificar más niveles.",
      "Permitir mejor sincronización emisor-receptor.",
      "Disminuir el efecto del ruido en la interpretación de la señal.",
      "Ninguna de las anteriores es cierta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 527,
    title:
      "Dada la siguiente señal que se transmite por el medio físico: Se puede afirmar que:",
    choices: [
      "Se emplea modulación en banda base.",
      "Se emplea modulación por variación en frecuencia.",
      "Se emplea modulación por variación en amplitud.",
      "Se emplea modulación por variación en fase.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 528,
    title:
      "Considérese que se aplica PCM para codificar una señal analógica en una señal digital con una velocidad de modulación de 127 muestras por segundo y que se emplea el esquema que se muestra en la siguiente figura: Se puede afirmar que:",
    choices: [
      "PCM y PCM diferencial emplearían la misma cantidad de bits para codificar la señal.",
      "PCM necesitaría menos bits para codificar la señal.",
      "Empleando PCM se obtiene una velocidad de transmisión final de 496 bps.",
      "Empleando PCM se obtiene una velocidad de transmisión final de 508 bps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 529,
    title:
      "Considerando la siguiente multiplexión multinivel: Determinar la Velocidad de transmisión que deberá presentar la trama de salida indicada en el esquema.",
    choices: [
      "2,048 Mpbs.",
      "8,192 Mbps.",
      "64 Kbps.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 530,
    title:
      "Indicar cual de las siguientes afirmaciones relativas a los medios de transmisión es FALSA:",
    choices: [
      "En términos generales en LANs los cables coaxiales han sido sustituidos por el par trenzado debido a que estos últimos presentan un mayor ancho de banda.",
      "Una de las principales aplicaciones del cable coaxial es en televisión y telefonía a gran distancia.",
      "Con par trenzado puede superarse la velocidad de 100 Mbps en LANs.",
      "Las fibras ópticas presentan una atenuación significativamente menor que los cables coaxiales y pares trenzados.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 531,
    title:
      "Cuál de las siguientes funciones NO corresponden a una entidad de nivel de enlace del modelo OSI?:",
    choices: [
      "Divide la información en tramas y lleva a cabo la sincronización entre el origen y destino.",
      "Garantiza al nivel de red que los datos llegan correctamente al destino aunque exista uno o más routers en el camino hasta el destino.",
      "Coordina como acceden las distintas máquinas al medio físico para realizar la comunicación.",
      "Lleva a cabo el control de flujo para coordinar la velocidad de transmisión del emisor con la de recepción del destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 532,
    title:
      "Supóngase que un determinado receptor recibe la trama de datos 11011 y que emplea el polinomio generador x+1 para determinar empleando comprobación de errores mediante redundancia cíclica. Se puede afirmar que:",
    choices: [
      "Los datos recibidos presentan error en un un bit.",
      "Los datos recibidos presentan más de un bit erróneo.",
      "Los datos recibidos son correctos.",
      "Con la información proporcionada no se puede determinar si los bits recibidos son o no correctos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 533,
    title:
      "Se dispone de un código compuesto por las siguientes palabras-código: 0000000000, 0110101010, 0001010111, 1111111111. El nivel de enlace hará corresponder cada una de las palabras-código respectivamente con las siguientes palabras de datos: 00, 01, 10, 11. Se puede afirmar que empleando este código es posible:",
    choices: [
      "Detectar errores hasta en 5 bits.",
      "Corregir errores hasta en 5 bits.",
      "Corregir errores hasta en 2 bits.",
      "Detectar errores hasta en 10 bits.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 534,
    title:
      "Considerando que se emplea paridad par, ¿Cuál será el código Hamming asociado a la palabra de datos 0110101?:",
    choices: ["10001100101.", "00001100101.", "0110101.", "Otro."],
    solution: "",
    explanation: "",
  },
  {
    id: 535,
    title:
      "En muchas ocasiones el algoritmo empleado para la detección de errores a nivel de enlace depende del BER del medio de transmisión. ¿Qué mide este parámetro?:",
    choices: [
      "Probabilidad de que, utilizando un algoritmo para la detección de errores, una trama llegue con uno o más errores detectados y sin errores no detectados.",
      "Probabilidad de que una trama llegue sin errores.",
      "Probabilidad de que, utilizando un algoritmo para la detección de errores, una trama llegue con uno o más errores no detectados.",
      "Probabilidad de que un bit recibido sea erróneo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 536,
    title:
      "Considerando un protocolo de ventana deslizante con numeración de 3 bits y los conceptos que se muestran en la siguiente figura en la que se representa la ventana del receptor, se puede afirmar que:",
    choices: [
      "Las tramas marcadas con ? deberían encontrarse dentro de la ventana de recepción.",
      "Las tramas marcadas con ? representan tramas almacenadas temporalmente hasta que son confirmadas.",
      "El tamaño de la ventana de recepción se mantiene constante durante toda la conexión y permite almacenar 5 tramas.",
      "Las tramas marcadas con ? se han perdido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 537,
    title:
      "El protocolo de ventana deslizante de envío continuo con repetición no selectiva se caracteriza por:",
    choices: [
      "Tanto la ventana de emisor como la de receptor pueden ser mayor que 1.",
      "El receptor almacena las tramas recibidas hasta que le llega la que está esperando.",
      "El emisor rechaza las tramas de confirmación que no se correspondan con la última que envió.",
      "El receptor debe recibir las tramas en orden.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 538,
    title: "Qué mide la cadencia eficaz del protocolo de parada y espera?.",
    choices: [
      "Mide la relación entre los bits de datos transmitidos y el tiempo medio necesario para enviar un paquete de forma correcta.",
      "Mide la utilización del canal considerando información redundante y de control pero sin la existencia de errores, es decir, sin necesidad de retransmitir las tramas incorrectas.",
      "Mide la relación entre la longitud total de la trama a nivel de enlace y el tiempo de propagación de la trama por el medio.",
      "Mide la relación entre la longitud total del campo de datos de la trama y el tiempo de transmisión de la trama por el medio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 539,
    title:
      "En relación al acceso al medio empleando CSMA/CD se puede afirmar que:",
    choices: [
      "El equipo emisor tiene que acabar de transmitir la trama de datos para detectar la colisión.",
      "La colisión es el evento  que habilita a las estaciones para transmitir.",
      "Las estaciones esperan un turno para realizar la transmisión de datos.",
      "Detecta colisiones en el medio más rápido que CSMA.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 540,
    title: "El protocolo HDLC se caracteriza por:",
    choices: [
      "Emplear tramas no numeradas para el control del flujo emisor-receptor.",
      "Emplear un control del flujo de ventana deslizante unidireccional.",
      "Emplear tramas de información y supervisión para el control del flujo emisor-receptor.",
      "Emplear el control del flujo de parada y espera para la recuperación de errores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 541,
    title:
      "Indicar cual de las siguientes afirmaciones relativas a los servicios ofrecidos por el nivel de red al nivel de transporte es FALSA:",
    choices: [
      "Independientemente del tipo de servicio, el funcionamiento interno de la capa de red puede ser mediante circuitos virtuales o mediante datagramas.",
      "Cuando la capa de red emplea circuitos virtuales permanentes siempre se establece el mismo camino para conectar el mismo origen a un mismo destino.",
      "Cuando la capa de red se basa en datagramas la responsabilidad de encaminar recae sobre los nodos de la red.",
      "En un nivel de red que emplea circuitos virtuales la decisión de encaminamiento se toma sólo una vez en cada establecimiento de conexión entre origen y destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 542,
    title:
      "El error de duplicación en el control de flujo a nivel de enlace puede producirse en el protocolo:",
    choices: [
      "Protocolo de parada y espera con numeración de datos y ACK’s.",
      "Protocolo de parada y espera con numeración de datos.",
      "Protocolo de ventana deslizante.",
      "En ninguno de los protocolos de control de flujo anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 543,
    title:
      "Comparando la arquitectura de red TCP/IP con la OSI/ISO se cumple que:",
    choices: [
      "En TCP/IP se define para cada una de sus capas un protocolo distinto que permite la comunicación entre entidades pares en distintos dispositivos, mientras que en OSI algunas capas no especifican protocolo alguno.",
      "Al presentar OSI más capas que TCP/IP, la trama final enviada por el medio físico presentará una mayor cantidad de cabeceras ICI (Información de Control de Interfaz).",
      "A diferencia de TCP/IP, el modelo OSI se emplea para redes LAN y no en redes WAN.",
      "El protocolo de transporte de ambos niveles define cómo se utilizan los servicios que ofrece el nivel de red para el intercambio de PDUs de transporte.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 544,
    title: "En una arquitectura de red de n niveles, es FALSO que:",
    choices: [
      "La PCI (información de control de protocolo de TCP/IP) en el nivel de enlace de una trama ethernet está constituida por campos como dirección MAC origen, dirección MAC destino y tipo de trama, pero dentro de la PCI no se incluye el CRC.",
      "Según OSI, cuando se fragmenta una trama en una capa, si es necesaria información de control de interfaz, dicha información habrá de introducirse en todos y cada uno de los fragmentos para comunicarse con la capa inferior.",
      "Entre las características definidas por un determinado protocolo cabe citar: direccionamiento, control de errores, tipo de envío (simplex, dúplex), control de flujo o multiplexión.",
      "Los servicios que ofrece una determinada capa pueden ser orientados a conexión o no orientados a conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 545,
    title:
      "En cuanto a las propiedades de una red de área extendida se puede afirmar que:",
    choices: [
      "La red telefónica conmutada original para la transmisión de señales de voz empleaba conmutación de circuitos.",
      "Cuando se emplea conmutación de paquetes los nodos aprovechan mejor los enlaces que en conmutación de circuitos, sin embargo, en este último caso es más común que se realicen comprobaciones de errores.",
      "La arquitectura TCP/IP está basada en datagramas y el modelo OSI en circuitos virtuales.",
      "Empleando circuitos virtuales, en una misma conexión las tramas pueden seguir distintos caminos para comunicar un mismo origen con un mismo destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 546,
    title:
      "Sabiendo que se cumple que G(dB) = 20 log G siendo G la ganancia de una señal. ¿Qué significa que para la frecuencia superior de corte, una señal tenga una ganancia de -3dB y que para la frecuencia inferior de corte la ganancia sea nula?",
    choices: [
      "Que el ancho de banda de la señal estará constituido por frecuencias con una ganancia mayor a 0,7.",
      "Que el ancho de banda de la señal estará constituido por frecuencias con una ganancia menor a 0,7.",
      "Que el ancho de banda de la señal es de 20 Hz.",
      "En el ancho de banda los armónicos tendrán una amplitud de 0,7.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 547,
    title:
      "Supóngase que se transmite de forma periódica el carácter ‘a’ por un medio con un ancho de banda de 1000 Hz a una velocidad de 1000bps. En la siguiente figura se representa la señal original y la obtenida en el receptor. Se puede afirmar que:",
    choices: [
      "La señal recibida por el receptor no permite que se pueda reconstruir la señal original.",
      "El receptor recibirá un total de 8 armónicos.",
      "Aplicando el teorema de Nyquist se obtiene una velocidad máxima de 4000 bps.",
      "La frecuencia fundamental de la señal es de 1000Hz.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 548,
    title:
      "Supóngase que a la señal de la figura anterior se le añade ruido de forma que la relación señal ruido es de 4 dB. Se cumple que:",
    choices: [
      "El periodo de muestreo de la señal se habrá visto alterado respecto al calculado en el ejercicio anterior.",
      "El periodo de la señal es de 0,001 segundos.",
      "No se podrá alcanzar la velocidad máxima establecida por el teorema de Nyquist.",
      "El ruido podría eliminarse con un filtro pasa banda.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 549,
    title:
      "Comparando los modos de transmisión síncronos y asíncronos en redes de área local, se puede afirmar que:",
    choices: [
      "En la transmisión síncrona se emplea un “reloj” de bit que limita el inicio y el final de la trama de datos.",
      "En la transmisión asíncrona se hace uso de pulsos de sincronización cada cierto número de bits de datos.",
      "En general, aplicando una transmisión asíncrona se consiguen velocidades de transmisión mayores.",
      "La comunicación asíncrona es empleada habitualmente en las interfaces DTE-DCE.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 550,
    title:
      "Considérese la distribución del ancho de banda en ADSL según se muestra en la siguiente figura: Si la señal del enlace ascendente, para convertirlo a digital, se muestrea con una frecuencia de 400 Hz antes de enviarla y la banda de seguridad es de 100 Hz. Se puede afirmar que:",
    choices: [
      "El enlace ascendente puede aislarse del resto de enlaces mediante un filtro pasa alta considerando una frecuencia inferior de corte de 23 Hz.",
      "El enlace ascendente puede aislarse del resto de enlaces mediante un filtro pasa banda considerando una frecuencia inferior y superior de corte de 23 Hz y 450 Hz respectivamente.",
      "El enlace ascendente puede aislarse del resto de enlaces mediante un filtro pasa banda considerando una frecuencia inferior y superior de corte de 23 Hz y 250 Hz respectivamente.",
      "No se puede aislar el enlace ascendente ya que se mezclará en el canal con el enlace descendente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 551,
    title:
      "Una codificación en banda base es la 4B5B según la cual bloques de datos de 4 bits se codifican en bloques de datos de 5 bits. ¿Cuál de las siguientes es una utilidad de este tipo de codificaciones?",
    choices: [
      "Disponer de bytes especiales reservados para delimitar el inicio y fin de la trama.",
      "Ralentizar la red en situaciones en las cuales se encuentra colapsada.",
      "Encriptar la información por motivos de seguridad.",
      "Este tipo de codificaciones carecen de utilidad práctica.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 552,
    title:
      "Dado el siguiente esquema donde se representa un proceso de modulación: Sabiendo que um es la señal moduladora, up la portadora y uM la modulada. ¿Qué tipo de modulación se está realizando?:",
    choices: ["Modulación PSK.", "Modulación QPSK.", "Modulación QAM.", "PCM."],
    solution: "",
    explanation: "",
  },
  {
    id: 553,
    title:
      "En el nivel físico de un acceso a una red WAN basado en multiplexión de canales de voz, los bits se organizan en tramas como esta: Una trama de 180 bits se envía a una velocidad de 360Kbps. La trama tiene 60 bits en el campo de control, 4 bytes en el campo CRC y transporta entre sus bits de información un canal de control de 16Kbps y otro de 32 Kbps. ¿Cuántos bits tiene cada canal de control?",
    choices: [
      "CANAL 1: 8 bits, CANAL 2: 16 bits.",
      "CANAL 1: 16 bits, CANAL 2: 8 bits.",
      "CANAL 1: 10 bits, CANAL 2: 20 bits.",
      "Otro.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 554,
    title:
      "Cuál de los siguientes cables emplearías para una red LAN Gigabit ethernet?",
    choices: ["Coaxial fino.", "UTP-3.", "UTP-5e.", "UTP-7."],
    solution: "",
    explanation: "",
  },
  {
    id: 555,
    title:
      "Relativo a los principales tipos de fibras ópticas empleados para la interconexión de ordenadores se puede afirmar que:",
    choices: [
      "Las fibras ópticas monomodo son las que presentan un menor ancho de banda.",
      "Las fibras ópticas de índice gradual permiten altas velocidades al transmitir un único haz de luz.",
      "Existen estándares de redes LAN a 10 Gbps que emplean fibras ópticas.",
      "La velocidad de transmisión en una fibra óptica es independiente de la codificación empleada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 556,
    title:
      "Para que un protocolo de nivel de enlace funcione rápidamente, con pocos recursos y sin pérdida de datos debe proporcionar un servicio:",
    choices: [
      "Servicio orientado a conexión con reconocimiento.",
      "Servicio no orientado a conexión sin reconocimiento.",
      "Servicio orientado a conexión sin reconocimiento.",
      "Servicio no orientado a conexión con reconocimiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 557,
    title:
      "El nivel de enlace de un protocolo de red introduce un código de redundancia cíclica en las tramas empleando el polinomio generador x+1. Sabiendo que los datos a enviar (sin el CRC) es 1011, se puede afirmar que la trama final enviada será:",
    choices: ["10110.", "10111.", "101101.", "101111."],
    solution: "",
    explanation: "",
  },
  {
    id: 558,
    title:
      "Considérese que un protocolo de nivel de enlace emplea parada y espera con numeración de datos pero no de confirmaciones. Si se pierde la primera trama de datos, ¿cuál de las siguientes afirmaciones es correcta?",
    choices: [
      "Únicamente llegará al nivel de red del receptor la segunda trama de datos.",
      "Al nivel de red del receptor le pueden llegar tramas de datos duplicadas.",
      "Al nivel de red del receptor no le llegarán tramas de datos duplicadas pero puede haber una pérdida de sincronización entre emisor y receptor.",
      "El receptor no recibirá correctamente ni la primera ni la segunda trama de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 559,
    title:
      "El protocolo de ventana deslizante de envío continuo con repetición selectiva se caracteriza porque:",
    choices: [
      "El tamaño de la ventana de receptor es 1.",
      "Respecto al método de ventana deslizante de envío continuo con repetición NO selectiva, se obtiene un aumento de la eficiencia cuando se producen errores.",
      "El emisor rechaza las tramas de confirmación que no se correspondan con la última de datos que envió.",
      "El receptor debe recibir las tramas ordenadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 560,
    title:
      "Dado el método de control de acceso al medio representado en la siguiente figura: Este método se trata:",
    choices: [
      "ALOHA.",
      "CSMA 1-persistente.",
      "CSMA/CD.",
      "Ninguno de los anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 561,
    title:
      "Indicar cual de las siguientes afirmaciones relativas al protocolo HDLC es FALSA:",
    choices: [
      "Se trata de un protocolo de nivel de enlace orientado a bit.",
      "Cuando se hace uso de estaciones balanceadas se emplea transmisión simplex.",
      "HDLC emplea ventana deslizante con envío continuo.",
      "El receptor puede emplear tramas de supervisión para confirmar o rechazar tramas de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 562,
    title:
      "Supóngase que se emplea HDLC en modo asíncrono balanceado sobre un canal semiduplex.  Considerando que el tamaño de ventana del emisor es 5, que la del receptor es 2, y que el emisor envía 5 tramas consecutivamente (I0, I1, I2, I3, I4), se puede afirmar que:",
    choices: [
      "El emisor enviará tres confirmaciones: una con número de secuencia 2, otra con número de secuencia 4 y otra con número de secuencia 5.",
      "El emisor enviará I0 e I1 y quedará a la espera de su confirmación.",
      "El receptor enviará una única confirmación indicando el número de secuencia 5.",
      "El receptor descartará las tramas I2, I3 e I4.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 563,
    title:
      "Cuál de las siguientes afirmaciones relativas al protocolo PPP es FALSA?",
    choices: [
      "PPP puede encapsular directamente tramas Ethernet.",
      "El protocolo PPP tiene la opción de que el usuario deba autentificarse con un determinado identificador de usuario y password antes de realizar la transmisión de datos.",
      "PPP se emplea cuando se quiere establecer una conexión entre un usuario y un proveedor de servicios de ADSL.",
      "PPP utiliza el mismo control de enlace de datos de alto nivel que HDLC.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 564,
    title:
      "Indicar cual de las siguientes características de los protocolos de encaminamiento basados en vector de distancia y basados en estado del enlace es cierta:",
    choices: [
      "En los protocolos basados en estado del enlace para crear las tablas de encaminamiento es necesario conocer previamente la topología de la red.",
      "En los protocolos basados en vector de distancia cada nodo calcula independientemente las rutas, es decir, sin necesidad de conocer las rutas calculadas por el resto de nodos.",
      "OSPF es un ejemplo de protocolo basado en vector de distancias.",
      "RIP es un ejemplo de protocolo basado en estado del enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 565,
    title:
      "En el siguiente esquema se representa la topología de una red en la que se ha introducido los costes en los enlaces que unen cada uno de los equipos. ¿Cuál es el valor del conjunto T después de 4 iteraciones considerando que el nodo inicial es el nodo “1”?",
    choices: ["1,2,5,6.", "1,2,4,5.", "1,2,5,3.", "1,2,3,4."],
    solution: "",
    explanation: "",
  },
  {
    id: 566,
    title:
      "Cuál de las siguientes es una característica del algoritmo de Bellman-Ford?",
    choices: [
      "Antes de ejecutar este algoritmo es necesario aplicar el algoritmo de Dijkstra para conocer en detalle la topología de la red.",
      "Para su funcionamiento los routers se intercambian información contenida en su tabla de encaminamiento.",
      "Se trata de un algoritmo basado en estado del enlace.",
      "Emplea tablas de encaminamiento estáticas para determinar las rutas óptimas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 567,
    title:
      "Indicar cuál de las siguientes afirmaciones NO se puede aplicar a una arquitectura de red:",
    choices: [
      "La comunicación entre entidades de una misma capa, en distintos dispositivos, es gobernada por un conjunto de reglas denominadas protocolos.",
      "La comunicación entre entidades no adyacentes, en el mismo dispositivo, es gobernada por un conjunto de reglas denominadas interfaz.",
      "Los elementos de un nivel que dialogan con otros elementos del mismo nivel son las denominadas entidades.",
      "Una arquitectura de red se puede definir como el conjunto de capas y protocolos que constituyen un sistema de comunicaciones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 568,
    title:
      "En el modelo de arquitectura de red OSI, la fragmentación en un nivel n se produce cuando:",
    choices: [
      "Cuando al introducir la ICI para comunicarse con el nivel inferior se supera la longitud máxima establecida para la IDU en el nivel n.",
      "Cuando al introducir la PCI en el nivel n se supera el tamaño máximo de PDU establecido para el nivel n.",
      "Cuando el tamaño de la PDU de nivel n+1 es mayor que la longitud máxima de SDU establecida para el nivel n.",
      "El nivel n+1 establece un tamaño de SDU para que no se produzca fragmentación en el nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 569,
    title:
      "Cuál de las siguientes afirmaciones relativas al modelo de referencia OSI es FALSA?",
    choices: [
      "El nivel físico es el único que se encarga de especificar el modo en que el emisor y el receptor se sincronizan.",
      "El nivel de enlace supervisa la entrega de bloques de datos entre dos dispositivos unidos por un enlace.",
      "El nivel de red asegura la entrega de bloques de datos entre dos dispositivos cualesquiera comunicados a través de uno o más enlaces distintos.",
      "En el nivel de transporte se establecen controles de conexión, controles de flujo y controles de errores extremo a extremo",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 570,
    title:
      "Indicar cual de las siguientes afirmaciones relativas al análisis de la transmisión de señales por un medio con ancho de banda limitado (frecuencia inicial fi y frecuencia superior fs) es cierta:",
    choices: [
      "El ancho de banda que presenta un determinado medio de transmisión depende de la velocidad a la que se transmitan datos por él.",
      "Los armónicos de mayor orden representan habitualmente señales senoidales de mayor amplitud.",
      "La distorsión de retardo se produce cuando la velocidad de propagación tiende a ser mayor cerca de la frecuencia central y disminuir al acercarse a los extremos fi y fs.",
      "Habitualmente la ganancia de los medios de transmisión reales es 1 entre fi y fs.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 571,
    title:
      "Considérese que sobre un medio de comunicación se aplica un filtro pasa banda con frecuencia inicial de corte de 100 Hz y frecuencia superior 4500 Hz. Sabiendo que el nivel de ruido para todo el ancho de banda comprendido entre ambas frecuencias es de 30 dB. ¿A qué velocidad máxima aproximada podrá realizarse la transmisión de datos?",
    choices: ["39868.", "43856.", "57262.", "Otra."],
    solution: "",
    explanation: "",
  },
  {
    id: 572,
    title:
      "En las siguientes figuras se representan la codificación digital de un carácter y su espectro de potencias respectivamente. Supóngase que un determinado dispositivo receptor requiere que la potencia acumulada por la amplitud de los armónicos sea de al menos 1 W. y que la señal se transmite a 256 bps. Se puede afirmar que el ancho de banda del medio debe ser de al menos:",
    choices: ["256 Hz.", "128 Hz.", "96 Hz.", "64 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 573,
    title: "En cuanto a las codificaciones en banda base se puede afirmar que:",
    choices: [
      "La información a transmitir se envía empleando una codificación de línea, es decir sin necesidad de realizar modificaciones para enviarla por el medio.",
      "La codificación unipolar es aquella que se emplea cuando en la amplitud de la señal los niveles se pueden encontrar a ambos lados del eje de tiempo.",
      "La codificación bipolar es aquella que se emplea cuando en la amplitud de la señal todos los niveles se encuentran a un mismo lado del eje de tiempo.",
      "La codificación multinivel es aquella que permite la sincronización origen-destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 574,
    title:
      "Indicar la codificación en banda base que se está empleando en la siguiente señal:",
    choices: ["2T3B.", "8B6T.", "3B2T.", "Manchester diferencial."],
    solution: "",
    explanation: "",
  },
  {
    id: 575,
    title:
      "El empleo de la modulación analógica para la transmisión de información está justificado:",
    choices: [
      "Siempre que se transmita información digital a través de un medio físico analógico.",
      "Cuando el espectro de la señal de datos no se adecua al ancho de banda del medio físico.",
      "Siempre que los armónicos de mayor orden de la señal estén fuera del ancho de banda del medio físico.",
      "Cuando el ancho de banda del medio físico no sea infinito.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 576,
    title:
      "El empleo de la modulación digital para la transmisión de información está justificado:",
    choices: [
      "Siempre que se desee transmitir señales digitales empleando señales de pulsos.",
      "Cuando el espectro de la señal moduladora esté fuera del ancho de banda del medio físico.",
      "Cuando sea necesario integrar información analógica en un medio de transmisión digital.",
      "Siempre que la señal moduladora sea digital.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 577,
    title:
      "Considérese las señales PCM nombradas como A, B y C en la Figura 1. Para las tres señales se define un periodo de muestreo T de 125μs, pero mientras que A y B definen muestras de 8 bits cada una, C emplea muestras de 16 bits. Determinar: i) la velocidad de transmisión de cada señal. ii) Al emplear un esquema de multiplexión para transmitir estas tres señales, determinar cual sería la velocidad de transmisión requerida por la trama final",
    choices: [
      "i) A = B = 64 Kbps, C = 128 Kbps ii) 256 Kbps.",
      "i) A = B = 32 Kbps, C = 64 Kbps ii) 128 Kbps.",
      "i) A = B = 64 Kbps, C = 128 Kbps ii) 128 Kbps.",
      "Otro.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 578,
    title:
      "Comparando los pares trenzados UTP categoría 3, 5 y 6, se puede afirmar que:",
    choices: [
      "Todos los cables pueden emplearse en una red Fast Ethernet a 100 Mbps.",
      "El UTP de categoría 3 es el único que no podría emplearse en una red Gigabit Ethernet.",
      "El UTP de categoría 3 admite mayores velocidades al encontrarse apantallado.",
      "Las fibras ópticas permiten distancias menores, menor ancho de banda y menor velocidad de transmisión que estos tres cables.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 579,
    title:
      "Indicar cual de las siguientes afirmaciones relativas a las normativas IEEE para redes inalámbricas WiFi es cierta:",
    choices: [
      "Las normativas IEEE 802.11b y el IEEE 802.11g admiten velocidades máximas de 5 Mbps.",
      "Las normativas más empleadas utilizan microondas en la banda de 2,4 GHz y 5 GHz.",
      "Las ondas electromagnéticas empleadas utilizan propagación ionosférica.",
      "Las ondas electromagnéticas empleadas utilizan propagación superficial.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 580,
    title:
      "Cuál de las siguientes funciones NO corresponde al nivel de enlace del modelo OSI?:",
    choices: [
      "Realiza la transmisión de información de control necesaria para poder iniciar la transferencia de datos a través de un circuito físico ya establecido.",
      "Se encarga de realizar liberación de los buffers empleados en las estaciones para la transferencia de información de nivel de enlace.",
      "Realiza funciones de control de flujo.",
      "En el caso de líneas conmutadas realiza todos los procesos necesarios para el establecimiento del circuito (marcación, conmutación, etc.).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 581,
    title:
      "Calcular el CRC resultante si el emisor quiere enviar la cadena de datos ‘10100110’ usando como polinomio generador G(x) = x2 + x + 1.",
    choices: ["011.", "11.", "00.", "Otro."],
    solution: "",
    explanation: "",
  },
  {
    id: 582,
    title:
      "En relación a los códigos Hamming para la corrección de errores se puede afirmar que:",
    choices: [
      "Dado un código binario de distancia Hamming d, es posible corregir errores de d-1 bits.",
      "El algoritmo de Hamming permite realizar la corrección de errores en un bit si se cumple que k+r+1<d, siendo k y r la cantidad de bits de datos y redundantes respectivamente y d la distancia Hamming del código generado.",
      "Un código generado con el algoritmo de Hamming permite corregir errores en ráfaga.",
      "El algoritmo de Hamming es un método para generar un código de distancia 3 para cualquier conjunto de k bits de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 583,
    title:
      "Considerando a la relación entre el tiempo de propagación y el tiempo de transmisión y que este último tiempo vale 1 segundo, indicar cual de las siguientes afirmaciones relativas a la eficiencia del protocolo de parada y espera es cierta:",
    choices: [
      "Cuando a < 1 se obtiene una mejor utilización del canal que cuando a >1.",
      "Cuando a > 1 los primeros bits de la trama llegan al destino antes de que el origen haya concluido la transmisión de dicha trama.",
      "La eficiencia del canal NO depende del valor de a.",
      "La relación entre la distancia del enlace y la velocidad de propagación es 1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 584,
    title:
      "El protocolo de ventana deslizante de envío continuo con repetición NO selectiva se caracteriza porque:",
    choices: [
      "El tamaño de la ventana de emisor es 1.",
      "El emisor queda a la espera de recibir la confirmación de la última trama enviada antes de transmitir la siguiente.",
      "Cuando se producen errores tiene una mejor eficiencia que el protocolo de ventana deslizante de envío continuo con repetición selectiva.",
      "El receptor debe recibir las tramas ordenadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 585,
    title:
      "Dado el método de control de acceso al medio representado en la siguiente figura: Este método se trata:",
    choices: [
      "CSMA p-persistente.",
      "CSMA 1-persistente.",
      "CSMA/CD.",
      "Ninguno de los anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 586,
    title:
      "El protocolo de nivel de enlace HDLC NO presenta la característica de:",
    choices: [
      "Envío bidireccional de datos con detección de errores.",
      "Control de flujo con un protocolo de parada y espera.",
      "Control de flujo con un protocolo de ventana deslizante selectivo.",
      "Control de flujo con un protocolo de ventana deslizante no selectivo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 587,
    title:
      "Indicar cuál de las siguientes características NO es propia de una red basada en conmutación de circuitos:",
    choices: [
      "Los extremos de la comunicación deben trabajar a igual velocidad, la impuesta por la red.",
      "Una de las aplicaciones típicas de estas redes es la transmisión de voz.",
      "Independientemente de los retardos en cada nodo de la WAN los datos se reciben en el mismo orden que en el que se envían.",
      "Se garantiza la entrega de la información sin errores al destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 588,
    title:
      "El establecimiento de circuitos virtuales en una subred NO precisa de:",
    choices: [
      "Algoritmos de encaminamiento para determinar la ruta entre la máquina origen y destino.",
      "El funcionamiento aislado de cada nodo de la red para determinar la ruta de los paquetes en cada comunicación.",
      "Una comunicación entre los diferentes nodos de la red para establecer la ruta de los paquetes en cada comunicación.",
      "El encaminamiento de los paquetes dependiendo del circuito virtual al que pertenecen.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 589,
    title: "En cuanto a los protocolos de encaminamiento se puede afirmar que:",
    choices: [
      "Empleando encaminamiento por inundación garantiza que los datos enviados por un nodo origen alcanzarán al destino por la ruta óptima.",
      "El protocolo OSPF es un protocolo basado en vector de distancia.",
      "En los protocolos basaos en estado del enlace la ruta calculada por un nodo depende de la calculada por otro.",
      "Los protocolos de Gateway interior se emplean en redes WAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 590,
    title:
      "En el siguiente esquema se representa la topología de una red en la que se ha introducido los costes en los enlaces que unen cada uno de los equipos. ¿Cuál es el valor del conjunto T después de 4 iteraciones considerando que el nodo inicial es el nodo “1”?",
    choices: ["1, 5, 4.", "1, 5, 4, 3, 2.", "1, 5, 4, 2, 3.", "Otro."],
    solution: "",
    explanation: "",
  },
  {
    id: 591,
    title:
      "Se requiere compartir un medio físico por varios ETD para transferencia de información entre todos ellos usando una técnica de acceso multiple con detección de portadora. Además,  se desea que la técnica usada evite las colisiones que se producen si dos estaciones comienzan a transmistir en el mismo instante de tiempo. En ese caso, se puede afirmar que el método más adecuado para implementar esa técnica por su eficacia en el aprovechamiento del medio es:",
    choices: [
      "FDM",
      "TDM",
      "Cualquiera de las modalidades de CSMA persistente",
      "CSMA/CD",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 592,
    title:
      "De acuerdo a la técnica de compartición del medio empleada en algunas redes LAN se puede afirmar que:",
    choices: [
      "Una red en anillo IEEE 802.5 emplea un método de selección distribuida.",
      "Una red Ethernet IEEE 802.3 emplea el método ALOHA ranurado.",
      "Una red wifi IEE 802.11 emplea un método de reserva centralizada.",
      "Una red óptica FDDI emplea el método CSMA p-persistente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 593,
    title:
      "En una comunicación en la que un ETD autorizado conecta con un proveedor de servicios, ISP, para acceder a sus servicios mediante un proceso de autentificación de usuario, la secuencia de paquetes PPP con información encriptada que se genera está formada por:",
    choices: [
      "‘Challenge’-CHAP (desde ETD a ISP), ‘Response’-CHAP (desde ISP a ETD)",
      "‘Challenge’-CHAP (desde ISP a ETD), ‘Response’-CHAP (desde ETD a ISP), ‘Success’-CHAP (desde ISP a ETD)",
      "‘Challenge’-PAP (desde ETD a ISP), ‘Success’- PAP (desde ISP a ETD)",
      "‘Configure Request’-LCP (desde ETD a ISP), ‘Configure ACK’-LCP (desde ISP a ETD), ‘Termintate Request’-LCP (desde ETD a ISP)",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 594,
    title: "Un ejemplo de protocolo para LAN basado en vector de distancia es:",
    choices: ["RIP", "OSPF", "EIGRP", "BGP"],
    solution: "",
    explanation: "",
  },
  {
    id: 595,
    title:
      "Se sabe que en una LAN, un nodo encaminador denotado por A puede encaminar hasta un ETD a través de cualquiera de sus nodos adyacentes (B, C y D) y para el cálculo de la ruta y de la métrica asociada, A usa el protocolo OSPF en modo ToS8. De acuerdo a la información estadística de mínimo coste facilitada en la tabla para tres posibles parámetros de métrica, ¿cuál sería la puerta de enlace por defecto, más adecuada, para transmitir al ETD y cuál sería su métrica asociada?",
    choices: [
      "Nodo B con métrica 1",
      "Nodo C con métrica 1",
      "Nodo C con métrica 4",
      "Cualquiera de los nodos es valido (B, C o y D, con métrica 1)",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 596,
    title:
      "Cuando el protocolo OSPF se activa en una LAN formada por una única área (es decir toda la LAN está constituida por una sóla unidad jerarquica) es similar al protocolo RIP en que ambos:",
    choices: [
      "Emplean paquetes de multidifusión dirigidos a  la IP de destino 224.0.0.5",
      "Intercambian paquetes con actualizaciones de ruta entre nodos vecinos adyacentes mediante la técnica de difusión.",
      "Emplean el algoritmo de Dijkstra para calcular la ruta de coste mínimo.",
      "Se encapsulan como paquetes de datos de la capa de transporte, haciendo uso del protocolo UDP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 597,
    title:
      "Se dispone de una topología de red como la de la figura, donde las tablas de encaminamiento de sus nodos encaminadores se actualizan con el protocolo RIP. ¿Cuáles serán las nuevas entradas que incorporará el Router4 después de que el Router3 mande un ‘RIP-Response’ por el interfaz 10.3.0.3? Inicialmente, las tablas de encaminamiento de los Router3, Router4 y Router5, antes del ‘RIP-Response’, son las mínimas posibles para transmitir por los enlaces a los que se encuentran directamente conectados y la métrica de esos enlaces es 1 en todos los casos.",
    choices: [
      "Destino: 10.2.0.0/16, Gw: 10.3.0.3, Métrica: 1",
      "Destino: 10.2.0.0/16, Gw: 10.3.0.3, Métrica: 2",
      "Destino: 10.2.0.0/16, Gw: 10.3.0.3, Métrica: 2 y Destino: 10.3.0.0/16, Gw: 10.3.0.3, Métrica: 2",
      "El Router 4 no modificará su tabla de encaminamiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 598,
    title:
      "En una arquitectura de red en la cual se emplea el protocolo de encaminamiento OSPF es FALSO que:",
    choices: [
      "Se empleen mensajes LSD cada vez que se produce la activación de un nuevo enlace en uno de los routers de la topología de red.",
      "Se empleen mensajes LSR para que un router solicite información a sus adyacentes sobre los enlaces a los que están conectados estos últimos.",
      "Se pueden emplear 5 servicios ToS distintos para calcular la métrica que determine los mecanismos de actualización de las tablas de encaminamiento.",
      "Los routers que hacen de nodos ABR pertenecen al área backbone y son los encargados de calcular la mejor ruta y propagarla al resto de routers de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 599,
    title:
      "Se quiere implementar un sistema de comunicaciones que tenga un ancho de banda de 50Khz y que consiga una relación S/NdB de 2dB. ¿Cuál será la capacidad máxima del canal de comunicación?",
    choices: ["≈ 137 Kbps.", "≈ 68.5 Kbps.", "≈ 116 Kbps.", "≈ 232 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 600,
    title:
      "La codificación PCM diferencial de la señal analógica muestreada como se indica en la figura con un periodo de muestreo Tm y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘101010111001000100110010’",
      "‘101010010010101’",
      "‘00010100’",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 601,
    title:
      "Se ha enviado la trama 100100001 al medio físico. Si el polinomio generador empleado es 1101 entonces el CRC calculado en el destino será:",
    choices: ["0001", "001", "010", "Ninguno de los anteriores."],
    solution: "",
    explanation: "",
  },
  {
    id: 602,
    title: "Las redes 802.3 con tecnología Ethernet:",
    choices: [
      "Son redes punto a punto.",
      "Son redes con topología en bus cuando conectan máquinas a través de un Router.",
      "Son redes con topología en estrella cuando conectan máquinas a través de un SWITCH.",
      "Son WAN de difusión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 603,
    title: "Respecto a los códigos de Reed-Solomon, es FALSO que:",
    choices: [
      "Sean una técnica de corrección de errores óptima para transmisiones en redes de alta velocidad.",
      "Se basen en dividir una secuencia de bits de datos a transmitir en bloques a los que se añade conjuntos de bits de redundancia.",
      "El número de bits que puede corregir con un código de RS(255,239) es de 8.",
      "El número de símbolos de redundancia r para un código RS(255, 239) es de 16.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 604,
    title:
      "Sobre la delimitación temporal de las tramas que se lleva a cabo en el nivel de enlace, se puede afirmar que:",
    choices: [
      "Emplea cabecera y cola para indicar el número de bits que posee la trama y comprobar errores en la transmisión.",
      "Es robusto a los retardos gracias a su mecanismo de sincronización.",
      "No emplea cabeceras y colas.",
      "Utiliza caracteres especiales para delimitar las tramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 605,
    title:
      "En una señal periódica compuesta que está formada por tres armónicos seno y dónde el primero tiene una frecuencia de 100Hz y una amplitud de 5, el segundo tiene una frecuencia de 200Hz y una amplitud de 5 y el tercero tiene una frecuencia de 300Hz y una amplitud de 5 se puede afirmar que la potencia de la señal es:",
    choices: ["5", "15", "8.66", "700"],
    solution: "",
    explanation: "",
  },
  {
    id: 606,
    title:
      "Respecto al ancho de banda, B, de una conexión ADSL convencional  se puede afirmar que:",
    choices: [
      "Está dividido en 2 canales que emplean un filtro paso alto para señal telefónica y un filtro paso bajo para la señal de datos.",
      "Está dividido en 3 canales. Un canal para señales de datos ascendentes, un canal para señal de datos descendentes y un canal para señal telefónica.",
      "Está dividido en 3 canales que emplean un filtro paso banda para la señal telefónica, un filtro paso bajo para la señal ascendente y paso alta para la señal descendente",
      "Es superior al de una red Ethernet y por eso no se emplean filtros paso bajo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 607,
    title:
      "En una LAN con tecnología Ethernet 1000BaseT que soporta velocidades de 1000Mbps en distancias inferiores a 100m, el cableado más económico empleado es:",
    choices: [
      "Par trenzado UTP de categoría 5e.",
      "Par trenzado UTP de categoría 6.",
      "Par trenzado UTP de categoria 6e.",
      "Par trenzado UTP de categoria 3.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 608,
    title:
      "Dos redes LAN, A de tecnología 100BaseT4 y B de tecnología 1000BaseT, se unen a un dispositivo ROUTER. Si todo el sistema de cableado es de la misma longitud, 100m para cada LAN, entonces:",
    choices: [
      "B recibirá datos procedentes del A a una velocidad máxima de 1000Mbps.",
      "A recibirá datos procedentes del B a una velocidad máxima de 1000Mbps.",
      "A recibirá datos procedentes del B a una velocidad máxima de 100Mbps.",
      "B recibirá datos procedentes del A a una velocidad máxima de 400Mbps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 609,
    title: "La fibra óptica multimodo de indice gradual es cierto que:",
    choices: [
      "Transmite, simultáneamente, varios haces de luz y además se produce una importante dispersión de estos pulsos de luz como consecuencia de los múltples ángulos de reflexión que se emplean en el proceso de propagación.",
      "Transmite, simultáneamente, varios haces de luz donde el indice de refracción aumenta de nucleo a periferia del cable.",
      "Transmite un único haz a lo largo del eje de la fibra óptica.",
      "Proporciona mayor ancho de banda que la fibra óptica multimodo de índice discreto o índice de salto.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 610,
    title: "La velocidad de modulación es:",
    choices: [
      "Es proporcional al numero de bits que se quieren transmitir.",
      "La velocidad de transmisión por el número de bits.",
      "La velocidad de transmisión cuando el medio tiene atenuación.",
      "Es inversamente proporcional al ancho de banda del canal y directamente proporcional al ruido existente en la línea.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 611,
    title: "La codificación QPSK se caracteriza porque:",
    choices: [
      "Permite enviar datos digitales mediante señales analógicas empleando amplitudes distintas en la señal modulada.",
      "Permite enviar datos analógicos mediante señales analógicas empleando frecuencias distintas en la señal modulada.",
      "Es una variante de la modulacón PSK que permite codificar datos de 2 bits en señales analógicas con distinta fase.",
      "Es una modulación que emplea 4 fases distintas que forman desplazamientos de 45º.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 612,
    title:
      "El concepto anglosajón ‘piggybacking’ aplicado a un protocolo de parada y espera consiste en emplear:",
    choices: [
      "Un temporizador en el emisor e introducir mecanismos de numeración de tramas para controlar la perdida de éstas durante la transmisión.",
      "Un temporizador en el emisor e introducir mecanismos de numeración de tramas y asentimientos para controlar la perdida de sincronización y así descartar duplicados.",
      "Una ventana deslizante para proporcionar un flujo continuo de información mejorando así, el aprovechamiento del canal de comunicación.",
      "Una misma trama para enviar datos y asentiminentos y conseguir así un mejor aprovechamiento del canal de comunicación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 613,
    title:
      "En una arquitectura OSI/ISO el control de flujo extremo a extremo y el reensamblado de paquetes para mensajes de datos procedentes del nivel de aplicación se produce en:",
    choices: [
      "La capa o nivel de presentación.",
      "La capa o nivel de transporte.",
      "La capa o nivel de red.",
      "La capa o nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 614,
    title: "El empleo de la difusión en una red LA5 permite,",
    choices: [
      "El envío de información a todas las estaciones de la red transmitiendo un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo un paquete.",
      "El envío de información a una sola estación de la red transmitiendo más de un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo más de un paquete.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 615,
    title:
      "El empleo de datagramas en una red de conmutación de paquetes se caracteriza por,",
    choices: [
      "En las redes de conmutación de paquetes no se emplean datagramas, se establecen circuitos físicos.",
      "Especificar en cada paquete los nodos intermedios que debe atravesar para alcanzar su destino.",
      "Determinar un camino a través de los nodos de la red para que los paquetes alcancen su destino.",
      "Especificar en cada paquete el origen y el destino para que los nodos intermedios determinen un camino en la red para cada paquete transmitido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 616,
    title:
      "Si en una red de conmutación de paquetes basada en datagramas, un nodo deja de funcionar es cierto que,",
    choices: [
      "Sólo los paquetes en tránsito en el nodo no alcanzarán su destino.",
      "Todos los paquetes que hayan pasado por ese nodo han de ser reenviados.",
      "Todas las estaciones de la red quedan incomunicadas.",
      "Las estaciones que emplean ese nodo para intercambiar paquetes han de determinar una nueva ruta para sus destinos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 617,
    title:
      "La interconexión de dos redes punto a punto que emplean la arquitectura TCP/IP, ha de realizarse con,",
    choices: ["Un repetidor.", "Un puente.", "Un router.", "Una pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 618,
    title:
      "Si la capa n de una arquitectura de red puede comunicarse con su entidad par, es FALSO que",
    choices: [
      "La capa n+1 puede emplear los servicios de la capa n.",
      "La capa n puede emplear los servicios de la capa n+1.",
      "La capa n-1 puede comunicarse con su entidad par.",
      "La capa n puede emplear los servicios de la capa n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 619,
    title:
      "La PDU del nivel n (que se envía a la entidad para del nivel n) incorpora en su campo de datos,",
    choices: [
      "La PDU del nivel n-1.",
      "La SDU del nivel n-1.",
      "La PCI del nivel n-1.",
      "La PCI del nivel n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 620,
    title:
      "El nivel de transporte en la arquitectura de red OSI presenta la característica de,",
    choices: [
      "Establecer una comunicación extremo a extremo fiable y no fiable.",
      "Establecer una comunicación libre de errores extremo a extremo.",
      "Detectar errores en los bits de los paquetes transmitidos en un medio físico.",
      "Identificar las estaciones que existen en la red de comunicaciones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 621,
    title:
      "En una red con arquitectura TCP/IP, ¿ qué nivel más bajo de la arquitectura permite detectar que un paquete no ha alcanzado su destino ?",
    choices: ["Acceso a la red.", "Interred.", "Transporte.", "Aplicación."],
    solution: "",
    explanation: "",
  },
  {
    id: 622,
    title:
      "Si se desea transmitir información a través de un medio físico empleando una señal de pulsos con 4 niveles y a una velocidad de 90000 bps, el medio físico necesita un ancho de banda mínimo de,",
    choices: ["30000 Hz.", "45000 Hz.", "90000 Hz.", "22500 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 623,
    title:
      "Una señal que es transmitida por un medio físico se distorsiona si,",
    choices: [
      "Aumenta el ancho banda del medio físico.",
      "Aumenta la relación señal-ruido.",
      "Aumenta la velocidad de transmisión de la señal.",
      "Disminuye el número de niveles en la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 624,
    title:
      "La codificación en banda base que menos problemas de sincronización presenta es,",
    choices: [
      "Codificación binaria sin retorno a cero bipolar.",
      "Codificación binaria sin retorno a cero unipolar.",
      "Codificación binaria con retorno a cero unipolar.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 625,
    title:
      "Qué tipo de modulación analógica permite transmitir información a mayor velocidad si se emplea un mismo ancho de banda ?",
    choices: [
      "Modulación ASK.",
      "Modulación PSK.",
      "Modulación FSK.",
      "Modulación QPSK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 626,
    title:
      "Qué velocidad de transmisión es necesaria para enviar a través de un medio físico DOS señales analógicas de 100 KHz de ancho de banda empleando una modulación PCM de 6 bits ?",
    choices: ["12800 Kbps.", "25600 Kbps.", "1200 Kbps.", "2400 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 627,
    title:
      "El grado del polinomio generador empleado en los códigos de redundancia cíclica (CRC)  5O afecta a,",
    choices: [
      "El número de bits del resto en la operación de división de polinomios.",
      "La cantidad de información redundante en el paquete de información.",
      "La cantidad de errores en ráfaga que pueden detectarse.",
      "La frecuencia con que se producen errores en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 628,
    title:
      "Qué factores 5O provocan un aumento de la congestión en una red TCP/IP ?",
    choices: [
      "Valores de MTU diferentes en toda la red.",
      "Tablas de encaminamiento muy complejas.",
      "Porcentaje de uso de la CPU de los routers para encaminamiento inferiores al 40%.",
      "El empleo de protocolos sin control del flujo como UDP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 629,
    title:
      "Si una red local emplea el mecanismo 5AT en su router de acceso a Internet, es cierto que",
    choices: [
      "El router recibirá desde Internet paquetes dirigidos a las direcciones IP privadas internas.",
      "El router transmitirá paquetes a Internet sólo con su dirección IP como origen.",
      "Los equipos de Internet pueden establecer conexiones con los equipos de la red interna.",
      "Los equipos de la red interna no pueden establecer conexiones con equipos de Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 630,
    title:
      "En una red formada por 4 dispositivos enrutadores, donde cada dispositivo se une con los otros tres mediante enlaces PPP se puede afirmar que es:",
    choices: [
      "Una red de difusión con topología en anillo",
      "Una red de difusión de tipo Ethernet",
      "Una red multipunto con topología en Malla",
      "Ninguna de las anteriores es cierta",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 631,
    title:
      "La red que emplea tecnología ADSL para unir una vivienda con un proveedor de servicios de Internet (ISP) se puede catalogar como:",
    choices: [
      "LAN con topología en estrella",
      "MAN con topología en malla",
      "WAI con topología punto a punto",
      "Ninguna de las anteriores",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 632,
    title:
      "En relación a una red Ethernet con tecnología 100BaseTX se puede afirmar que:",
    choices: [
      "Soporta una velocidad máxima superior a 100BaseT4",
      "Emplea 4 pares de par trenzado de categoría UTP3",
      "No permite el uso de HUBs",
      "Emplea par trenzado no apantallado de categoría 5 y permite alcanzar velocidades de 100Mbps a distancias máximas de 100metros",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 633,
    title:
      "Dada la palabra de datos ‘0110110’ determina la palabra-código asociada que se transmitiría considerando que se emplea paridad par y el algoritmo de Hamming en emisor y receptor",
    choices: ["00001100110", "00011100110", "01101100000", "00001100111"],
    solution: "",
    explanation: "",
  },
  {
    id: 634,
    title:
      "Dos dispositivos A y B se conectan mediante una línea semiduplex y se comunican empleando un procolo HDLC en modo Iormal no Balenceado con ventana deslizante con numeración de 2 bits en emisor y receptor. Si una vez establecida y confirmada correctamente la comunicación A->B, A envía las 4 primeras tramas de un fichero y ninguna tiene errores, entonces:",
    choices: [
      "B enviará RR 0.",
      "B enviará RR 4.",
      "B enviará SREJ 3",
      "B enviará RNR 4",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 635,
    title: "En relación a la modulación PSK se puede afirmar que:",
    choices: [
      "Es una modulación analógica en amplitud donde la señal portadora modifica su valor en función del valor de una señal moduladora",
      "Es una modulación en fase con señal moduladora digital y señal portadora analógica",
      "Es una modulación en fase que permite codificar hasta 2 bits por elemento de señal",
      "Es una modulación en frecuencia y en fase con señal moduladora digital y portadora digital",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 636,
    title:
      "Si se quiere enviar el caracter ‘a’, desde un emisor a un receptor unidos por un medio analógico de ancho de banda limitado, ¿cuál es el número mínimo de armónicos que requiere el emisor para la representación de la secuencia digital de ‘a’ de modo que que el receptor pueda obtener una reconstrucción adecuada que permita la correcta interpretación del caracter?",
    choices: [
      "El número de armónicos es indiferente ya que la reconstrucción en el receptor no depende del número de armónicos que se emplean para la representación de la señal por el emisor",
      "Infinitos armónicos",
      "Dependerá de la frecuencia fundamental de la señal y del ancho de banda del medio por el que se envía",
      "Ocho armónicos es suficiente ya que el carácter ‘a’ ocupa 8 bits",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 637,
    title:
      "La codificación PCM diferencial de la señal analógica muestreada, desde el instante t=0, como se indica en la figura con un periodo de muestreo Tm y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘10010100101100111010’",
      "‘101110010101010000’",
      "‘10101’",
      "Ninguna de las anteriores",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 638,
    title: "Un método de compartición del medio como CSMA/CD es FALSO que:",
    choices: [
      "Mejora el aprovechamiento del canal de transmisión respecto a las variantes de CSMA persistentes",
      "Realiza prevención de colisiones",
      "Emplea mecanismos de detección de colisiones",
      "Se implementa para redes IEEE 802.3 con topología en bus",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 639,
    title:
      "Se sabe que en una LAI, un nodo encaminador denotado por A puede encaminar hasta un ETD a través de cualquiera de sus nodos adyacentes (B, C y D) y para el cálculo de la ruta y de la métrica asociada, A usa el protocolo OSPF en modo ToS8. De acuerdo a la información estadística de mínimo coste facilitada en la tabla para tres posibles parámetros de métrica, ¿cuál sería la puerta de enlace por defecto, más adecuada, para transmitir al ETD y cuál sería su métrica asociada?",
    choices: [
      "Nodo B con métrica 1",
      "Iodo C con métrica 2",
      "Nodo D con métrica 1",
      "Cualquiera de los nodos es valido (B, C o y D, con métrica 7)",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 640,
    title:
      "Cuál de los siguientes medios de tranmisión es el más adecuado para emplear como medio en una comunicación en una red con tecnología Ethernet?",
    choices: [
      "Un medio con un nivel de atenuación de 20dB por línea de comunicación.",
      "Un medio donde la relación de perdida de potencia entre las señales de la salida, una vez que llegan al receptor, y las señales de la entrada, antes de ser transmitidas, es de 50",
      "Un medio sin atenuación pero con un nivel de ruido medio entorno a los 1dB de relación señal-ruido.",
      "Un medio con un nivel de atenuación de 10dB y un nivel de ruido medio de 5dB de relación señal-ruido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 641,
    title:
      "Si la relación entre el tiempo de propagación y el tiempo de transmisión de la trama es de 1.6 entonces ¿cuál será el tamaño de la ventana de emisor para conseguir una eficiencia igual o superior al 50%?",
    choices: ["4", "3", "2", "1"],
    solution: "",
    explanation: "",
  },
  {
    id: 642,
    title:
      "Se considera la codificación IRZ y Manchester de la secuencia binaria ‘11111’ y se sabe que la duración total de dicha señal es de 5µs em ambos casos. Comparando las velocidades de modulación y transmisión en ambas codificaciones, se puede afirmar que:",
    choices: [
      "La velocidad de modulación y la velocidad de transmisión son iguales cuando se emplea Manchester",
      "La velocidad de modulación es mayor si se emplea Manchester que si se emplea IRZ",
      "La velocidad de transmisión es menor si se emplea NRZ que si se emplea Manchester",
      "La velocidad de modulación es menor que la velocidad de transmisión cuando se emplea NRZ",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 643,
    title:
      "Atendiendo a las funciones que se pueden implementar en los protocolos de nivel de enlace se puede FALSO que:",
    choices: [
      "PPP implementa funciones para el establecimiento del enlace lógico",
      "HDLC implementa funciones de control de flujo",
      "Ethernet implementa direccionamiento de tramas y control de errores",
      "xDSL implementa únicamente transmisión half-duplex",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 644,
    title:
      "Se dispone de una topología de red como la de la figura, donde las tablas de encaminamiento de sus nodos encaminadores se actualizan con el protocolo RIP. ¿Cuáles serán las nuevas entradas que incorporará el Router3 después de que el Router5 mande un ‘RIP-Response’ por el interfaz 10.3.0.5? Inicialmente, las tablas de encaminamiento de los Router3, Router4 y Router5, antes del ‘RIP-Response’, son las mínimas posibles para transmitir por los enlaces a los que se encuentran directamente conectados y la métrica de esos enlaces es 1 en todos los casos.",
    choices: [
      "Destino: 10.5.0.0/16, Gw: 10.3.0.5, Métrica: 2",
      "Destino: 10.5.0.0/16, Gw: 10.5.0.5, Métrica: 2",
      "Destino: 10.5.0.0/16, Gw: 10.3.0.5, Métrica: 2 y Destino: 10.3.0.0/16, Gw: 10.3.0.5, Métrica: 2",
      "El Router 3 no modificará su tabla de encaminamiento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 645,
    title:
      "Una señal transmitida por una única fibra óptica de tipo multimodo de índice gradual es FALSO que:",
    choices: [
      "Pueda llegar a alcanzar una velocidad superior a la que alcanzaria en una fibra óptica monomodo",
      "Se propague en el interior de la fibra óptica a menor velocidad que si lo hiciera en una fibra óptica similar pero de índice de salto",
      "Se propaga gracias al fenómeno de refracción y su trayectoria de propagación depende del índice de refracción del material con el que está construida",
      "Es inmune al ruido electromagnético y presenta menor atenuación de señal que la que presentaría si se empleara como medio de transmisión un par trenzado apantallado del tipo CAT5e",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 646,
    title: "Un ejemplo de protocolo para LAI basado en estado de enlace es:",
    choices: ["RIP", "OSPF", "EIGRP", "BGP"],
    solution: "",
    explanation: "",
  },
  {
    id: 647,
    title:
      "Sobre la delimitación temporal de las tramas que se lleva a cabo en el nivel de enlace, es cierto que:",
    choices: [
      "Se emplea en TDM",
      "Emplea cabecera y cola para indicar el número de bits que posee la trama y comprobar errores en la transmisión",
      "Emplea un campo FCS de verificación de errores",
      "No requiere conocer el tamaño de la trama que se envía",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 648,
    title:
      "Cuál es el número de bits que se puede corregir con un código Reed-Solomon RS(127,101) si cada símbolo está compuesto por 1 byte?",
    choices: ["208", "104", "26", "13"],
    solution: "",
    explanation: "",
  },
  {
    id: 649,
    title: "Una LAI con tecnología IEEE 802.11n es cierto que:",
    choices: [
      "Es compatible con las redes 802.11g pero no es compatible con las redes 802.11b",
      "Sólo puede funcionar en una banda de frecuencias de 5Ghz",
      "Permite alcanzar velocidades de transmisión superiores a 5 veces las que se consigue con el estándar 802.11g",
      "Nunca interferiría en las frecuencias de uso del Bluetooh",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 650,
    title:
      "En un protocolo de control de flujo del tipo ‘parada y espera’ es imposible gestionar el flujo de tramas cuando:",
    choices: [
      "Se produce pérdida de tramas de datos",
      "Las tramas de datos recibidas en el receptor contienen un error en 1 bit de datos",
      "Se produce duplicidad de tramas de datos y perdida de sincronización",
      "Io se numeran las tramas de confirmación o asentimiento",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 651,
    title:
      "El empleo de la tecnología punto a punto para las redes WA6 se caracteriza por,",
    choices: [
      "Su bajo coste económico de cableado frente a la tecnología de difusión.",
      "El empleo de la multidifusión para establecer grupos de máquinas en un enlace punto a punto.",
      "La transmisión de un único paquete para enviar información a todos los nodos de la red.",
      "La tolerancia a fallos que presenta si existen varios caminos a un determinado destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 652,
    title:
      "La transmisión de información en una red LA6 de difusión se caracteriza por,",
    choices: [
      "Una elevada tasa de error en el medio debido a la gran extensión geográfica de la red.",
      "Precisar de un esquema de direccionamiento a nivel de enlace.",
      "El empleo de algoritmos de encaminamiento para el intercambio de paquetes.",
      "Establecer caminos en la red entre cada par de equipos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 653,
    title:
      "La realización de un servicio ofrecido por la capa n de una arquitectura de red OSI precisa de,",
    choices: [
      "El intercambio de PDU’s entre las entidades pares del nivel n.",
      "El intercambio de IDU’s entre las entidades pares del nivel n.",
      "El intercambio de PDU’s entre las entidades pares del nivel n+1.",
      "El intercambio de IDU’s entre las entidades pares del nivel n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 654,
    title:
      "La capa de transporte en la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Reducir la tasa de errores en el medio físico al emplear el protocolo TCP.",
      "Permitir un control de errores empleando el protocolo TCP.",
      "Establecer conexiones a múltiples destino empleando el mismo puerto cliente.",
      "Proporcionar siempre a la capa de aplicación una comunicación no segura, debido al funcionamiento con datagramas de la capa de red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 655,
    title:
      "En el modelo de arquitectura de red TCP/IP, los paquetes de datos que se transmiten en el nivel físico,",
    choices: [
      "Incorporan siempre la cabecera del protocolo ARP.",
      "Incorporan siempre la cabecera del protocolo ICMP.",
      "Incorporan siempre la cabecera del protocolo IP.",
      "Incorporan siempre la cabecera del protocolo TCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 656,
    title:
      "La interconexión de dos redes LA6 Ethernet a través de una red con arquitectura TCP/IP se consigue,",
    choices: [
      "Empleando dos routers, uno en cada LAN.",
      "Empleando dos puentes, uno en cada LAN.",
      "Empleando dos pasarelas, una en cada LAN.",
      "Empleando dos repetidores, uno en cada LAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 657,
    title:
      "La velocidad máxima de transmisión que puede emplearse en un medio físico 6O depende de,",
    choices: [
      "El número de armónicos que componen la señal.",
      "El ancho de banda del medio físico.",
      "La relación señal-ruido del medio físico.",
      "El número de niveles empleado en la codificación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 658,
    title: "La modulación digital por código de pulsos (PCM) permite,",
    choices: [
      "Transmitir señales analógicas a través de un medio digital sin ninguna pérdida de información.",
      "Aumentar la velocidad de transferencia de una señal analógica.",
      "Transmitir información analógica empleando un medio físico que transmite señales de pulsos.",
      "Incorporar una señal digital de pulsos a señales analógicas que se transmiten en un medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 659,
    title:
      "La interconexión de dos redes LA6 en un entorno industrial donde existen gran cantidad de equipos eléctricos precisa como medio físico,",
    choices: [
      "Par trenzado STP.",
      "El aire, empleando ondas electromagnéticas.",
      "Cable coaxial de 75 Ω.",
      "Par trenzado UTP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 660,
    title:
      "Qué situación 6O es indicio de presencia de congestión en una red de comunicaciones ?",
    choices: [
      "Presencia de mensajes ICMP Fragment Reaseembly Time exceded.",
      "Presencia de mensajes ICMP Host Unreachable.",
      "Porcentaje de uso de CPU para encaminamiento en los routers del 70%.",
      "Fragmentación de paquetes IP en los routers de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 661,
    title:
      "Sobre el algoritmo de encaminamiento OSPF empleado en un SA (Sistema Autónomo) es cierto que,",
    choices: [
      "Para cada destino, se determina el número de saltos necesarios para alcanzarlo.",
      "Si el tamaño de la red es demasiado grande, el algoritmo no converge a una solución óptima.",
      "Un router OSPF puede informar a sus vecinos de cambios en las características de sus enlaces.",
      "Al emplear la multidifusión, los paquetes enviados por un router OSPF de un SA llegan a todos los routers OSPF del SA.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 662,
    title: "Una conexión a una VP6 empleando PPTP se caracteriza por,",
    choices: [
      "Asegurar que ningún paquete de datos del túnel se pierde en el mismo.",
      "Emplear una conexión UDP para controlar la comunicación.",
      "Verificar la autenticidad del origen del túnel con el protocolo GRE.",
      "Autenticar al usuario que realiza la conexión VPN con el protocolo TCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 663,
    title:
      "Si un paquete TCP con datos (segmento TCP) llega al equipo de destino con un error en el checksum de la cabecera IP, es cierto que,",
    choices: [
      "El equipo de destino envía un mensaje ICMP Destination Unreachable.",
      "El equipo de destino envía un paquete TCP NACK indicando la secuencia del paquete que sufrió el error.",
      "El equipo de destino envía un paquete TCP ACK con la última secuencia recibida correctamente.",
      "El equipo que envío el paquete TCP lo reenviará esperando el ACK de la secuencia correspondiente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 664,
    title:
      "Durante una conexión TCP (ver figura) el cliente envía un segmento (1) con ACK, número de secuencia 4020 y 320 bytes de datos. Después el servidor envía un segmento (2) con ACK y 546 bytes de datos. Finalmente, el cliente envía otro segmento (3) con número de ACK 2034 y 598 bytes de datos. Si no hay errores en la transmisión, ¿Qué número de secuencia tiene el segmento 2?",
    choices: ["1436.", "4618.", "1488.", "4340."],
    solution: "",
    explanation: "",
  },
  {
    id: 665,
    title:
      "Respecto al control de flujo en el nivel de enlace del modelo de referencia OSI, se puede afirmar que:",
    choices: [
      "No es posible controlar el flujo de intercambio de datos con “Parada y espera” debido a la posible pérdida de paquetes cuando se numeran las tramas de datos y las confirmaciones.",
      "Utilizar la técnica de “Parada y espera” equivale a utilizar ventana deslizante con ventanas de emisor y receptor iguales a 1.",
      "Emplear ventana deslizante permite siempre el reenvío, únicamente, de la trama que ha llegado con errores.",
      "Si una trama llega con errores, el emisor tendrá que esperar a que salte un temporizador para volver a enviarla.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 666,
    title: "La comunicación vertical entre capas de una arquitectura de red:",
    choices: [
      "Se produce a través del intercambio de unidades denominadas IDU.",
      "Se produce a través del intercambio de unidades denominadas SDU.",
      "Se produce a través del intercambio de unidades denominadas PDU.",
      "Se gestiona a través de los protocolos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 667,
    title: "La cabecera de una trama en una red 802.11:",
    choices: [
      "Permite definir tres tipos distintos de tramas: gestión, control y datos.",
      "Requiere siempre los valores de cuatro direcciones físicas.",
      "No permite la fragmentación de paquetes. Si es necesario fragmentar se encargará el protocolo IP.",
      "Establece un tamaño mínimo de 46 bytes de datos a enviar en la trama.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 668,
    title:
      "En una industria con mucho ruido magnético se dispone de una LAN formada por 20 equipos conectados a un conmutador. La mitad de los equipos de la red están conectados con cables UTP cat3 y la otra mitad con cables UTP cat6. ¿Qué técnica es la más adecuada para el envío de tramas en el conmutador?:",
    choices: [
      "Fragment free.",
      "Store-and-forward.",
      "Cut through.",
      "Cualquiera de los anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 669,
    title: "El modelo de referencia OSI, es cierto que:",
    choices: [
      "Es anterior al modelo de referencia TCP/IP.",
      "Está formado por cuatro capas.",
      "Define sus protocolos a través de las RFC del IAB.",
      "Ninguna de las anteriores es cierta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 670,
    title:
      "Si a través de un medio físico se transmite la secuencia ‘10011’ codificada como se indica en la figura, entonces se puede afirmar que el modo de transmisión utilizado es del tipo:",
    choices: [
      "Síncrono mediante una línea de comunicación.",
      "Síncrono mediante dos líneas de comunicación.",
      "Asíncrono mediante una línea de comunicación.",
      "Asíncrono mediante dos líneas de comunicación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 671,
    title:
      "En una LAN con tecnología GigabitEthernet donde se necesita al menos 250Mhz de ancho de banda para transmitir, se recomienda el empleo de un cable:",
    choices: [
      "Par trenzado UTP de categoría 5e.",
      "Par trenzado UTP de categoría 6.",
      "Par trenzado UTP de categoría 3.",
      "Par trenzado UTP de categoría 5.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 672,
    title: "El protocolo de transporte TCP:",
    choices: [
      "Permite controlar la congestión de las redes de comunicación a través del campo ventana.",
      "Realiza detección y corrección de errores de datos con el campo ventana.",
      "Realiza control con rechazo selectivo gracias a los temporizadores que se emplean en el emisor.",
      "Permite controlar la congestión de las redes de comunicación a través de la ventana del emisor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 673,
    title:
      "El número de armónicos que representan una señal analógica que se envía por un medio físico que soporta transmisión simplex, es cierto que depende de:",
    choices: [
      "El ancho de banda del medio físico.",
      "La amplitud de la señal que se transmite.",
      "La fase de la señal que se transmite.",
      "La longitud de la trama de nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 674,
    title:
      "Respecto a los mecanismos de modulación empleados en LAN se puede afirmar que:",
    choices: [
      "Ethernet emplea Manchester y Token Ring Manchester diferencial.",
      "Ethernet y Token Ring emplean Manchester diferencial.",
      "Ethernet y Token Ring emplean Manchester.",
      "Ethernet emplea RZ bipolar y Token Ring emplea 4B5B.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 675,
    title: "Es FALSO que el nivel de enlace del modelo de referencia OSI:",
    choices: [
      "Se divide en dos subniveles: LLC y MAC.",
      "Controla el flujo del intercambio de datos entre dos equipos.",
      "Permite el direccionamiento lógico de equipos para la interconexión de redes.",
      "Presenta mecanismos para la detección y corrección de errores de las tramas enviadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 676,
    title:
      "Comparando protocolos de encaminamiento y el modo en cómo éstos calculan la ruta óptima se puede afirmar que:",
    choices: [
      "OSPF determina la ruta óptima empleando como métrica el número de routers o número de segmentos de red que hay que atravesar.",
      "RIP determina la ruta óptima empleando el algoritmo de Bellman-Ford.",
      "RIP emplea paquetes TCP multicast.",
      "OSPF se emplea para encaminamiento dinámico en la red WAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 677,
    title:
      "Cuál de las siguientes NO es una de las características del protocolo de nivel de transporte TCP?",
    choices: [
      "Trabaja con un flujo de bytes.",
      "Permite realizar un envío fiable.",
      "Realiza una transmisión orientada a conexión.",
      "Permite el envío a múltiples destinatarios.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 678,
    title:
      "La codificación PCM de la señal analógica muestreada como se indica en la figura y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘01000’",
      "‘110001010000110011’",
      "‘001101010010001’",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 679,
    title:
      "Qué codificación se emplea en el siguiente gráfico para enviar al medio la secuencia binaria 10101100?",
    choices: [
      "NRZ bipolar.",
      "RZ bipolar.",
      "Manchester diferencial.",
      "2B1T.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 680,
    title:
      "Si una máquina con Ipv4 172.20.41.241 se quiere configurar como si dispusiera de dirección Ipv6, ¿cuál de las siguientes direcciones NO sería adecuada para asignar a la máquina?",
    choices: [
      "::AC:14:29:F1",
      "0000:0000:0000:0000:00AC:0014:0029:00F1",
      "::172:20:41:241",
      "AC:14:29:F1:172:20:41:241",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 681,
    title:
      "Si se comparan varias tecnologías xDSL asimétricas, respecto a la velocidad máxima que soportan y la distancia a la que soportan dicha velocidad, es cierto que:",
    choices: [
      "Para distancias inferiores a 1Km la tecnología que proporciona mejores prestaciones es ADSL2+.",
      "La tecnología VDSL2 define medios físicos con ancho de banda muy superior al de ADSL2+.",
      "ADSL2 es siempre la tecnología menos recomendable por sus bajas prestaciones.",
      "En VDSL mejora la velocidad de bajada si se compara con ADSL2, pero no mejora la velocidad de subida.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 682,
    title: "Respecto a la tecnología ADSL es FALSO que:",
    choices: [
      "Emplea un ‘splitter’ para separar señales telefónicas analógicas de señales de datos moduladas.",
      "Se emplean sistemas DSLAM para multiplexar las transmisiones de abonados procedentes de LANs e introducirlas todas juntas en un enlace de gran capacidad para transmitir, conjuntamente, todas las señales a través de una WAN.",
      "El encapsulamiento más usado entre el cliente y el ISP esté basado en PPPoA o PPPoE.",
      "En su versión ADSL2+ soporta velocidades muy superiores a los 24Mbps para distancias superiores a 3Km.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 683,
    title: "Las redes FDDI:",
    choices: [
      "Utilizan el formato de anillo doble para establecer un enlace full-duplex.",
      "Es un estándar definido para cable UTP.",
      "Utilizan la codificación 4B5B.",
      "Emplean paso de testigo con bits de prioridades y reserva.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 684,
    title:
      "Cuando una máquina de una red, denominada cliente, intenta obtener de manera dinámica una dirección IP a través del protocolo DHCPv4, entonces es cierto que:",
    choices: [
      "Inicialmente, la máquina cliente envía un paquete DHCPv4 ‘Discover’ a BROADCAST y la máquina servidora responde con un paquete DHCPv4 ‘Offer’ que incluye una dirección IP libre.",
      "Inicialmente, la máquina servidora DHCPv4 envía un paquete ‘Discover’ a BROADCAST facilitando direcciones IP libres. No es necesario que el cliente solicite nada.",
      "Inicialmente, la máquina cliente envía un ICMP del tipo ‘Router Solicitation’ a una dirección de Multicast y la maquina servidora responde con un ICMP del tipo ‘Router Advertisement’ que incluye una dirección IP libre.",
      "Inicialmente, la máquina servidora envía un ICMP del tipo ‘Router Solicitation’ a una dirección de Multicast, facilitando direcciones IP libres. No es necesario que el cliente solicite nada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 685,
    title:
      "Se dispone de un enlace ADSL que une una LAN con una WAN. Respecto al ancho de banda, B, del medio físico empleado en la LAN, se puede afirmar que:",
    choices: [
      "Está dividido en 2 canales que emplean un filtro paso alto para señal telefónica y un filtro paso bajo para la señal de datos.",
      "No tiene división en canales.",
      "Está dividido en 3 canales. Un canal para señales de datos ascendentes, un canal para señal de datos descendentes y un canal para señal telefónica.",
      "Está dividido en 4 canales. Un canal para señales de datos ascendentes, un canal para señal de datos descendentes, un canal para señal telefónica ascendente y otro canal para la señal telefónica descendente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 686,
    title:
      "Sobre el encaminamiento de paquetes en una red de datagramas es cierto que,",
    choices: [
      "El intercambio de paquetes entre los nodos de la red es más lento que en las redes basadas en circuitos virtuales.",
      "Los paquetes intercambiados incorporan una etiqueta que indica el camino que tienen que seguir en la red.",
      "Se emplea una tecnología de difusión para interconectar todos los equipos de la red.",
      "Los paquetes dirigidos a una dirección de broadcast son reenviados a todos los routers de la  red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 687,
    title:
      "Si  en una red de difusión un paquete dirigido a la dirección MAC de broadcast sufre una colisión, es cierto que,",
    choices: [
      "Todas las estaciones que detecten la colisión reenviarán el paquete.",
      "El paquete será reenviado por la estación que lo transmitió.",
      "El paquete no será reenviado ya que va dirigido a la dirección de broadcast.",
      "No es posible, pues los paquetes de broadcast nunca sufren colisiones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 688,
    title: "La tecnología de difusión no es apropiada para redes WAN ya que,",
    choices: [
      "Los errores en los medios de difusión son muy frecuentes.",
      "El encaminamiento en una red de difusión es más lento que en una WAN punto a punto.",
      "Las redes de difusión emplean velocidades de transmisión muy pequeñas.",
      "El  elevado  número  de  equipos  que  interconecta  provocaría  un  estado  de  colisión permanente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 689,
    title:
      "Las redes WAN proporcionan a los usuarios velocidades inferiores a las de las redes LAN ya  que,",
    choices: [
      "La velocidad de transmisión en un enlace punto a punto de una red WAN es menor que en un segmento de difusión de una LAN.",
      "Un enlace punto a punto en una WAN se reparte entre más usuarios que en un segmento de  una LAN.",
      "La tasa de error en el medio físico es mayor en las LAN que en las WAN.",
      "Las redes WAN no emplean la fibra óptica como medio de transmisión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 690,
    title:
      "Indica  qué  mecanismo  permite  ofrecer  una  calidad  de  servicio  (QoS)  en  una  red  de comunicaciones,",
    choices: [
      "La autenticación de usuarios que acceden a la red.",
      "Aumentar el número de colisiones en el medio físico.",
      "El reparto de la velocidad de transferencia del medio físico entre los equipos.",
      "Monitorizar los tipos de paquetes transmitidos en el medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 691,
    title:
      "Si dos equipos con arquitectura TCP/IP establecen una conexión cada uno al servicio  HTTP de un mismo servidor en Internet, es cierto que,",
    choices: [
      "Las dos conexiones pueden emplear el mismo número de puerto origen.",
      "Las dos conexiones emplean diferentes números de puerto destino.",
      "Las dos conexiones emplean diferentes direcciones IP destino.",
      "Las dos conexiones emplean la misma dirección IP origen.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 692,
    title:
      "Si un paquete del protocolo HTTP tiene que ser fragmentado por TCP en dos paquetes para enviarlo a la capa par TCP del otro extremo, es cierto que",
    choices: [
      "Los dos paquetes incorporan las mismas cabeceras de protocolos.",
      "Los dos paquetes incorporan cabecera HTTP.",
      "Los dos paquetes incorporan cabecera TCP.",
      "Los dos paquetes no incorporan cabecera TCP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 693,
    title:
      "Qué  tipo  de  señalización  en  banda  base  es  la  más  adecuada  para  mantener  la sincronización ?",
    choices: [
      "Codificación QPSK.",
      "Codificación Manchester.",
      "Codificación QAM.",
      "Codificación binaria unipolar con retorno a cero.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 694,
    title:
      "La  normativa  de  multiplexión  en  el  tiempo  europea  (E1)  y  la  de  EEUU-Japón  (T1)  se diferencian en que,",
    choices: [
      "La velocidad de transmisión empleada en un canal de voz es diferente.",
      "El tiempo empleado en la transmisión de una trama básica es diferente.",
      "La normativa de EEUU-Japón emplea una velocidad mayor que la europea.",
      "El número de canales de voz en una trama es diferente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 695,
    title:
      "Indica en qué situación sólo es  posible  el  empleo de la  fibra óptica como medio  físico de  transmisión,",
    choices: [
      "Distancias de menos de 100 metros y bajas velocidades.",
      "Distancias de menos de 100 metros y ruido electromagnético elevado.",
      "Distancias de menos de 100 metros y velocidades de 100 Mbps.",
      "Distancias de 100 metros y velocidades de 10 Mbps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 696,
    title: "El empleo de fibra óptica de tipo índice gradual permite,",
    choices: [
      "Mayores distancias de comunicación que la fibra multimodo.",
      "Mayores distancias de comunicación que la fibra monomodo.",
      "Mayores velocidades de transmisión que la fibra monomodo.",
      "Mayor inmunidad al ruido electromagnético que la fibra multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 697,
    title:
      "Un operador de comunicaciones desea interconectar físicamente un router situado en la Isla de Pascua (Chile) con un router de su sede en Europa. La infraestructura más adecuada desde el punto de vista económico es,",
    choices: [
      "Cableado de fibra óptica oceánico.",
      "Enlace satelital.",
      "Enlace inalámbrico a 54 Mbps.",
      "Enlace inalámbrico a 11 Mbps,  pues  permite  alcanzar mayores  distancias  que el  de 45 Mbps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 698,
    title:
      "En el  protocolo de nivel  de enlace HDLC ,  el  establecimiento de un enlace balanceado se realiza transmitiendo paquetes de,",
    choices: [
      "Información.",
      "Supervisión.",
      "No numerados.",
      "No es posible establecer conexiones con el protocolo HDLC.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 699,
    title:
      "La autenticación  de un usuario al establecer un enlace PPP se realiza,",
    choices: [
      "Antes de realizar la negociación LCP.",
      "Empleando el protocolo PAP.",
      "Después de realizar la negociación NCP.",
      "Empleando el protocolo IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 700,
    title:
      "Si  en una red se  desea emplear  un protocolo de encaminamiento  que tenga en cuenta la velocidad de comunicación en los enlaces se empleará,",
    choices: ["BGP.", "RIP v1.", "RIP v2.", "OSPF."],
    solution: "",
    explanation: "",
  },
  {
    id: 701,
    title:
      "Sobre el valor del MSS que se establece en una conexión TCP es cierto que,",
    choices: [
      "Se determina a partir del valor del campo opciones en los paquetes SYN.",
      "Se determina a partir del valor del campo window en los paquetes SYN.",
      "Se puede modificar empleando el valor del campo MSS en los paquetes RST.",
      "Se modifica en función del valor del retardo en la recepción de paquetes ACK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 702,
    title:
      "Sobre el control del flujo de datos empleado en el protocolo TCP es cierto que,",
    choices: [
      "El algoritmo de Karn permite determinar un tiempo de espera de ACK para los reenvíos.",
      "El tiempo de espera del ACK de un paquete de datos se modifica siempre en función del  retardo en el último ACK recibido.",
      "La ventana de congestión permite aumentar rápidamente el flujo de envío tras la recepción de un ACK.",
      "El tamaño de la ventana de congestión siempre es mayor que el tamaño de la ventana que informa el receptor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 703,
    title:
      "Durante una conexión TCP (ver figura) el cliente envía un segmento (1) con ACK, número de secuencia 4020 y 320 bytes de datos. Después el servidor envía un segmento (2) con ACK y 546 bytes de datos. Finalmente, el cliente envía otro segmento (3) con número de ACK 2034 y 598 bytes de datos. Si no hay errores en la transmisión, ¿Qué número de ACK tiene el segmento 2?",
    choices: ["1436.", "4618.", "1488.", "4340."],
    solution: "",
    explanation: "",
  },
  {
    id: 704,
    title:
      "Para la comunicación horizontal entre las n-ésimas capas de una arquitectura de red:",
    choices: [
      "El nodo emisor generará una PDU formada por la IDU del nivel superior (n+1) y la PCI del nivel correspondiente (n).",
      "El nodo emisor generará una IDU eliminando la PCI del nivel superior (n+1) en el IDU recibido del nivel superior (n+1) y añadiéndole el PCI del nivel correspondiente (n).",
      "El nodo receptor obtendrá el ICI procedente de la capa inferior (n-1) y tras procesar el PCI de la capa correspondiente (n), enviará a la capa superior (n+1) el PDU correspondiente.",
      "El nodo emisor generará una PDU formada por la SDU del nivel superior (n+1) y la PCI del nivel correspondiente (n).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 705,
    title: "Las redes de área extendida:",
    choices: [
      "Suelen disponer de un medio con mucho mayor ancho de banda que la suma de las redes de área local que interconectan.",
      "Están formadas por enlaces de difusión con una topología en bus normalmente.",
      "Se crean ampliando en como mucho 25 nuevos equipos una red de área local.",
      "Pueden ser públicas y privadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 706,
    title:
      "Si se desea utilizar CSMA/CD como técnica de control de acceso al medio se debe saber que:",
    choices: [
      "El número de veces que el equipo que desea enviar una trama intenta el acceso al medio es ilimitado.",
      "No garantiza la transmisión de los datos en un tiempo determinado.",
      "Se producirán continuamente colisiones ya que cuando un equipo quiere enviar datos los envía sin escuchar el medio.",
      "No habrá nunca colisiones porque los equipos sólo envían datos cuando obtienen permiso del equipo supervisor de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 707,
    title:
      "Dos equipos se conectan entre sí formando una red 802.11 ad-hoc, en este tipo de redes:",
    choices: [
      "Sólo se puede enviar tramas disputando el medio físico con el resto de equipos situados en las inmediaciones.",
      "El punto de acceso controla el acceso al medio y decide en cada momento qué equipo debe enviar datos para evitar las colisiones.",
      "Se puede garantizar el envío de tramas en un tiempo determinado.",
      "Es posible enviar tramas con requisitos temporales empleando la técnica PCF.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 708,
    title:
      "Respecto a la técnica de control de acceso al medio empleada por las redes 802.11, es FALSO que:",
    choices: [
      "Un número aleatorio N permite normalmente evitar la colisión en el acceso al medio.",
      "Un equipo que quiera enviar una trama deberá esperar siempre únicamente un tiempo fijo denominado “interframe gap”.",
      "Entre dos envíos consecutivos de tramas por parte de un equipo, el tiempo de espera será menor si la segunda trama a enviar es una trama de control que si es una trama de datos.",
      "Puede haber colisión en el envío de las tramas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 709,
    title:
      "Si a través de un medio físico se desea transmitir la secuencia ‘10011’ y para ello se emplean dos líneas de comunicación entonces, se puede afirmar que el modo de transmisión utilizado es Síncrono si:",
    choices: [
      "No se envía señal de reloj y se emplean ambas líneas para transmitir la secuencia en grupos de dos bits en paralelo.",
      "Por una línea se envían los ‘1’ y por la otra los ‘0’.",
      "Por una línea se envía la secuencia completa y por la otra línea una señal de reloj.",
      "Por una línea se envía la secuencia completa y por la otra no se envía nada hasta que no se llene el buffer de entrada de la línea que se está empleando para enviar.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 710,
    title: "Respecto a la fibra óptica es FALSO que:",
    choices: [
      "Se emplea en LANs de alta velocidad para interconectar conmutadores.",
      "Sea un medio que es inmune a las interferencias electromagnéticas.",
      "Puede transmitir electricidad para alimentar dispositivos.",
      "Se emplea en enlaces troncales de LANs, que requieren gran capacidad de ancho de banda",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 711,
    title:
      "En una LAN con tecnología Ethernet donde se necesita al menos 100Mhz de ancho de banda para transmitir a distancias de 100m, se recomienda el empleo de un cable igual o superior a:",
    choices: [
      "Par trenzado UTP de categoría 3.",
      "Par trenzado UTP de categoría 5.",
      "Par trenzado UTP de categoría 5e.",
      "Par trenzado UTP de categoría 6.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 712,
    title: "La técnica de “Rotación cronometrada del testigo”:",
    choices: [
      "Permite definir distintas prioridades para los equipos conectados al anillo.",
      "Se emplea en las redes en estrella para controlar el acceso al medio.",
      "Permite calcular el tiempo que un equipo tiene para transmitir en función de un tiempo fijado por el administrador de la red y el tiempo que el testigo tarda en volver al equipo.",
      "Permite calcular el tiempo que un equipo tiene para transmitir en función únicamente del tiempo que tarda el testigo en volver al equipo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 713,
    title: "El “frame bursting” es:",
    choices: [
      "Una técnica que emplean las redes conmutadas para mejorar la velocidad que permite el CSMA/CD.",
      "Una técnica que emplean las redes FDDI para que un mismo equipo pueda enviar varias tramas seguidas al medio físico.",
      "Una trama de control utilizada en las 802.4 para cambiar la velocidad de envío.",
      "Ninguna de las anteriores es cierta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 714,
    title:
      "La codificación Manchester diferencial se suele emplear en redes LAN con tecnología:",
    choices: [
      "Ethernet y Token Ring emplean Manchester diferencial.",
      "Ethernet emplea Manchester y Token Ring Manchester diferencial.",
      "Ethernet y Token Ring emplean Manchester.",
      "Ethernet emplea RZ bipolar y Token Ring emplea 4B5B.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 715,
    title:
      "Si se debe decidir entre emplear el protocolo de nivel de transporte TCP o el protocolo UDP, ¿en qué caso se debe elegir TCP de los que se indican a continuación?:",
    choices: [
      "Envíos a múltiples destinatarios.",
      "Envíos en medios con mucha tasa de errores.",
      "Envíos de mensajes RIP.",
      "Envíos para aplicaciones en tiempo real como voz sobre IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 716,
    title:
      "En referencia a los protocolos de encaminamiento que hemos visto en clase y el modo en cómo éstos calculan la ruta óptima, es FALSO que:",
    choices: [
      "EIGRP emplea una métrica ponderada de una combinación de ancho de banda, retardo, tráfico y tasa de errores.",
      "RIP emplea una métrica basada en la velocidad de transmisión.",
      "OSPF determina la ruta óptima empleando como métrica el retardo de paquetes.",
      "OSPF determina la ruta óptima empleando como métrica la capacidad de los enlaces.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 717,
    title: "Cuando se transmite un segmento TCP con el bit URG puesto a 1:",
    choices: [
      "El receptor pondrá a disposición de la aplicación los datos apuntados por el campo “Urgent Offset”, únicamente cuando ésta se los pida.",
      "El campo “Urgent Offset” indica datos que la aplicación del emisor requiere enviar lo antes posible.",
      "Los datos apuntados por el campo “Urgent Offset” se quieren entregar a la aplicación remota sin esperar a que ésta los pida.",
      "Todos los bytes de datos que lleva el segmento son datos urgentes y se envían lo antes posible.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 718,
    title:
      "La codificación PCM de la señal analógica muestreada como se indica en la figura y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘01000’",
      "‘110 101 110 000 010 011’",
      "‘001 101 010 010 001’",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 719,
    title:
      "Qué codificación se emplea en el siguiente gráfico para enviar al medio la secuencia binaria 01010011?",
    choices: ["RZ bipolar.", "Manchester", "Manchester diferencial.", "AMI."],
    solution: "",
    explanation: "",
  },
  {
    id: 720,
    title: "A diferencia de Ipv4, el protocolo Ipv6 se caracteriza porque:",
    choices: [
      "Requiere del protocolo de transporte TCP para garantizar un flujo constante de datos.",
      "No permite emplear datagramas de más de 64Kbytes.",
      "La fragmentación solo se realiza en el equipo origen, y no en los routers intermedios de la red.",
      "No requiere de nivel de enlace para transmitir datos entre equipos de una misma red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 721,
    title: "Si se comparan varias tecnologías xDSL asimétricas, es cierto que:",
    choices: [
      "ADSL2 mejora la codificación ADSL empleando QAM con más niveles",
      "VDSL permite velocidades máximas descendentes superiores a ADSL2+ cuando se transmite a distancias superiores a 2Km.",
      "La tecnología VDSL emplea medios físicos con ancho de banda de 30Mhz.",
      "ADSL es una tecnología asimétrica que ajusta la velocidad de transmisión en función de la calidad de la señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 722,
    title: "La codificación QAM se caracteriza porque:",
    choices: [
      "Permite enviar datos digitales mediante señales analógicas, empleando frecuencias distintas en la señal modulada.",
      "Permite enviar datos analógicos mediante señales analógicas, empleando amplitudes distintas en la señal modulada.",
      "Es una modulación que emplea distintas amplitudes y desplazamientos de fase.",
      "Es una variante de la modulación MPSK que permite codificar datos de 3 bits en señales analógicas con distinta fase.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 723,
    title: "Respecto a la tecnología ADSL se puede afirmar que:",
    choices: [
      "Emplea un ‘splitter’ para modular señales.",
      "Se emplean sistemas DSLAM para multiplexar las transmisiones de abonados procedentes de LANs e introducirlas todas juntas en un enlace de gran capacidad para transmitir, conjuntamente, todas las señales a través de una WAN.",
      "Se puede emplear el protocolo PPPoE para encapsular tramas Ethernet sobre PPP.",
      "Para unir el router del cliente con el Modem ADSL se emplea par trenzado y para unir el router ISP con el DSLAM se emplea fibra óptica.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 724,
    title: "Las redes FDDI:",
    choices: [
      "Utilizan el formato de anillo doble para establecer un enlace full-dúplex.",
      "Es un estándar definido para cable de fibra óptica.",
      "Utilizan la codificación Manchester diferencial.",
      "Emplean paso de testigo con bits de prioridades y reserva.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 725,
    title:
      "Atendiendo al formato de paquetes IP de la versión 4 y de la versión 6, es FALSO que:",
    choices: [
      "Ipv6 a diferencia de Ipv4, ya no emplea el campo flags y suma de control (Checksum).",
      "La cabecera de Ipv6 es de 20 bytes más grande que la de Ipv4.",
      "Ipv6 a diferencia de Ipv4, ya no emplea el campo longitud de cabecera (HL).",
      "Ipv6 a diferencia de Ipv4, emplea un campo de cabecera de extensión de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 726,
    title: "La red de telefonía básica RTB es una red:",
    choices: [
      "Orientada a conexión y de conmutación de paquetes con circuitos virtuales conmutados.",
      "Orientada a conexión y de conmutación de circuitos.",
      "Orientada a conexión y de conmutación de paquetes con circuitos virtuales permanentes.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 727,
    title:
      "La técnica de multidifusión empleada en redes de computadores se caracteriza por,",
    choices: [
      "Permitir a una estación recibir un paquete de varios remitentes.",
      "Permitir el envío de varios paquetes a una misma estación de la red.",
      "Permitir el envío de un paquete de información a un grupo de estaciones en la red.",
      "Permitir la difusión de un paquete de información en redes WAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 728,
    title:
      "La comunicación en una red WAN que emplea la técnica de circuitos virtuales se caracteriza por,",
    choices: [
      "Proporcionar una transmisión de datos más fiable y fluida que con la técnica de datagramas.",
      "Presentar mayor tolerancia a fallos en los nodos de la red que la técnica de datagramas.",
      "Reducir los retardos en el establecimiento de los circuitos de las redes telefónicas.",
      "Establecer caminos de circulación en la red para cada paquete de datos transmitido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 729,
    title:
      "Si se detecta un error en el funcionamiento del nivel n de una arquitectura de red podemos asegurar que,",
    choices: [
      "Al menos se ha producido un fallo en los niveles superiores al n.",
      "Se ha producido algún fallo en los niveles n o inferiores.",
      "No existe ningún fallo en los niveles inferiores al n.",
      "Siempre existe un fallo en algún nivel superior al n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 730,
    title:
      "La capa de transporte en la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Emplear un protocolo de control del flujo en la comunicación fiable con TCP.",
      "Aumentar el aprovechamiento del medio físico empleando el control del flujo del protocolo UDP.",
      "Gestionar una comunicación fiable estableciendo circuitos virtuales extremo a extremo con el protocolo TCP.",
      "Proporcionar siempre a la capa de aplicación una comunicación no segura, debido al funcionamiento con datagramas de la subred.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 731,
    title:
      "La fragmentación de una PDU en la capa de red de la arquitectura OSI produce,",
    choices: [
      "Varias PDU’s con cabeceras de los protocolos de red, transporte y aplicación.",
      "Varias PDU’s con cabecera del protocolo de red en todas ellas.",
      "Varias PDU’s con cabeceras del protocolo de transporte en todas ellas.",
      "Varias PDU’s con cabeceras del protocolo de aplicación en todas ellas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 732,
    title: "El nivel de enlace en la arquitectura de red OSI proporciona,",
    choices: [
      "Un canal físico libre de errores a la capa de transporte.",
      "Un enlace libre de errores a la capa de red.",
      "Una comunicación extremo a extremo libre de errores para la capa de aplicación.",
      "Evitar que se produzcan errores en la capa física.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 733,
    title:
      "La velocidad máxima de transmisión de una señal digital de pulsos por un medio físico NO depende de,",
    choices: [
      "El ancho de banda del medio físico.",
      "La cantidad de información transmitida.",
      "El número de niveles de la señal.",
      "La relación señal ruido del medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 734,
    title:
      "La codificación binaria bipolar y la Manchester  tienen la característica común de,",
    choices: [
      "Emplear los mismos niveles de voltaje en la señal.",
      "Interpretar la información por el valor de amplitud de la señal.",
      "Interpretar la información por los cambios en el tipo de transiciones de la señal.",
      "Incorporar información de sincronización en la propia señal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 735,
    title:
      "Se desea enviar por un medio físico dos señales PCM multiplexadas en el tiempo. Una de las señales se corresponde con un canal de comunicación a 64 Kbps y la otra con un canal de 96 Kbps. El medio físico transmitirá bits de información a una velocidad de,",
    choices: ["128 Kbps.", "96 Kbps.", "64 Kbps.", "160 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 736,
    title:
      "Indica en cuál de los siguientes medios físicos el efecto de la dispersión intramodal es mayor.",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 5.",
      "Fibra óptica monomodo.",
      "Fibra óptica multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 737,
    title:
      "Los protocolos de nivel de enlace orientados a carácter se caracterizan por,",
    choices: [
      "No añadir información redundante en los datos de los paquetes.",
      "Introducir bits redundantes en la cabecera de nivel de enlace.",
      "Presentar menos errores en el medio físico que los orientados a bit.",
      "Añadir información redundante en el campo de datos de nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 738,
    title:
      "Si dos estaciones utilizan el protocolo PPP como protocolo de nivel de enlace es cierto que,",
    choices: [
      "El intercambio de datos siempre es unidireccional.",
      "El nivel de red IP reenvía los paquetes PPP que sufren errores en el medio físico.",
      "Las dos estaciones intercambian datos con un protocolo de parada y espera.",
      "Es posible detectar errores en los bits de los paquetes transmitidos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 739,
    title:
      "Si una red local emplea el mecanismo NAT en su router de acceso a Internet, es cierto que",
    choices: [
      "El router recibirá desde Internet paquetes dirigidos a las direcciones IP privadas internas.",
      "El router transmitirá paquetes a Internet sólo con su dirección IP como origen.",
      "Los equipos de Internet pueden establecer conexiones con direcciones IP de los equipos de la red interna.",
      "Los equipos de la red interna no pueden establecer conexiones con equipos de Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 740,
    title:
      "Si un paquete UDP con datos llega al equipo de destino con un error en el checksum de la cabecera IP, es cierto que,",
    choices: [
      "El equipo de destino envía un mensaje ICMP Destination Unreachable.",
      "El equipo de destino envía un paquete UDP NACK indicando la secuencia del paquete que sufrió el error.",
      "El protocolo UDP en el equipo que envío el paquete lo reenvía correctamente.",
      "La aplicación del equipo que envío el paquete UDP debe reenviar la información.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 741,
    title: "El número de armónicos de una señal a transmitir:",
    choices: [
      "Depende de la atenuación máxima que soporta la señal",
      "Es función de la potencia",
      "Es siempre infinito para fibra óptica",
      "Está limitado por el ancho de banda del medio físico que la transporta",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 742,
    title:
      "Si se dispone de un medio físico y éste no se puede modificar, entonces:",
    choices: [
      "No se puede incrementar la velocidad de transmisión, porque ésta depende únicamente del ancho de banda B del medio físico",
      "Se puede incrementar la velocidad de transmisión si se consigue aumentar la atenuación",
      "Se puede incrementar la velocidad de transmisión si se aumenta el número de cambios de señal de nuestro dispositivo modulador",
      "No  se  puede  incrementar  la  velocidad  de  transmisión  salvo  que  utilicemos  alguna  técnica  de multiplexación como TDM",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 743,
    title:
      "A la hora de elegir una técnica para la codificación de la transmisión de datos, se puede afirmar que:",
    choices: [
      "La codificación NRZ no incorpora sincronización",
      "La codificación Manchester no presenta sincronización",
      "No importa el medio físico que se utilice para la transmisión, se debe elegir la técnica en función, únicamente, de si ésta permite sincronización o no",
      "Si se elige banda modulada, no se tendrá que adaptar la información que se desea transmitir",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 744,
    title:
      "Si se requiere escoger una técnica de modulación de una señal digital para transmitirla mediante una señal analógica, es cierto que:",
    choices: [
      "La modulación ASK modifica la amplitud de la señal moduladora en función de la señal portadora",
      "La modulación PSK modifica la fase de la señal portadora en función de la señal modulada",
      "La modulación BSK modifica el ancho de banda en función de la señal moduladora",
      "La modulación QAM modifica la amplitud y la fase de la señal portadora",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 745,
    title: "La tecnología 100BaseFX:",
    choices: [
      "Permite alcanzar los 1000Mbps en banda modulada sobre fibra óptica",
      "Permite alcanzar los 100Mbps en banda modulada sobre fibra óptica",
      "Permite alcanzar los 100Mbps en banda base sobre fibra óptica",
      "Permite alcanzar los 100Mbps en banda base sobre cable de par trenzado",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 746,
    title:
      "Respecto a las ondas de radio para la transmisión de datos en redes de computadores, es cierto que:",
    choices: [
      "Es un medio físico que permite comunicaciones en banda base",
      "Proporcionan un medio físico de gran calidad que ofrece velocidades de 100Mbps con el estándar 802.11n",
      "El ancho de banda del medio se divide en canales de 20 MHz de ancho de banda",
      "Al ser un medio físico no compartido, permite  la transmisión sin que se empleen mecanismos de acceso al medio del tipo contienda",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 747,
    title:
      "Si se debe elegir entre una técnica de encaminamiento para gestionar una red de carga variable y con cierta tolerancia a fallos se elegirá preferiblemente:",
    choices: [
      "Un encaminamiento por inundación",
      "Un encaminamiento estático",
      "Un encaminamiento adaptativo distribuido",
      "Un encaminamiento adaptativo centralizado",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 748,
    title:
      "Cuál de las siguientes direcciones del protocolo IPv6 está escrita correctamente?:",
    choices: [
      "2001:0db8::0000:1319::0070:7334",
      "2001:0dq8:85a3:0000:1319:8a2e:0070:7334",
      "::AC:14:2B:E6",
      "2001:0db8:85a3:0000:13194:8a2e:0070:7334",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 749,
    title:
      "Cuando se necesita obtener, automáticamente, una dirección de red para una máquina que se acaba de conectar:",
    choices: [
      "Se utiliza el protocolo DHCP en IPv6 y el protocolo Neighbor Discovery en IPv4",
      "Se utiliza el protocolo DNS en IPv6 y el protocolo DHCP en IPv4",
      "Se utiliza el protocolo DHCP en IPv4 e IPv6 y el protocolo DNS en IPv4",
      "Se utiliza el protocolo DHCP en IPv4 e IPv6 y el protocolo Neighbor Discovery en IPv6",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 750,
    title: "ADSL es un acceso a Internet:",
    choices: [
      "Que utiliza la técnica TDM para la multiplexación de la señal de voz, los datos de subida y los datos de bajada.",
      "Que utiliza el cable coaxial para transmitir voz, datos y televisión",
      "Incompatible con RDSI debido al solapamiento de frecuencias",
      "Que envía la señal de voz y datos mediante señales digitales",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 751,
    title:
      "Cuál de las siguientes afirmaciones relativas a las distintas tecnologías xDSL es FALSA?:",
    choices: [
      "El envío de datos desde el cliente al ISP siempre es menor que el envío en el sentido contrario",
      "VDSL permite el envío de voz digital",
      "IDSL es más lento que ADSL, pero permite llegar a distancias 10 veces mayores",
      "ADSL2 permite utilizar el ancho de banda reservado para telefonía",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 752,
    title: "Para controlar la congestión de paquetes en una LAN:",
    choices: [
      "Se  puede  aumentar  la  velocidad  de  envío  de  los  nodos  emisores  mediante  paquetes  de obstrucción.",
      "Se puede limitar la velocidad de envío de paquetes de los nodos emisores",
      "Se puede enviar un paquete hacia el emisor con los bits de congestión desactivados",
      "Se puede asignar un crédito máximo a la tasa de bits que se puede recibir por parte del receptor",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 753,
    title:
      "Atendiendo al tipo de redes y topologías vistas en clase es FALSO que:",
    choices: [
      "Una red con topología en bus permita enviar mensajes multicast a un conjunto de máquinas",
      "Una red con topología en malla esté formada por varios enlaces punto a punto por máquina",
      "Una  red  con  topología en estrella que emplea un  concentrador de  tipo  SWITCH permita enviar mensajes broadcast a un conjunto de máquinas",
      "Un BRIDGE permita conectar dos LANs con distinta topología de red y nivel de enlace",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 754,
    title:
      "Se quiere implementar un sistema de comunicaciones que tenga un ancho de banda de 3000Hz y que consiga una relación S/NdB de 35dB. ¿Cuál será la capacidad máxima del canal de comunicación?",
    choices: ["≈ 69.7Kbps", "≈ 34.8Kbps", "≈ 31Kbps", "≈ 15.5Kbps"],
    solution: "",
    explanation: "",
  },
  {
    id: 755,
    title:
      "Cuál sería el   medio  físico más adecuado para  realizar  la conexión en una LAN, de modo que  las comunicaciones  queden  aisladas,  lo  mejor  posible,  de  las  interferencias  electromagnéticas  y  de  los problemas de ruido por diafonía?",
    choices: [
      "Par trenzado UTP 3",
      "Par trenzado UTP 5",
      "Par trenzado UTP 6",
      "Par trenzado STP",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 756,
    title:
      "Dada la siguiente codificación en PCM diferencial ‘110101001010001110111110110’ averigua cuál es la  máxima  diferencia  entre  dos  muestras  consecutivas  de  la  señal  original,  si  se  sabe  que  se  ha cuantificado con 3 bits.",
    choices: [
      "La diferencia es de 0 niveles de tensión",
      "La diferencia es de 1 niveles de tensión",
      "La diferencia es de 2 niveles de tensión",
      "La diferencia es de 3 niveles de tensión",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 757,
    title:
      "La codificación PCM de  la señal analógica muestreada desde el  instante  t=0, como se  indica en  la figura y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘0101101001010101010110100111’",
      "‘010111010000000001011101’",
      "‘0000101011010000000010101111’",
      "‘010111011000100001011101’",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 758,
    title:
      "Determina  cuál de  las  siguientes  afirmaciones  respecto  a  la  siguiente  codificación banda base  es FALSA:",
    choices: [
      "Puede corresponder a una codificación Manchester para la secuencia binaria ‘0100110’",
      "Puede corresponder a una codificación NRZ bipolar para  la  secuencia binaria  ‘10011010010110’ siempre y cuando la duración del bit sea la mitad que la empleada en Manchester",
      "Siempre  corresponde  a  una  codificación  Manchester  diferencial  para  la  secuencia  binaria ‘0110101’",
      "Nunca corresponderá a una codificación RZ bipolar",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 759,
    title:
      "Es FALSO que la métrica que emplean los protocolos de encaminamiento para calcular la ruta óptima entre un nodo origen y un nodo destino se pueda determinar a partir del:",
    choices: [
      "Número de redes por los que habría que pasar en la ruta",
      "La velocidad de transmisión máxima que soportan los posibles enlaces que intervendrían en la ruta",
      "Un valor ponderado obtenido a partir del ancho de banda de  los enlaces que  intervendrían en  la ruta",
      "El número de routers o encaminadores que se pueden configurar como puerta de enlace de cada encaminador o nodo intermedio",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 760,
    title:
      "Respecto a la delimitación de tramas que se lleva a cabo en el nivel de enlace, se puede afirmar que:",
    choices: [
      "Ethernet no emplea delimitador de final o cola para indicar el final de la trama",
      "Ethernet emplea un delimitador de comienzo por bits especiales para indicar comienzo de trama",
      "Token Ring no emplea delimitador de comienzo y de final para delimitar la trama",
      "La RDSI emplea delimitador de bits especiales para indicar comienzo y final de trama",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 761,
    title:
      "Durante  una  conexión  TCP  (ver  figura)  el  cliente  envía  un  segmento  (1)  con  ACK,  número  de secuencia 1400 y 300 bytes de datos. Después el servidor envía un segmento (2) con ACK y 550 bytes de datos. Finalmente, el cliente envía otro segmento (3) con número de ACK 2300 y 350 bytes de datos. Si no hay errores en  la  transmisión,  ¿Qué número de  secuencia  tiene el  segmento 2?  (Por errata,  se ha anulada, y se ha dado 0.3p a todos)",
    choices: ["1700.", "1750.", "2000.", "2050."],
    solution: "",
    explanation: "",
  },
  {
    id: 762,
    title: "En un conmutador ‘store and forward’ NO es cierto que:",
    choices: [
      "Permita conectar dispositivos con distintas velocidades",
      "Use buffers para guardar y procesar las tramas antes de reenviarlas",
      "Tenga latencias inferiores a 7microsegundos en el reenvío de tramas",
      "Comprueba errores en tramas haciendo uso del CRC",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 763,
    title:
      "En una FDDI como  la de  la  figura, si  la máquina C desea enviar datos a D, entonces es cierto que cuando la trama que circula llegue a C, C procederá de la siguiente manera:",
    choices: [
      "C no podrán enviar datos ya que el medio está ocupado y dejará pasar la trama que circula como está",
      "C modificará el campo de prioridad de la trama que circula, para reservar y enviar más tarde",
      "C sacará la trama del medio y construirá una nueva B‐D C‐D T (de cabecera a cola)",
      "C sacará la trama del medio y construirá una nueva A‐C B‐D T C‐D (de cabecera a cola)",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 764,
    title: "En el protocolo CSMA/CA es cierto que:",
    choices: [
      "No se requiere conocer el tiempo de interframe para controlar el acceso al medio.",
      "No se requiere conocer el tiempo de ranura para controlar el acceso al medio.",
      "No se requiere conocer la longitud de la trama para controlar el acceso al medio.",
      "Se requiere conocer el tiempo de interframe, el tiempo de ranura, la longitud de la trama y un parámetro aleatorio para controlar el acceso al medio.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 765,
    title:
      "Si una red está formada por dos LAN, A y B, y éstas se conectan mediante un BRIDGE y a su vez A interconecta máquinas mediante un HUB y B mediante un SWITCH, se puede afirmar que la topología de la red es:",
    choices: ["Bus.", "Estrella.", "Anillo.", "Ninguna de las anteriores"],
    solution: "",
    explanation: "",
  },
  {
    id: 766,
    title:
      "Respecto al nivel de enlace de una LAN se puede afirmar que si está es una...",
    choices: [
      "Token Ring, entonces  realiza control del enlace lógico e implementa dos tipos de tramas distintas, datos y testigo",
      "Ethernet, entonces no realiza control del enlace lógico e implementa dos tipos de tramas distintas, datos y ACKs",
      "WiFi,  entonces  realiza  control  del  enlace  lógico  e  implementa  tres  tipos  de  tramas  distintas, gestión, control y datos",
      "FDDI, entonces realiza control del enlace lógico e implementa un solo tipo de trama, llamada datos",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 767,
    title: "El protocolo HDLC 5O presenta la característica de,",
    choices: [
      "Control del flujo con ventana deslizante.",
      "Reenvío de paquetes erróneos.",
      "Delimitación de tramas como en los protocolos orientados a bit.",
      "Autenticación en el establecimiento de conexiones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 768,
    title:
      "El protocolo PPP 5O gestiona entre los extremos de la comunicación,",
    choices: [
      "La configuración del protocolo IP.",
      "El inicio de sesión de un usuario.",
      "La autenticación de los usuarios.",
      "El formato de los paquetes PPP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 769,
    title:
      "En una red LA5 que disponga de un direccionamiento IP privado, es cierto que:",
    choices: [
      "No se pueden intercambiar con Internet paquetes IP con direcciones IP privadas.",
      "El mecanismo de NAT modifica la dirección IP de destino de los paquetes que salen de la red LAN hacia Internet.",
      "Cualquier máquina de Internet puede establecer una conexión a una dirección IP privada de la red LAN.",
      "El encaminamiento modifica la cabecera IP de los paquetes de la red LAN en todos los routers entre el origen y el destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 770,
    title:
      "Si un router envía un mensaje RIP versión 1 en una red LA5 Ethernet, el paquete emplea como dirección MAC de destino,",
    choices: [
      "La dirección FF:FF:FF:FF:FF:FF.",
      "La dirección 255.255.255.255.",
      "La dirección 224.0.0.9.",
      "Una dirección MAC de multidifusión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 771,
    title:
      "Qué ancho de banda  se necesita para  implementar un  sistema de  comunicaciones que  tenga una capacidad máxima de canal de 50 Mbps empleando un medio que tiene una relación S/NdB de 35 dB?",
    choices: ["≈ 1.07 Mhz.", "≈ 2.15Mhz.", "≈ 4.30 Mhz.", "≈ 7.14 Mhz."],
    solution: "",
    explanation: "",
  },
  {
    id: 772,
    title:
      "Si un medio físico emplea una señal de reloj, la cual se transmite por una línea distinta de la línea por la que se transmite la señal que codifica secuencias de datos digitales, entonces se puede afirmar que el modo de transmisión es:",
    choices: [
      "Síncrono y se suele emplear en interfaces para comunicar DTE‐DCE.",
      "Síncrono y se suele emplear en redes LAN.",
      "Asíncrono y se suele emplear en interfaces para comunicar DTE‐DCE.",
      "Asíncrono y se suele emplear en redes LAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 773,
    title:
      "Si el ancho de banda de un medio físico es de 20Mhz, ¿cuál es el número máximo de armónicos que se pueden transmitir si se sabe que la frecuencia fundamental de la señal a enviar es de 500Khz?",
    choices: ["10000.", "40.", "25.", "Infinitos."],
    solution: "",
    explanation: "",
  },
  {
    id: 774,
    title:
      "La codificación PCM diferencial de la señal analógica muestreada desde el instante t=0 como se indica en la figura y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘101010001011010000’",
      "‘011101010101110’",
      "‘10100’",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 775,
    title:
      "De acuerdo al estándar EIA‐568‐A se puede afirmar que un cable de categoría 5e, se caracteriza por ser un:",
    choices: [
      "Par trenzado UTP que permite alcanzar velocidades de hasta 100Mbps sobre 100 metros.",
      "Par trenzado UTP que permite alcanzar velocidades de hasta 1000Mbps sobre 100 metros.",
      "Par trenzado UTP que permite alcanzar velocidades de hasta 10Gbps sobre 50 metros.",
      "Par trenzado FTP (S‐UTP) que permite alcanzar velocidades de hasta 10 Gbps sobre 100 metros.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 776,
    title:
      "Si  el medio  físico de una  LAN‐Ethernet  está  compuesto por una  fibra óptica monomodo  y no hay dispositivos  de  interconexión  de  tipo HUB  o  SWITCH  o  BRIDGE,  se  puede  afirmar  que  a  igualdad  en velocidad:",
    choices: [
      "La fibra óptica multimodo de índice discreto permitiría transmitir a más distancia.",
      "La fibra óptica multimodo de índice gradual permitiría transmitir a más distancia.",
      "Se conseguiría transmitir a más distancia que si éste estuviera compuesto de UTP 6.",
      "Un medio inalámbrico basado en el estándar 802.11g permitiría transmitir a más distancia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 777,
    title: "La codificación QAM vista en clase se caracteriza porque:",
    choices: [
      "A  diferencia  de MFSK, QAM  sólo modifica  la  fase  para  codificar  varios  bits  como  elemento  de señal.",
      "A diferencia de QPSK, se transmiten menor número de bits por unidad de tiempo.",
      "Modifica la fase y amplitud de una señal portadora haciendo uso de una señal moduladora.",
      "Proporciona menor velocidad de modulación que una codificación en banda modulada ASK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 778,
    title: "Una modulación banda base 8B6T es una:",
    choices: [
      "Modulación multinivel que codifica 8 bits como 6 elementos distintos de  señal compuestos por combinaciones de 2 valores de tensión distintos.",
      "Modulación multinivel que codifica 2 bits como 8 elementos distintos de  señal compuestos por combinaciones de 6 valores de tensión distintos.",
      "Es un tipo de modulación NRZ bipolar para codificar 8 bits con 6 flancos de subida o bajada.",
      "Modulación multinivel  que  codifica  patrones  de  8  bits  como  6  elementos  distintos  de  señal compuestos por combinaciones de 3 valores de tensión distintos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 779,
    title:
      "Atendiendo a los conceptos de encapsulamiento y direccionamiento, se puede afirmar que un router perteneciente a una LAN con el protocolo OSPF activo, envía:",
    choices: [
      "A todos los nodos adyacentes de la LAN paquetes UDP dirigidos a 224.0.0.9",
      "A todos los nodos de una misma área de la LAN paquetes IP dirigidos a 224.0.0.5",
      "A todos los nodos adyacentes de la LAN paquetes IP dirigidos a 224.0.0.10",
      "A todos los ‘routers’ de una misma área de la LAN paquetes UDP dirigidos a 224.0.0.7",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 780,
    title:
      "Atendiendo a los conceptos de cálculo de ruta y métrica asociada, se puede afirmar que un ‘router’ perteneciente a una LAN con el protocolo RIP activo:",
    choices: [
      "Emplea el algoritmo de Bellman‐Ford para determinar la ruta de coste mínimo, haciendo uso de una métrica  basada  en  el  número  de  segmentos  de  red  que  se  tienen  que  atravesar  para alcanzar un destino.",
      "Emplea el algoritmo de Dijkstra para determinar  la  ruta de  coste mínimo, haciendo uso de una métrica basada en las capacidades de transmisión de los enlaces.",
      "Emplea el algoritmo de Dijkstra para determinar  la  ruta de  coste mínimo, haciendo uso de una métrica basada en los retardos que se producen en los enlaces.",
      "Emplea el algoritmo de Bellman‐Ford para determinar  la ruta de coste mínimo, haciendo uso de una métrica basada en el ancho de banda de los enlaces.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 781,
    title: "Es FALSO que el protocolo IPv6 se diferencia de IPv4 en que",
    choices: [
      "Usa direcciones de 16 bytes frente a 4 bytes de IPv4.",
      "Si el datagrama es superior a  la MTU, sólo  fragmenta en el equipo origen, y no en  los  ‘routers’ intermedios de la red como en IPv4.",
      "Dispone de mecanismos de autentificación y encriptación a diferencia de IPv4 que no los tiene y requiere de protocolos auxiliares como IPSEC.",
      "Emplea un campo en la cabecera para establecer control de calidad de servicio QoS.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 782,
    title: "En IPv6 una dirección unicast global almacena información de:",
    choices: [
      "La  Zona  geográfica  (continente,  país),  proveedores  de  internet  y/o  empresas  globales (nacionales,  regionales),  empresas  y/o  proveedores  locales  de  internet,  así  como  de  la información del interfaz de red.",
      "La Zona geográfica  (continente, país), así como proveedores de  internet y/o empresas globales (nacionales, regionales).",
      "Proveedores de  internet y/o empresas globales  (nacionales,  regionales), así como de empresas y/o proveedores locales de internet.",
      "Proveedores locales de internet, así como de la información del interfaz de red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 783,
    title:
      "Cuando una máquina de una  red, denominada  cliente,  intenta obtener de manera dinámica una dirección IP a través del protocolo DHCPv4, entonces es cierto que:",
    choices: [
      "Inicialmente, la máquina cliente envía un DHCPv4 ‘Discover’ a la dirección IP del servidor DHCP y la maquina servidora responde con un DHCPv4 ‘Offer’ que incluye una dirección IP libre.",
      "Inicialmente, la máquina cliente envía un paquete DHCPv4 ‘Discover’ a BROADCAST y la máquina servidora responde con un paquete DHCPv4 ‘Offer’ que incluye una dirección IP libre.",
      "Inicialmente,  la máquina servidora DHCPv4 envía un paquete ‘Discover’ a BROADCAST facilitando direcciones IP libres. No es necesario que el cliente solicite nada.",
      "Inicialmente, la máquina servidora DHCPv4 envía un paquete ‘Discover’ encapsulado en un trama Ethernet con la dirección MAC destino del cliente, en el que se encapsula la IP asignada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 784,
    title:
      "Para  interconectar  los niveles superiores de una LAN y una WAN, ambas con arquitecturas de red distintas, por ejemplo en el caso de un LAN domestica conectándose a un ISP, se requiere de:",
    choices: [
      "Un Puente (‘Bridge’).",
      "Un Conmutador (‘Switch’).",
      "Un Encaminador (‘Router’).",
      "Una Pasarela (‘Gateway’).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 785,
    title:
      "Qué protocolo de nivel de transporte se emplea en una aplicación de sincronización de tiempo por internet?",
    choices: ["TCP.", "IP.", "ICMP.", "UDP."],
    solution: "",
    explanation: "",
  },
  {
    id: 786,
    title:
      "Cuál de las siguientes NO es una función del nivel de transporte de la arquitectura TCP/IP?",
    choices: [
      "Fragmentar  los  paquetes  de  datos  en  los  distintos  ‘routers’  por  los  que  tiene  que  pasar  el paquete hasta llegar al destino.",
      "Multiplexar datos de varias instancias del nivel de aplicación.",
      "Controlar el flujo de datos de la comunicación.",
      "Controlar  los  errores  en  el  envío  de  datos  en  comunicaciones  orientadas  a  conexión  cliente‐servidor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 787,
    title: "Es cierto que la ventana deslizante que utiliza TCP:",
    choices: [
      "Utiliza un  ‘timeout’ para desconectar cliente y  servidor  si el ACK de una  trama  tarda mucho en llegar.",
      "No permite controlar el flujo de datos de la comunicación.",
      "Trabaja con un flujo de bytes, no con paquetes o tramas.",
      "Es incapaz de informar de errores en la comunicación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 788,
    title: "LLC es:",
    choices: [
      "Un subnivel de la capa de enlace.",
      "Un subnivel de la capa de aplicación.",
      "Un protocolo de la capa de enlace.",
      "Un protocolo de la capa de aplicación.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 789,
    title:
      "Las redes WiFi utilizan como técnica de control de acceso al medio una técnica:",
    choices: [
      "Por reserva.",
      "Por contienda.",
      "Por selección.",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 790,
    title: "En una red Ethernet 802.3:",
    choices: [
      "Se asegura el envío de las tramas.",
      "Se permite asegurar un tiempo máximo de envío de una trama.",
      "Se emplea una topología en anillo.",
      "Ninguna de las anteriores es cierta.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 791,
    title:
      "La cabecera de una trama de una LAN IEEE 802.11, consta de campos para:",
    choices: [
      "Dos direcciones MAC.",
      "Cuatro direcciones MAC.",
      "Tres direcciones MAC.",
      "Tres direcciones IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 792,
    title: "Una colisión en una red Ethernet 802.3:",
    choices: [
      "Es imposible que se produzca.",
      "Permite asegurar un tiempo máximo de envío de una trama.",
      "Obligará al equipo que ha detectado la colisión a esperar un tiempo antes de intentar de nuevo el envío.",
      "Ocurre muy raras veces, siempre dependiendo de la velocidad de transmisión del medio físico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 793,
    title: "En una red Token Ring 802.4, la estación monitora:",
    choices: [
      "Genera una trama testigo cada cierto tiempo para que los equipos puedan enviar datos.",
      "Elimina las tramas perdidas por el anillo cuando no lo hace la propia estación emisora.",
      "Marca el bit M de la trama testigo, pero no de las tramas de datos.",
      "Vigila y gestiona la inclusión de nuevas estaciones al anillo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 794,
    title:
      "Una  vivienda  se  encuentra  situada  a  2.5km  de  la  central  telefónica de  servicios DSL,  si  se desea contratar  un  servicio  que  garantice  una  velocidad  máxima  de  20Mbps,  la  mejor  opción  precio‐prestaciones de acuerdo a los servicios y características vistas en clase, sería:",
    choices: ["VDSL2.", "VDSL.", "ADSL2+.", "ADSL."],
    solution: "",
    explanation: "",
  },
  {
    id: 795,
    title:
      "Si una conexión ADSL emplea encapsulamiento PPPoE entre PC del cliente y ‘router’ del proveedor de servicios de internet (ISP) para enviar un paquete TCP, entonces la pila de protocolos que emplean los interfaces del modem ADSL, I1: Interfaz LAN‐par trenzado e I2: Interfaz ADSL‐cable telefónico, son:",
    choices: [
      "Ethernet+IP+TCP (I1) y ATM+AAL5+LLC+PPP (I2).",
      "Ethernet+IP+TCP (I1) y Ethernet+IP+TCP (I2).",
      "Ethernet+PPPoE+PPP+IP+TCP (I1) y Ethernet+PPPoE+PPP+IP+TCP (I2).",
      "Ethernet+PPPoE+PPP+IP+TCP (I1) y ATM+AAL5+LLC+Ethernet+PPPoE+PPP+IP+TCP (I2).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 796,
    title: "Para realizar el control de congestión en TCP:",
    choices: [
      "Se emplean las ventanas del emisor y del receptor.",
      "Se emplea sólo la ventana del receptor.",
      "No se puede realizar control de congestión utilizando TCP.",
      "Se  emplea  una  ventana  de  congestión  en  emisor  que  se  ajusta  en  función  de  los  paquetes perdidos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 797,
    title:
      "Qué tipo de modulación analógica permite transmitir información a mayor velocidad?",
    choices: [
      "Modulación ASK",
      "Modulación FSK",
      "Modulación PSK",
      "Modulación QAM",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 798,
    title:
      "El empleo de la tecnología de redes punto a punto para las redes WAN se caracteriza por,",
    choices: [
      "Su bajo coste económico de cableado frente a la tecnología de difusión",
      "La comunicación directa a nivel de enlace entre cualquier par de nodos de la red",
      "La transmisión de un único paquete para enviar información a todos los nodos de la red",
      "La tolerancia a fallos que presenta si existen varios caminos a un determinado destino",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 799,
    title:
      "La técnica de multidifusión empleada en redes de computadores se caracteriza por,",
    choices: [
      "Permitir a una estación recibir un paquete de varios remitentes",
      "Permitir el envío de varios paquetes a una misma estación de la red",
      "Permitir el envío de un paquete de información a un grupo de estaciones en la red",
      "Permitir la difusión de un paquete de información en redes WAN",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 800,
    title:
      "Si en una red de conmutación de paquetes basada en circuitos virtuales un nodo deja de funcionar es cierto que,",
    choices: [
      "Sólo los circuitos establecidos a través de ese nodo dejan de funcionar",
      "Todos los circuitos establecidos en la red dejan de funcionar",
      "Ningún circuito virtual deja de funcionar, los nodos modifican automáticamente el camino que no funciona",
      "Los paquetes de un circuito virtual son redirigidos a través de otro circuito virtual",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 801,
    title:
      "La capa de transporte en la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Emplear un protocolo de control del flujo basado en la técnica de ventana deslizante",
      "Aumentar el aprovechamiento del medio físico empleando el control del flujo basado en CSMA/CA",
      "Gestionar una comunicación fiable estableciendo un encaminamiento basado en conmutación de paquetes",
      "Proporcionar  siempre  a  la  capa  de  aplicación  una  comunicación  no  segura,  debido  al funcionamiento con datagramas de la subred",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 802,
    title:
      "El acceso a un servidor web, un servidor de correo y un servidor ftp que se encuentran en una misma máquina es posible gracias a,",
    choices: [
      "La multiplexación de conexiones que proporciona la capa de red en TCP/IP",
      "La multiplexación de conexiones que proporciona la capa de transporte en TCP/IP",
      "La existencia de varias direcciones IP para una misma máquina de Internet",
      "La existencia de un mismo puerto TCP para los servicios de web, de correo y ftp",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 803,
    title:
      "La atenuación que sufre una señal al transmitirse por un medio físico NO depende de,",
    choices: [
      "La distancia en la línea de comunicación",
      "El ancho de banda del medio físico",
      "La relación señal‐ruido del medio físico",
      "El número de niveles empleado en la codificación",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 804,
    title:
      "Qué  velocidad  de  transmisión  se  requiere  para  enviar  a  través  de  un  medio  físico  2  señales analógicas de 100 KHz de ancho de banda empleando una modulación PCM de 6 bits?",
    choices: ["25600 Kbps.", "12800 Kbps.", "2400 Kbps.", "1200 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 805,
    title:
      "La codificación binaria bipolar RZ y la Manchester diferencial  tienen la característica común de,",
    choices: [
      "Emplear siempre los mismos niveles de voltaje en la codificación de los elementos de señal",
      "Interpretar la información por el valor de amplitud de la señal",
      "Codificar los datos binarios como cambios de tipo de transición de señal",
      "Incorporar información de sincronización en la propia señal",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 806,
    title: "Las técnicas de contienda se caracterizan por,",
    choices: [
      "Establecer turnos para transmitir información en el medio físico",
      "La existencia de colisiones en la solicitud de turnos en el proceso de transmisión",
      "Impedir que se produzcan colisiones en el medio físico",
      "Establecer un mecanismo de transmisión cuando se ha producido una colisión",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 807,
    title:
      "La pérdida de un paquete de datos en un protocolo de parada y espera  sin numeración de ACK’s provoca,",
    choices: [
      "Un error de duplicación",
      "Un error de sincronización",
      "El reenvío de la trama perdida",
      "El reenvío indefinido del mismo paquete al receptor",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 808,
    title:
      "La codificación PCM de  la señal analógica muestreada desde el  instante  t=0, como se  indica en  la figura y cuantificada empleando el menor número de bits posible, es:",
    choices: [
      "‘0110100001000100011010010110’",
      "‘001011000000001000111011’",
      "‘0110001011000000001000111011’",
      "Ninguna de las anteriores es cierta",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 809,
    title: "ADSL es un acceso a Internet:",
    choices: [
      "Que utiliza el cable par trenzado UTP‐3 o superior para transmitir voz y datos",
      "Que utiliza la técnica FDM para la multiplexación de señales",
      "Que envía la señal de voz y datos mediante señales digitales",
      "No permite la corrección de errores en su versión ADSL2+",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 810,
    title:
      "Cuál de las siguientes afirmaciones relativas a la tecnología ADSL sobre ATM con AAL5 es FALSA?:",
    choices: [
      "En la capa de enlace de la LAN, entre modem‐router y máquinas de usuario, no se emplea control del enlace lógico LLC",
      "Entre el módem ADSL y el proveedor (ISP) se encapsulan paquetes PPP sobre ATM con AAL5, según RFC 2684",
      "La  trama de datos que  llega al  ISP  tiene varios niveles de encapsulamiento de nivel de enlace entre ellos  Ethernet",
      "El DSLAM  emplea  interfaces  con niveles  físicos distintos para  conectar módems  con proveedor (ISP)",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 811,
    title:
      "Durante una conexión TCP (ver figura) el cliente envía un segmento (1) con flag ACK áctivo, número de  secuencia 1100 y 250 bytes de datos. Después el  servidor envía un  segmento  (2)  con  flag ACK áctivo y 350 bytes de datos. Finalmente, el cliente envía otro segmento (3) con número de ACK 2000 y  200  bytes  de  datos.  Si  no  hay  errores  en  la  transmisión,  ¿Qué  número  de  secuencia  tiene  el segmento 2?",
    choices: ["1700", "1650", "1350", "1100"],
    solution: "",
    explanation: "",
  },
  {
    id: 812,
    title: "Respecto a la técnica de ‘Slow‐Start’ de TCP/IP es FALSO que:",
    choices: [
      "Se  emplea  para  controlar  el  flujo  de  información  cuando  la  ventana  del  receptor  es  muy pequeña comparada con la del emisor",
      "Consiste en enviar paquetes de datos cuyo valor de MSS se va incrementando poco a poco hasta que la ventana de congestión supera a la de flujo",
      "Requiere un temporizador de retransmisión en el caso de que se produzcan errores de perdida de paquetes",
      "Es dependiente del tamaño de ventana del emisor",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 813,
    title:
      "Cuál de las siguientes direcciones del protocolo IPv6 está escrita correctamente?:",
    choices: [
      "FE80::B827:2D7A:EFE7::F669",
      "FE80::B827:2D7A:EFE7:F669",
      "0000:0000:172:17:34:79",
      "FE80:B827:2D7A:EFE7:F669",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 814,
    title:
      "Cuando se necesita obtener, automáticamente, una dirección de red IPv6 para una máquina que se acaba de conectar a una red:",
    choices: [
      "Se utiliza el protocolo DHCP y se hace uso de 4 paquetes: DISCOVERY, OFFER, REQUEST y ACK",
      "Se  utiliza  la  técnica  ND  (Neighbor  Discovery)  y  se  hace  uso  de  4  paquetes  ICMP:  SOLICIT, ADVERTISE, REQUEST y REPLY",
      "Se  utiliza  la  técnica  ND  (Neighbor  Discovery)  y  se  hace  uso  de  3  paquetes  de  tipos  ‘Router Solicitation’ y ‘Router Advertisement’",
      "Se utiliza el protocolo DHCP y se hace uso de 4 paquetes: 2 Broadcast y 2 Unicast",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 815,
    title: "Es cierto que el algoritmo de Dijkstra se emplea en una LAN para:",
    choices: [
      "Obtener el camino de coste mínimo basándose en la métrica asociada a los enlaces",
      "Obtener el camino que emplea menor número de enlaces para alcanzar el destino",
      "Configurar las tablas de encaminamiento de un router que sólo tiene activo el protocolo RIP",
      "Configurar las tablas de encaminamiento de un router cuando éste no tiene activo algún protocolo del tipo EGP",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 816,
    title: "Las tramas de control de una LAN 802.5 se caracterizan porque:",
    choices: [
      "Viajan como tramas de datos con información de todas las capas de la arquitectura de red",
      "Se emplean para incorporar nuevos equipos a la red y para establecer estaciones monitoras",
      "Representan el turno de transmisión y dan acceso al medio por turnos",
      "Están sujetas al bit de reserva del subcampo control de acceso de la trama ‘Token’",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 817,
    title:
      "Si se quiere  interconectar entre sí varias máquinas de distintas velocidades,  todas ellas  formando una LAN local con topología en estrella, lo más adecuado es usar un:",
    choices: [
      "‘Bridge’ porque permite reenviar tramas entre sus puertos y no requiere de protocolos adicionales para detectar y evitar bucles",
      "‘Switch’ del tipo ‘Pass Through’ porque es posible indicar colisiones",
      "‘Switch’ del tipo ‘Store & Forward’ porque emplea buffers",
      "‘Hub’ porque es el más económico y emplea una malla conmutada que favorece las transmisiones",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 818,
    title:
      "Cuál  sería el   par  trenzado más adecuado para  realizar  la  conexión en una  LAN‐FastEthernet de distancia máxima 100m, priorizando el menor coste económico sin perjuicio de que se alcancen las especificaciones necesarias?",
    choices: [
      "Par trenzado UTP 3",
      "Par trenzado UTP 4",
      "Par trenzado UTP 5",
      "Par trenzado UTP 5e",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 819,
    title: "En LANs la fibra óptica como medio físico ofrece:",
    choices: [
      "Mayor inmunidad al ruido y a las interferencias externas que el par trenzado UTP‐6",
      "Menor complejidad de instalación y mantenimiento que un cable coaxial",
      "Posibilidad de transmitir corriente eléctrica para alimentar dispositivos",
      "Transmisión simultánea de señales en ambos sentidos (dúplex) en un único hilo",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 820,
    title:
      "En una arquitectura OSI,  la función de control de flujo entre  los dos extremos de  la comunicación, fuente y destino, se realiza como norma general en el nivel:",
    choices: [
      "Nivel de Enlace",
      "Nivel de Transporte",
      "Nivel de Sesión",
      "Nivel de Presentación",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 821,
    title:
      "Qué tipo de modulación analógica NO permite codificar más de un bit por elemento de señal?",
    choices: [
      "Modulación ASK",
      "Modulación QAM",
      "Modulación MPSK",
      "Modulación MFSK",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 822,
    title:
      "La atenuación es un tipo de perturbación que caracteriza los errores que se producen en un medio de transmisión y es FALSO que,",
    choices: [
      "Consista en un decremento de la amplitud de los diferentes armónicos que componen la señal que se transmite",
      "Se mida en decibelios",
      "Limita la reconstrucción de la señal en el receptor",
      "Sea un parámetro que se incrementa proporcionalmente con la frecuencia",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 823,
    title:
      "Es FALSO que una  codificación digital válida para  la  señal analógica muestreada desde el  instante t=0,  como  se  indica  en  la  figura  y  cuantificada  empleando  el menor  número  de  bits  posible,  sea representada como:",
    choices: [
      "PCM ‘0110 0111 0101 0100 0101 1000 0110’",
      "PCM diferencial ‘0001 1010 1001 0001 0011 1010’",
      "Delta modulación ‘100110’",
      "TDM ‘00110 00111 00101 00100 00101 01000 00110’",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 824,
    title: "El protocolo Ethernet es cierto que,",
    choices: [
      "Es un protocolo de nivel físico que define la tecnología del medio físico que se emplea",
      "Es un protocolo de nivel de enlace con control de flujo y pérdida de datos por errores en el canal",
      "Es un protocolo de nivel de enlace con control de detección de errores en los datos",
      "Es un protocolo de nivel de enlace que se emplea para direccionar máquinas en redes localizadas en distintos segmentos de red conectadas entre sí por enrutadores",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 825,
    title:
      "Determina  cuál de  las  siguientes  afirmaciones  respecto  a  la  siguiente  codificación banda base es FALSA:",
    choices: [
      "Puede corresponder a una codificación Manchester para la secuencia binaria ‘0100110’",
      "Puede  corresponder a una  codificación NRZ bipolar para  la  secuencia binaria  ‘10011010010110’ siempre y cuando la duración del bit sea la mitad que la empleada en Manchester",
      "Siempre  corresponde  a  una  codificación  Manchester  diferencial  para  la  secuencia  binaria ‘0110101’",
      "Nunca corresponderá a una codificación RZ bipolar",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 826,
    title:
      "Las redes del tipo X.25, Frame Relay y ATM se pueden catalogar como:",
    choices: [
      "WANs de conmutación de circuitos",
      "WANs de conmutación de paquetes",
      "LANs de circuitos virtuales",
      "MANs con medio inalámbrico",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 827,
    title:
      "Según  la EIA 568, el cable UTP de categoría 6 es el mínimo  recomendado para usar en  redes con tecnología,",
    choices: [
      "Ethernet",
      "Fast Ethernet",
      "GigaBit Ethernet",
      "Paso rápido de testigo en anillo, FDDI",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 828,
    title:
      "Se quiere  implementar un sistema de comunicaciones que  tenga un ancho de banda de 1500Hz y que consiga una relación S/NdB de 40dB. ¿Cuál será la capacidad máxima del canal de comunicación?",
    choices: ["≈ 39.8Kbps.", "≈ 19.9Kbps.", "≈ 9.9Kbps.", "≈ 8Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 829,
    title: "Un proceso FDM requiere del empleo de,",
    choices: [
      "Filtros paso banda en el emisor",
      "Filtros paso banda en el receptor",
      "Filtros paso banda en emisor y receptor",
      "No requiere uso de filtros paso banda",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 830,
    title:
      "Si el ancho de banda de un medio con dos canales es de 100Hz y el canal de subida (transmisión) se sitúa  en  la parte baja del  espectro de  frecuencias  y ocupa  el 20% de  éste,  ¿Cuál es  la  frecuencia portadora requerida para la señal de bajada (recepción)?",
    choices: ["10Hz.", "40Hz.", "50Hz.", "60Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 831,
    title:
      "Es cierto que los protocolos de encaminamiento dinámico como RIP y OSPF,",
    choices: [
      "Se basan ambos en métricas calculadas por vector de distancia",
      "Se emplean, usualmente, sólo en redes de área extendida",
      "Emplean direcciones multicast distintas",
      "Emplean el mismo algoritmo de actualización de  rutas para determinar el  camino óptimo entre nodos",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 832,
    title:
      "Respecto a las redes de área local 802.3 definidas por el IEEE (Ethernet), es FALSO que,",
    choices: [
      "Emplean la técnica CSMA/CD para el control de acceso al medio",
      "Emplea la técnica de ‘frame bursting’ para mejorar la velocidad haciendo uso de cable UTP‐5",
      "Utilizan un control de acceso al medio con escucha, con detección de colisión",
      "Conforman una red con buen rendimiento para bajo tráfico",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 833,
    title:
      "En  una  industria  con mucho  ruido magnético  se  dispone  de  una  LAN  formada  por  10  equipos conectados a un conmutador. La mitad de  los equipos de  la  red están conectados con cables UTP cat3 y la otra mitad con cables UTP cat5. ¿Qué técnica es la más adecuada para el envío de tramas en el conmutador?",
    choices: [
      "Cut through",
      "Fragment free",
      "Store‐and‐forward",
      "Cualquiera de los anteriores es igual de válida sin ofrecer ventajas frente a las otras",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 834,
    title: "A diferencia de Ipv4, el protocolo Ipv6 se caracteriza porque,",
    choices: [
      "Requiere del protocolo de transporte TCP para garantizar un flujo constante de datos",
      "No permite emplear datagramas de más de 64Kbytes",
      "La fragmentación solo se realiza en el equipo origen, y no en los routers intermedios de la red",
      "No requiere de nivel de enlace para transmitir datos entre equipos de una misma red",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 835,
    title:
      "Si se comparan varias tecnologías xDSL asimétricas, respecto a la velocidad máxima que soportan y la distancia a la que soportan dicha velocidad, es cierto que",
    choices: [
      "Para distancias inferiores a 1Km la tecnología que proporciona mejores prestaciones es ADSL2+",
      "La tecnología VDSL2 define medios físicos con ancho de banda muy superior al de ADSL2+",
      "ADSL2 es siempre la tecnología menos recomendable por sus bajas prestaciones",
      "En VDSL mejora  la velocidad de bajada si se compara con ADSL2, pero no mejora  la velocidad de subida",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 836,
    title:
      "Cuál de los siguientes dispositivos se requiere para interconectar dos LANs con la misma tecnología Ethernet que se encuentran ubicadas a varias decenas de kilómetros y además comparten recursos físicos y mismo direccionamiento, a través de enlaces WAN punto a punto?",
    choices: [
      "Conmutador (‘Switch’)",
      "Encaminador (‘Router’)",
      "HUB",
      "Puente (‘Bridge’)",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 837,
    title:
      "El empleo de datagramas en una red de conmutación de paquetes se caracteriza por,",
    choices: [
      "En  las  redes  de  conmutación  de  paquetes  no  se  emplean  datagramas,  se  establecen  circuitos físicos",
      "Especificar en cada paquete los nodos intermedios que debe atravesar para alcanzar su destino",
      "Determinar un camino a través de los nodos de la red para que los paquetes alcancen su destino",
      "Especificar en cada paquete el origen y el destino para que los nodos intermedios determinen un camino en la red para cada paquete transmitido",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 838,
    title:
      "La  comunicación  horizontal  entre  dos  dispositivos  que  usan  la  misma  arquitectura  de  red  se caracteriza porque,",
    choices: [
      "Se establece entre las capas que son adyacentes en la arquitectura",
      "Se establece entre la capa n y la capa par n‐1 de la arquitectura",
      "Se establece entre entidades pares o capas del mismo nivel de la arquitectura",
      "Se establece entre las capas n+1 y n‐1 de la arquitectura",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 839,
    title: "Sobre el funcionamiento del protocolo TCP es cierto que,",
    choices: [
      "Dispone de un mecanismo para controlar la congestión basado en el identificador ISN",
      "No es posible interceptar conexiones TCP averiguando los números de secuencia de los paquetes",
      "El establecimiento de conexión siempre es bidireccional",
      "La liberación de conexión siempre es bidireccional",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 840,
    title:
      "En un intercambio de datos con TCP, el emisor reenvía un segmento de datos si,",
    choices: [
      "Expira el tiempo de espera del ACK del segmento",
      "El retardo del ACK del segmento anterior es muy elevado",
      "El receptor envía un ACK con el campo tamaño de ventana a valor 0",
      "El tamaño de ventana del emisor es 0",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 841,
    title: "Sobre el funcionamiento del protocolo UDP es cierto que,",
    choices: [
      "Emplea un control de flujo de parada y espera",
      "El receptor detecta bloques de datos recibidos con errores",
      "El emisor reenvía bloques de datos que no han llegado al receptor",
      "Establece una conexión unidireccional",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 842,
    title: "Sobre un acceso ADSL para conectividad a Internet es cierto que,",
    choices: [
      "El canal ascendente y descendente pueden ser simétricos con la tecnología ADSL2+",
      "Un concentrador DSLAM gestiona un circuito virtual entre el abonado y la centralita",
      "Un concentrador DSLAM realizan funciones de modulación/demodulación",
      "ADSL proporciona un enlace físico de datos entre el abonado y el ISP",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 843,
    title: "Sobre el protocolo IPv6 es cierto que,",
    choices: [
      "Es totalmente compatible con el protocolo IPv4",
      "Emplea las mismas clases de direcciones IP que la versión 4",
      "Permite la fragmentación de paquetes IP en el origen",
      "No dispone del mecanismo de multidifusión",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 844,
    title:
      "La conectividad entre un equipo con IPv4 y otro con IPv6 puede realizarse,",
    choices: [
      "Directamente, pues su esquema de direccionamiento es compatible",
      "Convirtiendo las direcciones IPv4 a IPv6 y viceversa",
      "Estableciendo túneles intermedios",
      "No es posible, los dos extremos de la comunicación deben soportar la misma versión de IP",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 845,
    title: "Sobre las redes de anillo FDDI es cierto que,",
    choices: [
      "Emplean un doble anillo para duplicar la velocidad de transmisión respecto Token Ring",
      "Emplean la fibra óptica para conseguir una velocidad de transmisión de 100 Mbps",
      "No permiten tolerancia ante fallos en una fibra",
      "El formato del paquete FDDI es compatible con el de Token Ring",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 846,
    title: "El empleo de la difusión en una red LAN permite,",
    choices: [
      "El envío de información a todas las estaciones de la red transmitiendo un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo un paquete.",
      "El envío de información a una sola estación de la red transmitiendo más de un paquete.",
      "El envío de información a un grupo de estaciones de la red transmitiendo más de un paquete.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 847,
    title:
      "La interconexión de dos redes Ethernet conectadas a través de una WAN con arquitectura TCP/IP, ha de realizarse con,",
    choices: ["Un repetidor.", "Un puente.", "Un router.", "Una pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 848,
    title:
      "En una arquitectura de red, la PDU de la capa n (que se envía a la entidad par de la capa n) incorpora en su campo de datos,",
    choices: [
      "La PDU de la capa n-1.",
      "La SDU de la capa n-1.",
      "La PCI de la capa n-1.",
      "La PCI de la capa n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 849,
    title: "La fragmentación en un protocolo de la capa n se produce cuando,",
    choices: [
      "La SDU de la capa n+1 no cabe dentro de la PDU de la capa n.",
      "La SDU de la capa n no cabe dentro de la PDU de la capa n.",
      "La SDU de la capa n+1 no cabe dentro de la PDU de la capa n-1.",
      "La SDU de la capa n no cabe dentro de la PDU de la capa n+1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 850,
    title:
      "En una red con arquitectura TCP/IP, ¿ qué nivel de la arquitectura permite realizar un control del flujo extremo a extremo ?",
    choices: ["Enlace.", "Red.", "Transporte.", "Aplicación."],
    solution: "",
    explanation: "",
  },
  {
    id: 851,
    title:
      "En un protocolo de ventana deslizante de envío continuo con repetición selectiva es cierto que,",
    choices: [
      "El emisor puede enviar paquetes que podrían ser rechazados por el receptor.",
      "El receptor puede aceptar paquetes con secuencias que están fuera de su ventana de recepción.",
      "La ventana del emisor tiene un tamaño que no varía durante el funcionamiento del protocolo.",
      "La ventana del receptor sólo permite recibir una única trama de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 852,
    title:
      "Sobre las normativas Ethernet 802.3 y Ethernet DIX (Ethernet II), es cierto que",
    choices: [
      "El tamaño máximo de un paquete IP a incorporar en el campo de datos es diferente.",
      "Ambas emplean el mecanismo CSMA/CD en el modo full-duplex.",
      "Ethernet 802.3 detecta colisiones y Ethernet DIX no.",
      "La velocidad máxima de transmisión en Ethernet DIX es mayor que en Ethernet 802.3.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 853,
    title:
      "El número máximo de conmutadores Ethernet que podemos conectar en cascada está limitador por:",
    choices: [
      "En modo full-duplex la única limitación es el número máximo de máquinas que no provoquen congestión.",
      "En modo full-duplex la limitación está en una distancia máxima de 2.5 Km entre los conmutadores más alejados.",
      "En modo half-duplex la limitación está en el número de colisiones que se produzcan.",
      "En modo half-duplex la limitación son 254 segmentos conectados en cascada.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 854,
    title:
      "Indica en qué normativa Ethernet no se incorpora el campo Preámbulo en la cabecera Ethernet.",
    choices: [
      "Ethernet 100baseFX.",
      "Ethernet 100baseTX.",
      "Ethernet 10baseT.",
      "Todas las normativas Ethernet  incorporan el campo Préambulo en la cabecera Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 855,
    title:
      "Sobre el funcionamiento de un conmutador Ethernet VLAN es cierto que,",
    choices: [
      "Los paquetes de difusión de una VLAN son reenviados a todos los puertos de la misma VLAN.",
      "Los paquetes de difusión de una VLAN son reenviados a todos los puertos del conmutador VLAN.",
      "Los paquetes de difusión de una VLAN son reenviados sólo a los puertos de acceso del conmutador.",
      "Los paquetes de difusión de una VLAN nunca son reenviados a un puerto troncal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 856,
    title:
      "Indica en qué normativa Ethernet NO se emplean bits de sincronización adicionales a los datos en la trama Ethernet,",
    choices: [
      "Ethernet 10BaseT.",
      "Ethernet 100BaseTX.",
      "Ethernet 100BaseFX.",
      "Ethernet 1000BaseLX.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 857,
    title:
      "Qué mecanismo de seguridad Wi-Fi no puede realizar una autenticación basada en una contraseña compartida PSK ?",
    choices: ["WEP.", "WPA-Personal.", "WPA2-Personal.", "WPA2-Enterprise."],
    solution: "",
    explanation: "",
  },
  {
    id: 858,
    title: "Qué algoritmo de cifrado emplea WPA2 ?",
    choices: ["RSA.", "TKIP.", "IPSEC.", "AES."],
    solution: "",
    explanation: "",
  },
  {
    id: 859,
    title:
      "Qué mecanismo de autenticación WiFi permite proporcionar una clave de cifrado MK empleando un servidor RADIUS ?",
    choices: ["TKIP.", "EAP/TLS.", "PEAP.", "CHAP."],
    solution: "",
    explanation: "",
  },
  {
    id: 860,
    title: "Sobre el protocolo IPv6 es cierto que,",
    choices: [
      "Tiene un tamaño de cabecera fijo de 40 bytes.",
      "Un paquete puede circular indefinidamente en una red IPv6.",
      "No existen direcciones de difusión IPv6.",
      "Una dirección IPv6 de un dispositivo es la misma independientemente del operador de red al que se encuentre conectado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 861,
    title:
      "La  comunicación  en  una  red  WAN  que  emplea  la  técnica  de  circuitos  virtuales  secaracteriza por,",
    choices: [
      "Proporcionar  una  transmisión  de  datos  con  menos  retardos  que  con  la  técnica  dedatagramas.",
      "Presentar mayor tolerancia a fallos en los nodos de la red que con la técnica de datagramas.",
      "Modificar la ruta que sigue un paquete en la red sin necesidad de establecer un nuevocamino entre origen y destino.",
      "Establecer caminos de circulación en la red para cada paquete de datos transmitido.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 862,
    title:
      "La realización de un servicio ofrecido por la capa n de una arquitectura de red precisa de,",
    choices: [
      "El intercambio de PDU’s entre las entidades pares del nivel n.",
      "El intercambio de IDU’s entre las entidades pares del nivel n-1.",
      "El intercambio de PDU’s entre las entidades pares del nivel n+1.",
      "El intercambio de IDU’s entre las entidades pares del nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 863,
    title:
      "La interconexión de dos redes LAN Ethernet a través de una red con arquitectura TCP/IPse consigue,",
    choices: [
      "Empleando dos routers, uno en cada LAN.",
      "Empleando dos puentes, uno en cada LAN.",
      "Empleando dos pasarelas, una en cada LAN.",
      "Empleando dos repetidores, uno en cada LAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 864,
    title: "La capa de red de la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Realizar un encaminamiento de los paquetes de información mediante circuitos virtuales.",
      "Realizar un envío confirmado de paquetes de información en la red.",
      "Definir un direccionamiento para los equipos en la red.",
      "Establecer flujos fiables de información.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 865,
    title:
      "En  el  modelo  de  arquitectura  de  red  TCP/IP,  los  paquetes  de  datos  que  generan  lasaplicaciones y que se intercambian a nivel físico,",
    choices: [
      "Incorporan siempre las cabeceras de todos los protocolos de la arquitectura de red.",
      "Incorporan siempre la cabecera del protocolo IP.",
      "Incorporan siempre la cabecera del protocolo IP y TCP.",
      "Incorporan siempre la cabecera del protocolo IP y UDP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 866,
    title:
      "La transmisión de señales de información en banda base a través de un medio físico deancho de banda B se caracteriza por:",
    choices: [
      "Permitir la transmisión de cualquier señal de datos a través del medio físico.",
      "Transmitir las componentes frecuenciales de la señal de información que están dentro delancho de banda del medio.",
      "Reducir a B el número de componentes frecuenciales de la señal que son transmitidas através del medio.",
      "No es posible incorporar información de sincronización en la señal transmitida.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 867,
    title: "La modulación analógica por cambio en amplitud permite,",
    choices: [
      "Transmitir  cualquier  señal  de información a través de un medio físico con 4000 Hz deancho de banda.",
      "Reducir la relación señal-ruido en el medio físico de transmisión.",
      "Adecuar el ancho de banda de la señal moduladora al ancho de banda del medio físico.",
      "Aumentar el ancho de banda de la señal moduladora.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 868,
    title:
      "La  modulación  analógica  que  permite  la  transmisión  de  señales  con mayor calidad  ymejor aprovechamiento del medio físico es,",
    choices: [
      "La modulación por cambio de amplitud y frecuencia.",
      "La modulación por cambio de amplitud.",
      "La modulación por cambio de frecuencia.",
      "La modulación por cambio de fase y amplitud.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 869,
    title:
      "La  velocidad  de  transferencia  necesaria  en  un  medio  físico  para  transmitir  señalesmoduladas digitalmente, como PCM, depende de,",
    choices: [
      "El ancho de banda de la señal moduladora y su relación señal-ruido.",
      "La frecuencia de muestreo y el número de niveles empleado en la cuantización.",
      "La frecuencia de muestreo y el número de niveles de la señal moduladora.",
      "El ancho de banda del medio físico y la frecuencia de muestreo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 870,
    title: "El efecto de la dispersión intermodal en fibras ópticas es mayor,",
    choices: [
      "En las fibras monomodo.",
      "Al disminuir la velocidad de transmisión.",
      "Al aumentar la distancia de la comunicación.",
      "Al aumentar la potencia del haz de luz del emisor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 871,
    title:
      "Determina el medio físico más adecuado a emplear en un entorno industrial donde existeuna gran cantidad de máquinas eléctricas en funcionamiento:",
    choices: [
      "Cable UTP categoría 3.",
      "Cable STP.",
      "Cable UTP categoría 5.",
      "Cable UTP categoría 6.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 872,
    title:
      "Sobre la comunicación inalámbrica empleando ondas electromagnéticas, es cierto que:",
    choices: [
      "Señales de la misma frecuencia interfieren entre ellas.",
      "Señales de la misma frecuencia y diferente amplitud NO interfieren entre ellas.",
      "Las comunicaciones satelitales emplean frecuencias de 100 MHz.",
      "Las ondas electromagnéticas tienen todas el mismo alcance en distancia.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 873,
    title:
      "Indica dónde se introduce el  campo Secuencia de Verificación de Trama (SVT) en unprotocolo de nivel de enlace:",
    choices: [
      "Al principio de la cabecera del protocolo de nivel de enlace.",
      "Al final de la cabecera del protocolo de nivel de enlace.",
      "Al final del paquete de nivel de enlace.",
      "Al principio del paquete de nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 874,
    title:
      "Si un protocolo de nivel de enlace emplea la técnica CRC como Secuencia de Verificaciónde Trama, es cierto que:",
    choices: [
      "Podrá corregir los errores en bits del paquete de nivel de enlace.",
      "Podrá detectar la existencia de bits erróneos en el paquete de nivel de enlace.",
      "Podrá corregir los errores en bits de los datos de nivel de enlace.",
      "Solicitará al nivel de red la corrección de los bits con errores en el paquete de nivel deenlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 875,
    title:
      "En un protocolo de control del flujo de parada y espera con numeración de DATOS yACKs, y  donde no se producen errores en la transmisión en el medio físico, es FALSOque:",
    choices: [
      "No se producen errores de duplicación.",
      "No se producen errores de sincronización.",
      "No se producen reenvíos de paquetes de datos.",
      "No se producen envíos continuos de paquetes de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 876,
    title:
      "Qué capa de la arquitectura de red no está definida en el modelo de referencia IEEE802.2 ?",
    choices: ["Física.", "MAC.", "LLC.", "Red."],
    solution: "",
    explanation: "",
  },
  {
    id: 877,
    title:
      "Indica en cuál  de las  siguientes   normativas Ethernet  NO es  necesario un tamaño depaquete mínimo:",
    choices: [
      "100BaseT.",
      "1000BaseT.",
      "10G-BaseT.",
      "Todas las normativas BaseT de Ethernet precisan de tamaño de paquete mínimo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 878,
    title:
      "La  interconexión  de  segmentos  Ethernet  empleando  conmutadores  en  vez  deconcentradores permite:",
    choices: [
      "Reducir la congestión en la red al aumentar el número de PCs.",
      "Reducir las colisiones en la red al aumentar el número de PCs.",
      "Eliminar las colisiones en la red independientemente del número de PCs.",
      "Eliminar la congestión en la red independientemente del número de PCs.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 879,
    title:
      "Sobre  el  funcionamiento  del  reenvío  de  paquetes  Ethernet  en  un  puente  que  empleaSpanning-Tree, es cierto que :",
    choices: [
      "Si la dirección MAC destino de un paquete recibido en un puerto no es conocida, se reenvíaa todos los puertos adicionales del puente.",
      "Si la dirección MAC destino de un paquete recibido en un puerto no es conocida,  sereenvía a todos los puertos ACTIVOS adicionales del puente.",
      "Si la dirección MAC destino de un paquete recibido en un puerto no es conocida, se reenvíasólo al PUERTO RAÍZ del puente.",
      "El puente sólo puede reenviar paquetes Ethernet a su PUERTO RAÍZ.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 880,
    title: "La tecnología Ethernet 100BaseT se desarrolló con el objetivo de:",
    choices: [
      "Mejorar el rendimiento en redes Ethernet 10BaseT con aplicaciones cliente/servidor.",
      "Reducir la congestión en redes Ethernet 10BaseT al aumentar el número de PCs .",
      "Eliminar las colisiones en los concentradores Ethernet 10BaseT.",
      "Eliminar el tamaño de paquete mínimo en redes Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 881,
    title:
      "En qué tecnología Ethernet se emplea la codificación 8B/10B para la sincronización ?",
    choices: ["100BaseFX.", "100BaseTX.", "1000BaseT.", "1000BaseLX."],
    solution: "",
    explanation: "",
  },
  {
    id: 882,
    title:
      "El empleo de un conmutador Ethernet con la tecnología IEEE 802.1Q, permite:",
    choices: [
      "Crear una red IP en el conmutador donde no existe conectividad directa entre los equipos dela misma red IP.",
      "Reenviar paquetes ARP request asociados a una VLAN sólo al puerto troncal de la VLAN.",
      "Establecer dominios de difusión diferentes dentro de un mismo conmutador.",
      "Definir varias redes IP para una misma VLAN en el conmutador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 883,
    title:
      "Sobre el funcionamiento de una red LAN inalámbrica de infraestructura es cierto que:",
    choices: [
      "Cada punto de acceso (AP) tiene conectividad inalámbrica con los equipos conectados aotros APs.",
      "Un  equipo  conectado  a  un  AP tienen  conectividad  inalámbrica  directa  con  los  demásequipos conectados al AP.",
      "La conectividad entre equipos inalámbricos conectados a diferentes AP se realiza con unared de infraestructura (red Ethernet).",
      "Un equipo inalámbrico conectado a un AP no tiene conectividad con equipos en la red deinfraestructura (red Ethernet).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 884,
    title:
      "Sobre el procedimiento de registro de un equipo inalámbrico en un punto de acceso (AP)es  cierto que:",
    choices: [
      "Un AP no puede rechazar registrar a un equipo que solicita el registro.",
      "Para el registro de un equipo en un AP es necesario conocer el SSID de la red inalámbrica.",
      "Si un AP registra un equipo no es posible iniciar el proceso de autenticación.",
      "El proceso de registro permite proporcionar una clave de cifrado por parte del AP al equipoinalámbrico.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 885,
    title: "El cifrado en WPA2-PSK y en WPA2-Enterprise se diferencia en que:",
    choices: [
      "WPA2-PSK emplea una secuencia inicial de cifrado con la misma clave para todos losequipos inalámbricos.",
      "WPA2-Enterprise no realiza autenticación de clientes al emplear la misma clave inicial decifrado para todos los equipos inalámbricos.",
      "WPA2-PSK emplea el mecanismo de autenticación LEAP para permitir el acceso a la redinalámbrica.",
      "WPA2-Enterprise puede emplear el  algoritmo de cifrado EAP y WPA2-PSK sólo puedeemplear el algoritmo de cifrado TKIP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 886,
    title:
      "Indica qué dirección IP tiene que ser empleada en un dispositivo para que un routerNUNCA pueda encaminarla (aunque emplee NAT):",
    choices: ["10.0.0.3.", "192.168.1.1.", "225.10.2.1.", "241.241.241.241."],
    solution: "",
    explanation: "",
  },
  {
    id: 887,
    title: "Cómo es posible reducir la congestión en una red TCP/IP ?",
    choices: [
      "Reduciendo el número de equipos conectados en la red.",
      "Reduciendo la capacidad de proceso de las CPUs de los routers.",
      "Reduciendo el tamaño del MTU de las redes conectadas.",
      "Aumentando la velocidad de transmisión en las redes conectadas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 888,
    title:
      "Cuál es el protocolo de encaminamiento empleado en los routers frontera de los SA parala conectividad global en Internet ?",
    choices: ["OSPF.", "RIPv1.", "BGP.", "RIPv2."],
    solution: "",
    explanation: "",
  },
  {
    id: 889,
    title:
      "Cuál es el protocolo de encaminamiento que envía siempre la información completa dela tabla de encaminamiento de un router ?",
    choices: ["OSPF.", "RIPv1.", "BGP.", "OSPFv2."],
    solution: "",
    explanation: "",
  },
  {
    id: 890,
    title: "El direccionamiento IPv6 presenta la característica de:",
    choices: [
      "Asociar  direcciones  IP  únicas  a  dispositivos,  independientemente  de  su  ubicacióngeográfica.",
      "Aumentar el número máximo de saltos de encaminamiento que un paquete IP puede realizara través de los routers de Internet.",
      "Emplear un tamaño en bytes para la cabecera IPv6 menor que en IPv4.",
      "No permitir el empleo de direcciones IP de multidifusión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 891,
    title:
      "Sea una conexión TCP entre un extremo A y otro B en una situación en la que la ventanade congestión del extremo A es menor que la ventana de recepción que informa el extremoB. En esta situación es cierto que:",
    choices: [
      "El extremo A aumenta su ventana de emisión al tamaño de la ventana de recepción en B.",
      "El extremo A mantiene su ventana de emisión al tamaño de la ventana de congestión en A.",
      "El  extremo  A reduce  su  ventana  de  emisión  a  la  mitad  del  tamaño  de  la  ventana  derecepción en B.",
      "El  extremo  A reduce  su  ventana  de  emisión  a  la  mitad  del  tamaño  de  la  ventana  decongestión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 892,
    title: "La tecnología de red MPLS está asociada a:",
    choices: [
      "Redes de agregación Ethernet.",
      "Redes troncales.",
      "Redes de acceso ADSL.",
      "Redes de acceso FTTH.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 893,
    title:
      "Una arquitectura de red que define una aplicación para el intercambio de archivos en una red de área local Ethernet, NO precisa disponer de la capa:",
    choices: ["Física.", "Enlace.", "Red.", "Aplicación."],
    solution: "",
    explanation: "",
  },
  {
    id: 894,
    title: "La solicitud de un servicio de la capa n a la capa n-1 provoca:",
    choices: [
      "La comunicación entre las capas pares del nivel n.",
      "La comunicación entre las capas pares del nivel n-1.",
      "La comunicación entre las capa n y la capa par n-1.",
      "La comunicación entre las capas adyacentes n+1 y n-1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 895,
    title: "Cuando se produce fragmentación de paquetes en un nivel n,",
    choices: [
      "En cada fragmento se incorporan las cabeceras de los niveles inferiores.",
      "Se incorporan las cabeceras de los niveles inferiores sólo en el último fragmento.",
      "Se incorporan las cabeceras de los niveles inferiores sólo en el primer fragmento.",
      "Se incorpora la cabecera del nivel superior sólo en el primer fragmento.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 896,
    title:
      "Indica cuál de las siguientes capas no está presente en la arquitectura TCP/IP:",
    choices: ["Aplicación.", "Sesión.", "Transporte.", "Red."],
    solution: "",
    explanation: "",
  },
  {
    id: 897,
    title:
      "En el intercambio de paquetes TCP entre dos estaciones que se encuentran en redes IP diferentes, la cabecera TCP se interpreta:",
    choices: [
      "En cada router intermedio existente entre las dos estaciones.",
      "En cada puente intermedio existente entre las dos estaciones.",
      "En cada repetidor intermedio existente entre las dos estaciones.",
      "En las estaciones que intercambian los paquetes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 898,
    title:
      "Un servidor Web envía a un cliente un paquete HTTP con datos. El paquete es transmitido en el medio físico empleando el protocolo de nivel de enlace Ethernet y sufre un error de CRC. La capa de la arquitectura que reenviará el paquete HTTP es:",
    choices: [
      "Capa de aplicación.",
      "Capa de transporte.",
      "Capa de red.",
      "Capa de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 899,
    title:
      "Cuántos armónicos componen una señal periódica de pulsos con periodo 1 ms y transmitida por un medio fisico de 5000 Hz de ancho de banda ?",
    choices: ["5.", "6.", "10000.", "Infinitos."],
    solution: "",
    explanation: "",
  },
  {
    id: 900,
    title:
      "Determina la velocidad máxima de transmisión para una señal de pulsos con 2 niveles de tensión en un medio físico full-duplex con multiplexión por frecuencia (simétrica para transmisión y recepción) y ancho de banda de 1000 Hz.",
    choices: ["1000 bps.", "2000 bps.", "4000 bps.", "8000 bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 901,
    title:
      "En qué normativa inalámbrica del IEEE no se emplea el mecanismo RTS/CTS en el acceso al medio ?",
    choices: [
      "IEEE 802.11b.",
      "IEEE 802.11g.",
      "IEEE 802.11n.",
      "Todas las normas IEEE 802.11x soportan el mecanismo RTS/CTS.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 902,
    title: "Qué mecanismo de cifrado en redes WiFi es actualmente seguro ?",
    choices: ["WPA2/AES.", "WPA2/TKIP.", "WPA2/PEAP.", "WPA2/TLS."],
    solution: "",
    explanation: "",
  },
  {
    id: 903,
    title:
      "En el encaminamiento de paquetes en el nivel de red de la arquitectura TCP/IP es cierto que,",
    choices: [
      "El encaminamiento analiza las direcciones IP origen y destino en los paquetes.",
      "El encaminamiento depende de la cantidad de datos del paquete IP.",
      "El encaminamiento de un paquete depende de cómo se encaminó el paquete anterior.",
      "El encaminamiento se realiza para todos los paquetes aunque sean enviados al mismo destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 904,
    title:
      "Sobre la estructura de una tabla de encaminamiento de un router IP es cierto que,",
    choices: [
      "Las entradas de una tabla pueden tener direcciones de red de destino repetidas.",
      "Las entradas de una tabla pueden tener direcciones de puerta de enlace repetidas.",
      "En una tabla puede existir más de una entrada de puerta de enlace por defecto.",
      "Todas las entradas de una tabla tiene que tener la máscara de red con el mismo valor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 905,
    title:
      "En qué situación el protocolo de encaminamiento OSPF será más adecuado que emplear RIP ?",
    choices: [
      "Interconexión de redes LAN con tecnología diferente.",
      "Interconexión de redes LAN sin bucles.",
      "Interconexión de redes LAN con menos de 10 saltos de distancia máxima.",
      "Interconexión de redes LAN donde las distancias entre redes pueden reducirse.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 906,
    title: "Sobre el protocolo de encaminamiento IPv6 es cierto que,",
    choices: [
      "Aumenta el número de direcciones IPv4 empleando la clase reservada E.",
      "Es posible el intercambio de paquetes IP entre estaciones IPv4 e IPv6.",
      "Es posible el intercambio de paquetes IPv4 a través de una red IPv6.",
      "El protocolo IPv6 aumenta el valor del campo TTL para permitir redes IP más extensas.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 907,
    title:
      "El dispositivo de interconexión entre dos redes  que trabaja a nivel físico se denomina:",
    choices: ["Repetidor.", "Puente.", "Router.", "Pasarela."],
    solution: "",
    explanation: "",
  },
  {
    id: 908,
    title:
      "La gestión del intercambio de datos entre aplicaciones empleando sockets en una red TCP/IP, se realiza:",
    choices: [
      "En la capa de aplicación.",
      "En la capa de transporte.",
      "En la capa de red.",
      "En la capa de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 909,
    title:
      "En una transición de una MEF que modela un protocolo de comunicación, es cierto que:",
    choices: [
      "Existe siempre más de un evento de salida.",
      "Puede no existir ningún evento de entrada.",
      "Interconecta dos estados.",
      "Siempre interconecta dos estados diferentes.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 910,
    title:
      "Sea un medio físico con ancho de banda B que permite una velocidad máxima de transmisión de V bps. Si el ancho de banda B aumenta al doble, es cierto que",
    choices: [
      "La velocidad máxima de transmisión será 2*V bps.",
      "La velocidad máxima de transmisión será 4*V bps.",
      "La velocidad máxima de transmisión no se verá modificada.",
      "La relación señal-ruido del medio físico se reduce a la mitad.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 911,
    title:
      "Sobre el funcionamiento de un conmutador Ethernet VLAN es cierto que,",
    choices: [
      "Los paquetes de difusión de una VLAN son reenviados sólo a los puertos troncales del conmutador asociados a la misma VLAN.",
      "Los paquetes de difusión de una VLAN son reenviados a puertos pertenecientes a cualquier VLAN.",
      "Los paquetes ARP Request transmitidos en una VLAN son reenviados a todos los puertos del conmutador asociados a la misma VLAN.",
      "Los paquetes ARP Reply transmitidos en una VLAN son reenviados a todos los puertos  troncales y de acceso asociados a la misma VLAN.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 912,
    title:
      "En qué normativa inalámbrica del IEEE no se emplean tramas Beacon Frame para identificar redes Wi-Fi (ESSID) ?",
    choices: [
      "IEEE 802.11b.",
      "IEEE 802.11g.",
      "IEEE 802.11n.",
      "Todas las normas IEEE 802.11x emplean las tramas Beacon Frame.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 913,
    title: "Qué mecanismo de cifrado en redes Wi-Fi es actualmente seguro ?",
    choices: ["WPA2/AES.", "WPA2/TKIP.", "WPA2/PEAP.", "WPA2/TLS."],
    solution: "",
    explanation: "",
  },
  {
    id: 914,
    title:
      "Indica el mecanismo de autenticación WPA Enterprise que permite el intercambio más seguro de la clave MK entre una estación y un AP.",
    choices: ["EAP/SSH.", "PEAP.", "LEAP.", "EAP/AES."],
    solution: "",
    explanation: "",
  },
  {
    id: 915,
    title:
      "Qué característica tienen en común el protocolo de encaminamiento OSPF y el protocolo  RIP versión 2 ?",
    choices: [
      "Emplean la misma métrica para determinar el coste del camino a un destino.",
      "Pueden enviar un mensaje de información a todos los routers de una LAN empleando multidifusión.",
      "Pueden enviar mensajes a routers que no sean adyacentes (que no están en la misma LAN).",
      "RIP versión 2 y OSPF no tienen ninguna característica en común.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 916,
    title:
      "Indica la tecnología de acceso WAN que emplea un medio físico dedicado para cada abonado:",
    choices: [
      "ADSL.",
      "FTTH.",
      "HFC.",
      "Todas las tecnologías de acceso WAN emplean un medio físico dedicado para cada abonado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 917,
    title:
      "En qué tipo de redes de comunicaciones NO es necesario el proceso de encaminamiento en la comunicación entre cualesquiera dos equipos ?",
    choices: [
      "Redes de difusión.",
      "Redes punto a punto.",
      "Redes de conmutación de paquetes con datagramas.",
      "Redes de conmutación de paquetes con circuitos virtuales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 918,
    title:
      "Si la capa n de una arquitectura de red recibe dos paquetes de la capa inferior n-1, es cierto que:",
    choices: [
      "En la cabecera del protocolo de nivel n se indica si los paquetes son fragmentos a unir.",
      "En la cabecera del protocolo de nivel n-1 se indica si los paquetes son fragmentos a unir.",
      "Si uno de los paquetes no incorpora la cabecera del protocolo n-1, serán dos fragmentos a unir.",
      "Si uno de los paquetes no incorpora la cabecera el protocolo n, serán dos fragmentos a unir.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 919,
    title: "Sobre el funcionamiento de la arquitectura TCP/IP es cierto que:",
    choices: [
      "La capa de aplicación emplea SIEMPRE la capa IP para el intercambio de datos entre equipos.",
      "La capa de aplicación emplea SIEMPRE la capa TCP para el intercambio de datos entre equipos.",
      "La capa de aplicación emplea SIEMPRE la capa ICMP para el intercambio de datos entre equipos.",
      "La capa de aplicación emplea SIEMPRE la capa UDP para el intercambio de datos entre equipos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 920,
    title:
      "Qué protocolo de aplicación de la arquitectura de red TCP/IP NO emplea ni el protocolo TCP ni el UDP ?",
    choices: ["HTTP.", "DNS.", "ICMP.", "PING."],
    solution: "",
    explanation: "",
  },
  {
    id: 921,
    title:
      "En qué tipo de señalización en BANDA BASE pueden existir más problemas de sincronización emisor – receptor ?",
    choices: [
      "Codificación binaria unipolar sin retorno a cero.",
      "Codificación binaria bipolar con retorno a cero.",
      "Codificación Mánchester.",
      "Codificación PCM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 922,
    title:
      "Qué factor NO limita la distancia máxima de comunicación que puede conseguirse en una fibra óptica ?",
    choices: [
      "El tipo de fibra óptica empleada.",
      "La velocidad de transmisión empleada.",
      "La potencia del dispositivo emisor de luz.",
      "El número de canales multiplexados por longitud de onda.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 923,
    title:
      "Qué tipo de servicio ofrecido por el nivel de enlace reenvía paquetes de datos sin controlar el flujo ?",
    choices: [
      "Servicio sin conexión ni reconocimiento.",
      "Servicio sin conexión y con reconocimiento.",
      "Servicio con conexión y con reconocimiento.",
      "Servicio de ventana deslizante.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 924,
    title:
      "En qué protocolo de ventana deslizante pueden recibirse paquetes de datos con secuencias no consecutivas ?",
    choices: [
      "Protocolo de parada y espera.",
      "Protocolo de ventana deslizante de 1 bit.",
      "Protocolo de ventana deslizante con repetición NO selectiva.",
      "Protocolo de ventana deslizante con repetición selectiva.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 925,
    title: "Indica el sistema de señalización empleado en Ethernet 100BaseFX:",
    choices: ["Manchester.", "4D-PAM5.", "NRZI.", "8B/10B."],
    solution: "",
    explanation: "",
  },
  {
    id: 926,
    title:
      "Qué tecnología Ethernet NO precisa la introducción de bits de sincronización en los paquetes Ethernet ?",
    choices: [
      "Ethernet 1000BaseT.",
      "Ethernet 100BaseTX.",
      "Ethernet 100BaseFX.",
      "Ethernet 1000BaseLX.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 927,
    title:
      "Cómo se denomina el mecanismo en el que no existen colisiones a la hora de transmitir paquetes en las redes inalámbricas ?",
    choices: ["CSMA/CD con RTS/CTS.", "CSMA/CA con RTS/CTS.", "DCF.", "PCF."],
    solution: "",
    explanation: "",
  },
  {
    id: 928,
    title:
      "Qué algoritmo de encaminamiento no tiene en cuenta valores de métrica al gestionar las tablas de encaminamiento ?",
    choices: ["OSPF.", "BGP.", "RIPv1.", "RIPv2."],
    solution: "",
    explanation: "",
  },
  {
    id: 929,
    title:
      "Si se detecta un error en el funcionamiento de la capa n de una arquitectura de red podemos asegurar que,",
    choices: [
      "Al menos se ha producido un fallo en las capas superiores a la capa n.",
      "Se ha producido algún fallo en la capa n o en las capas inferiores a la capa n.",
      "Se ha producido un fallo en la capa superior n+1 Þ la arquitectura de red.",
      "Siempre existe un fallo en alguna capa superior a la capa n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 930,
    title:
      "Una señal digital periódica de 8 bits, con un periodo de 10ms, se envía por un medio con un ancho de banda ideal de 240Hz que comienza en la frecuencia 280Hz. ¿Cuántas componentes armónicas de la señal llegarán correctamente al destino?",
    choices: ["2.", "3.", "4.", "5."],
    solution: "",
    explanation: "",
  },
  {
    id: 931,
    title:
      "Indica en cuál de los siguientes medios físicos el efecto de la dispersión intermodal es mayor.",
    choices: [
      "Cable coaxial blindado.",
      "Fibra óptica de índice gradual.",
      "Fibra óptica monomodo.",
      "Fibra óptica multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 932,
    title:
      "Si se desea aumentar la velocidad de transmisión obtenida en una fibra óptica monomodo sin modificar la codificación del número de niveles, es necesario:",
    choices: [
      "Cambiar la fibra al tipo multimodo de mayor ancho de banda.",
      "Aumentar la potencia del dispositivo emisor de luz en el extremo de la fibra.",
      "Aumentar la sensibilidad del dispositivo receptor de luz en el extremo de la fibra.",
      "Realizar un multiplexado de longitud de onda para incorporar varios haces de luz.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 933,
    title:
      "Qué afirmación es cierta sobre el funcionamiento del protocolo CSMA/CD ?",
    choices: [
      "Elimina las colisiones en el medio físico esperando un tiempo aleatorio antes de transmitir un paquete.",
      "Si el medio físico está libre siempre se espera un lapso de tiempo antes de transmitir el paquete.",
      "Después de transmitir un paquete al medio físico se comprueba si el medio presenta colisiones.",
      "Si el medio físico está libre antes de la transmisión, nunca se producirán colisiones.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 934,
    title:
      "En un paquete Ethernet con el formato IEEE 802.3, ¿ cómo se distingue si el contenido es un paquete IP o un paquete ARP ?",
    choices: [
      "Empleando el campo preámbulo de la cabecera IEEE 802.3.",
      "Empleando el campo tipo de la cabecera IEEE 802.3.",
      "Empleando el campo tipo de la cabecera LLC.",
      "Empleando el campo longitud de la cabecera IEEE 802.3.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 935,
    title:
      "En qué configuración de interconexión de segmentos Ethernet existe un dominio de colisión mayor ?",
    choices: [
      "Interconexión de 2 concentradores (half-duplex) Ethernet.",
      "Interconexión de 3 conmutadores (full-duplex) Ethernet.",
      "Interconexión de 4 concentradores (half-duplex) Ethernet.",
      "Interconexión de 5 conmutadores (full-duplex) Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 936,
    title: "En qué tecnología Ethernet no se emplea la codificación 8B/10B ?",
    choices: [
      "Ethernet 1000BaseLX.",
      "Ethernet 1000BaseSX.",
      "Ethernet 1000BaseTX.",
      "Ethernet 1000BaseCX.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 937,
    title: "Sobre el funcionamiento de un conmutador VLAN es cierto que,",
    choices: [
      "El formato de los paquetes en los enlaces de acceso es diferente al de los enlaces troncales.",
      "Todos los puertos de un conmutador VLAN tienen que estar asociados a la misma VLAN.",
      "Un puerto de enlace de acceso puede estar asociado a varias VLAN diferentes.",
      "En un conmutador VLAN sólo puede existir un único puerto de enlace troncal.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 938,
    title:
      "Sobre el funcionamiento de un punto de acceso (AP) de una red inalámbrica es cierto que,",
    choices: [
      "El punto de acceso emplea una portadora o subcanal para cada equipo asociado al punto de acceso.",
      "Dos AP con un mismo SSID no pueden emplear el mismo subcanal o portadora si tienen coberturas solapadas.",
      "Dos AP con un mismo SSID tienen que emplear siempre el mismo subcanal o portadora.",
      "Una estación asociada a un AP tiene cobertura con todas las estaciones asociadas al AP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 939,
    title:
      "Indica cuál de los siguientes es un mecanismo de autenticación en WPA2.",
    choices: ["TKIP.", "PSK.", "AES.", "LEAP."],
    solution: "",
    explanation: "",
  },
  {
    id: 940,
    title:
      "Cuál de las siguientes situaciones indica que existe congestión en la red ?",
    choices: [
      "Presencia de mensajes Host Unreachable.",
      "Presencia de mensajes TTL Exceeded in Transit.",
      "Presencia de mensajes Source Quench.",
      "Un router detecta que el uso de su CPU para el encaminamiento es del 25%.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 941,
    title: "Sobre el protocolo de encaminamiento OSPF es FALSO que,",
    choices: [
      "Emplea el algoritmo de Dijkstra para obtener la solución de encaminamiento en la red.",
      "Intercambia menos información de encaminamiento que RIP.",
      "Utiliza la difusión para el envío de los mensajes OSPF en la red.",
      "Los enlaces entre routers OSPF pueden modificar su valor de coste del enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 942,
    title:
      "Si un paquete IP es enviado a la dirección 224.0.0.7 es cierto que,",
    choices: [
      "El paquete es recibido por todos los equipos de Internet que responden a esa dirección.",
      "La dirección IP de destino se cambia por 224.255.255.255 para que llegue a todos los equipos de la red.",
      "Los routers que reciben este paquete lo envían a todos los routers multicasting de Internet.",
      "El paquete es recibido por todos los equipos de la red donde es transmitido y pertenecen al grupo de multidifusión 224.0.0.7.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 943,
    title:
      "En el protocolo TCP, la fase de “arranque lento” está relacionada con:",
    choices: [
      "El control del flujo.",
      "El control de la congestión.",
      "El establecimiento de una conexión.",
      "La liberación de una conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 944,
    title:
      "En el protocolo TCP, cuando un extremo A comunica al otro extremo B su ventana de recepción, está indicando:",
    choices: [
      "El tiempo que el extremo B ha de esperar para enviar más datos.",
      "El número máximo de paquetes que el extremo B puede enviar al extremo A.",
      "El número máximo de bytes que el extremo B puede enviar al extremo A.",
      "El número total de bytes que el extremo A recibió correctamente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 945,
    title:
      "El empleo de la tecnología de difusión para las redes LAN se caracteriza por,",
    choices: [
      "La necesidad de definir un mecanismo de compartición del medio físico.",
      "La necesidad de definir un mecanismo de encaminamiento para la conectividad entre todos los computadores de la red.",
      "La transmisión de múltiples paquetes para enviar la misma información a todos los computadores de la red.",
      "La tolerancia a fallos que presenta al permitir varios caminos físicos a un determinado computador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 946,
    title:
      "Si en una red de conmutación de paquetes basada en circuitos virtuales, un nodo deja de funcionar es cierto que,",
    choices: [
      "Todos los paquetes que alcancen ese nodo serán encaminados a un nodo alternativo sin intervenir los extremos de la comunicación.",
      "Todos los paquetes que hayan pasado por ese nodo han de ser reenviados.",
      "Todos los computadores de la red quedan incomunicados.",
      "Los computadores que emplean ese nodo para intercambiar paquetes han de determinar una nueva ruta para sus destinos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 947,
    title: "El empleo del mecanismo de difusión en una red LAN permite,",
    choices: [
      "Identificar grupos de máquinas en la red con una única dirección física (dirección MAC).",
      "Identificar grupos de máquinas en la red con diferentes direcciones físicas (direcciones MAC).",
      "Identificar a todas las máquinas de la red con una única dirección física (dirección MAC).",
      "Identificar a todas las máquinas de la red con diferentes direcciones físicas (direcciones MAC).",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 948,
    title:
      "La comunicación vertical en una arquitectura de red se caracteriza porque,",
    choices: [
      "Se establece entre las capas pares de nivel físico.",
      "Se establece entre la capa n y la capa par n-1 de la arquitectura.",
      "Se establece entre la capa n y la capa par n+1 de la arquitectura.",
      "Se establece entre las capas n y n-1 de la arquitectura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 949,
    title:
      "Si un protocolo de la capa n de una arquitectura de red envía una PDU que no llega a la capa par correspondiente, es cierto que,",
    choices: [
      "La capa par de nivel n en el otro extremo de la comunicación informa del error.",
      "La capa n del emisor reenvía la PDU del nivel n perdida.",
      "La capa par de nivel n+1en el otro extremo de la comunicación informa del error.",
      "La capa n+1 del emisor reenvía la PDU del nivel n perdida.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 950,
    title:
      "Si un protocolo definido en la capa n de una arquitectura de red permite la fragmentación, es cierto que:",
    choices: [
      "Sólo el primer paquete de una fragmentación incorpora la cabecera del protocolo de nivel n.",
      "Sólo el primer paquete de una fragmentación incorpora la cabecera del protocolo de nivel n-1.",
      "Todos los paquetes de una fragmentación incorporan la cabecera del protocolo de nivel n-1.",
      "Todos los paquetes de una fragmentación incorporan la cabecera del protocolo de nivel n.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 951,
    title:
      "La capa de transporte en la arquitectura TCP/IP se caracteriza por,",
    choices: [
      "Emplear en la comunicación un protocolo de control del flujo denominado UDP.",
      "Aumentar el aprovechamiento del medio físico empleando el control del flujo del protocolo TCP.",
      "Gestionar una comunicación fiable estableciendo circuitos virtuales extremo a extremo con el protocolo TCP.",
      "Proporcionar siempre a la capa de aplicación una comunicación no segura, debido al funcionamiento de conmutación con datagramas en Internet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 952,
    title:
      "En el intercambio de paquetes DNS entre dos computadores A y B que se encuentran en la misma red IP, la cabecera UDP de esos paquetes se interpreta:",
    choices: [
      "En la puerta de enlace por defecto configurada en el computador que inicia la conexión UDP.",
      "En la puerta de enlace por defecto configurada en el computador que recibe la conexión UDP.",
      "En los computadores que intercambian los paquetes.",
      "En todos los routers existentes en la red IP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 953,
    title:
      "El intercambio de información entre dos computadores que emplean arquitecturas de red diferentes, es posible si:",
    choices: [
      "Existe un router entre ambos computadores.",
      "Existe un puente entre ambos computadores.",
      "Existe un repetidor entre ambos computadores.",
      "Existe una pasarela entre ambos computadores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 954,
    title:
      "Los valores de amplitud de las componentes frecuenciales de una señal de información periódica, dependen de:",
    choices: [
      "La velocidad de transmisión empleada.",
      "El contenido de la información transmitida.",
      "El ancho de banda del medio físico empleada.",
      "Ningún factor, todas las señales tienen los mismos valores de amplitud en sus componentes frecuenciales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 955,
    title:
      "Determina la velocidad máxima de transmisión para una señal de pulsos con 4 niveles de tensión en un medio físico half-duplex con ancho de banda de 1000 Hz.",
    choices: ["1000 bps.", "2000 bps.", "4000 bps.", "8000 bps."],
    solution: "",
    explanation: "",
  },
  {
    id: 956,
    title:
      "Indica cuál de las siguientes señalizaciones de banda base presenta menos problemas de sincronización y menos efecto del ruido:",
    choices: [
      "Codificación binaria UNIPOLAR CON Retorno a Cero.",
      "Codificación binaria BIPOLAR SIN Retorno a Cero.",
      "Codificación binaria UNIPOLAR SIN Retorno a Cero.",
      "Codificación Manchester.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 957,
    title:
      "Se desea realizar la transmisión en un medio físico de una señal analógica modulada con PCM. La señal analógica tiene un ancho de banda de 2000 Hz y se emplea una modulación PCM con 512 niveles de tensión. El medio físico precisa de una velocidad de transmisión de:",
    choices: ["1024 Kbps.", "2048 Kbps.", "18 Kbps.", "36 Kbps."],
    solution: "",
    explanation: "",
  },
  {
    id: 958,
    title:
      "Indica el tipo de modulación que ocupa más ancho de banda para la señal modulada:",
    choices: [
      "Modulación ASK.",
      "Modulación PSK.",
      "Modulación QAM.",
      "Modulación FSK.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 959,
    title:
      "Indica el tipo de modulación con el que es posible obtener mayores velocidades de transmisión:",
    choices: [
      "Modulación ASK con dos niveles de amplitud.",
      "Modulación QPSK.",
      "Modulación QAM.",
      "Modulación PSK de fase coherente a 0º y 180º.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 960,
    title:
      "Indica en qué tipo de cable UTP el ruido de impulso tiene mayor efecto:",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 4.",
      "Cable UTP categoría 5.",
      "El ruido de impulso afecta igual a todos los tipos de cable UTP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 961,
    title:
      "El empleo de la fibra óptica como medio de comunicación tiene el inconveniente de:",
    choices: [
      "Permitir establecer un solo canal de datos en una fibra óptica.",
      "Reducir la velocidad de transmisión máxima al aumentar la longitud de la fibra.",
      "Reducir la velocidad de transmisión máxima al aumentar la potencia del haz de luz.",
      "Ser muy sensible al ruido de impulso provocado por aparatos eléctricos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 962,
    title:
      "La detección de errores empleando la técnica de códigos de redundancia cíclica (CRC) se caracteriza por,",
    choices: [
      "Permitir detectar errores cuando se producen en un número par de bits.",
      "Permitir detectar errores cuando se producen en 2 bits.",
      "Permitir detectar errores en ráfaga de longitud mayor que el grado del polinomio generador.",
      "Permitir corregir errores en ráfaga de longitud menor que el grado del polinomio generador.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 963,
    title:
      "Sea un protocolo de ventana deslizante con ventana de emisor 5 y ventana de recepción 6. Si el emisor envía 3 paquetes con secuencia 1, 2 y 3, y la primera secuencia en la ventana del receptor es 1, es cierto que:",
    choices: [
      "El receptor no puede confirmar ninguno de los paquetes enviados por el emisor.",
      "El emisor no puede enviar el paquete con secuencia 6 hasta recibir el ACK del paquete con secuencia 1.",
      "El emisor no puede enviar el paquete con secuencia 6 hasta recibir el ACK del paquete con secuencia 2.",
      "El receptor puede confirmar como mucho hasta el paquete con secuencia 6 cuando ha recibido los paquetes con secuencias 1 y 2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 964,
    title:
      "Indica qué protocolo MAC de las normas IEEE 802.X no es soportado por el protocolo IEEE 802.2 (LLC):",
    choices: [
      "MAC IEEE 802.5.",
      "MAC IEEE 802.11x.",
      "MAC IEEE 802.1Q.",
      "Todas las normas MAC del IEEE son soportadas por el protocolo IEEE 802.2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 965,
    title:
      "Indica el servicio del protocolo IEEE 802.2 que emplea el protocolo IP (arquitectura TCP/IP):",
    choices: [
      "Servicio no orientado a conexión y sin confirmación (tipo 1).",
      "Servicio orientado a conexión (tipo 2).",
      "Servicio no orientado a conexión con confirmación (tipo 3).",
      "Puede emplear cualquiera de los 3 tipos de servicios del IEEE 802.2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 966,
    title:
      "Qué afirmación es cierta sobre el funcionamiento del protocolo CSMA/CD ?",
    choices: [
      "Es válido para dispositivos que funcionan en modo semiduplex.",
      "Los conmutadores Ethernet no permiten este modo de funcionamiento.",
      "La conexión de dos concentradores Ethernet reduce a la mitad el dominio de colisión.",
      "El reenvío de un paquete que ha sufrido una colisión se produce de manera indefinida hasta su éxito.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 967,
    title:
      "Sobre el funcionamiento del algoritmo Spanning Tree en puentes transparentes, es cierto que:",
    choices: [
      "Tiene como objetivo establecer bucles en una estructura de puentes interconectados.",
      "Reduce el número de saltos entre diferentes segmentos Ethernet a 16.",
      "Permite inhabilitar puertos de los puentes para el proceso de reenvío y aprendizaje.",
      "Establece puentes raíces y puentes designados.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 968,
    title:
      "El aumento de 10 Mbps a 100 Mbps en la velocidad de transmisión en una red Ethernet precisa,",
    choices: [
      "Aumentar el tamaño de paquete mínimo de Ethernet a 512 bytes.",
      "Cambiar el cable UTP categoría 3 por cable UTP categoría 5.",
      "Emplear modulación QAM en vez de codificación Manchester.",
      "Modificar el formato de la cabecera de los paquetes Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 969,
    title:
      "Indica en qué normativa Ethernet es posible emplear como medio físico tanto cable UTP como fibra óptica:",
    choices: [
      "Ethernet 10BaseT.",
      "Ethernet 100BaseFX.",
      "Ethernet 1000BaseX.",
      "10Gigabit Ethernet.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 970,
    title:
      "Sobre el formato de paquete de la norma IEEE 802.1Q, es cierto que:",
    choices: [
      "Tiene un tamaño máximo de paquete igual que en la norma IEEE 802.3.",
      "Tiene un tamaño máximo de datos menor que en la norma IEEE 802.3.",
      "Emplea el campo Tipo de la cabecera para distinguir entre paquetes con formato IEEE 802.3 y con formato IEEE 802.1Q.",
      "Emplea direcciones MAC origen y destino de 64 bytes de tamaño.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 971,
    title: "Una red inalámbrica Ad-Hoc se caracteriza por:",
    choices: [
      "Permitir una cobertura en distancia mayor que una red de infraestructura.",
      "Evitar la existencia de colisiones de paquetes entre estaciones de la red.",
      "Emplear el mecanismo RTS/CTS para que todas las estaciones tengan cobertura solapada.",
      "Emplear las mismas normativas de transmisión (IEEE 802.11x) que en las redes de infraestructura.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 972,
    title:
      "Indica qué mecanismo de AUTENTICACIÓN de redes Wi-Fi es más seguro (más difícil de determinar la clave de autenticación):",
    choices: ["WEP.", "PEAP.", "LEAP.", "TKIP."],
    solution: "",
    explanation: "",
  },
  {
    id: 973,
    title:
      "Sobre el funcionamiento de un punto de acceso (AP) de una red inalámbrica es cierto que,",
    choices: [
      "El punto de acceso transmite regularmente paquetes Beacon-Frame para evitar el problema de la estación oculta.",
      "Dos computadores asociados a un AP intercambian datos a través del AP que actúa como dispositivo intermedio.",
      "Dos APs con un mismo SSID tienen que emplear siempre el mismo canal Wi-Fi.",
      "Una estación asociada a un AP tiene cobertura con todas las estaciones asociadas al AP.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 974,
    title:
      "Sobre las funcionalidades de un router en la arquitectura TCP/IP es FALSO que,",
    choices: [
      "Gestiona el encaminamiento de paquetes en la red.",
      "Permite establecer cortafuegos (firewall) entre redes IP.",
      "Gestiona los flujos de información, estableciendo mecanismos de reparto del ancho de banda.",
      "Libera conexiones TCP en caso de que el router se encuentre congestionado.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 975,
    title:
      "Indica cuál de las siguientes direcciones IPv4 NO es válida para asignarla a un dispositivo conectado al troncal (backbone) de Internet:",
    choices: ["5.17.33.4", "122.45.67.34", "192.168.0.1", "200.10.10.1"],
    solution: "",
    explanation: "",
  },
  {
    id: 976,
    title:
      "Indica con qué mensaje un router conoce si una conexión TCP del protocolo BGP está ACTIVA:",
    choices: [
      "BGP Open.",
      "BGP Update.",
      "BGP Notification.",
      "BGP Keepalive.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 977,
    title:
      "Indica qué campo de la cabecera IPv4 NO existe en la cabecera IPv6:",
    choices: ["IP origen.", "IP destino.", "TTL.", "HL."],
    solution: "",
    explanation: "",
  },
  {
    id: 978,
    title:
      "Si un paquete IP es enviado a la dirección 224.0.0.10 es cierto que,",
    choices: [
      "El paquete es recibido por todos los equipos de Internet asociados a esa dirección.",
      "La dirección IP de destino se cambia por 224.0.0.0 para que llegue a todos los equipos de la red.",
      "Si el nivel de enlace es Ethernet, se empleará como MAC destino una dirección MAC de multidifusión.",
      "El paquete es procesado por todos los routers de la red que emplean el protocolo RIPv2.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 979,
    title:
      "Con qué mecanismo el protocolo TCP aumenta el tamaño de la ventana de emisión en una conexión TCP que ha sufrido congestión ?",
    choices: [
      "Algoritmo de inicio lento.",
      "Algoritmo de Nagle.",
      "Algoritmo de Karn.",
      "Algoritmo de prevención de la congestión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 980,
    title:
      "En qué tipo de redes de comunicaciones NO es necesario el proceso de encaminamiento e n la comunicación entre cualesquiera dos equipos?",
    choices: [
      "Redes de difusión.",
      "Redes punto a punto.",
      "Redes de conmutación de paquetes con datagramas.",
      "Redes de conmutación de paquetes con circuitos virtuales.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 981,
    title: "Una red punto a punto ...",
    choices: [
      "Es una red cuya tecnología de transmisión emplea un enlace directo entre dos dispositivos.",
      "Es una red cuyo nivel fisico se estructura en una topología de bus.",
      "Es una red en la que los dispositivos emplean protocolo ETHERNET de nivel de enlace.",
      "Es una red de conmutación de circuitos con la propiedad de envío de tramas broadcast.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 982,
    title: "Una red con topología en anillo ...",
    choices: [
      "Especifica sus protocolos y arquitectura en el estándar IEEE 802.5.",
      "Se emplea, generalmente, más en la construcción de redes WAN que en la de redes MAN.",
      "Es más eficiente que una topología en bus cuando se emplea en redes LAN grandes.",
      "Emplea conexiones punto a punto a nivel de enlace, de ahí que el coste de su implantación sea menos elevado que en una topología en bus.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 983,
    title:
      "De acuerdo con la técnica de compartición del medio empleada en algunas redes LA se puede afirmar que:",
    choices: [
      "Una red en anillo IEEE 802.5 emplea un método de selección distribuida.",
      "Una red Ethernet IEEE 802.3 emplea el método ALOHA ranurado.",
      "Una red wifi IEE 802.11 emplea un método de reserva centralizada.",
      "Una red óptica FDDI emplea el método CSMA p-persistente.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 984,
    title:
      "En qué tipo de señalización en BANDA BASE pueden existir más problemas de sincronización emisor – receptor?",
    choices: [
      "Codificación binaria unipolar sin retorno a cero.",
      "Codificación binaria bipolar con retorno a cero.",
      "Codificación Mánchester",
      "Codificación PCM.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 985,
    title:
      "Codificaciones -Indica el sistema de señalización empleado en Ethernet 100BaseFX:",
    choices: ["Manchester.", "4D-PAM5.", "NRZI.", "8B/10B."],
    solution: "",
    explanation: "",
  },
  {
    id: 986,
    title:
      "El intercambio de información en una red LAN de difusión NO se caracteriza por,",
    choices: [
      "Permitir una única transmisión de una trama al medio físico para que todas las estaciones lareciban.",
      "Aumentar el número de colisiones en el medio físico cuanto menor sea el número deestaciones en la red.",
      "Producirse colisiones en el medio físico cuando dos o más estaciones transmiten datossimultáneamente.",
      "Necesitar un esquema de direccionamiento para las estaciones de la red.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 987,
    title:
      "La comunicación entre dos equipos a través de una red de conmutación de paquetes porcircuitos virtuales se caracteriza por que,",
    choices: [
      "Para transmitir las señales, se establece un camino físico exclusivo entre los dos equiposempleando conmutadores.",
      "Los paquetes de datos pueden llegar al equipo destino desordenados, debido a que hancirculado por distintos caminos en la red.",
      "Ofrece un servicio de alta calidad, adecuado para la transmisión de datos.",
      "En general, no requiere de una conexión previa para poder enviar los datos, ni de unadesconexión al acabar",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 988,
    title: "En referencia a la arquitectura de red TCP/IP, es cierto que,",
    choices: [
      "Esta basada la transmisión de paquetes de datos mediante conmutación de circuitosvirtuales.",
      "El nivel de red ofrece una transmisión de datos fiable al nivel de transporte, conrecuperación de los paquetes que tienen errores.",
      "Define protocolos concretos para todos los niveles de su arquitectura, excepto para elAcceso a la Red, para el cual se utilizan protocolos de otras arquitecturas.",
      "No permite comunicaciones orientadas a conexión",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 989,
    title:
      "El campo de secuencia de verificación de trama (FCS) de una trama de enlace en unprotocolo de la arquitectura OSI es parte de la,",
    choices: [
      "PCI de enlace.",
      "SDU de enlace.",
      "ICI de enlace.",
      "IDU de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 990,
    title:
      "Respecto a los tipos de servicio que puede ofrecer el nivel de enlace al de red, es cierto que,",
    choices: [
      "El servicio con conexión y con reconocimiento de tramas es el más rápido.",
      "Los servicios sin confirmación se utilizan cuando el medio físico tiene una tasa de erroralta.",
      "El servicio sin conexión y sin confirmación es el más adecuado para redes locales decalidad.",
      "Los servicios con confirmación son necesariamente orientados a conexión.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 991,
    title:
      "Habitualmente, en un protocolo orientado a bit, ¿qué operación realiza un emisor paraevitar la interpretación incorrecta de secuencias de bits de datos que coinciden con elcódigo del delimitador 01111110?",
    choices: [
      "Añade un cero después de cada secuencia de cinco unos seguidos.",
      "Sustituye cada secuencia de cinco unos seguidos por un cero.",
      "Cambia cada secuencia de seis unos seguidos por una secuencia de cinco unos y un cero.",
      "Duplica el código del delimitador cada vez que aparece entre los bits de datos.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 992,
    title:
      "Cuál es el valor del campo de detección de errores que hay que asociar a la secuencia debits de datos ‘100011’ utilizando un código CRC con el polinomio generador x2+1?",
    choices: ["00.", "01.", "10.", "11"],
    solution: "",
    explanation: "",
  },
  {
    id: 993,
    title:
      "Para que en el envío de paquetes de información en un protocolo de ventana deslizante seaproveche adecuadamente el medio físico, debe verificarse que",
    choices: [
      "El emisor pueda enviar paquetes durante todo el tiempo de espera de un ACK.",
      "El emisor tenga un tamaño de ventana igual a 1.",
      "El receptor tenga un tamaño de ventana igual a 1.",
      "El receptor tenga un tamaño de ventana mayor que el emisor.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 994,
    title:
      "Si un protocolo de parada y espera emplea sólo numeración de las tramas de datos, escierto que",
    choices: [
      "Pueden producirse errores de duplicación.",
      "Pueden producirse errores de sincronización emisor - receptor.",
      "Pueden producirse errores de duplicación y de sincronización.",
      "No pueden producirse errores de duplicación ni de sincronización.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 995,
    title:
      "Indica en cuál de los siguientes medios físicos el ruido cruzado o diafonía es mayor",
    choices: [
      "Cable UTP categoría 3.",
      "Cable UTP categoría 5.",
      "Cable STP categoría 5.",
      "Fibra óptica multimodo.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 996,
    title:
      "Si se ha enviado la trama 100100001 al cable que une dos ordenadores y el polinomio generador empleado en emisor y receptor es x3+x2+1.  El CRC será:",
    choices: ["000", "001", "100", "110"],
    solution: "",
    explanation: "",
  },
  {
    id: 997,
    title:
      "Con los datos que se muestran en la siguiente gráfica se puede deducir que se trataría de  una modulación ...",
    choices: ["2-PSK.", "3-PSK.", "4-PSK.", "16-PSK."],
    solution: "",
    explanation: "",
  },
  {
    id: 998,
    title: "De las redes WIFI del tipo 802.11g, es falso que:",
    choices: [
      "Emplea el método de modulación de la 802.11a.",
      "Opera en la banda de 2.4Ghz al igual que la 802.11 b.",
      "Emplea códigos de encriptación WEP de 64bitsencriptar las comunicaciones.",
      "Permite alcanzar velocidades máximas de 54Mbps.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 999,
    title:
      "De un cable de par trenzado del tipo STP que cumple el estándar EIA-568-A, es ciertoque:",
    choices: [
      "Es más sensible a procesos de atenuación en la señal que un UTP de categoría 3.",
      "Si es de categoría 5 soporta velocidades de transmisión entorno a losindependientemente de la distancia que haya entre dispositivos.",
      "La velocidad de transmisión que soporta es independiente del paso de trenzado.",
      "Ninguna de las anteriores.100Mbps",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1000,
    title:
      "Se está aplicando el algoritmo de Dijkstra para generar el camino de mínimo coste ypoder emplear ese criterio para un algoritmo de encaminamiento. Si se está evaluando laiteración i=3 con T={1,2,3}. Se puede afirmar que: 4",
    choices: [
      "Sólo el coste L(3) ha variado con respecto a la iteración anterior",
      "Sólo el coste L(5) ha variado con respecto a la iteración anterior",
      "Sólo el coste L(6) ha variado con respecto a la iteración anterior",
      "Ninguna de las anteriores.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1001,
    title:
      "Dado el esquema de nodos de red de la figura,¿Cuántos paquetes habrán llegado al nodo6 al finalizar el segundo salto, si se aplica la técnica de encaminamiento por inundaciónsiendo el nodo 1 quien inicia el encaminamiento?",
    choices: ["1 paquete.", "2 paquetes.", "3 paquetes.", "4 paquetes."],
    solution: "",
    explanation: "",
  },
  {
    id: 1002,
    title:
      "Cuestiones del test 1. Indicar cual de las siguientes características NO se corresponde con una red de área local:",
    choices: [
      "Es habitual la utilización de tecnología punto a punto.",
      "Ofrecen al usuario altas velocidades de transmisión en comparación con las redes de área extendida.",
      "Interconecta equipos cercanos geográficamente.",
      "La red Token Ring (IEEE 802.5) se trata de una red de área local.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1003,
    title:
      "Cuál es el código de Hamming para la secuencia de datos ‘00’ si se emplea paridad impar?",
    choices: ["11111", "01010", "11111", "11010 "],
    solution: "",
    explanation: "",
  },
  {
    id: 1004,
    title:
      "Con respecto al modelo genérico de transferencia de información entre capas...",
    choices: [
      "La PCI es la información de control del interfaz.",
      "La IDU y el SAP forman la PDU.",
      "El SAP se corresponde con la cabecera de cada servicio.",
      "La IDU esta formada por la SDU y la ICI. ",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1005,
    title: "En relación al modelo OSI, se puede afirmar que:",
    choices: [
      "Establecer y liberar conexiones extremo-extremo es propio del nivel de sesión.",
      "La capa de aplicación es la penúltima capa del modelo OSI.",
      "El reensamblado se realiza a nivel de transporte. ",
      "La criptografía y compresión de datos es típica del nivel de enlace.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1006,
    title:
      "Cuál será el periodo de muestreo de una señal analógica que se ha digitalizado a una velocidad de 4200 bps, con 6 bits por muestra?",
    choices: ["0 Hz.", "7000 segundos.", "0.0014 segundos  ", "3500 Hz."],
    solution: "",
    explanation: "",
  },
  {
    id: 1007,
    title:
      "Con respecto a las técnicas de modulación de analógico a digital...",
    choices: [
      "PCM diferencial requiere un ancho de banda menor que DM.",
      "DM codifica la información analógica muestreada, en cada instante de muestreo, con un único bit. ",
      "El ruido de cuantización ocurre cuando la señal varía demasiado rápido.",
      "PCM es la técnica que menor ancho de banda requiere.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1008,
    title:
      "En relación a los métodos de conmutación entre equipos de la red, es cierto que:",
    choices: [
      "La conmutación de paquetes fue diseñada para tráfico de datos. ",
      "La conmutación de circuitos es la mejor opción para tráfico de datos.",
      "En un circuito virtual, el fallo de un nodo intermedio del camino no afecta a la comunicación.",
      "En la opción de datagramas, se garantiza que los paquetes lleguen ordenados al destino.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1009,
    title:
      "Indicar cual de las siguientes características de los protocolos de encaminamiento basados en vector de distancia y basados en estado del enlace es cierta:",
    choices: [
      "En los protocolos basados en estado del enlace para crear las tablas de encaminamiento es necesario conocer previamente la topología de la red.",
      "En los protocolos basados en vector de distancia cada nodo calcula independientemente las rutas, es decir, sin necesidad de conocer las rutas calculadas por el resto de nodos.",
      "OSPF es un ejemplo de protocolo basado en vector de distancias.",
      "RIP es un ejemplo de protocolo basado en estado del enlace. .",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1010,
    title:
      "Considerando a la relación entre el tiempo de propagación y el tiempo de transmisión y que este último tiempo vale 1 segundo, indicar cual de las siguientes afirmaciones relativas a la eficiencia del protocolo de ventana deslizante es cierta:",
    choices: [
      "La eficiencia no depende del tiempo de transmisión.",
      "Si el tamaño de la ventana es ≥ 2a+1 la eficiencia es",
      "Si el tamaño de la ventana es a la eficiencia es",
      "Para un tamaño de ventana menor que a la eficiencia es 1.",
    ],
    solution: "",
    explanation: "",
  },
  {
    id: 1011,
    title:
      "Si una conexión ADSL emplea encapsulamiento PPPoE entre PC del cliente y ‘router’ del proveedor de servicios de internet (ISP) para enviar un paquete TCP, entonces la pila de protocolos que emplean los interfaces del modem ADSL, I1: Interfaz LAN‐par trenzado e I2: Interfaz ADSL‐cable telefónico, son:",
    choices: [
      "Ethernet+IP+TCP (I1) y ATM+AAL5+LLC+PPP (I2)",
      "Ethernet+IP+TCP (I1) y Ethernet+IP+TCP (I2)",
      "Ethernet+PPPoE+PPP+IP+TCP (I1) y Ethernet+PPPoE+PPP+IP+TCP (I2)",
      "Ethernet+PPPoE+PPP+IP+TCP (I1) y ATM+AAL5+LLC+Ethernet+PPPoE+PPP+IP+TCP (I2)",
    ],
    solution: "",
    explanation: "",
  },
];

export default questionsData;
