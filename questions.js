var questionBank = [
  // --- CATEGORÍAS Y ÁMBITO (PÁG 1) ---
  {
    "question": "¿A qué frecuencia nominal deben funcionar las líneas de alta tensión según el reglamento?",
    "answers": ["60 Hz", "50 Hz", "25 Hz", "100 Hz"],
    "correct": 1,
    "explanation": "La frecuencia establecida es de 50 Hz[cite: 278]."
  },
  {
    "question": "Una línea con tensión nominal de 45 kV se clasifica como de:",
    "answers": ["1ª Categoría", "2ª Categoría", "3ª Categoría", "Categoría Especial"],
    "correct": 1,
    "explanation": "La 2ª categoría comprende tensiones entre 30 kV y 66 kV[cite: 274]."
  },
  {
    "question": "¿Cuál es el límite superior de tensión para una línea de 3ª categoría?",
    "answers": ["15 kV", "20 kV", "30 kV", "66 kV"],
    "correct": 2,
    "explanation": "La 3ª categoría abarca desde 1 kV hasta los 30 kV inclusive[cite: 274]."
  },
  {
    "question": "¿Qué condición adicional sitúa a una línea en la 'Categoría Especial' además de su tensión?",
    "answers": ["Cruzar una autopista", "Estar situada en islas", "Tener más de 50 km", "Ser propiedad privada"],
    "correct": 1,
    "explanation": "Las líneas en islas se consideran de Categoría Especial según el documento[cite: 274]."
  },

  // --- EMPRESAS Y MANTENIMIENTO (PÁG 3-9) ---
  {
    "question": "¿Cada cuánto tiempo debe realizarse obligatoriamente la verificación periódica de una línea?",
    "answers": ["Cada año", "Cada 2 años", "Al menos cada 3 años", "Cada 5 años"],
    "correct": 2,
    "explanation": "El reglamento exige verificaciones e inspecciones periódicas al menos cada 3 años[cite: 327, 344]."
  },
  {
    "question": "¿Qué categoría de empresa instaladora (LAT) no tiene límite de tensión para actuar?",
    "answers": ["LAT1", "LAT2", "LAT3", "LAT Especial"],
    "correct": 1,
    "explanation": "La categoría LAT2 es para líneas aéreas y subterráneas sin límite de tensión[cite: 370]."
  },
  {
    "question": "Para líneas de propiedad ajena a la empresa de transporte, ¿a partir de qué tensión es obligatoria la inspección inicial por OCA?",
    "answers": ["U > 1 kV", "U > 20 kV", "U > 30 kV", "U > 66 kV"],
    "correct": 2,
    "explanation": "Si la tensión es superior a 30 kV, se requiere inspección inicial por un Organismo de Control Autorizado[cite: 336, 391]."
  },
  {
    "question": "¿Cuál es la cuantía mínima del seguro de responsabilidad civil para una empresa instaladora?",
    "answers": ["500.000 €", "1.000.000 €", "2.000.000 €", "1.500.000 €"],
    "correct": 1,
    "explanation": "Deben tener suscrito un seguro por una cuantía mínima de un millón de euros[cite: 366]."
  },

  // --- MATERIALES Y CONDUCTORES (PÁG 15-17) ---
  {
    "question": "¿Cuál es la sección mínima permitida para un conductor de cobre en líneas de AT?",
    "answers": ["6 mm²", "10 mm²", "16 mm²", "25 mm²"],
    "correct": 1,
    "explanation": "La sección mínima para el cobre es de 10 mm²[cite: 154]."
  },
  {
    "question": "¿Qué carga de rotura mínima deben tener los materiales conductores que no sean cobre o acero?",
    "answers": ["> 200 daN", "> 350 daN", "> 500 daN", "> 100 daN"],
    "correct": 1,
    "explanation": "Para otros materiales, la carga de rotura debe ser superior a 350 daN[cite: 155]."
  },
  {
    "question": "¿Cuál es la temperatura máxima de servicio bajo carga normal para los conductores?",
    "answers": ["50ºC", "85ºC", "100ºC", "200ºC"],
    "correct": 1,
    "explanation": "La temperatura máxima bajo carga normal debe ser inferior a 85ºC[cite: 160]."
  },
  {
    "question": "En caso de cortocircuito, ¿qué temperatura máxima puede alcanzar un conductor de acero?",
    "answers": ["100ºC", "200ºC", "300ºC", "400ºC"],
    "correct": 2,
    "explanation": "El acero puede alcanzar hasta 300ºC bajo cortocircuito, frente a los 200ºC del aluminio o cobre[cite: 521]."
  },
  {
    "question": "¿Qué porcentaje de la carga de rotura (σr) debe soportar como mínimo un empalme?",
    "answers": ["75%", "90%", "95%", "100%"],
    "correct": 2,
    "explanation": "El empalme debe soportar el 95% de la carga de rotura[cite: 532]."
  },
  {
    "question": "¿Qué técnica de unión está expresamente prohibida en los conductores de la línea?",
    "answers": ["Grapas de presión", "Soldadura", "Manguitos de compresión", "Retorneado"],
    "correct": 1,
    "explanation": "Está prohibida la soldadura para empalmes y conexiones[cite: 172]."
  },

  // --- SEGURIDAD Y HERRAJES (PÁG 15-20) ---
  {
    "question": "¿Qué carga concentrada deben ser capaces de resistir los peldaños de un apoyo?",
    "answers": ["0,5 kN", "1,0 kN", "1,5 kN", "2,0 kN"],
    "correct": 1,
    "explanation": "Los peldaños deben calcularse para una carga característica de 1,0 kN[cite: 150]."
  },
  {
    "question": "¿Cuál es la vida útil prevista (periodo de funcionamiento) de una línea aérea según el documento?",
    "answers": ["25 años", "30 años", "40 años", "50 años"],
    "correct": 2,
    "explanation": "Se estima una vida útil de aproximadamente 40 años[cite: 509]."
  },
  {
    "question": "¿Para qué sirve un dispositivo 'descargador' en una cadena de aisladores?",
    "answers": ["Para medir la tensión", "Para alejar el arco eléctrico de la cadena y protegerla", "Para sujetar el cable", "Para evitar que las aves se posen"],
    "correct": 1,
    "explanation": "Su función es que las raíces del arco se sitúen sobre él, alejándose de la cadena[cite: 188]."
  },

  // --- AISLADORES (PÁG 21-25) ---
  {
    "question": "¿Cuál es una ventaja principal de los aisladores de vidrio frente a los de porcelana?",
    "answers": ["Son más elásticos", "Permiten una inspección visual directa (transparencia)", "Soportan mejor los golpes", "Son más pesados"],
    "correct": 1,
    "explanation": "Al ser transparentes, permiten un mejor control visual[cite: 220]."
  },
  {
    "question": "¿Qué material aislante destaca por su excelente comportamiento en áreas de alta contaminación?",
    "answers": ["Vidrio", "Porcelana", "Compuestos poliméricos (silicona)", "Madera"],
    "correct": 2,
    "explanation": "Los compuestos poliméricos son hidrofóbicos y rinden mejor en zonas contaminadas[cite: 222]."
  },
  {
    "question": "¿En cuánto reducen su línea de fuga los aisladores poliméricos frente a los de vidrio/cerámica?",
    "answers": ["En un 10%", "En un 30%", "En un 50%", "No la reducen"],
    "correct": 1,
    "explanation": "Reducen su línea de fuga un 30% respecto a los tradicionales[cite: 239]."
  },

  // --- AVIFAUNA (PÁG 27-28) ---
  {
    "question": "¿Qué define a un 'Área prioritaria' según la normativa de aves?",
    "answers": ["Donde hay más de 100 nidos", "La presencia de un ave protegida durante 3 años consecutivos", "Cualquier parque natural", "Zonas donde ha habido un accidente"],
    "correct": 1,
    "explanation": "Se define por la presencia de algún ave del C.E.A. en un periodo de 3 años seguidos[cite: 251]."
  },
  {
    "question": "¿Dónde se recomienda instalar preferentemente los dispositivos salvapájaros?",
    "answers": ["En el cable de fase central", "En el cable de tierra", "En las crucetas", "En la base del apoyo"],
    "correct": 1,
    "explanation": "Se deben colocar a poder ser en el cable de tierra[cite: 254]."
  },
  {
    "question": "¿Cuándo está prohibido realizar trabajos de mantenimiento ordinario según la normativa ambiental?",
    "answers": ["Solo de noche", "Durante la época de nidificación y crianza", "En días de lluvia", "Nunca está prohibido"],
    "correct": 1,
    "explanation": "Está prohibido durante la época de nidificación y reproducción en tendidos con nidos[cite: 260]."
  },
  {
    "question": "¿Cuál es el objetivo principal del reglamento de líneas de AT?",
    "answers": [
      "Incrementar la potencia instalada",
      "Proteger a personas y bienes",
      "Reducir el consumo energético",
      "Garantizar la competitividad de la red"
    ],
    "correct": 1,
    "explanation": "El reglamento establece como objetivo proteger a personas y bienes, regular suministros, normalizar material eléctrico y facilitar adaptación a futuros aumentos de carga."
  },
  {
    "question": "¿Cuál de las siguientes tensiones corresponde a la 3ª categoría de líneas?",
    "answers": [
      "1 kV < Un < 30 kV",
      "30 kV < Un < 66 kV",
      "66 kV < Un < 220 kV",
      "Un ≥ 220 kV"
    ],
    "correct": 1,
    "explanation": "La 3ª categoría abarca líneas con tensión nominal entre 30 kV y 66 kV, según el reglamento."
  },
  {
    "question": "¿Con qué frecuencia deben realizarse las verificaciones periódicas de las líneas?",
    "answers": [
      "Cada 1 año",
      "Cada 2 años",
      "Al menos cada 3 años",
      "Cada 5 años"
    ],
    "correct": 2,
    "explanation": "El reglamento indica que las verificaciones periódicas se realizan al menos cada 3 años, pudiendo sustituirse por planes concertados que garanticen el mantenimiento."
  },
  {
    "question": "¿Qué requisito mecánico mínimo deben cumplir los conductores de acero en líneas aéreas?",
    "answers": [
      "Carga de rotura σr > 250 daN",
      "Carga de rotura σr > 300 daN",
      "Carga de rotura σr > 350 daN",
      "Carga de rotura σr > 400 daN"
    ],
    "correct": 2,
    "explanation": "Para conductores de acero, la carga de rotura mínima σr debe ser superior a 350 daN según las especificaciones del reglamento."
  },
  {
    "question": "¿Qué tipo de aislador se utiliza más comúnmente en líneas aéreas de AT?",
    "answers": [
      "Aislador rígido de vástago",
      "Aislador de bastón",
      "Aislador de cadena (caperuza-vástago)",
      "Aislador compuesto tipo bastón"
    ],
    "correct": 2,
    "explanation": "El aislador más utilizado es el de cadena (caperuza-vástago), equilibrando la tensión mecánica y facilitando el mantenimiento."
  },
  {
    "question": "Para conductores de aluminio, ¿cuál es la temperatura máxima de servicio bajo carga normal?",
    "answers": [
      "60ºC",
      "85ºC",
      "100ºC",
      "120ºC"
    ],
    "correct": 1,
    "explanation": "El reglamento establece que la Tª máxima de servicio bajo carga normal para conductores de aluminio debe ser inferior a 85ºC."
  },
  {
    "question": "¿Qué documento es obligatorio antes de la puesta en servicio de líneas no propiedad de empresas de transporte?",
    "answers": [
      "Certificado de instalación",
      "Plan de mantenimiento preventivo",
      "Informe de impacto ambiental",
      "Memoria de seguridad"
    ],
    "correct": 0,
    "explanation": "La puesta en servicio requiere presentar el certificado de instalación, junto con proyecto y certificado de dirección facultativa."
  },
  {
    "question": "¿Cuál es la sección mínima del cable de tierra si Un > 60 kV?",
    "answers": [
      "22 mm²",
      "35 mm²",
      "50 mm²",
      "70 mm²"
    ],
    "correct": 2,
    "explanation": "Para tensiones superiores a 60 kV, la sección mínima del cable de tierra debe ser de 50 mm²."
  },
  {
    "question": "¿Qué inspección se exige para líneas con U > 30 kV antes de su puesta en servicio?",
    "answers": [
      "Inspección visual por el técnico competente",
      "Verificación inicial por la O.C.A.",
      "Medición de resistencia de puesta a tierra",
      "Ensayo de capacidad de cortocircuito"
    ],
    "correct": 1,
    "explanation": "Las líneas con tensión superior a 30 kV requieren inspección inicial por la O.C.A. antes de la puesta en servicio."
  },
  {
    "question": "¿Qué característica debe tener un peldaño de un apoyo diseñado para seguridad de personas?",
    "answers": [
      "Carga característica de 0,5 kN",
      "Carga característica de 1,0 kN",
      "Carga característica de 1,5 kN",
      "Carga característica de 2,0 kN"
    ],
    "correct": 1,
    "explanation": "Los peldaños de los apoyos deben calcularse para una carga concentrada característica de 1,0 kN según el reglamento de seguridad de personas."
  },
  {
    "question": "¿Qué frecuencia de operación se aplica a todas las líneas de AT según el reglamento?",
    "answers": ["45 Hz", "50 Hz", "60 Hz", "55 Hz"],
    "correct": 1,
    "explanation": "Todas las líneas de alta tensión reguladas operan a 50 Hz, como se indica en la sección de frecuencia."
  },
  {
    "question": "¿Qué entidad puede aceptar soluciones alternativas a las del reglamento si mantienen un nivel de seguridad equivalente?",
    "answers": ["Ministerio de Industria", "CCAA", "Empresa Instaladora", "O.C.A."],
    "correct": 1,
    "explanation": "La Comunidad Autónoma puede aceptar soluciones alternativas, siempre que impliquen un nivel de seguridad equivalente."
  },
  {
    "question": "¿Qué norma UNE es de obligado cumplimiento para el material eléctrico de las líneas de AT?",
    "answers": ["UNE-EN 50160", "UNE-EN 60664", "UNE-ITC-LAT 02", "UNE-EN 60099"],
    "correct": 2,
    "explanation": "La ITC-LAT 02 establece las normas UNE obligatorias para equipos y materiales en líneas de AT."
  },
  {
    "question": "En caso de accidente con víctimas o daños, ¿en qué plazo debe remitirse el informe a la Administración?",
    "answers": ["1 mes", "2 meses", "3 meses", "6 meses"],
    "correct": 2,
    "explanation": "El propietario debe redactar un informe y enviarlo al órgano competente en un máximo de 3 meses."
  },
  {
    "question": "¿Qué información debe incluir la documentación de los equipos y materiales de una línea?",
    "answers": [
      "Solo la marca y modelo",
      "Marca, modelo, tensión e intensidad",
      "Tensión y corriente nominal",
      "Fabricante y tipo de conductor"
    ],
    "correct": 1,
    "explanation": "Se deben incluir fabricante, marca, modelo, tensión e intensidad para garantizar trazabilidad y cumplimiento de la ITC-LAT 02."
  },
  {
    "question": "¿Quién suscribe el proyecto de ejecución de las líneas de AT?",
    "answers": [
      "El director de obra",
      "El técnico titulado competente (T.C.)",
      "La empresa instaladora",
      "La O.C.A."
    ],
    "correct": 1,
    "explanation": "El proyecto de las líneas debe ser suscrito por un técnico titulado competente, asegurando cumplimiento del reglamento."
  },
  {
    "question": "¿Qué se entiende por proyecto tipo en instalaciones de AT?",
    "answers": [
      "Proyecto genérico sin datos específicos",
      "Proyecto aprobado por CCAA o Ministerio con condiciones técnicas generales",
      "Proyecto individualizado para cada línea",
      "Proyecto experimental"
    ],
    "correct": 1,
    "explanation": "Los proyectos tipo son aprobados por CCAA o Ministerio y contienen condiciones técnicas generales para homogeneidad y seguridad."
  },
  {
    "question": "¿Qué documento permite la puesta en servicio de una línea con U > 30 kV?",
    "answers": [
      "Certificado de instalación",
      "Certificado de inspección inicial por O.C.A.",
      "Proyecto de ejecución",
      "Memoria de seguridad"
    ],
    "correct": 1,
    "explanation": "Para tensiones mayores a 30 kV, la inspección inicial por O.C.A. es obligatoria antes de la puesta en servicio."
  },
  {
    "question": "¿Qué se entiende por empresa instaladora autorizada en AT?",
    "answers": [
      "Cualquier empresa eléctrica",
      "Persona física o jurídica que cumple con ITC-03 y declaración responsable",
      "Sólo empresas nacionales con título universitario",
      "Empresa que diseña proyectos tipo"
    ],
    "correct": 1,
    "explanation": "La empresa instaladora autorizada debe cumplir con ITC-03, presentar declaración responsable y contar con personal acreditado."
  },
  {
    "question": "Para líneas LAT1, ¿cuál es el límite de tensión máxima?",
    "answers": ["Un < 30 kV", "30 kV < Un < 66 kV", "Un < 220 kV", "Sin límite de tensión"],
    "correct": 0,
    "explanation": "LAT1 se aplica a líneas aéreas y subterráneas de Un < 30 kV."
  },
  {
    "question": "Para líneas LAT2, ¿qué restricción de tensión existe?",
    "answers": [
      "Un < 30 kV",
      "30 kV < Un < 66 kV",
      "Un < 220 kV",
      "Sin límite de tensión"
    ],
    "correct": 3,
    "explanation": "LAT2 se aplica a líneas aéreas y subterráneas sin límite de tensión."
  },
  {
    "question": "¿Cuál es la periodicidad mínima de inspección para líneas propiedad de empresas de transporte?",
    "answers": ["Anual", "Cada 2 años", "Cada 3 años", "Cada 5 años"],
    "correct": 2,
    "explanation": "La inspección periódica debe realizarse al menos cada 3 años, por O.C.A."
  },
  {
    "question": "¿Qué pruebas se realizan en líneas subterráneas antes de la puesta en servicio?",
    "answers": [
      "Medición de resistencia de puesta a tierra",
      "Ensayo de aislamiento principal y de cubierta",
      "Verificación visual de soportes",
      "Medición de tensión de contacto"
    ],
    "correct": 1,
    "explanation": "Se realizan ensayos de aislamiento principal y de cubierta en líneas subterráneas."
  },
  {
    "question": "¿Qué clasificación se asigna a una línea si presenta al menos un defecto muy grave?",
    "answers": ["Favorable", "Condicionada", "Negativa", "Leve"],
    "correct": 2,
    "explanation": "Una línea con al menos un defecto muy grave recibe calificación negativa y no puede ponerse en marcha si es nueva."
  },
  {
    "question": "Un defecto leve en la inspección de una línea implica:",
    "answers": [
      "Peligro inminente para personas",
      "Reducción de capacidad de utilización",
      "No supone peligro ni afecta al funcionamiento",
      "Debe corregirse antes de operar"
    ],
    "correct": 2,
    "explanation": "Defectos leves no representan peligro ni afectan significativamente al funcionamiento."
  },
  {
    "question": "¿Qué tipo de conductor bimetálico combina aluminio con acero galvanizado?",
    "answers": [
      "AL1/SAyz", "ALx/SAyz", "AL1/STyz", "ALx/STyz"
    ],
    "correct": 2,
    "explanation": "Los conductores bimetálicos reforzados con acero galvanizado se designan AL1/STyz según normativa."
  },
  {
    "question": "La temperatura máxima admisible de un conductor de cobre bajo cortocircuito es:",
    "answers": ["150ºC", "200ºC", "250ºC", "300ºC"],
    "correct": 1,
    "explanation": "La Tª máxima bajo cortocircuito para conductores de cobre, aluminio o aleación de aluminio es 200ºC."
  },
  {
    "question": "En un empalme, la soldadura está:",
    "answers": ["Permitida siempre", "Prohibida", "Opcional según proyecto", "Solo para conductores de cobre"],
    "correct": 1,
    "explanation": "El reglamento prohíbe la soldadura en empalmes para evitar aumento de resistencia y problemas electrolíticos."
  },
  {
    "question": "¿Cuál es la carga característica que deben resistir los herrajes que soporten el peso de una persona?",
    "answers": ["1,0 kN", "1,5 kN", "2,0 kN", "2,5 kN"],
    "correct": 1,
    "explanation": "Los herrajes sometidos al peso de una persona deben resistir una carga característica concentrada de 1,5 kN."
  },
  {
    "question": "¿Qué función tiene un descargador en una línea aérea de AT?",
    "answers": [
      "Evitar el efecto corona",
      "Aumentar la tensión mecánica del conductor",
      "Disminuir la resistencia eléctrica",
      "Sujetar los conductores al aislador"
    ],
    "correct": 0,
    "explanation": "Los descargadores reducen la intensidad de campo eléctrico y mejoran el comportamiento frente al efecto corona."
  },
  {
    "question": "¿Qué tipo de aislador se utiliza en instalaciones poliméricas compuestas?",
    "answers": ["Cadenas de suspensión", "Rígidos de vástago", "Aisladores tipo bastón", "Todos los anteriores"],
    "correct": 2,
    "explanation": "Los aisladores poliméricos compuestos suelen ser tipo bastón, con barra de fibra de vidrio y envolvente de silicona."
  },
  {
    "question": "En mantenimiento de líneas, ¿cuándo está prohibido trabajar en tendidos con nidos?",
    "answers": [
      "Durante todo el año", "Durante época de nidificación", "Solo en invierno", "Durante inspección inicial"
    ],
    "correct": 1,
    "explanation": "Se prohíbe trabajar durante la época de nidificación, reproducción y crianza en tendidos que soporten nidos."
  },
  {
    "question": "¿Cuál es la ventaja principal de los aisladores de vidrio respecto a los de porcelana?",
    "answers": [
      "Mayor resistencia mecánica", "Inspección visual fácil", "Menor fragilidad", "Mayor peso"
    ],
    "correct": 1,
    "explanation": "El vidrio permite inspección visual de la línea de fuga y defectos, ventaja sobre porcelana."
  },
  {
    "question": "¿Qué fenómeno afecta menos a los aisladores poliméricos compuestos que a los de porcelana o vidrio?",
    "answers": [
      "Efecto corona", "Contaminación ambiental", "Carga mecánica", "Temperatura"
    ],
    "correct": 1,
    "explanation": "Los aisladores compuestos reducen la línea de fuga un 30% y no se afectan por la humedad y contaminación como los de vidrio o porcelana."
  },
  {
    "question": "En protección de avifauna, ¿qué dispositivo se coloca para evitar que las aves se posen en las crucetas?",
    "answers": [
      "Salvapájaros", "Disuasor de posada", "Electrodo de tierra", "Aislador tipo bastón"
    ],
    "correct": 1,
    "explanation": "El disuasor de posada es un dispositivo externo colocado sobre las crucetas para evitar que las aves se posen."
  },
  {
    "question": "¿Qué tipo de líneas están obligadas a medidas contra electrocución de aves?",
    "answers": [
      "Líneas nuevas, ampliaciones o modificaciones", "Solo líneas nuevas", "Solo líneas existentes", "Líneas subterráneas"],
    "correct": 0,
    "explanation": "Todas las líneas nuevas, ampliaciones, modificaciones y existentes deben implementar medidas contra electrocución."
  },
  {
    "question": "La zona ZEPA se refiere a:",
    "answers": [
      "Zona de alta tensión prioritaria", "Zona Especial de Protección de Aves", "Zona de inspección periódica", "Zona industrial"],
    "correct": 1,
    "explanation": "ZEPA significa Zonas Especiales de Protección de Aves, relevantes para la normativa de avifauna."
  },
  {
    "question": "¿Qué documento se utiliza como guía para la elaboración de anteproyectos?",
    "answers": ["UNE 157001", "ITC-LAT 02", "O.C.A. Manual", "Reglamento de avifauna"],
    "correct": 0,
    "explanation": "La norma UNE 157001 se emplea como guía para la elaboración de proyectos y anteproyectos de líneas de AT."
  },
  {
    "question": "¿Qué debe contener la memoria de un anteproyecto?",
    "answers": [
      "Justificación de la línea y cronograma",
      "Solo los planos de trazado",
      "Presupuesto y certificación",
      "Listado de materiales"
    ],
    "correct": 0,
    "explanation": "La memoria debe incluir justificación de necesidad, emplazamiento, descripción de la instalación, cumplimiento del reglamento y cronograma."
  },
  {
    "question": "En un proyecto de ejecución, ¿qué información sobre el trazado debe incluirse?",
    "answers": [
      "Solo la longitud total",
      "Trazado, provincias, municipios y afecciones",
      "Solo el origen y final de la línea",
      "Coordenadas de subestaciones"
    ],
    "correct": 1,
    "explanation": "El proyecto de ejecución debe detallar el trazado, provincias, municipios, elementos y afecciones para garantizar cumplimiento y seguridad."
  },
  {
    "question": "¿Qué elementos se incluyen en el pliego de condiciones técnicas?",
    "answers": [
      "Materiales, aparatos y equipos",
      "Certificados de instalación",
      "Presupuesto general",
      "Memoria técnica"
    ],
    "correct": 0,
    "explanation": "El pliego de condiciones técnicas incluye materiales, aparatos, equipos y especificaciones para el montaje."
  },
  {
    "question": "¿Qué se entiende por durabilidad de una línea aérea?",
    "answers": [
      "Resistencia al vandalismo",
      "Capacidad de funcionamiento dentro de la vida útil prevista",
      "Número de inspecciones posibles",
      "Período sin mantenimiento preventivo"
    ],
    "correct": 1,
    "explanation": "La durabilidad se refiere a que la línea permanezca apta para su uso dentro de la vida útil prevista (~40 años) sin reparaciones sustanciales."
  },
  {
    "question": "¿Qué carga característica debe soportar un elemento diseñado para escalar con ángulo < 30º?",
    "answers": ["0,5 kN", "1,0 kN", "1,5 kN", "2,0 kN"],
    "correct": 2,
    "explanation": "Los elementos accesibles con ángulo menor de 30º deben soportar una carga característica de 1,5 kN."
  },
  {
    "question": "En líneas con conductores desnudos, ¿qué se busca al reducir ángulos pronunciados en el trazado?",
    "answers": [
      "Facilitar el mantenimiento",
      "Mejorar la seguridad de personas y durabilidad",
      "Disminuir la resistencia eléctrica",
      "Aumentar la tensión mecánica"
    ],
    "correct": 1,
    "explanation": "Reducir ángulos pronunciados evita situaciones que afecten a la seguridad y facilita durabilidad y robustez de la línea."
  },
  {
    "question": "¿Qué material se utiliza en aisladores poliméricos compuestos?",
    "answers": [
      "Vidrio y arcilla",
      "Fibra de vidrio y silicona",
      "Porcelana y feldespato",
      "Aluminio y cobre"
    ],
    "correct": 1,
    "explanation": "Los aisladores compuestos usan barra de fibra de vidrio y envolvente de silicona, reduciendo peso y efectos de contaminación."
  },
  {
    "question": "¿Qué ventaja ofrece el aislador tipo cadena frente al rígido?",
    "answers": [
      "Menor nivel de aislamiento",
      "Equilibrio de tensión mecánica entre vanos",
      "Mayor fragilidad",
      "Menor facilidad de mantenimiento"
    ],
    "correct": 1,
    "explanation": "El aislador de cadena equilibra la tensión mecánica entre vanos y facilita mantenimiento, siendo el más utilizado en líneas aéreas."
  },
  {
    "question": "¿Qué se considera un defecto grave en inspecciones de líneas?",
    "answers": [
      "Defecto leve en conexión de conductores",
      "Distancias inadecuadas en cruzamientos y paralelismos",
      "Pequeña deformación de herrajes",
      "Acumulación de defectos leves"
    ],
    "correct": 1,
    "explanation": "Defectos graves incluyen incumplimiento de distancias, continuidad a tierra o tensiones de contacto superiores."
  },
  {
    "question": "¿Qué se considera un defecto muy grave?",
    "answers": [
      "Puntos de ejecución incorrectos",
      "Que constituye peligro inminente para personas, bienes o medio ambiente",
      "Defectos en secciones de cable",
      "Acumulación de defectos leves"
    ],
    "correct": 1,
    "explanation": "Un defecto muy grave representa un peligro inminente para personas, bienes o medio ambiente y puede impedir la puesta en marcha."
  },
  {
    "question": "¿Qué norma regula la resistencia eléctrica de conductores en CC a 20ºC?",
    "answers": [
      "UNE-EN", "ITC-LAT 02", "UNE 157001", "Reglamento de avifauna"
    ],
    "correct": 0,
    "explanation": "La resistencia eléctrica en corriente continua a 20ºC debe verificarse según la normativa UNE-EN."
  },
  {
    "question": "¿Cuál es la sección mínima de cobre para conductores de líneas aéreas?",
    "answers": ["6 mm²", "8 mm²", "10 mm²", "12 mm²"],
    "correct": 2,
    "explanation": "La sección mínima de cobre para conductores de líneas aéreas es de 10 mm²."
  },
  {
    "question": "¿Qué requisito de instalación tienen los cables de tierra respecto al ángulo?",
    "answers": [
      "Ángulo inferior a 20º",
      "Ángulo inferior a 25º",
      "Ángulo inferior a 35º",
      "Ángulo inferior a 45º"
    ],
    "correct": 2,
    "explanation": "Los cables de tierra deben instalarse con un ángulo inferior a 35º según normativa."
  },
  {
    "question": "¿Qué elementos componen la sujeción de conductores a la cadena de aisladores?",
    "answers": [
      "Grapa de suspensión y grapa de amarre",
      "Pernos y cemento",
      "Yugo y bastón aislante",
      "Varilla de tierra"
    ],
    "correct": 0,
    "explanation": "Los conductores se unen mediante grapa de suspensión o grapa de amarre, que aseguran resistencia mecánica y correcta compresión."
  },
  {
    "question": "¿Cuál es la tensión mecánica que debe soportar la grapa de amarre?",
    "answers": [
      "50% σr", "70% σr", "90% σr", "100% σr"
    ],
    "correct": 2,
    "explanation": "La grapa de amarre debe soportar una tensión mecánica del 90% de la carga de rotura σr."
  },
  {
    "question": "En herrajes sometidos a carga humana, la resistencia mínima es de:",
    "answers": [
      "1,0 kN", "1,5 kN", "2,0 kN", "2,5 kN"
    ],
    "correct": 1,
    "explanation": "Los herrajes que puedan soportar el peso de una persona deben resistir 1,5 kN concentrados."
  },
  {
    "question": "¿Qué dispositivo se utiliza para mejorar el comportamiento frente al efecto corona?",
    "answers": [
      "Aislador tipo bastón", "Descargador", "Grapa de suspensión", "Varilla de protección"
    ],
    "correct": 1,
    "explanation": "Los descargadores forman superficie equipotencial de gran radio de curvatura y reducen la intensidad de campo eléctrico."
  },
  {
    "question": "Para conductores de aluminio, ¿cuál es la Tª máxima bajo cortocircuito?",
    "answers": ["150ºC", "180ºC", "200ºC", "250ºC"],
    "correct": 2,
    "explanation": "La temperatura máxima bajo cortocircuito para conductores de aluminio es 200ºC según el reglamento."
  },
  {
    "question": "¿Qué pruebas realiza la O.C.A. en la inspección inicial de U > 30 kV?",
    "answers": [
      "Ensayos previos a la puesta en servicio y calibración de equipos",
      "Sólo medición de tensión de contacto",
      "Verificación visual de apoyos",
      "Medición de la resistencia eléctrica de conductores"
    ],
    "correct": 0,
    "explanation": "La inspección inicial incluye ensayos previos a la puesta en servicio y calibración de equipos, asegurando coincidencia con condiciones de cálculo."
  },
  {
    "question": "¿Qué es un salvapájaros?",
    "answers": [
      "Dispositivo que evita electrocución",
      "Dispositivo para visualización de cables a distancia",
      "Dispositivo para medición de tensión",
      "Aislador adicional"
    ],
    "correct": 1,
    "explanation": "El salvapájaros se fija a los cables para su visualización y reducción de colisiones."
  },
  {
    "question": "El área prioritaria de reproducción de aves requiere presencia de especie durante:",
    "answers": ["1 año consecutivo", "2 años consecutivos", "3 años consecutivos", "5 años consecutivos"],
    "correct": 2,
    "explanation": "Se define como presencia de alguna especie incluida en C.E.A. durante 3 años consecutivos."
  },
  {
    "question": "¿Qué acción debe tomarse antes de colocar un conductor en la grapa?",
    "answers": [
      "Aplicar grasa anticorrosiva",
      "Enrollar varillas de protección",
      "Calibrar la tensión mecánica",
      "Medir la resistencia eléctrica"
    ],
    "correct": 1,
    "explanation": "Se colocan varillas de protección preformadas en hélice alrededor del conductor para evitar deterioro en suspensión."
  },
  {
    "question": "La verificación periódica por T.C. puede sustituir inspección por O.C.A. si:",
    "answers": [
      "La tensión U < 30 kV", "La línea es propiedad de empresa de transporte", "La línea es nueva", "El conductor es de cobre"
    ],
    "correct": 0,
    "explanation": "Si la línea tiene U < 30 kV, la verificación periódica por un T.C. puede sustituir la inspección por O.C.A."
  },
  {
    "question": "¿Cuál es la vida útil prevista de una línea aérea de AT sin reparaciones sustanciales?",
    "answers": ["20 años", "30 años", "40 años", "50 años"],
    "correct": 2,
    "explanation": "El reglamento establece una vida útil aproximada de 40 años para líneas aéreas sin necesidad de reparaciones sustanciales."
  },
  {
    "question": "¿Qué componente de aislador aumenta el nivel de aislamiento cuando se incrementa su número?",
    "answers": [
      "Caperuza-vástago", "Bastón rígido", "Columna de porcelana", "Aislador polimérico"
    ],
    "correct": 0,
    "explanation": "Cuanto mayor número de elementos en cadena de caperuza-vástago, mayor nivel de aislamiento se obtiene."
  },
  {
    "question": "¿Qué se requiere para que una empresa instaladora europea pueda operar en España?",
    "answers": [
      "Solo acreditar personal técnico",
      "Declaración responsable con categoría, documentación y compromiso",
      "Presentar proyecto tipo aprobado",
      "Certificado de inspección inicial"
    ],
    "correct": 1,
    "explanation": "Se requiere declaración responsable indicando categoría, requisitos, documentación y acreditación del personal, habilitando operación indefinida."
  },
  {
    "question": "¿Qué inspección realiza la Administración por muestreo estadístico?",
    "answers": [
      "Verificación periódica", "Inspección inicial", "Inspección sistemática", "Certificación de materiales"
    ],
    "correct": 2,
    "explanation": "La Administración puede realizar inspecciones sistemáticas mediante control por muestreo estadístico."
  },
  {
    "question": "¿Qué clasificación recibe una línea existente con un defecto grave no corregido tras 6 meses?",
    "answers": ["Favorable", "Condicionada", "Negativa", "Leve"],
    "correct": 2,
    "explanation": "Si el defecto grave no se corrige en el plazo de 6 meses, la línea existente recibe calificación negativa."
  },
  {
    "question": "¿Qué tipo de conductor se designa AL1/SAyz?",
    "answers": [
      "Aluminio reforzado con acero recubierto de aluminio", 
      "Aluminio puro homogeneo", 
      "Acero galvanizado simple", 
      "Aluminio con aleación compuesta"
    ],
    "correct": 0,
    "explanation": "AL1/SAyz es un conductor compuesto de aluminio reforzado con acero recubierto de aluminio."
  },
  {
    "question": "¿Qué tipo de aislador se usa comúnmente en instalaciones poliméricas?",
    "answers": [
      "Rígido de vástago", "Tipo bastón", "Cadena caperuza-vástago", "Columna de porcelana"
    ],
    "correct": 1,
    "explanation": "En instalaciones poliméricas compuestas, el tipo bastón es el más utilizado."
  },
  {
    "question": "En caso de modificación de apoyos o conductores por deterioro, ¿se requiere autorización administrativa?",
    "answers": ["Sí, siempre", "No, si es de mutuo acuerdo o por sustitución por rotura", "Solo si la tensión supera 66 kV", "Solo si la línea es nueva"],
    "correct": 1,
    "explanation": "No se requiere autorización administrativa si la modificación implica sustitución por deterioro o rotura o acuerdo mutuo con afectados, pero debe informarse anualmente."
  },
  {
    "question": "¿Qué tipo de contaminación afecta a los aisladores en zonas desérticas?",
    "answers": ["Salina", "Industrial", "Polvo de arena", "Húmeda"],
    "correct": 2,
    "explanation": "El polvo de arena afecta a los aisladores en zonas desérticas y requiere limpieza o protección especial."
  },
  {
    "question": "¿Qué ventaja tiene el vidrio frente a la porcelana en aisladores?",
    "answers": ["Mayor resistencia a temperatura", "Inspección visual fácil", "Menor fragilidad", "Menor peso"],
    "correct": 1,
    "explanation": "El vidrio permite inspección visual de la línea de fuga, ventaja sobre la porcelana."
  },
  {
    "question": "¿Qué debe hacer un técnico competente en caso de interrupción de servicio por emergencia?",
    "answers": [
      "Interrumpir servicio solo con autorización del propietario", 
      "Modificar la línea sin autorización", 
      "Contactar con la O.C.A.", 
      "Esperar inspección anual"
    ],
    "correct": 0,
    "explanation": "Un técnico puede adoptar medidas provisionales en situación de emergencia solo con autorización del propietario de la línea."
  }
];