var questionBank = [
  {
    "question": "❓❗En el estado de conducción los semiconductores usados en electrónica de potencia deben presentar alta amplificación para aumentar la ganancia del convertidor.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗Los diodos de potencia en comparación con los diodos de señal deben presentar alta amplificación para aumentar el rendimiento del convertidor.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗Los diodos de potencia en comparación con los diodos de señal soportan corrientes más altas cuando conducen y tensiones más altas en bloqueo.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗En el estado de conducción los semiconductores usados en electrónica de potencia deben tener baja impedancia que produzca poca caída de tensión.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗El estado de bloqueo directo de un SCR se produce cuando la tensión VAK < 0 y no se ha activado la puerta.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗Cuando se consideran las caídas de tensión de los transistores y diodos reales el resultado es una tensión de salida mayor que en el caso de elementos ideales.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗Los tiristores presentan menor tensión de ruptura directa si se aumenta la corriente de puerta del semiconductor.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗En un tiristor mayor corriente de puerta mayor será la tensión de ruptura directa.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗En un convertidor Forward se instala un tercer devanado para facilitar la circulación de corriente cuando se abre el interruptor.",
    "answers": ["Verdadera", "Falsa"],
    "correct": 0,
    "block": 2
  },
  {
    "question": "❓❗En un rectificador monofásico de puente completo la tensión media de salida:",
    "answers": [
      "Es la mitad que en uno de medio puente.",
      "Es la misma que en medio puente.",
      "Es el doble que en uno de medio puente.",
      "Es un 25% que en uno de medio puente."
    ],
    "correct": 2,
    "block": 1
  },
  {
    "question": "❓❗La tensión de salida de un rectificador trifásico en puente completo está formada por:",
    "answers": [
      "Trozos de las tensiones de fase.",
      "Trozos de las intensidades de la fuente.",
      "Trozos de las tensiones línea-línea.",
      "Trozos de las tensiones de fase y las intensidades de línea."
    ],
    "correct": 2,
    "block": 1
  },
  {
    "question": "❓❗En un rectificador monofásico en puente completo no controlado los diodos conducen:",
    "answers": ["90º", "120º", "60º", "180º"],
    "correct": 3,
    "block": 1
  },
  {
    "question": "❓❗¿Qué ventaja presenta el convertidor reductor en comparación con el convertidor conmutado?",
    "answers": [
      "Permite aumentar la frecuencia de conmutación.",
      "Permite obtener una señal continua a la salida.",
      "Permite aumentar el valor medio de la tensión de salida.",
      "Permite reducir las pérdidas de potencia."
    ],
    "correct": 3,
    "block": 1
  },
  {
    "question": "❓❗Para regular tensión alterna en carga trifásica en estrella con 3 tiristores simultáneos, el ángulo de disparo debe ser:",
    "answers": ["0º < α < 60°", "60º < α < 90°", "90º < α < 120°", "90º < α < 150°"],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗¿Cuál de estos semiconductores requiere una señal de tensión para su activación?",
    "answers": ["Diodo.", "SCR.", "IGBT.", "BJT."],
    "correct": 2,
    "block": 1
  },
  {
    "question": "❓❗El tiempo D1T en un convertidor elevador funcionando en corriente discontinua corresponde a:",
    "answers": [
      "El tiempo en que la tensión en la bobina es Vs-Vo.",
      "El tiempo en que la tensión en la bobina es -Vo.",
      "El tiempo que tarda la bobina en alcanzar el valor máximo.",
      "El tiempo en que la tensión en la bobina es cero."
    ],
    "correct": 3,
    "block": 2
  },
  {
    "question": "❓❗En el diseño de fuentes CC-CC, ¿cómo se garantiza el correcto funcionamiento del transformador?",
    "answers": [
      "Se introduce una inductancia a la salida del circuito.",
      "Se introduce una inductancia a la entrada del circuito.",
      "Se introduce un condensador a la salida del circuito.",
      "Se evita la saturación del núcleo durante la conmutación."
    ],
    "correct": 3,
    "block": 2
  },
  {
    "question": "❓❗Se requiere rectificar una señal monofásica con transformador. ¿Qué configuración instalaría?",
    "answers": [
      "Un rectificador de media onda.",
      "Un rectificador de onda completa.",
      "Un rectificador de media onda con condensador de salida.",
      "Un rectificador de media onda con filtro L-C."
    ],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗En un inversor de onda cuadrada, ¿cómo se puede eliminar el 5.º armónico?",
    "answers": [
      "Con un ángulo de tensión a cero de 18°.",
      "Con un ángulo de tensión a cero de 30°.",
      "Con un ángulo de tensión a cero de 45°.",
      "Ninguna de las anteriores."
    ],
    "correct": 0,
    "block": 2
  },
  {
    "question": "❓❗En un inversor monofásico con control PWM se puede controlar:",
    "answers": [
      "La magnitud y polaridad de la tensión de salida.",
      "La magnitud y frecuencia de la tensión de salida.",
      "La magnitud de la tensión de salida, pero no su frecuencia.",
      "La frecuencia de la tensión de salida, pero no su magnitud."
    ],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗En los convertidores CC-CC la función del diodo es:",
    "answers": [
      "Propiciar que el semiconductor se comporte como interruptor durante la conmutación.",
      "Proteger la fuente de posibles corrientes no deseadas durante la conmutación.",
      "Evitar cambios bruscos en el valor de la tensión durante la conmutación.",
      "Generar un camino para la corriente durante la descarga de la bobina."
    ],
    "correct": 3,
    "block": 1
  },
  {
    "question": "❓❗Los tiristores son dispositivos semicontrolados porque:",
    "answers": [
      "La conducción y el bloqueo dependen del circuito de potencia.",
      "La conducción se controla mediante una señal de control externa pero no el bloqueo.",
      "La conducción no se controla, pero sí el bloqueo con una señal externa.",
      "La conducción y el bloqueo se controlan con una señal de control externa."
    ],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗En un convertidor CC-CC resonante serie durante la conmutación:",
    "answers": [
      "La red LC resonante produce una tensión continua a la entrada del rectificador.",
      "La red LC resonante produce una corriente alterna a la entrada del rectificador.",
      "La red LC resonante produce que el valor medio de la corriente en la carga sea cero.",
      "La red LC resonante produce una tensión sinusoidal en la carga."
    ],
    "correct": 1,
    "block": 2
  },
  {
    "question": "❓❗En un convertidor CC-CC resonante paralelo durante la conmutación:",
    "answers": [
      "La red LC resonante produce una corriente sinusoidal a la entrada del rectificador.",
      "La red LC resonante produce que el valor medio de la tensión de entrada al rectificador sea cero.",
      "La red LC resonante produce una tensión sinusoidal a la salida del inversor.",
      "La red LC resonante produce una tensión cuadrada a la entrada del rectificador."
    ],
    "correct": 2,
    "block": 2
  },
  {
    "question": "❓❗La tensión de salida de un rectificador monofásico no controlado de puente completo:",
    "answers": [
      "Tiene la mitad de frecuencia que uno de medio puente.",
      "Tiene el doble de frecuencia que uno de medio puente.",
      "Tiene la misma frecuencia que uno de medio puente.",
      "La frecuencia es distinta que uno de medio puente, pero no se puede determinar en qué medida."
    ],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗En un circuito rectificador monofásico con SCR para un ángulo de disparo de 30º la tensión en la resistencia de carga es:",
    "answers": [
      "Siempre positiva.",
      "Siempre negativa.",
      "Positiva y negativa.",
      "Valor medio cero."
    ],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗En un inversor resonante serie, además de la disminución de pérdidas por conmutación, la red resonante:",
    "answers": [
      "Permite duplicar la tensión de la fuente a la salida.",
      "Permite atenuar los armónicos de frecuencias más altas que la fundamental porque se comporta como un filtro.",
      "Permite aproximar la forma de onda de la tensión de salida Vo a una señal sinusoidal pura.",
      "Permite eliminar los armónicos superiores si la frecuencia de conmutación es menor a la de resonancia."
    ],
    "correct": 1,
    "block": 2
  },
  {
    "question": "❓❗¿Por qué se incluye un diodo en paralelo con los interruptores de los inversores?",
    "answers": [
      "Para permitir que circulen las corrientes negativas cuando la carga es inductiva.",
      "Para evitar que circule corriente hacia la fuente de alimentación.",
      "Para evitar el cortocircuito de la fuente cuando se ejecuta la secuencia de conmutación.",
      "Para proteger al semiconductor de altas corrientes producidas por la fuente."
    ],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗En un rectificador la potencia eléctrica fluye:",
    "answers": [
      "Del lado de alterna al lado de continua.",
      "Del lado de continua al lado de alterna.",
      "Del lado de alterna al lado de alterna.",
      "No existe flujo de potencia."
    ],
    "correct": 0,
    "block": 1
  },
  {
    "question": "❓❗La tensión de salida de un rectificador controlado de onda completa:",
    "answers": [
      "Tiene una única componente continua.",
      "Está formada por una componente continua y un conjunto de armónicos.",
      "Es una onda sinusoidal pura.",
      "Es una onda cuadrada con valor medio igual a cero."
    ],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗En un convertidor CC-CC reductor, la corriente media por la bobina:",
    "answers": [
      "Es la suma de las corrientes medias en la entrada y en la carga.",
      "Es la resta de las corrientes medias en la entrada y en la carga.",
      "Coincide con la corriente media en la entrada.",
      "Coincide con la corriente media en la carga."
    ],
    "correct": 3,
    "block": 1
  },
  {
    "question": "❓❗Indique el convertidor para controlar la potencia de bombillas en una oficina:",
    "answers": [
      "Rectificador controlado.",
      "Regulador de CA.",
      "Convertidor reductor.",
      "Convertidor Cuk."
    ],
    "correct": 1,
    "block": 1
  },
  {
    "question": "❓❗¿Cuál es el principio de funcionamiento de un regulador de CA?",
    "answers": [
      "Regulan el valor eficaz de la tensión alterna de salida, manteniendo su frecuencia fija.",
      "Regulan el valor eficaz de la tensión continua de salida, manteniendo su frecuencia fija.",
      "Regulan el valor eficaz de la tensión alterna de salida, manteniendo su frecuencia variable.",
      "Regulan el valor eficaz de la tensión continua de salida, manteniendo su frecuencia variable."
    ],
    "correct": 0,
    "block": 1
  }
];