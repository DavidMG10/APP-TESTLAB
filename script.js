var examQuestions = [];
var currentQuestion = 0;
var score = 0;
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

    script.onload = function() {
        callback();
    };

    document.body.appendChild(script);
}

function startTest(subject) {

    if(subject === "lineas"){
        currentSubject = "Líneas Aéreas de Alta Tensión";
        currentFile = "questions_lineas.js";
    }

    if(subject === "seguridad"){
        currentSubject = "Seguridad y Salud";
        currentFile = "questions_seguridad.js";
    }

    loadQuestions(currentFile, function(){

        document.getElementById("subjectTitle").innerText = currentSubject;

        document.getElementById("startScreen").style.display = "none";
        document.getElementById("quizScreen").style.display = "block";

        var shuffled = shuffle(questionBank.slice());
        examQuestions = shuffled.slice(0,20);

        currentQuestion = 0;
        score = 0;

        showQuestion();
    });
}

function showQuestion() {

    answered = false;

    var q = examQuestions[currentQuestion];

    document.getElementById("progress").innerText =
    "Pregunta " + (currentQuestion + 1) + " / " + examQuestions.length;

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

    for (var i = 0; i < options.length; i++) {

        if (i === q.correct) {
            options[i].classList.add("correct");
        }
        else if (i === index) {
            options[i].classList.add("incorrect");
        }
    }

    if (index === q.correct) score++;

    var exp = document.getElementById("explanation");

    exp.innerText = q.explanation;

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

    var notaFinal = (score / examQuestions.length) * 10;

    var colorNota = notaFinal >= 5 ? "#2ecc71" : "#e74c3c";

    document.getElementById("score").innerHTML = `
        <div class="result-container">
            <div class="score-circle" style="border-color:${colorNota}">
                <span class="nota-numero" style="color:${colorNota}">
                ${notaFinal.toFixed(1)}
                </span>
                <span class="nota-texto">Nota final</span>
            </div>

            <div class="details">
            Has acertado <strong>${score}</strong> de
            <strong>${examQuestions.length}</strong> preguntas.
            </div>
        </div>
    `;
}

function repeatTest(){
    startTest(currentSubject.includes("Líneas") ? "lineas" : "seguridad");
}

function goMenu(){

    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}