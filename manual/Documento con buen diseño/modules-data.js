// Contenido del curso — reorganizado desde la Guía de Respuesta Civil Autogestionada (Yaracuy)
// Tono: práctico e imperativo, con referencias a la evidencia.

var MODULES = [
  {
    id: "m1", num: "01", title: "Por qué tú importas",
    sub: "Los vecinos son la primera fuerza de respuesta",
    lessons: [
      { title: "Los primeros en llegar", blocks: [
        { t: "p", text: "Tras un desastre, los primeros en la escena casi nunca son los bomberos ni Protección Civil. Son los vecinos: tú, tu familia, la gente de tu calle." },
        { t: "quote", text: "Los ciudadanos comunes son usualmente los primeros en la escena de una emergencia o desastre, y permanecen mucho después de que los servicios oficiales han cesado.", src: "Whittaker, McLennan & Handmer (2015)" },
        { t: "key", text: "Eres la primera fuerza de respuesta. Organízate: no esperes permiso para ayudar." }
      ]},
      { title: "México 1985: la prueba", blocks: [
        { t: "p", text: "El 19 de septiembre de 1985 un terremoto de magnitud 8.1 golpeó Ciudad de México. El presidente tardó 36 horas en dirigirse a la nación. La población no esperó." },
        { t: "list", items: [
          "Brigadas de rescate como los «Topos» surgieron de la nada",
          "Estudiantes de medicina e ingeniería reforzaron las cuadrillas",
          "Cocinas populares y comités vecinales sostuvieron a los barrios",
          "Cerca de 4.000 personas fueron rescatadas por brigadas ciudadanas"
        ]},
        { t: "key", text: "La autoorganización masiva funciona incluso sin el Estado — o a pesar de él." }
      ]},
      { title: "No eres una molestia", blocks: [
        { t: "p", text: "Durante décadas, los sistemas oficiales vieron al voluntario espontáneo como un estorbo o un riesgo legal. La evidencia dice lo contrario: los grupos emergentes aumentan la capacidad de las organizaciones formales para responder a demandas cambiantes (Twigg & Mosel, 2017)." },
        { t: "key", text: "Tu trabajo suma capacidad. Exige ser tratado como recurso, no como problema." }
      ]},
      { title: "Entiende la convergencia", blocks: [
        { t: "p", text: "Después de un desastre, todo converge hacia la zona afectada (Fritz & Mathewson, 1957):" },
        { t: "list", items: [
          "Convergencia personal: gente que llega a la zona",
          "Convergencia informacional: mensajes que entran y salen",
          "Convergencia material: donaciones y suministros"
        ]},
        { t: "p", text: "La convergencia temprana salva vidas. Pero las donaciones no solicitadas saturan las vías y desvían recursos de los sobrevivientes." },
        { t: "key", text: "Comunica públicamente qué se necesita y qué no. Ayuda dirigida vale más que ayuda masiva." }
      ]}
    ]
  },
  {
    id: "m2", num: "02", title: "Piensa en sistemas",
    sub: "El desastre como sistema adaptativo complejo",
    lessons: [
      { title: "El desastre no es lineal", blocks: [
        { t: "p", text: "Un desastre no avanza por etapas ordenadas: tiene efectos en cascada, comportamientos que nadie planificó y necesidades que cambian de hora en hora. Por eso los modelos rígidos de «comando y control» fallan." },
        { t: "key", text: "No intentes controlar el caos. Adáptate a él con estructura mínima y decisiones locales." }
      ]},
      { title: "Ocho propiedades del sistema", blocks: [
        { t: "p", text: "El marco CADEM (Miller, Le Dé & Hore, 2025) describe los desastres como sistemas adaptativos complejos con ocho propiedades:" },
        { t: "list", items: [
          "Autoorganización",
          "Bucles de retroalimentación",
          "Diversidad — incluye los saberes locales",
          "Propiedades emergentes",
          "Adaptación",
          "No linealidad",
          "Tiempo",
          "Estresores externos"
        ]},
        { t: "key", text: "Reconocer estas propiedades te permite anticipar en lugar de solo reaccionar." }
      ]},
      { title: "CADEM en tres movimientos", blocks: [
        { t: "list", items: [
          "Reemplaza el comando de arriba-abajo por coordinación adaptativa y descentralizada",
          "Cambia la planificación estática por resolución de problemas en red y en tiempo real",
          "Prioriza diversidad y redundancia para evitar puntos únicos de falla"
        ]},
        { t: "p", text: "Ojo: CADEM no propone descentralización pura. Cierta coordinación central sigue siendo esencial — sin sofocar la decisión local." },
        { t: "key", text: "Decide localmente. Coordina en red." }
      ]},
      { title: "Aprende mientras actúas", blocks: [
        { t: "p", text: "Los sistemas complejos exigen bucles de retroalimentación: revisa, ajusta, repite." },
        { t: "list", items: [
          "Haz revisiones post-acción (AAR) breves al final de cada jornada",
          "Usa micro-chequeos: ¿qué cambió hoy?, ¿qué ya no sirve?",
          "Ajusta las asignaciones según lo aprendido"
        ]},
        { t: "key", text: "Lo que funcionaba ayer puede estorbar hoy. Revisa a diario." }
      ]}
    ]
  },
  {
    id: "m3", num: "03", title: "Organiza la red",
    sub: "Nodo ligero, autonomía con estructura",
    lessons: [
      { title: "Crea un nodo ligero", blocks: [
        { t: "p", text: "En Kobe (1995), la Nishinomiya Volunteer Network coordinó a voluntarios afiliados y espontáneos sin sofocar su iniciativa. No era una jerarquía: era un punto de conexión." },
        { t: "list", items: [
          "Conecta brigadas entre sí y con actores formales: Protección Civil, Cruz Roja, iglesias, universidades",
          "No absorbas a los grupos: enlázalos",
          "Designa «puentes»: personas que crucen fronteras entre grupos"
        ]},
        { t: "key", text: "Coordina sin mandar. El nodo conecta; no controla." }
      ]},
      { title: "Autoorganización estructurada", blocks: [
        { t: "quote", text: "La autoorganización estructurada — encontrar una relación complementaria adecuada entre autoorganización y coordinación — es crucial para la eficiencia del trabajo de los voluntarios, y para su satisfacción, bienestar y compromiso.", src: "Simsa et al. (2019)" },
        { t: "list", items: [
          "Da a cada brigada autonomía operativa",
          "Provee metas claras de corto plazo",
          "Define roles y una línea de coordinación acordada"
        ]},
        { t: "key", text: "Autonomía sí — pero con metas, roles y una línea de coordinación." }
      ]},
      { title: "Mapea tu red de actores", blocks: [
        { t: "p", text: "Antes o durante la crisis, identifica quién es quién. Un mapa en papel es suficiente para empezar." },
        { t: "list", items: [
          "Lista actores tradicionales y emergentes",
          "Crea perfiles: qué sabe, qué tiene y qué necesita cada uno",
          "Marca los enlaces que conectan grupos distintos"
        ]},
        { t: "key", text: "«Quién sabe qué, quién tiene qué, quién necesita qué» — esa es tu base de datos." }
      ]},
      { title: "Centros por función", blocks: [
        { t: "p", text: "A medida que la necesidad evoluciona, organiza centros por función — logística, salud, bienestar — en vez de concentrar todo en un solo lugar." },
        { t: "key", text: "Reparte funciones. Un único centro es un punto único de falla." }
      ]}
    ]
  },
  {
    id: "m4", num: "04", title: "Regístrate y opera seguro",
    sub: "La regla de oro y la seguridad del voluntario",
    lessons: [
      { title: "La regla de oro", blocks: [
        { t: "p", text: "Todo el que quiera ayudar entra primero al proceso de gestión de voluntarios. Sin excepciones. Esto evita instrucciones obsoletas, voluntarios sin charla de seguridad y trabajo sin registro." },
        { t: "list", items: [
          "Registra nombre, contacto, habilidades y disponibilidad",
          "Entrega identificación o chaleco",
          "Asigna tareas solo a personas registradas"
        ]},
        { t: "key", text: "Sin registro no hay asignación." }
      ]},
      { title: "La charla de seguridad", blocks: [
        { t: "p", text: "Antes de cada despliegue, imparte (o exige) una charla de seguridad. Los peligros hieren a voluntarios desprevenidos:" },
        { t: "list", items: [
          "Réplicas y estructuras inestables",
          "Líneas eléctricas caídas",
          "Agua contaminada",
          "Estrés por calor y deshidratación"
        ]},
        { t: "key", text: "Tu seguridad es innegociable. Nunca aceptes tareas fuera de tu entrenamiento." }
      ]},
      { title: "Conoce tus límites", blocks: [
        { t: "p", text: "El Student Volunteer Army (Christchurch, 2010–11) movilizó miles de voluntarios con «una pala o un carrito de compras» y retiró más de 65.000 toneladas de lodo. Pero no actuó en el incendio de Port Hills: requería entrenamiento especializado." },
        { t: "list", items: [
          "Tareas de baja calificación y bajo riesgo: sí, masivamente",
          "Rescate estructural, atención médica, materiales peligrosos: solo personal certificado"
        ]},
        { t: "key", text: "Saber decir «esto no me toca» también salva vidas." }
      ]},
      { title: "Documenta todo", blocks: [
        { t: "p", text: "No es burocracia: la documentación sostiene la seguridad, la rendición de cuentas, los reembolsos y la revisión posterior." },
        { t: "list", items: [
          "Horas y tareas de cada voluntario",
          "Ubicaciones de trabajo",
          "Lesiones y derivaciones"
        ]},
        { t: "key", text: "Documenta desde el día uno. Lo que no se registra, no existe." }
      ]}
    ]
  },
  {
    id: "m5", num: "05", title: "Información que salva",
    sub: "Mapeo ciudadano, verificación y redundancia",
    lessons: [
      { title: "Fecha y hora cada dato", blocks: [
        { t: "p", text: "Tras el sismo de México 2017, #Verificado19S procesó más de 20.000 datos, unificó ocho mapas y lanzó diez formularios en diez días — con más de 500 personas en calle y oficinas. Su aprendizaje crítico: las necesidades informativas cambian día con día." },
        { t: "key", text: "Lo que urgía hace 8 horas ya cambió. Fecha y hora cada pieza de información." }
      ]},
      { title: "Monitores y nodos", blocks: [
        { t: "p", text: "El modelo #Verificado19S: monitores en terreno que levantan datos, y «nodos» en computadoras que consolidan y verifican." },
        { t: "list", items: [
          "Empieza con herramientas que ya dominas: Google Maps, WhatsApp, formularios",
          "Define roles y responsabilidades antes de asignar tareas",
          "Acuerda la línea de coordinación antes del evento, si es posible"
        ]},
        { t: "key", text: "Herramientas simples + roles claros valen más que software sofisticado sin estructura." }
      ]},
      { title: "Verifica antes de difundir", blocks: [
        { t: "p", text: "En 2017, WhatsApp fue clave — y también aceleró rumores. La desinformación cuesta vidas y recursos." },
        { t: "list", items: [
          "Verifica cada dato antes de difundirlo",
          "No dependas de una sola app: diseña redundancia de canales",
          "Corrige públicamente los rumores"
        ]},
        { t: "key", text: "Redundancia y verificación son principios de sistema, no lujos." }
      ]},
      { title: "Conecta con quien decide", blocks: [
        { t: "p", text: "En Haití 2010, la plataforma Ushahidi canalizó decenas de miles de mensajes SMS de la población (código corto 4636). Pero sin un punto de contacto formal, los respondedores la vieron como «una mina de oro de datos, demasiado no estructurada» — y la información abrumó en vez de ayudar." },
        { t: "key", text: "Nombra un punto de contacto entre tu mapeo y quienes toman decisiones. La información sin interfaz se ignora." }
      ]}
    ]
  },
  {
    id: "m6", num: "06", title: "Cuida y no excluyas",
    sub: "Fatiga por compasión y salvaguardas de equidad",
    lessons: [
      { title: "Cuida a los cuidadores", blocks: [
        { t: "p", text: "La fatiga por compasión (Figley, 1995) combina agotamiento y estrés traumático secundario. En Ecuador 2016, la Asociación de Chefs rotó semanalmente a sus 60 cocineros voluntarios para sostener 2.000 comidas diarias sin quemar a nadie." },
        { t: "list", items: [
          "Rota los equipos e impón descansos",
          "Cuida los cuatro pilares: sueño, alimentación, actividad física, relajación",
          "Celebra los logros del equipo"
        ]},
        { t: "key", text: "Rotar no es debilidad: es lo que mantiene la operación viva." }
      ]},
      { title: "Señales de alerta", blocks: [
        { t: "p", text: "Vigila estas señales en ti y en otros — son más frecuentes en voluntarios de largo plazo:" },
        { t: "list", items: [
          "Desapego y embotamiento emocional",
          "Sensación de agobio constante",
          "Agotamiento que no cede con descanso"
        ]},
        { t: "key", text: "Detectar la fatiga a tiempo es una tarea de seguridad, igual que el casco." }
      ]},
      { title: "Las redes también excluyen", blocks: [
        { t: "p", text: "El capital social tiene dos caras. En Haití 2010, quienes tenían mejores conexiones accedieron a mejores refugios. En Tamil Nadu 2004, los dalits fueron excluidos de campamentos de socorro — por sus propias comunidades, no por el gobierno." },
        { t: "key", text: "La ayuda comunitaria puede reproducir las jerarquías existentes. Vigílalo activamente." }
      ]},
      { title: "Busca a los desconectados", blocks: [
        { t: "p", text: "No dejes que la ayuda fluya solo por las redes de confianza existentes." },
        { t: "list", items: [
          "Mapea proactivamente: adultos mayores solos, personas con discapacidad, hogares encabezados por mujeres, migrantes, los más pobres",
          "Aplica imparcialidad y no discriminación (Código de Conducta, estándares Esfera)",
          "Prioriza a quien no tiene quién lo nombre"
        ]},
        { t: "key", text: "Si no los buscas, no aparecen. La equidad se diseña." }
      ]}
    ]
  },
  {
    id: "m7", num: "07", title: "Sostén el esfuerzo",
    sub: "Fases, largo plazo y transición",
    lessons: [
      { title: "El tiempo del desastre", blocks: [
        { t: "p", text: "Kates (1977) describió tres períodos con curvas distintas: emergencia (horas a días), restauración (semanas a meses) y reconstrucción (meses a años)." },
        { t: "quote", text: "Un desempeño excepcional en cualquiera de los períodos mayores de recuperación puede reducir a la mitad el tiempo requerido para esa actividad.", src: "Kates (1977)" },
        { t: "key", text: "Lo que hagas bien hoy acorta los años que vienen." }
      ]},
      { title: "El pico engañoso", blocks: [
        { t: "p", text: "La ayuda alcanza su pico temprano — sobran voluntarios y donaciones — y decae justo cuando las necesidades de recuperación persisten y la atención mediática desaparece (Twigg & Mosel, 2017)." },
        { t: "key", text: "Planifica para el mes seis, no solo para la semana uno." }
      ]},
      { title: "Si el Estado llega", blocks: [
        { t: "p", text: "Si aparece coordinación estatal robusta, tu nodo no debe disolverse: negocia tu «autoridad para operar» (Nissen et al., 2022), como hizo el Student Volunteer Army ante las agencias de Christchurch." },
        { t: "key", text: "Intégrate sin disolverte. Tu legitimidad se negocia, no se regala." }
      ]},
      { title: "De brigada a institución", blocks: [
        { t: "p", text: "En Kobe, en Christchurch y en Chile, grupos emergentes se transformaron en organizaciones duraderas. En Chile 2010, el terremoto significó «el despertar de muchos grupos emergentes» tras décadas de organización suprimida." },
        { t: "list", items: [
          "Decidan en comunidad si la brigada debe volverse permanente",
          "Conserva la documentación: es tu historia y tu credencial",
          "Transfiere lo aprendido a la próxima generación de voluntarios"
        ]},
        { t: "key", text: "El desastre termina; la red puede quedarse." }
      ]}
    ]
  }
];

window.TF_MODULES = MODULES;
