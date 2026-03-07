var examQuestions = [];
var currentQuestion = 0;
var score = 0;
var answered = false;

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function startTest() {
    // IMPORTANTE: Verifica que questionBank existe en questions.js
    if (typeof questionBank === 'undefined') {
        alert("Error: No se encuentra la base de preguntas.");
        return;
    }

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";

    var shuffled = shuffle(questionBank.slice()); // Copia y mezcla
    examQuestions = shuffled.slice(0, 20);

    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    answered = false;
    var q = examQuestions[currentQuestion];

    document.getElementById("progress").innerText = "Pregunta " + (currentQuestion + 1) + " / " + examQuestions.length;
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
        } else if (i === index) {
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
    document.getElementById("score").innerText = score + " / " + examQuestions.length + " correctas";
}

function restart() {
    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}