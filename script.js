import { ASOQuestions } from './js/ASO.js';
import { GBDQuestions } from './js/GBD.js';
import { IS1Questions } from './js/IS1.js';
import { IMQuestions } from './js/IM.js';
import { RCQuestions } from './js/RC.js';
import { TWQuestions } from './js/TW.js';

const questions = {
    ASO: ASOQuestions,
    GBD: GBDQuestions,
    IS1: IS1Questions,
    IM: IMQuestions,
    RC: RCQuestions,
    TW: TWQuestions
};

let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;
let totalQuestions = 0;
let pointsPerQuestion = 0;
let timer;
let timeLeft = 3600;
let correctAnswers = 0;
let incorrectAnswers = 0;
let partiallyCorrectAnswers = 0;

import { password } from './js/Pass.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('errorMessage');

    modal.style.display = 'block';

    submitButton.addEventListener('click', () => {
        const userCode = passwordInput.value.trim();

        if (password.includes(userCode)) {
            alert('Acceso permitido. ¡Bienvenido!');
            modal.style.display = 'none';
        } else {
            errorMessage.textContent = 'Código incorrecto. Inténtelo nuevamente.';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            submitButton.click();
        }
    });
});


document.querySelectorAll('.subjectBox').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.subjectBox').forEach(b => b.classList.remove('active'));
        
        this.classList.add('active');
        
        const subject = this.getAttribute('data-subject');
        startQuiz(subject);
    });
});


document.getElementById('checkAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', showNextQuestion);

function startQuiz(subject) {
    currentQuestionIndex = 0;
    selectedQuestions = [];
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    partiallyCorrectAnswers = 0;
    timeLeft = 3600;

    let questionsCount;

    switch(subject) {
        case 'ASO':
            questionsCount = 30;
            pointsPerQuestion = 2;
            break;
        case 'GBD':
            questionsCount = 30;
            pointsPerQuestion = 2;
            break;
        case 'IS1':
            questionsCount = 30;
            pointsPerQuestion = 2;
            break;
        case 'IM':
            questionsCount = 30;
            pointsPerQuestion = 2;
            break;
        case 'RC':
            questionsCount = 30;
            pointsPerQuestion = 2;
            break;
        case 'TW':
            questionsCount = 30;
            pointsPerQuestion = 2;
            break;
        default:
            console.error('Materia no válida');
            return;
    }

    totalQuestions = questionsCount;
    selectedQuestions = getRandomQuestions(questions[subject], questionsCount);

    document.getElementById('subjectSelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('progressBarContainer').style.display = 'block';
    document.getElementById('timer').style.display = 'block';

    startTimer();
    showNextQuestion();
}


function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}


function adjustLabelWidth() {

    const labels = document.querySelectorAll('.matching .term-definition-pair label');
    
    let maxWidth = 0;

    labels.forEach(label => {
        const labelWidth = label.offsetWidth;
        if (labelWidth > maxWidth) {
            maxWidth = labelWidth;
        }
    });

    labels.forEach(label => {
        label.style.width = `${maxWidth}px`; // Establecemos el ancho más grande
    });
}


function showNextQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endQuiz();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quizContainer');

    if (question.type === "multiple-choice") {
        quizContainer.innerHTML = `
            <div class="question">
                <p>${currentQuestionIndex + 1}. ${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="checkbox" name="question${currentQuestionIndex}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    } else if (question.type === "matching") {
        quizContainer.innerHTML = `
            <div class="question">
                <p>${currentQuestionIndex + 1}. ${question.question}</p>
                <div class="matching">
                    ${question.terms.map(term => `
                        <div class="term-definition-pair">
                            <label>${term}:</label>
                            <div class="content-select">
                                <select name="match${currentQuestionIndex}_${term}">
                                    <option value="">Selecciona una definición</option>
                                    ${question.definitions.map(def => `<option value="${def}">${def}</option>`).join('')}
                                </select>
                                <span class="correct-answer" style="display:none; color: green; font-weight: bold;"></span>
                            </div>
                        </div>
                    `).join('<br>')}
                </div>
            </div>
        `;
    } else if (question.image) {
        quizContainer.innerHTML = `
            <div class="question">
                <p>${currentQuestionIndex + 1}. ${question.question}</p>
                <img src="${question.image}" alt="Pregunta de imagen" style="max-width: 100%; height: auto;">
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    } else if (question.type === "text") {
        quizContainer.innerHTML = `
            <div class="question">
                <p>${currentQuestionIndex + 1}. ${question.question}</p>
                <input type="text" id="textAnswer" class="text-answer" autocomplete="off">
                <span id="correctAnswerText" style="display:none; color: green; font-weight: bold;"></span>
            </div>
        `;
    } else {
        quizContainer.innerHTML = `
            <div class="question">
                <p>${currentQuestionIndex + 1}. ${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    }

    adjustLabelWidth();

    document.getElementById('checkAnswer').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'none';

    document.querySelectorAll('.question').forEach(questionDiv => {
        questionDiv.querySelectorAll('label').forEach(label => {
            label.classList.remove('correct', 'incorrect');
        });
    });

    if (question.type !== "matching") {
        document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]').forEach(input => {
            input.disabled = false;
        });

        document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]').forEach(input => {
            input.checked = false;
        });
    } else if (question.type === "text") {
        document.getElementById('textAnswer').disabled = false;
    } else {
        question.terms.forEach(term => {
            document.querySelector(`select[name="match${currentQuestionIndex}_${term}"]`).disabled = false;
        });
    }

    updateProgressBar();

    currentQuestionIndex++;
}

document.getElementById('checkAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', showNextQuestion);

function checkAnswer() {
    const question = selectedQuestions[currentQuestionIndex - 1];

    if (question.type === "multiple-choice") {
        const selectedOptions = Array.from(document.querySelectorAll(`input[name="question${currentQuestionIndex - 1}"]:checked`));

        if (selectedOptions.length === 0) {
            alert('Por favor, selecciona al menos una respuesta antes de comprobar.');
            return;
        }

        const correctAnswersCount = selectedOptions.filter(option => question.answer.includes(option.value)).length;
        const totalAnswersCount = question.answer.length;

        document.querySelectorAll(`input[name="question${currentQuestionIndex - 1}"]`).forEach(option => {
            if (question.answer.includes(option.value)) {
                option.parentElement.classList.add('correct');
            } else if (option.checked) {
                option.parentElement.classList.add('incorrect');

                const correctAnswerText = document.createElement('span');
                correctAnswerText.textContent = `Respuesta correcta: ${question.answer.join(", ")}`;
                correctAnswerText.style.color = 'green';
                correctAnswerText.style.fontWeight = 'bold';
                option.parentElement.appendChild(correctAnswerText);
            }
        });

        if (correctAnswersCount === totalAnswersCount && selectedOptions.length === totalAnswersCount) {
            score += pointsPerQuestion;
            correctAnswers++;
        } else if (correctAnswersCount > 0) {
            score += pointsPerQuestion * (correctAnswersCount / totalAnswersCount);
            partiallyCorrectAnswers++;
        } else {
            incorrectAnswers++;
        }

        document.getElementById('checkAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'block';
        document.querySelectorAll(`input[name="question${currentQuestionIndex - 1}"]`).forEach(input => {
            input.disabled = true;
        });

    } else if (question.type === "matching") {
        const unselected = question.terms.some(term => {
            const selectElement = document.querySelector(`select[name="match${currentQuestionIndex - 1}_${term}"]`);
            return !selectElement.value;
        });

        if (unselected) {
            alert('Por favor, selecciona una definición para cada término antes de comprobar.');
            return;
        }

        let correctTerms = 0;
        const totalTerms = question.terms.length;
        const pointsPerTerm = pointsPerQuestion / totalTerms;

        question.terms.forEach(term => {
            const selectElement = document.querySelector(`select[name="match${currentQuestionIndex - 1}_${term}"]`);
            const selectedDefinition = selectElement.value;
            const correctDefinition = question.answer[term];

            if (selectedDefinition === correctDefinition) {
                selectElement.classList.add('correct');
                selectElement.classList.remove('incorrect');
                correctTerms++;
            } else {
                selectElement.classList.add('incorrect');
                selectElement.classList.remove('correct');

                const correctAnswerElement = selectElement.nextElementSibling;
                correctAnswerElement.style.display = 'inline-block';
                correctAnswerElement.innerText = `Respuesta correcta: ${correctDefinition}`;
            }
        });

        if (correctTerms === totalTerms) {
            score += pointsPerQuestion;
            correctAnswers++;
        } else if (correctTerms > 0) {
            score += pointsPerTerm * correctTerms;
            partiallyCorrectAnswers++;
        } else {
            incorrectAnswers++;
        }

        document.getElementById('checkAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'block';

    } else if (question.type === "text") {
        const answer = document.getElementById('textAnswer').value.trim();
        if (!answer) {
            alert('Por favor, escribe tu respuesta antes de comprobar.');
            return;
        }

        const correctAnswer = Array.isArray(question.answer)
            ? question.answer.map(ans => ans.toLowerCase())
            : (question.answer || "").toLowerCase();

        if (Array.isArray(correctAnswer)) {
            if (correctAnswer.includes(answer.toLowerCase())) {
                score += pointsPerQuestion;
                correctAnswers++;
                document.getElementById('textAnswer').classList.add('correct');
            } else {
                incorrectAnswers++;
                document.getElementById('textAnswer').classList.add('incorrect');
                document.getElementById('correctAnswerText').innerText = `Respuestas correctas: ${question.answer.join(", ")}`;
                document.getElementById('correctAnswerText').style.display = 'inline-block';
            }
        } else {
            // Si solo hay una respuesta correcta
            if (answer.toLowerCase() === correctAnswer) {
                score += pointsPerQuestion;
                correctAnswers++;
                document.getElementById('textAnswer').classList.add('correct');
            } else {
                incorrectAnswers++;
                document.getElementById('textAnswer').classList.add('incorrect');
                document.getElementById('correctAnswerText').innerText = `Respuesta correcta: ${question.answer}`;
                document.getElementById('correctAnswerText').style.display = 'inline-block';
            }
        }

        document.getElementById('checkAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'block';

    } else {
        const selectedOption = document.querySelector('input[name="question' + (currentQuestionIndex - 1) + '"]:checked');
        if (!selectedOption) {
            alert('Por favor, selecciona una respuesta antes de comprobar.');
            return;
        }

        const answer = selectedOption.value;
        const question = selectedQuestions[currentQuestionIndex - 1];

        document.querySelectorAll('input[name="question' + (currentQuestionIndex - 1) + '"]').forEach(option => {
            if (option.value === question.answer) {
                option.parentElement.classList.add('correct');
            } else if (option.checked) {
                option.parentElement.classList.add('incorrect');
            }
        });

        if (answer === question.answer) {
            score += pointsPerQuestion;
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        document.getElementById('checkAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'block';
    }
    
    document.querySelectorAll('input[name="question' + (currentQuestionIndex - 1) + '"]').forEach(input => {
        input.disabled = true;
    });
}


function endQuiz() {
    document.getElementById('quizContainer').innerHTML = '<p>Quiz terminado!</p>';
    document.getElementById('progressBarContainer').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('score').innerHTML = `
        <p class="puntjetotal">${score.toFixed(2)} / ${totalQuestions * pointsPerQuestion}</p>
        <p>Respuestas correctas: ${correctAnswers}</p>
        <p>Respuestas incorrectas: ${incorrectAnswers}</p>
        <p>Respuestas parcialmente correctas: ${partiallyCorrectAnswers}</p>
        <button id="retryButton">Volver a repetir</button>
        <button id="finishButton">Terminar intento</button>
    `;
    document.getElementById('score').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('checkAnswer').style.display = 'none';

    document.getElementById('retryButton').addEventListener('click', retryQuiz);
    document.getElementById('finishButton').addEventListener('click', finishAttempt);
}


function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    partiallyCorrectAnswers = 0;
    timeLeft = 3600;

    const subject = document.querySelector('.subjectBox.active').getAttribute('data-subject');
    selectedQuestions = getRandomQuestions(questions[subject], totalQuestions);

    document.getElementById('score').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('progressBarContainer').style.display = 'block';
    document.getElementById('timer').style.display = 'block';

    startTimer();
    showNextQuestion();
}


function finishAttempt() {
    currentQuestionIndex = 0;
    selectedQuestions = [];
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    partiallyCorrectAnswers = 0;
    timeLeft = 3600;

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('progressBarContainer').style.display = 'none';
    document.getElementById('timer').style.display = 'none';

    document.getElementById('subjectSelection').style.display = 'flex';

    document.getElementById('progressBar').style.width = '0%';

    clearInterval(timer);

    alert("Gracias por participar en el quiz. ¡Buen trabajo!");
}

let isPageVisible = true;
let lastTimeUpdate = Date.now();

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        isPageVisible = false;
    } else {
        isPageVisible = true;

        const timePassed = Math.floor((Date.now() - lastTimeUpdate) / 1000);
        timeLeft -= timePassed;
    }
});

function startTimer() {
    timer = setInterval(() => {
        if (isPageVisible) {
            timeLeft--;
            lastTimeUpdate = Date.now();

            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('timerValue').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            updateProgressBar();

            if (timeLeft <= 0) {
                clearInterval(timer);
                endQuiz();
            }
        }
    }, 1000);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percentage = ((currentQuestionIndex / selectedQuestions.length) * 100).toFixed(2);
    progressBar.style.width = `${percentage}%`;
}
