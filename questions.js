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
  },
{
    "question": "¿Cuál es la tensión nominal mínima para que una línea sea considerada de categoría especial en territorio peninsular?",
    "answers": [
      "≥ 66 kV",
      "≥ 132 kV",
      "≥ 220 kV",
      "≥ 400 kV"
    ],
    "correct": 2,
    "explanation": "La categoría especial corresponde a Un ≥ 220 kV (y también a islas con tensiones menores)."
  },
  {
    "question": "¿En qué plazo máximo debe remitirse el informe de accidente o anomalía al órgano competente de la CA?",
    "answers": [
      "1 mes",
      "2 meses",
      "3 meses",
      "6 meses"
    ],
    "correct": 2,
    "explanation": "El propietario de la línea deberá remitir el informe de accidente en un tiempo máximo de 3 meses al órgano competente de la CA."
  },
  {
    "question": "¿Cuál es el plazo máximo para la aprobación de las especificaciones particulares de las empresas de transporte una vez presentadas?",
    "answers": [
      "1 mes",
      "2 meses",
      "3 meses",
      "6 meses"
    ],
    "correct": 2,
    "explanation": "Una vez presentadas, el plazo para la aprobación de las especificaciones particulares será de 3 meses."
  },
  {
    "question": "¿Con qué periodicidad mínima deben realizarse las verificaciones periódicas en líneas propiedad de empresas de transporte y distribución?",
    "answers": [
      "Cada año",
      "Cada 2 años",
      "Cada 3 años",
      "Cada 5 años"
    ],
    "correct": 2,
    "explanation": "Las verificaciones periódicas deben realizarse al menos una vez cada 3 años."
  },
  {
    "question": "¿Qué inspección es obligatoria antes de poner en servicio una línea NO propiedad de empresa de transporte/distribución con Un > 30 kV?",
    "answers": [
      "Verificación por T.C.",
      "Inspección inicial por O.C.A.",
      "Verificación por la empresa instaladora",
      "Inspección por la Administración"
    ],
    "correct": 1,
    "explanation": "Si U > 30 kV, la instalación se someterá a una inspección inicial por la O.C.A. antes de la puesta en servicio."
  },
  {
    "question": "¿Qué categoría de instaladora habilita para trabajar en líneas aéreas y subterráneas de AT sin límite de tensión?",
    "answers": [
      "LAT1",
      "LAT2",
      "LAT3",
      "LATES"
    ],
    "correct": 1,
    "explanation": "La categoría LAT2 habilita para líneas aéreas y subterráneas sin límite de tensión."
  },
  {
    "question": "¿Cuál es la cuantía mínima del seguro de responsabilidad civil que debe tener suscrita una empresa instaladora de AT?",
    "answers": [
      "500.000 €",
      "750.000 €",
      "1.000.000 €",
      "2.000.000 €"
    ],
    "correct": 2,
    "explanation": "La empresa instaladora debe tener suscrito seguro de responsabilidad civil por una cuantía mínima de un millón de euros."
  },
  {
    "question": "¿Cuántos instaladores como mínimo debe tener una empresa instaladora por cada categoría?",
    "answers": [
      "Uno",
      "Dos",
      "Tres",
      "Depende del volumen de obra"
    ],
    "correct": 0,
    "explanation": "Los medios humanos exigen un mínimo de un instalador por cada una de las categorías de la empresa instaladora."
  },
  {
    "question": "¿Qué tensión de prueba debe tener el medidor de aislamiento exigido como medio técnico a las empresas instaladoras?",
    "answers": [
      "1 kV",
      "5 kV",
      "10 kV",
      "20 kV"
    ],
    "correct": 2,
    "explanation": "Entre los medios técnicos obligatorios figura el medidor de aislamiento de 10 kV."
  },
  {
    "question": "¿Qué documento NO es obligatorio en la documentación de puesta en servicio de líneas no propiedad de empresas de transporte?",
    "answers": [
      "Certificado de instalación (E.I.)",
      "Proyecto (T.C.)",
      "Certificado de dirección facultativa (T.C.)",
      "Estudio de impacto ambiental"
    ],
    "correct": 3,
    "explanation": "La documentación obligatoria incluye: certificado de instalación, proyecto, certificado de dirección facultativa y certificado de contrato de mantenimiento. No se menciona estudio de impacto ambiental como obligatorio."
  },
  {
    "question": "Una calificación 'Condicionada' en una línea existente, ¿cuánto tiempo tiene el titular para corregir los defectos?",
    "answers": [
      "1 mes",
      "3 meses",
      "6 meses",
      "1 año"
    ],
    "correct": 2,
    "explanation": "Para una línea existente con calificación condicionada, el plazo de corrección es de 6 meses; pasado este tiempo se emite certificado de calificación negativa."
  },
  {
    "question": "¿Cuál de los siguientes defectos se clasifica como 'Muy grave'?",
    "answers": [
      "Degradación del aislamiento",
      "Sección de cables inadecuada",
      "Distancias de cruzamientos y paralelismos incumplidas",
      "Conexiones equipotenciales defectuosas"
    ],
    "correct": 2,
    "explanation": "El incumplimiento de distancias de cruzamientos y paralelismos constituye un defecto muy grave por representar peligro inminente para la seguridad."
  },
  {
    "question": "¿Qué tipo de defecto representa la 'no coincidencia entre condiciones reales y calculadas'?",
    "answers": [
      "Muy grave",
      "Grave",
      "Leve",
      "No es un defecto catalogado"
    ],
    "correct": 1,
    "explanation": "La no coincidencia entre condiciones reales y las de cálculo se clasifica como defecto grave."
  },
  {
    "question": "¿Qué documento de anteproyecto NO es exigible para la tramitación de la autorización administrativa?",
    "answers": [
      "Memoria",
      "Presupuesto",
      "Pliego de condiciones técnicas",
      "Planos"
    ],
    "correct": 2,
    "explanation": "El pliego de condiciones técnicas NO será exigible para la autorización administrativa; sí lo son la memoria, el presupuesto y los planos."
  },
  {
    "question": "¿Cuál es la sección mínima de cable de tierra para tensiones nominales superiores a 60 kV?",
    "answers": [
      "22 mm²",
      "35 mm²",
      "50 mm²",
      "70 mm²"
    ],
    "correct": 2,
    "explanation": "Para Un > 60 kV la sección mínima del cable de tierra es de 50 mm²."
  },
  {
    "question": "¿Cuál es la sección mínima del cable de tierra para tensiones nominales iguales o inferiores a 60 kV?",
    "answers": [
      "10 mm²",
      "16 mm²",
      "22 mm²",
      "35 mm²"
    ],
    "correct": 2,
    "explanation": "Para Un ≤ 60 kV la sección mínima del cable de tierra es de 22 mm²."
  },
  {
    "question": "¿Cuál es el ángulo máximo que debe formar el cable de tierra con la vertical en su instalación?",
    "answers": [
      "25°",
      "30°",
      "35°",
      "45°"
    ],
    "correct": 2,
    "explanation": "El cable de tierra debe instalarse con un ángulo inferior a 35° respecto a la vertical."
  },
  {
    "question": "¿Qué sección mínima se exige para conductores de cobre en líneas aéreas de AT?",
    "answers": [
      "6 mm²",
      "10 mm²",
      "16 mm²",
      "25 mm²"
    ],
    "correct": 1,
    "explanation": "La sección mínima para conductores de cobre es de 10 mm²."
  },
  {
    "question": "¿Cuál es la sección mínima para conductores de acero galvanizado?",
    "answers": [
      "10 mm²",
      "12,5 mm²",
      "16 mm²",
      "25 mm²"
    ],
    "correct": 1,
    "explanation": "Para conductores de acero galvanizado la sección mínima es de 12,5 mm²."
  },
  {
    "question": "¿Qué temperatura máxima de servicio bajo carga normal se establece para los conductores de aluminio?",
    "answers": [
      "70°C",
      "75°C",
      "85°C",
      "100°C"
    ],
    "correct": 2,
    "explanation": "La temperatura máxima de servicio bajo carga normal es inferior a 85°C para conductores de aluminio."
  },
  {
    "question": "¿Cuál es la temperatura máxima bajo cortocircuito para conductores de aluminio o aleación de aluminio?",
    "answers": [
      "150°C",
      "200°C",
      "250°C",
      "300°C"
    ],
    "correct": 1,
    "explanation": "La temperatura máxima bajo cortocircuito para cobre/aluminio/aleación de aluminio es de 200°C."
  },
  {
    "question": "¿Cuál es la temperatura máxima bajo cortocircuito para el acero?",
    "answers": [
      "200°C",
      "250°C",
      "300°C",
      "350°C"
    ],
    "correct": 2,
    "explanation": "La temperatura máxima bajo cortocircuito para el acero es de 300°C."
  },
  {
    "question": "¿Qué porcentaje de la carga de rotura del conductor (σr) debe soportar un empalme?",
    "answers": [
      "80%",
      "85%",
      "90%",
      "95%"
    ],
    "correct": 3,
    "explanation": "El empalme debe soportar el 95% de la carga de rotura del conductor (95%σr)."
  },
  {
    "question": "¿Qué porcentaje de la carga de rotura se exige como resistencia al deslizamiento en una conexión?",
    "answers": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "correct": 2,
    "explanation": "La resistencia al deslizamiento de una conexión debe ser del 20%σr."
  },
  {
    "question": "¿Cuántos empalmes como máximo se permiten por vano y conductor?",
    "answers": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "explanation": "Se permite no más de 1 empalme por vano y conductor."
  },
  {
    "question": "¿Está permitida la soldadura en los empalmes de conductores aéreos de AT?",
    "answers": [
      "Sí, siempre",
      "Sí, solo en conductores de cobre",
      "Sí, en caso de emergencia",
      "No, está prohibida"
    ],
    "correct": 3,
    "explanation": "La soldadura está expresamente prohibida en los empalmes de conductores aéreos de AT."
  },
  {
    "question": "¿Qué carga característica deben soportar los herrajes que puedan estar sometidos al peso de una persona?",
    "answers": [
      "0,5 kN",
      "1,0 kN",
      "1,5 kN",
      "2,0 kN"
    ],
    "correct": 2,
    "explanation": "Los herrajes que puedan estar sometidos al peso de una persona deben resistir una carga característica concentrada de 1,5 kN."
  },
  {
    "question": "¿Qué carga concentrada característica deben calcularse para los peldaños de los apoyos?",
    "answers": [
      "0,5 kN",
      "1,0 kN",
      "1,5 kN",
      "2,0 kN"
    ],
    "correct": 1,
    "explanation": "Los peldaños deben calcularse para una carga concentrada característica de 1,0 kN."
  },
  {
    "question": "¿A partir de qué ángulo con la vertical los elementos escalables del apoyo requieren una carga característica de 1,5 kN?",
    "answers": [
      "Menos de 20°",
      "Menos de 25°",
      "Menos de 30°",
      "Menos de 45°"
    ],
    "correct": 2,
    "explanation": "Los elementos que puedan usarse para escalar y estén dispuestos con un ángulo menor de 30° con la vertical deben tener una carga característica de 1,5 kN."
  },
  {
    "question": "¿Cuál es la vida útil prevista de una línea aérea de AT según el reglamento?",
    "answers": [
      "20 años",
      "30 años",
      "40 años",
      "50 años"
    ],
    "correct": 2,
    "explanation": "La vida útil es el periodo de funcionamiento previsto de la línea ≈ 40 años sin que sean necesarias reparaciones sustanciales."
  },
  {
    "question": "¿Qué porcentaje de la carga de rotura debe soportar una grapa de amarre?",
    "answers": [
      "80%",
      "85%",
      "90%",
      "95%"
    ],
    "correct": 2,
    "explanation": "La grapa de amarre debe soportar una tensión mecánica del 90%σr."
  },
  {
    "question": "¿Cuántos conductores OPPC hacen referencia los conductores de fase ópticos?",
    "answers": [
      "OPC: conductor de fase óptico",
      "OPC: cable de protección de circuito",
      "OPC: conductor de par coaxial",
      "OPC: conductor de potencia continua"
    ],
    "correct": 0,
    "explanation": "OPC significa conductor de fase óptico (Optical Phase Conductor)."
  },
  {
    "question": "¿Para qué sirven las Varillas de Protección colocadas antes de fijar el conductor a la grapa?",
    "answers": [
      "Mejorar la conducción eléctrica",
      "Aumentar la carga de rotura del conductor",
      "Proteger al conductor del deterioro en el punto de suspensión",
      "Reducir el efecto corona"
    ],
    "correct": 2,
    "explanation": "Las varillas de protección son alambres preformados arrollados en hélice para proteger al conductor del deterioro en el punto de suspensión."
  },
  {
    "question": "¿Cuál es la función principal de los descargadores en las cadenas de aisladores?",
    "answers": [
      "Aumentar la resistencia mecánica de la cadena",
      "Proteger eléctricamente la cadena desviando el arco y mejorando el efecto corona",
      "Medir la tensión en los aisladores",
      "Conectar a tierra los conductores"
    ],
    "correct": 1,
    "explanation": "Los descargadores aseguran la protección eléctrica de la cadena: si se ceba un arco, sus raíces se sitúan sobre el descargador y mejoran el comportamiento al efecto corona formando una superficie equipotencial."
  },
  {
    "question": "¿Dónde se sitúan los electrodos del descargador en las cadenas de suspensión?",
    "answers": [
      "En la parte interior de la cadena",
      "En la parte exterior de la cadena",
      "En la parte superior",
      "En el apoyo"
    ],
    "correct": 1,
    "explanation": "Los electrodos del descargador se sitúan en la parte exterior de la cadena de suspensión. En las cadenas de amarre se sitúan en la parte superior."
  },
  {
    "question": "¿Cuál es el material compuesto base de un aislador polimérico tipo bastón?",
    "answers": [
      "Arcilla + cuarzo + feldespato",
      "Sílice + carbonatos de calcio y sodio",
      "Barra de fibra de vidrio + envolvente de silicona",
      "Epoxi + fibra de carbono"
    ],
    "correct": 2,
    "explanation": "Los aisladores compuestos (poliméricos) están formados por una barra de fibra de vidrio más una envolvente de silicona."
  },
  {
    "question": "¿En qué porcentaje reducen la línea de fuga los aisladores poliméricos compuestos frente a los de vidrio y porcelana?",
    "answers": [
      "10%",
      "20%",
      "30%",
      "40%"
    ],
    "correct": 2,
    "explanation": "Los aisladores poliméricos compuestos reducen su línea de fuga un 30% frente a los aisladores de vidrio y porcelana."
  },
  {
    "question": "¿Qué efecto degrada las propiedades hidrofóbicas de los aisladores compuestos?",
    "answers": [
      "La lluvia ácida",
      "La contaminación salina",
      "El efecto corona",
      "Las variaciones bruscas de temperatura"
    ],
    "correct": 2,
    "explanation": "El efecto corona degrada las propiedades hidrofóbicas de los aisladores poliméricos compuestos."
  },
  {
    "question": "¿Qué componente de la porcelana incrementa su rigidez dieléctrica (hasta 300 kV/cm)?",
    "answers": [
      "Arcilla",
      "Cuarzo",
      "Feldespato",
      "Sílice"
    ],
    "correct": 2,
    "explanation": "A mayor proporción de feldespato en la porcelana, mayor rigidez dieléctrica (300 kV/cm)."
  },
  {
    "question": "¿Qué componente de la porcelana incrementa su resistencia mecánica?",
    "answers": [
      "Arcilla",
      "Cuarzo",
      "Feldespato",
      "Carbonato de calcio"
    ],
    "correct": 1,
    "explanation": "A mayor proporción de cuarzo en la porcelana, mayor resistencia mecánica."
  },
  {
    "question": "¿Qué componente de la porcelana incrementa su resistencia a cambios de temperatura?",
    "answers": [
      "Arcilla",
      "Cuarzo",
      "Feldespato",
      "Óxido de aluminio"
    ],
    "correct": 0,
    "explanation": "A mayor proporción de arcilla en la porcelana, mayor resistencia a variaciones de temperatura (dTª)."
  },
  {
    "question": "¿Cuál es la principal ventaja de los aisladores de vidrio sobre los de porcelana?",
    "answers": [
      "Mayor resistencia mecánica",
      "Inspección visual facilitada por su transparencia",
      "Mayor resistencia a contaminación",
      "Menor peso"
    ],
    "correct": 1,
    "explanation": "Los aisladores de vidrio son transparentes, lo que aumenta el control visual e inspección."
  },
  {
    "question": "¿Cuál es la desventaja de los aisladores compuestos respecto a los de vidrio y porcelana?",
    "answers": [
      "Mayor peso",
      "Menor esperanza de vida y menor resistencia mecánica",
      "Mayor coste",
      "Fragilidad al choque"
    ],
    "correct": 1,
    "explanation": "Los aisladores compuestos tienen menor esperanza de vida y menor resistencia mecánica que los de vidrio y porcelana."
  },
  {
    "question": "¿Qué tipo de aislador de cadena soporta una rotura de la parte aislante sin perder la resistencia mecánica?",
    "answers": [
      "Aislador rígido de vástago",
      "Aislador de caperuza y vástago",
      "Aislador tipo bastón",
      "Aislador de columna"
    ],
    "correct": 1,
    "explanation": "En el aislador de caperuza y vástago, la rotura de la parte aislante no hace perder la resistencia mecánica del aislador."
  },
  {
    "question": "¿Para qué zonas de protección de avifauna es OBLIGATORIO adoptar medidas contra electrocución?",
    "answers": [
      "Solo ZEPA",
      "Solo áreas prioritarias de reproducción",
      "Todas las zonas de protección definidas en el Art.3",
      "Solo zonas con planes de recuperación y conservación"
    ],
    "correct": 2,
    "explanation": "Para líneas nuevas, ampliaciones, modificaciones y existentes son obligatorias las medidas contra electrocución en todas las zonas de protección del Art.3."
  },
  {
    "question": "¿Qué medida anticolisión es OPCIONAL según la normativa de protección de avifauna para líneas existentes?",
    "answers": [
      "Medidas contra electrocución",
      "Colocación de disuasores de posada",
      "Medidas anticolisión",
      "Señalización de apoyos"
    ],
    "correct": 2,
    "explanation": "Para líneas existentes las medidas contra electrocución son obligatorias pero las de colisión son opcionales."
  },
  {
    "question": "¿Qué es un 'salvapájaros' según la normativa de protección de avifauna?",
    "answers": [
      "Dispositivo colocado en crucetas para evitar que se posen las aves",
      "Dispositivo fijado a los cables para su visualización a distancia y anticolisión",
      "Red protectora alrededor de los apoyos",
      "Señal luminosa en los apoyos"
    ],
    "correct": 1,
    "explanation": "El salvapájaros o señalizador es un dispositivo externo que se fija a los cables para su visualización a distancia con función anticolisión."
  },
  {
    "question": "¿Cuántos años consecutivos de presencia de un ave incluida en el C.E.A. definen un 'área prioritaria de reproducción, alimentación y dispersión'?",
    "answers": [
      "1 año",
      "2 años",
      "3 años",
      "5 años"
    ],
    "correct": 2,
    "explanation": "El área prioritaria se define por la presencia de algún ave incluida en el C.E.A. en un período de 3 años consecutivos."
  },
  {
    "question": "¿En qué plazo máximo debe informarse de una intervención de urgencia en líneas que soporten nidos, realizada sin previo aviso?",
    "answers": [
      "24 horas",
      "48 horas",
      "72 horas",
      "1 semana"
    ],
    "correct": 2,
    "explanation": "Cuando se realicen intervenciones por urgencia y sin avisar, se informará en menos de 72 horas."
  },
  {
    "question": "¿Cuándo está prohibido el trabajo de mantenimiento en tendidos que soporten nidos?",
    "answers": [
      "Durante el invierno",
      "Durante la época de nidificación, reproducción y crianza",
      "En cualquier época del año sin autorización",
      "Solo durante la nidificación"
    ],
    "correct": 1,
    "explanation": "Está prohibido el trabajo de mantenimiento durante la época de nidificación, reproducción y crianza en los tendidos que soporten nidos."
  },
  {
    "question": "¿Qué norma se utilizará como guía para la elaboración de proyectos y anteproyectos de líneas de AT?",
    "answers": [
      "UNE 157001",
      "UNE-EN 50341",
      "UNE 21030",
      "IEC 60826"
    ],
    "correct": 0,
    "explanation": "Para la elaboración de proyectos y anteproyectos se utilizará como guía la Norma UNE 157001."
  },
  {
    "question": "¿Cuál es la finalidad principal de un anteproyecto según la ITC-09?",
    "answers": [
      "Ejecutar las obras",
      "Tramitar la correspondiente autorización por parte de la Administración",
      "Realizar el mantenimiento de la línea",
      "Certificar la calidad de los materiales"
    ],
    "correct": 1,
    "explanation": "La finalidad del anteproyecto será utilizarse para la tramitación de la correspondiente autorización por parte de la Administración."
  },
  {
    "question": "¿Qué escala vertical se utiliza en el perfil longitudinal de una línea aérea en el proyecto de ejecución?",
    "answers": [
      "1:1000",
      "1:500",
      "1:200",
      "1:100"
    ],
    "correct": 2,
    "explanation": "En el perfil longitudinal de líneas aéreas se usa una escala vertical de 1:200 para carreteras, ferrocarriles y altitud."
  },
  {
    "question": "¿Cuándo NO se considera una actuación como 'ampliación o modificación' que requiere autorización administrativa?",
    "answers": [
      "Cuando se añaden nuevos vanos",
      "Cuando se sustituyen apoyos o conductores por deterioro o rotura",
      "Cuando se aumenta la tensión nominal de la línea",
      "Cuando se modifica el trazado"
    ],
    "correct": 1,
    "explanation": "No se consideran ampliaciones o modificaciones las sustituciones de apoyos o conductores por deterioro o rotura, entre otras situaciones."
  },
  {
    "question": "¿Qué información debe enviarse anualmente a la Administración cuando se realizan actuaciones que no requieren autorización administrativa?",
    "answers": [
      "Solo el presupuesto de las actuaciones",
      "Una relación de todas las actuaciones realizadas",
      "Un informe técnico de cada actuación",
      "Nada, no es necesario comunicarlo"
    ],
    "correct": 1,
    "explanation": "En estos casos no es necesaria la Autorización Administrativa, pero sí se enviará anualmente una relación de todas las actuaciones."
  },
  {
    "question": "¿Qué contenido deben incluir los proyectos tipo de instalaciones?",
    "answers": [
      "Solo memoria y presupuesto",
      "Memoria, programa informático, pliego, presupuesto, planos y normas de prevención",
      "Solo cálculos eléctricos y mecánicos",
      "Solo especificaciones de materiales"
    ],
    "correct": 1,
    "explanation": "Los proyectos tipo deben contener: memoria, programa informático para tablas de cálculo, pliego de condiciones, presupuesto, relación de planos y normas de prevención de riesgos laborales y protección del medio ambiente."
  },
  {
    "question": "¿Qué normas son de obligado cumplimiento según el artículo 1.8 del reglamento LAT?",
    "answers": [
      "Normas IEC de la ITC-LAT 02",
      "Normas UNE del ITC-LAT 02",
      "Normas EN del ITC-LAT 07",
      "Normas CENELEC del ITC-LAT 09"
    ],
    "correct": 1,
    "explanation": "Son de obligado cumplimiento las Normas UNE del ITC-LAT 02."
  },
  {
    "question": "¿Quién costea los sobredimensionamientos impuestos a otras instalaciones debido a modificaciones en la red de AT?",
    "answers": [
      "La Administración Pública",
      "El propietario de la red de AT que realiza la modificación",
      "El propietario de las instalaciones afectadas",
      "Se reparte entre ambos propietarios"
    ],
    "correct": 1,
    "explanation": "Los sobredimensionamientos y modificaciones impuestos a otras instalaciones, debido a modificaciones en la red de AT, serán costeados por el propietario de la red de AT."
  },
  {
    "question": "¿Cuál es la condición que debe cumplir una solución diferente a la del reglamento para que la CA la acepte?",
    "answers": [
      "Que sea más económica",
      "Que implique un nivel de seguridad equivalente",
      "Que esté aprobada por la UE",
      "Que cuente con el visto bueno del Ministerio"
    ],
    "correct": 1,
    "explanation": "La CA podrá aceptar soluciones diferentes a las del reglamento cuando impliquen un nivel de seguridad equivalente."
  },
  {
    "question": "¿A qué ámbito NO se aplica el reglamento LAT?",
    "answers": [
      "Nuevas líneas de AT",
      "Modificaciones de líneas existentes",
      "Tracción ferroviaria",
      "Inspecciones de líneas"
    ],
    "correct": 2,
    "explanation": "El reglamento NO se aplica a la tracción ferroviaria."
  },
  {
    "question": "¿Cuál es el rango de tensión nominal para líneas de 2ª categoría?",
    "answers": [
      "1 kV < Un < 30 kV",
      "30 kV < Un < 66 kV",
      "66 kV < Un < 220 kV",
      "Un ≥ 220 kV"
    ],
    "correct": 1,
    "explanation": "La 2ª categoría corresponde a tensiones nominales entre 30 kV y 66 kV."
  },
  {
    "question": "¿Cuál es el rango de tensión nominal para líneas de 3ª categoría?",
    "answers": [
      "1 kV < Un < 30 kV",
      "30 kV < Un < 66 kV",
      "66 kV < Un < 132 kV",
      "66 kV < Un < 220 kV"
    ],
    "correct": 0,
    "explanation": "La 3ª categoría corresponde a tensiones nominales entre 1 kV y 30 kV."
  },
  {
    "question": "Según la ITC-LAT-07, ¿cuál es el sistema de instalación definido para líneas aéreas con conductores desnudos?",
    "answers": [
      "Red colgante sobre postes de madera",
      "Red tensada sobre apoyo",
      "Red en galería visitable",
      "Red de cables autosoportados"
    ],
    "correct": 1,
    "explanation": "El sistema de instalación definido para líneas aéreas con conductores desnudos es la red tensada sobre apoyo."
  },
  {
    "question": "¿Para qué tipo de conductores NO aplica el apartado de materiales de la ITC-LAT-07 (conductores desnudos)?",
    "answers": [
      "Conductores de aluminio AL1",
      "Cables ADSS o CADFO",
      "Conductores ACSR (Al/Acero)",
      "Conductores de cobre"
    ],
    "correct": 1,
    "explanation": "El apartado de materiales no aplica a los cables dieléctricos autosoportados (ADSS) o CADFO, aunque sí se tienen en cuenta en el diseño de apoyos."
  },
  {
    "question": "¿Para qué sirve una cadena de aisladores de 'suspensión' frente a una de 'amarre'?",
    "answers": [
      "La de suspensión soporta mayores esfuerzos longitudinales",
      "La de suspensión equilibra la tensión mecánica entre vanos ajustando su inclinación",
      "La de amarre permite mayor oscilación lateral",
      "La de suspensión solo se usa en apoyos de ángulo"
    ],
    "correct": 1,
    "explanation": "El aislador de suspensión equilibra la tensión mecánica en todos los vanos con la inclinación de la cadena."
  },
  {
    "question": "¿Cuántas cadenas de aisladores pueden colgar de un yugo?",
    "answers": [
      "Solo una",
      "Exactamente dos",
      "Múltiples cadenas",
      "Máximo cuatro"
    ],
    "correct": 2,
    "explanation": "El yugo se usa para cadenas múltiples, colgando directamente de la cruceta o por medio de una pieza triangular."
  },
  {
    "question": "¿Cuál es el principal problema de las curvas de equilibrio muy pronunciadas a ambos lados de la cadena de suspensión?",
    "answers": [
      "Aumenta el efecto corona",
      "Puede provocar el deslizamiento del conductor fuera de la grapa",
      "Incrementa las pérdidas por efecto Joule",
      "Reduce la vida útil del aislador"
    ],
    "correct": 1,
    "explanation": "El problema es que las curvas de equilibrio pronunciadas pueden dificultar la correcta sujeción del conductor; las soluciones son grapas de grandes dimensiones o cadenas con yugo del que salen dos grapas de amarre."
  },
  {
    "question": "¿Con qué carga de rotura mínima para 'otros materiales' distintos de cobre o acero se acepta su uso en conductores de AT?",
    "answers": [
      "σr > 250 daN",
      "σr > 300 daN",
      "σr > 350 daN",
      "σr > 400 daN"
    ],
    "correct": 2,
    "explanation": "Para otros materiales distintos de cobre o acero galvanizado, la carga de rotura debe ser σr > 350 daN."
  },
  {
    "question": "¿Cuál es la temperatura máxima de corta duración para conductores de aluminio?",
    "answers": [
      "85°C",
      "90°C",
      "100°C",
      "120°C"
    ],
    "correct": 2,
    "explanation": "La temperatura máxima de corta duración para conductores de aluminio es inferior a 100°C."
  },
  {
    "question": "¿Qué ocurre si un defecto 'leve' de una inspección anterior no ha sido corregido en la siguiente?",
    "answers": [
      "Se mantiene como leve",
      "Pasa automáticamente a defecto grave",
      "Se emite una calificación negativa",
      "Se convierte en condicionada"
    ],
    "correct": 1,
    "explanation": "La acumulación o reincidencia de defectos leves se clasifica como defecto grave."
  },
  {
    "question": "¿Qué O.C. realiza la inspección inicial obligatoria para líneas no propiedad de empresas de transporte con Un > 30 kV?",
    "answers": [
      "O.C.A. (Organismo de Control Autorizado)",
      "El Ministerio de Industria",
      "La Comunidad Autónoma",
      "La empresa instaladora LAT2"
    ],
    "correct": 0,
    "explanation": "La inspección inicial para líneas con Un > 30 kV debe ser realizada por la O.C.A. (Organismo de Control Autorizado)."
  },
  {
    "question": "¿Qué documento acredita la inspección inicial favorable para poder poner en servicio una línea no propiedad de empresa de transporte con Un > 30 kV?",
    "answers": [
      "Acta de verificación del T.C.",
      "Certificado de calificación favorable de inspección inicial por O.C.A.",
      "Autorización de explotación del Ministerio",
      "Certificado de la empresa instaladora"
    ],
    "correct": 1,
    "explanation": "Se requiere el certificado con calificación favorable de inspección inicial por la O.C.A. antes de la puesta en servicio."
  },
  {
    "question": "¿Para qué tensión o superior se requiere, en el proceso de puesta en servicio de líneas NO propiedad de empresas de transporte, la inspección inicial por OCA?",
    "answers": [
      "Un > 1 kV",
      "Un > 10 kV",
      "Un > 30 kV",
      "Un > 66 kV"
    ],
    "correct": 2,
    "explanation": "La inspección inicial por O.C.A. es obligatoria cuando U > 30 kV para líneas no propiedad de empresas de transporte y distribución."
  },
  {
    "question": "¿Qué tipo de ensayo de verificación se realiza SOLO en apoyos frecuentados en líneas aéreas de empresas de transporte?",
    "answers": [
      "Ensayo de aislamiento principal",
      "Medida de resistencia de puesta a tierra",
      "Medida de tensión de contacto",
      "Ensayo de aislamiento de cubierta"
    ],
    "correct": 2,
    "explanation": "Las medidas de tensión de contacto se realizan solo si el apoyo es frecuentado, en líneas aéreas y galerías visitables."
  },
  {
    "question": "¿Qué contiene el acta de verificación según la ITC-05?",
    "answers": [
      "Solo los datos de la línea y los defectos encontrados",
      "Datos de identificación, relación de defectos, planes de corrección y observaciones",
      "Solo los ensayos realizados y sus resultados",
      "Datos de identificación, ensayos, plan de mantenimiento y presupuesto"
    ],
    "correct": 1,
    "explanation": "El acta de verificación debe contener: datos de identificación de la línea, relación de defectos encontrados, planes de corrección y observaciones."
  },
  {
    "question": "¿Cuándo puede sustituirse la inspección periódica por OCA en líneas no propiedad de empresas de transporte con tensión inferior a 30 kV?",
    "answers": [
      "Nunca, siempre debe intervenir la OCA",
      "Cuando la empresa instaladora realiza la verificación",
      "Cuando la verificación periódica la realiza un T.C. que no participó en el proyecto ni en la dirección",
      "Cuando la línea tiene menos de 5 años de antigüedad"
    ],
    "correct": 2,
    "explanation": "Para tensiones < 30 kV, la inspección periódica por OCA puede sustituirse por verificación periódica realizada por un T.C. que no haya participado en la redacción del proyecto ni en la dirección."
  },
  {
    "question": "¿Qué clasificación recibe una línea nueva cuya inspección resulta 'condicionada'?",
    "answers": [
      "Se pone en marcha con seguimiento durante 6 meses",
      "No se pone en marcha hasta la corrección de los defectos",
      "Se le da un plazo de 3 meses para corregir",
      "Se emite un certificado de calificación negativa inmediatamente"
    ],
    "correct": 1,
    "explanation": "Si la línea es nueva y obtiene calificación condicionada, no se pone en marcha hasta la corrección de los defectos graves."
  },
  {
    "question": "¿Cuál es la clasificación mínima del defecto que implica una calificación 'Negativa' de una línea?",
    "answers": [
      "Leve",
      "Grave",
      "Muy grave",
      "Cualquier combinación de leve y grave"
    ],
    "correct": 2,
    "explanation": "La calificación negativa se produce cuando existe al menos un defecto muy grave."
  },
  {
    "question": "¿Cuándo se puede sustituir la verificación periódica de líneas de empresas de transporte por planes concertados?",
    "answers": [
      "Nunca, siempre se requiere verificación formal",
      "Cuando los planes concertados garanticen el mantenimiento de la línea",
      "Solo en líneas de categoría especial",
      "Cuando la línea tiene menos de 10 años"
    ],
    "correct": 1,
    "explanation": "Las verificaciones periódicas se podrán sustituir por planes concertados que garanticen el mantenimiento de la línea."
  },
  {
    "question": "¿Qué tipo de ensayos de verificación se realizan en líneas subterráneas de empresas de transporte?",
    "answers": [
      "Medidas de resistencia de puesta a tierra y tensión de contacto",
      "Ensayo de aislamiento principal y ensayo de aislamiento de cubierta",
      "Solo ensayo de aislamiento principal",
      "Todos los anteriores"
    ],
    "correct": 1,
    "explanation": "En líneas subterráneas de empresas de transporte se realizan: ensayo de aislamiento principal y ensayo de aislamiento de cubierta."
  },
  {
    "question": "¿Cuál es la habilitación temporal que otorga la declaración responsable de una empresa instaladora de AT?",
    "answers": [
      "5 años renovables",
      "10 años renovables",
      "Tiempo indefinido",
      "1 año con renovación anual"
    ],
    "correct": 2,
    "explanation": "La declaración responsable habilita por tiempo indefinido a la empresa instaladora."
  },
  {
    "question": "¿Quién asigna el número de identificación a la empresa instaladora de AT?",
    "answers": [
      "El Ministerio de Industria",
      "La Comunidad Autónoma",
      "El Registro Central de Empresas Instaladoras",
      "La propia empresa al presentar la declaración responsable"
    ],
    "correct": 1,
    "explanation": "La comunidad autónoma asignará a la empresa un número de identificación de oficio."
  },
  {
    "question": "¿Puede una empresa instaladora de AT facilitar o ceder certificados de instalaciones no realizadas por ella?",
    "answers": [
      "Sí, si cuenta con autorización de la OCA",
      "Sí, en casos de emergencia",
      "No, está expresamente prohibido",
      "Sí, si lo autoriza la Comunidad Autónoma"
    ],
    "correct": 2,
    "explanation": "La empresa instaladora no podrá facilitar, ceder o enajenar certificados de instalaciones no realizados por ella misma."
  },
  {
    "question": "¿Qué dispositivo topográfico forma parte del equipamiento específico exigido a las empresas instaladoras LAT?",
    "answers": [
      "Telurómetro",
      "Medidor de aislamiento",
      "Cámara termográfica",
      "Dispositivos topográficos"
    ],
    "correct": 3,
    "explanation": "Los equipos específicos exigidos incluyen dispositivos mecánicos para tendido, dispositivos topográficos y tren de tendido."
  },
  {
    "question": "¿En qué caso una línea nueva con calificación 'Negativa' puede ponerse en marcha?",
    "answers": [
      "Nunca, debe corregirse antes",
      "Tras 6 meses de plazo",
      "Con autorización especial de la Administración",
      "Cuando el titular asume la responsabilidad"
    ],
    "correct": 0,
    "explanation": "Si la línea es nueva y obtiene calificación negativa, no se pone en marcha hasta la corrección del defecto muy grave."
  },
  {
    "question": "¿Qué contenido extra tiene el certificado de inspección respecto al acta de verificación?",
    "answers": [
      "El certificado incluye además la clasificación de defectos, clasificación de la línea y registro de operaciones de mantenimiento",
      "No hay diferencia entre ambos documentos",
      "El certificado incluye además el presupuesto de reparaciones",
      "El acta incluye más datos que el certificado"
    ],
    "correct": 0,
    "explanation": "El certificado de inspección incluye, además de los datos del acta de verificación: clasificación de defectos, clasificación de la línea y registro de operaciones de mantenimiento."
  },
  {
    "question": "¿Qué ensayo se verifica en la inspección inicial para líneas > 30 kV según la ITC-05?",
    "answers": [
      "Ensayos previos a puesta en servicio, calibración de equipos, coincidencia entre condiciones reales y de cálculo",
      "Solo ensayo de aislamiento",
      "Solo medida de resistencia de puesta a tierra",
      "Solo medida de tensión de paso y contacto"
    ],
    "correct": 0,
    "explanation": "La inspección inicial para > 30 kV incluye: ensayos previos a puesta en servicio, calibración de los equipos, resultado satisfactorio y coincidencia entre condiciones reales y calculadas."
  },
  {
    "question": "¿Qué tipo de acoplamiento de cadena de aisladores realiza 'la misma función en una sola pieza'?",
    "answers": [
      "Grilletes - anillas bola",
      "Horquilla bola",
      "Yugo",
      "Pasador en W"
    ],
    "correct": 1,
    "explanation": "La horquilla bola realiza la misma función que los grilletes y anillas bola, pero en una sola pieza."
  },
  {
    "question": "¿Cuál de los siguientes NO es un requisito básico de diseño de una línea aérea con conductores desnudos según la ITC-LAT-07?",
    "answers": [
      "Niveles aceptables de fiabilidad",
      "No se produzca un colapso en cascada",
      "Maximizar la capacidad de transporte de energía",
      "Que sea duradera, robusta y respete el medio ambiente"
    ],
    "correct": 2,
    "explanation": "Entre los requisitos básicos de diseño no se menciona maximizar la capacidad de transporte; los requisitos son: fiabilidad, evitar colapso en cascada, no daños humanos y durabilidad."
  },
  {
    "question": "¿Cuál es el mecanismo para prevenir los fallos en cascada en las líneas aéreas?",
    "answers": [
      "Uso de conductores de alta resistencia",
      "Instalación de apoyos de anclaje",
      "Mayor número de cadenas de aisladores",
      "Uso de cables de tierra de gran sección"
    ],
    "correct": 1,
    "explanation": "Para prevenir los fallos en cascada se instalan apoyos de anclaje. El fallo debe quedar limitado al lugar donde se produjo la sobrecarga."
  },
  {
    "question": "¿Cuál es el campo de aplicación de la ITC-LAT-07 sobre líneas aéreas con conductores desnudos?",
    "answers": [
      "CA trifásica a 50 Hz y Un > 1 kV",
      "CA trifásica a 50 Hz y Un > 30 kV",
      "CA monofásica o trifásica y Un > 1 kV",
      "CA trifásica a 50 Hz y Un > 66 kV"
    ],
    "correct": 0,
    "explanation": "El campo de aplicación de la ITC-LAT-07 es líneas aéreas con conductores desnudos, CA trifásica a 50 Hz y Un > 1 kV."
  },
  {
    "question": "¿Cuál es la norma de referencia para la resistencia eléctrica en corriente continua a 20°C de los conductores de aluminio?",
    "answers": [
      "IEC 60826",
      "UNE 157001",
      "UNE-EN (correspondiente)",
      "Norma CENELEC 50341"
    ],
    "correct": 2,
    "explanation": "La resistencia eléctrica en cc a 20°C se determina según UNE-EN (la norma europea específica correspondiente)."
  },
  {
    "question": "¿Qué debe considerarse (no solo verificarse) en el diseño eléctrico de conductores de aluminio?",
    "answers": [
      "Solo la intensidad admisible",
      "Solo la capacidad de cortocircuito",
      "El nivel de perturbación radioeléctrica y el nivel de ruido",
      "Solo la temperatura máxima de servicio"
    ],
    "correct": 2,
    "explanation": "Además de verificarse Iadm y capacidad de cortocircuito, debe considerarse el nivel de perturbación radioeléctrica y el nivel de ruido."
  },
  {
    "question": "¿Qué información mínima debe incluirse sobre equipos y materiales en el proyecto según el Art. 1.12?",
    "answers": [
      "Solo el fabricante y la marca",
      "Fabricante, marca, modelo, tensión e intensidad",
      "Solo tensión e intensidad nominales",
      "Fabricante, marca, modelo y precio unitario"
    ],
    "correct": 1,
    "explanation": "Se incluirán: fabricante, marca y modelo, y tensión e intensidad de los equipos y materiales."
  },
  {
    "question": "¿Cuándo pueden las CCAA introducir requisitos adicionales a las prescripciones del reglamento LAT?",
    "answers": [
      "Nunca, el reglamento es de mínimos obligatorios invariables",
      "Siempre que cuenten con aprobación del Ministerio",
      "En cualquier momento, ya que las prescripciones son mínimos obligatorios",
      "Solo para líneas de categoría especial"
    ],
    "correct": 2,
    "explanation": "Las prescripciones establecidas tienen la condición de mínimos obligatorios, pudiendo las CCAA introducir requisitos adicionales."
  },
  {
    "question": "¿Qué pasa si la inspección inicial de una línea no propiedad de empresa de transporte resulta desfavorable?",
    "answers": [
      "Se puede poner en servicio provisionalmente",
      "No puede ponerse en servicio hasta la corrección",
      "Se emite certificado condicionado con plazo de 6 meses",
      "Se comunica a la Administración y se espera instrucciones"
    ],
    "correct": 1,
    "explanation": "La calificación condicionada o negativa en una línea nueva impide su puesta en marcha hasta la corrección de los defectos."
  },
  {
    "question": "¿Cuántos parámetros de diseño se establecen para las grapas de sujeción de conductores al apoyo?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 3,
    "explanation": "Se establecen 6 parámetros de diseño para las grapas: eje horizontal, peso reducido, compresión uniforme, compresión específica no elevada, frecuencia propia diferente a la del conductor, e imposibilidad de mordedura."
  },
  {
    "question": "¿Cuáles son las formas de mantenimiento de aisladores en zonas contaminadas?",
    "answers": [
      "Solo lavado a presión con tensión",
      "Fregado manual, recubrimiento con compuestos grasos y lavado periódico con o sin tensión",
      "Solo aplicación de grasa de silicona",
      "Sustitución obligatoria cada 5 años"
    ],
    "correct": 1,
    "explanation": "Las formas de mantenimiento son: fregado manual sin tensión o limpieza en seco con o sin tensión, recubrimiento con compuestos grasos, y lavado periódico con o sin tensión (pulverizadores fijos o chorro portátil manual)."
  },
  {
    "question": "¿En qué tipo de instalaciones se usan comúnmente los aisladores de vidrio o cerámica recubiertos con grasa de silicona?",
    "answers": [
      "En líneas marítimas expuestas a contaminación salina",
      "En túneles donde es difícil el lavado de los aisladores",
      "En líneas de muy alta tensión (≥ 400 kV)",
      "En zonas desérticas con polvo de arena"
    ],
    "correct": 1,
    "explanation": "El recubrimiento con grasa de silicona es común en túneles donde es difícil el lavado de los aisladores, aunque supone mayor mantenimiento."
  },
  {
    "question": "¿Cuál de los siguientes tipos de contaminación afecta a los aisladores en zonas marítimas?",
    "answers": [
      "Industrial-metalúrgico",
      "Polvo de arena",
      "Salino",
      "Biológico"
    ],
    "correct": 2,
    "explanation": "La contaminación salina afecta principalmente a aisladores en zonas marítimas."
  },
  {
    "question": "¿Qué fenómeno causa que una capa de contaminación sobre los aisladores sea conductora?",
    "answers": [
      "La radiación solar directa",
      "La disolución de las partículas contaminantes por niebla o humedad",
      "El calentamiento por el paso de corriente",
      "La acción del viento sobre la superficie del aislador"
    ],
    "correct": 1,
    "explanation": "Una capa de contaminación puede ser conductora si las partículas son disueltas por la niebla o la humedad."
  },
  {
    "question": "¿Qué tipo de aislador no sufre el fenómeno de conductividad por contaminación húmeda?",
    "answers": [
      "Aisladores de vidrio",
      "Aisladores de porcelana",
      "Aisladores de materiales compuestos",
      "Aisladores de cerámica"
    ],
    "correct": 2,
    "explanation": "El fenómeno de conductividad por contaminación disuelta por niebla o humedad no se produce en los aisladores de materiales compuestos."
  },
  {
    "question": "¿Cuál es la desventaja principal de los aisladores de vidrio respecto a los de porcelana?",
    "answers": [
      "Mayor coste",
      "Mayor fragilidad y mayor peso",
      "Menor rigidez dieléctrica",
      "Menor resistencia a la contaminación"
    ],
    "correct": 1,
    "explanation": "Los aisladores de vidrio presentan como desventajas su fragilidad y mayor peso respecto a otras opciones."
  },
  {
    "question": "¿Cuál es la diferencia entre las tensiones solicitadas de larga duración y las sobretensiones tipo rayo respecto a la influencia de la lluvia?",
    "answers": [
      "Las sobretensiones tipo rayo están más afectadas por la lluvia",
      "Las tensiones de larga duración están más afectadas por la lluvia que las de tipo rayo",
      "Ambas se ven afectadas por igual",
      "La lluvia no influye en ninguna de las dos"
    ],
    "correct": 1,
    "explanation": "Las solicitaciones de tensión de larga duración están más afectadas por la lluvia que por las sobretensiones tipo rayo."
  },
  {
    "question": "¿Cuáles son las características que debe evaluarse en una cadena de aisladores pero NO en un aislador individual?",
    "answers": [
      "Tensión soportada a impulsos tipo rayo",
      "Carga de rotura mecánica y electromecánica",
      "Tensión soportada de maniobra bajo lluvia",
      "Tensiones de perforación"
    ],
    "correct": 2,
    "explanation": "La tensión soportada de maniobra bajo lluvia es una característica específica de la cadena de aisladores, no del aislador individual."
  },
  {
    "question": "Según el proceso de puesta en servicio, ¿en qué paso se solicita el suministro a la empresa suministradora para líneas no propiedad de empresas de transporte?",
    "answers": [
      "Paso 3: tras el certificado de dirección y final de obra",
      "Paso 6: aportando el Certificado de Instalación",
      "Paso 8: en el registro ante la administración",
      "Paso 4: tras la inspección inicial por OCA"
    ],
    "correct": 1,
    "explanation": "En el paso 6 se solicita el suministro a la Empresa Suministradora aportando el Certificado de Instalación."
  },
  {
    "question": "¿Cuál es la diferencia principal entre un instalador y una empresa instaladora de AT según las definiciones reglamentarias?",
    "answers": [
      "El instalador puede actuar de forma independiente; la empresa instaladora necesita declaración responsable",
      "El instalador es persona física que debe actuar en el seno de una empresa instaladora; la empresa instaladora es persona física o jurídica",
      "No hay diferencia práctica entre ambos conceptos",
      "El instalador solo puede trabajar en MT; la empresa instaladora también en AT"
    ],
    "correct": 1,
    "explanation": "El instalador es la persona física que desarrolla su actividad en el seno de una empresa instaladora. La empresa instaladora es la persona física o jurídica que ejerce las actividades y cumple los requisitos de la ITC-03."
  },
  {
    "question": "¿Qué debe acreditar un instalador de AT para ejercer la actividad, entre otras opciones?",
    "answers": [
      "Solo la experiencia laboral de al menos 10 años",
      "Título universitario, título de FP o certificado de profesionalidad, o competencia profesional adquirida por experiencia laboral reconocida",
      "Únicamente título universitario en ingeniería eléctrica",
      "Solo certificado de profesionalidad en instalaciones eléctricas"
    ],
    "correct": 1,
    "explanation": "El instalador deberá cumplir y acreditar: disponer de título universitario, título de FP o certificado de profesionalidad, o tener reconocida competencia profesional adquirida por experiencia laboral."
  },
  {
    "question": "¿Qué instrumento de medida de la lista de medios técnicos permite verificar la continuidad de conductores?",
    "answers": [
      "Telurómetro",
      "Medidor de aislamiento",
      "Cámara termográfica",
      "Equipo verificador de la continuidad de conductores"
    ],
    "correct": 3,
    "explanation": "El equipo verificador de la continuidad de conductores es uno de los medios técnicos obligatorios para la empresa instaladora."
  },
  {
    "question": "¿Cuándo se realiza la 'Inspección de Mercado' según el artículo 1.12?",
    "answers": [
      "Antes del inicio de las obras",
      "Al finalizar la instalación",
      "La Administración compra y ensaya equipos y materiales para verificar su conformidad",
      "Cuando se detectan defectos en la inspección periódica"
    ],
    "correct": 2,
    "explanation": "La 'Inspección de Mercado' consiste en que la Administración realiza la compra y ensayo de equipos y materiales para comprobar su conformidad."
  },
  {
    "question": "¿Qué documento emite el T.C. tras la ejecución del proyecto que forma parte del certificado final de líneas propiedad de empresas de transporte?",
    "answers": [
      "Acta de puesta en servicio",
      "Declaración del cumplimiento del reglamento y especificaciones",
      "Certificado de instalación",
      "Acta de verificación inicial"
    ],
    "correct": 1,
    "explanation": "El certificado final incluye entre sus partes la declaración del cumplimiento del reglamento y especificaciones técnicas."
  },
  {
    "question": "¿Cuál es el objetivo del sistema de conductores OPGW (hilo de guarda óptico)?",
    "answers": [
      "Solo proteger contra sobretensiones de rayo",
      "Combinar las funciones de hilo de guarda y cable de fibra óptica para telecomunicaciones",
      "Mejorar el aislamiento de la línea",
      "Reducir las pérdidas por efecto corona"
    ],
    "correct": 1,
    "explanation": "El OPGW (Optical Ground Wire) combina las funciones de hilo de guarda eléctrico con cable de fibra óptica para telecomunicaciones."
  },
  {
    "question": "Según la normativa, ¿qué debe hacer el propietario de la línea en caso de daño a especies protegidas por accidente?",
    "answers": [
      "Solo incluirlo en el informe de accidente remitido a la CA",
      "Dar traslado a los órganos de medio ambiente además de remitir el informe",
      "Notificarlo en el plazo de 24 horas a la Administración",
      "No tiene obligaciones adicionales más allá del informe de accidente"
    ],
    "correct": 1,
    "explanation": "En caso de daño a especies protegidas, además del informe de accidente, deberá dar traslado a los órganos de medio ambiente."
  },
  {
    "question": "¿Qué prescripciones NO pueden incluir las especificaciones particulares de las empresas de transporte?",
    "answers": [
      "Condiciones técnicas de seguridad",
      "Marcas o modelos, ni prescripciones que supongan cargas adicionales al titular",
      "Procedimientos de mantenimiento",
      "Criterios de selección de materiales"
    ],
    "correct": 1,
    "explanation": "Las especificaciones particulares no incluirán marcas o modelos ni prescripciones que supongan cargas adicionales al titular."
  },
  {
    "question": "¿Qué diferencia existe entre la escala horizontal usada para el eje de la línea y para carreteras/ferrocarriles en el perfil longitudinal de una línea aérea?",
    "answers": [
      "Ambas usan escala 1:500",
      "El eje de la línea usa 50 m y carreteras/ferrocarriles 1:200",
      "No se indica escala para el eje de la línea",
      "Ambas usan escala 1:200"
    ],
    "correct": 1,
    "explanation": "En el perfil longitudinal, el eje de la línea usa una escala de 50 m (bandas de 50 m arriba y abajo), mientras que carreteras, ferrocarriles y altitud usan escala 1:200."
  },
  {
    "question": "¿Qué información adicional aportan los datos de parcelas, límites de provincia y términos municipales en el plano de perfil longitudinal de una línea aérea?",
    "answers": [
      "Solo datos catastrales sin relevancia técnica",
      "Información necesaria para la gestión de servidumbres y tramitación administrativa",
      "Información para el cálculo de cruzamientos",
      "Datos para dimensionar los apoyos"
    ],
    "correct": 1,
    "explanation": "Los datos de parcelas, límites de provincia y términos municipales son necesarios para la gestión de servidumbres y la tramitación administrativa del proyecto."
  },
  {
    "question": "¿Qué tipo de línea eléctrica NO requiere presentar la declaración responsable para su ejecución?",
    "answers": [
      "Líneas que no son propiedad de empresas de transporte y distribución",
      "Líneas propiedad de las empresas de transporte y distribución",
      "Líneas industriales de terceros categoría LAT1",
      "Líneas de conexión de parques eólicos"
    ],
    "correct": 1,
    "explanation": "Para las líneas propiedad de empresas de transporte y distribución no se precisa presentar la declaración responsable."
  }
];