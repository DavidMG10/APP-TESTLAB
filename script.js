var examQuestions = [];
var currentQuestion = 0;
var hits = 0;
var misses = 0;
var failedQuestions = [];
var answered = false;
var currentSubject = "";
var currentFile = "";

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function loadQuestions(file, callback) {
    var script = document.createElement("script");
    script.src = file;
    script.onload = function() { callback(); };
    document.body.appendChild(script);
}

function startTest(subject) {
    if(subject === "lineas"){
        currentSubject = "Líneas Aéreas de Alta Tensión";
        currentFile = "questions_lineas.js";
    } else {
        currentSubject = "Seguridad y Salud";
        currentFile = "questions_seguridad.js";
    }

    loadQuestions(currentFile, function(){
        // Reset total de variables
        hits = 0;
        misses = 0;
        failedQuestions = [];
        currentQuestion = 0;
        
        // Reset UI
        document.getElementById('hits').innerText = '0';
        document.getElementById('misses').innerText = '0';
        document.getElementById('progressBar').style.width = '0%';
        document.getElementById('failedReview').innerHTML = '';
        document.getElementById('score').innerHTML = ''; // Limpia la nota anterior

        document.getElementById("subjectTitle").innerText = currentSubject;
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("resultScreen").style.display = "none";
        document.getElementById("quizScreen").style.display = "block";

        var shuffled = shuffle(questionBank.slice());
        examQuestions = shuffled.slice(0, 20);

        showQuestion();
    });
}

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

function selectAnswer(index) {
    if (answered) return;
    answered = true;

    var q = examQuestions[currentQuestion];
    var options = document.querySelectorAll(".answer");

    // Marcar respuestas
    for (var i = 0; i < options.length; i++) {
        if (i === q.correct) options[i].classList.add("correct");
        else if (i === index) options[i].classList.add("incorrect");
    }

    // Lógica de acierto/fallo
    if (index === q.correct) {
        hits++;
        document.getElementById('hits').innerText = hits;
    } else {
        misses++;
        document.getElementById('misses').innerText = misses;
        // Guardar para la revisión final
        failedQuestions.push({
            question: q.question,
            yourAnswer: q.answers[index],
            correctAnswer: q.answers[q.correct]
        });
    }

    // Actualizar barra de progreso
    const progressPercent = ((currentQuestion + 1) / examQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';

    var exp = document.getElementById("explanation");
    exp.innerText = q.explanation || "Respuesta correcta: " + q.answers[q.correct];
    exp.style.display = "block";
    document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= examQuestions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";

    var notaFinal = (hits / examQuestions.length) * 10;
    var colorNota = notaFinal >= 5 ? "#2ecc71" : "#e74c3c";

    // Círculo de nota
    document.getElementById("score").innerHTML = `
        <div class="result-container">
            <div class="score-circle" style="border-color:${colorNota}">
                <span class="nota-numero" style="color:${colorNota}">${notaFinal.toFixed(1)}</span>
                <span class="nota-texto">Nota final</span>
            </div>
            <div class="details">Has acertado <strong>${hits}</strong> de <strong>${examQuestions.length}</strong>.</div>
        </div>`;

    // Revisión de fallos
    const failedReviewDiv = document.getElementById('failedReview');
    if (failedQuestions.length === 0) {
        failedReviewDiv.innerHTML = '<p style="text-align:center; color: #2ecc71;">¡Excelente! Ningún fallo.</p>';
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

function repeatTest(){
    startTest(currentSubject.includes("Líneas") ? "lineas" : "seguridad");
}

function goMenu(){
    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}