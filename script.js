// VARIABLES GLOBALES
var examQuestions = [];
var currentQuestion = 0;
var hits = 0;
var misses = 0;
var failedQuestions = [];
var answered = false;

var currentSubjectName = ""; // Nombre amigable para mostrar
var currentFile = "";        // Nombre del archivo .js
var currentBlock = 0;        // Bloque seleccionado (1 o 2)

// 1. MEZCLA DE PREGUNTAS (Algoritmo Fisher-Yates)
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// 2. CARGA DINÁMICA DE ARCHIVOS JS
function loadQuestions(file, callback) {
    // Eliminamos scripts previos de preguntas para evitar conflictos
    const oldScript = document.getElementById('questionsScript');
    if (oldScript) oldScript.remove();

    var script = document.createElement("script");
    script.id = 'questionsScript';
    script.src = file;
    script.onload = function() { callback(); };
    document.body.appendChild(script);
}

// 3. SELECCIÓN DE ASIGNATURA
function selectSubject(subject) {
    if (subject === 'lineas') {
        currentSubjectName = "Líneas Aéreas de Alta Tensión";
        currentFile = "questions_lineas.js";
    } else if (subject === 'seguridad') {
        currentSubjectName = "Seguridad y Salud";
        currentFile = "questions_seguridad.js";
    } else if (subject === 'centrales') {
        currentSubjectName = "Diseño de Centrales";
        currentFile = "questions_centrales.js";
    } else if (subject === 'potencia') {
        currentSubjectName = "Electrónica de Potencia";
        currentFile = "questions_potencia.js";
    }

    // Cambiar de pantalla
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("selectedSubjectText").innerText = currentSubjectName;
    document.getElementById("blockScreen").style.display = "block";
}

// 4. CARGAR BLOQUE Y EMPEZAR TEST
function loadBlock(blockNum) {
    currentBlock = blockNum;
    
    loadQuestions(currentFile, function() {
        // Filtramos el banco de preguntas por el bloque elegido
        // Nota: Asegúrate que en tus .js cada pregunta tenga: "block": 1 (o 2)
        var filteredQuestions = questionBank.filter(q => q.block === currentBlock);
        
        if (filteredQuestions.length === 0) {
            alert("Todavía no hay preguntas cargadas para el Bloque " + currentBlock + " de esta asignatura.");
            return;
        }

        // Reset de estadísticas y variables de control
        hits = 0;
        misses = 0;
        failedQuestions = [];
        currentQuestion = 0;
        
        // Reset de la Interfaz (UI)
        document.getElementById('hits').innerText = '0';
        document.getElementById('misses').innerText = '0';
        document.getElementById('progressBar').style.width = '0%';
        document.getElementById('failedReview').innerHTML = '';
        document.getElementById('score').innerHTML = ''; // Limpia nota anterior

        // Configuración de pantalla de test
        document.getElementById("subjectTitle").innerText = currentSubjectName + " - Bloque " + currentBlock;
        document.getElementById("blockScreen").style.display = "none";
        document.getElementById("resultScreen").style.display = "none";
        document.getElementById("quizScreen").style.display = "block";

        // Mezclar y seleccionar 20 preguntas (o menos si no hay suficientes)
        var shuffled = shuffle(filteredQuestions.slice());
        examQuestions = shuffled.slice(0, 20);

        showQuestion();
    });
}

// 5. MOSTRAR PREGUNTA
function showQuestion() {
    answered = false;
    var q = examQuestions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    var html = "";
    for (var i = 0; i < q.answers.length; i++) {
        html += '<div class="answer" onclick="selectAnswer(' + i + ')">' + q.answers[i] + '</div>';
    }

    document.getElementById("answers").innerHTML = html;
    document.getElementById("explanation").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
}

// 6. LÓGICA DE RESPUESTA
function selectAnswer(index) {
    if (answered) return;
    answered = true;

    var q = examQuestions[currentQuestion];
    var options = document.querySelectorAll(".answer");

    // Marcar visualmente acierto o error
    for (var i = 0; i < options.length; i++) {
        if (i === q.correct) {
            options[i].classList.add("correct");
        } else if (i === index) {
            options[i].classList.add("incorrect");
        }
    }

    // Actualizar contadores y guardar fallos
    if (index === q.correct) {
        hits++;
        document.getElementById('hits').innerText = hits;
    } else {
        misses++;
        document.getElementById('misses').innerText = misses;
        failedQuestions.push({
            question: q.question,
            yourAnswer: q.answers[index] || "Sin respuesta",
            correctAnswer: q.answers[q.correct]
        });
    }

    // Barra de progreso
    const progressPercent = ((currentQuestion + 1) / examQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';

    // Mostrar explicación si existe
    // Localiza este bloque en tu script.js y cámbialo por este:
var exp = document.getElementById("explanation");
if (q.explanation && q.explanation.trim() !== "") {
    exp.innerText = q.explanation;
    exp.style.display = "block";
} else {
    exp.style.display = "none"; // Si no hay explicación, se mantiene oculto
}
    
    document.getElementById("nextBtn").style.display = "inline-block";
}

// 7. SIGUIENTE PREGUNTA
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= examQuestions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

// 8. PANTALLA DE RESULTADOS
function showResult() {
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";

    var notaFinal = (hits / examQuestions.length) * 10;
    var colorNota = notaFinal >= 5 ? "#2ecc71" : "#e74c3c";

    // Mostrar nota en el círculo
    document.getElementById("score").innerHTML = `
        <div class="result-container">
            <div class="score-circle" style="border-color:${colorNota}">
                <span class="nota-numero" style="color:${colorNota}">${notaFinal.toFixed(1)}</span>
                <span class="nota-texto">Nota final</span>
            </div>
            <div class="details">Has acertado <strong>${hits}</strong> de <strong>${examQuestions.length}</strong>.</div>
        </div>`;

    // Generar revisión de fallos
    const failedReviewDiv = document.getElementById('failedReview');
    if (failedQuestions.length === 0) {
        failedReviewDiv.innerHTML = '<p style="text-align:center; color: #2ecc71;">¡Excelente! No has cometido fallos en este bloque.</p>';
    } else {
        failedQuestions.forEach(item => {
            const div = document.createElement('div');
            div.className = 'failed-item';
            div.innerHTML = `
                <p><strong>Pregunta:</strong> ${item.question}</p>
                <p><strong>Tu respuesta:</strong> <span class="text-wrong">${item.yourAnswer}</span></p>
                <p><strong>Correcta:</strong> <span class="text-correct">${item.correctAnswer}</span></p>`;
            failedReviewDiv.appendChild(div);
        });
    }
}

// 9. NAVEGACIÓN Y REPETICIÓN
function repeatTest() {
    // Al repetir, llamamos directamente a cargar el mismo bloque
    loadBlock(currentBlock);
}

function goMenu() {
    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("blockScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}