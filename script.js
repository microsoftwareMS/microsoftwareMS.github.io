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
let timeLeft = 3600; // 1 hora en segundos
let correctAnswers = 0;
let incorrectAnswers = 0;
let partiallyCorrectAnswers = 0; // Añadido para contar respuestas parcialmente correctas

document.querySelectorAll('.subjectBox').forEach(box => {
    box.addEventListener('click', function() {
        // Elimina la clase 'active' de todas las cajas
        document.querySelectorAll('.subjectBox').forEach(b => b.classList.remove('active'));
        
        // Añade la clase 'active' a la caja seleccionada
        this.classList.add('active');
        
        const subject = this.getAttribute('data-subject');
        startQuiz(subject);
    });
});


document.getElementById('checkAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', showNextQuestion);

function startQuiz(subject) {
    // Reinicia todas las variables relevantes
    currentQuestionIndex = 0;
    selectedQuestions = [];
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    partiallyCorrectAnswers = 0;
    timeLeft = 3600; // Reinicia el temporizador

    let questionsCount;

    // Configura la materia seleccionada
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

    // Muestra el contenedor del quiz y oculta la selección de materia
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
    // Seleccionamos todos los labels dentro de la pregunta de tipo matching
    const labels = document.querySelectorAll('.matching .term-definition-pair label');
    
    // Variable para guardar el ancho máximo
    let maxWidth = 0;

    // Iteramos sobre todos los labels y encontramos el más largo
    labels.forEach(label => {
        const labelWidth = label.offsetWidth; // Obtener el ancho del label
        if (labelWidth > maxWidth) {
            maxWidth = labelWidth; // Actualizamos el máximo si encontramos un label más ancho
        }
    });

    // Aplicamos el ancho máximo a todos los labels
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

    // Renderiza pregunta de selección múltiple
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
    } else if (question.type === "text") { // Renderizado para preguntas de texto
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

    // Reiniciar la clase de estilo de respuesta en la pregunta anterior
    document.querySelectorAll('.question').forEach(questionDiv => {
        questionDiv.querySelectorAll('label').forEach(label => {
            label.classList.remove('correct', 'incorrect');
        });
    });

    // Hacer los inputs seleccionables
    if (question.type !== "matching") {
        document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]').forEach(input => {
            input.disabled = false;
        });

        // Limpiar la selección previa
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

    // Actualizar la barra de progreso
    updateProgressBar();

    currentQuestionIndex++;
}

document.getElementById('checkAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', showNextQuestion);

function checkAnswer() {
    const question = selectedQuestions[currentQuestionIndex - 1];

    if (question.type === "multiple-choice") {
        const selectedOptions = Array.from(document.querySelectorAll(`input[name="question${currentQuestionIndex - 1}"]:checked`));

        // Verificar si no se ha seleccionado ninguna opción
        if (selectedOptions.length === 0) {
            alert('Por favor, selecciona al menos una respuesta antes de comprobar.');
            return;
        }

        const correctAnswersCount = selectedOptions.filter(option => question.answer.includes(option.value)).length;
        const totalAnswersCount = question.answer.length;

        // Marcar respuestas correctas e incorrectas
        document.querySelectorAll(`input[name="question${currentQuestionIndex - 1}"]`).forEach(option => {
            if (question.answer.includes(option.value)) {
                option.parentElement.classList.add('correct');
            } else if (option.checked) {
                option.parentElement.classList.add('incorrect');
                // Mostrar la respuesta correcta solo cuando la opción esté marcada incorrectamente
                const correctAnswerText = document.createElement('span');
                correctAnswerText.textContent = `Respuesta correcta: ${question.answer.join(", ")}`;
                correctAnswerText.style.color = 'green';
                correctAnswerText.style.fontWeight = 'bold';
                option.parentElement.appendChild(correctAnswerText); // Agregar al label
            }
        });

        // Si las respuestas seleccionadas coinciden exactamente con las correctas
        if (correctAnswersCount === totalAnswersCount && selectedOptions.length === totalAnswersCount) {
            score += pointsPerQuestion;
            correctAnswers++;
        } else if (correctAnswersCount > 0) {
            score += pointsPerQuestion * (correctAnswersCount / totalAnswersCount); // Puntos parciales
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
            return !selectElement.value; // Si alguna opción no está seleccionada
        });

        if (unselected) {
            alert('Por favor, selecciona una definición para cada término antes de comprobar.');
            return;
        }

        let correctTerms = 0;
        const totalTerms = question.terms.length;
        const pointsPerTerm = pointsPerQuestion / totalTerms; // Dividir puntos entre términos

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

                // Mostrar la respuesta correcta debajo de la opción incorrecta
                const correctAnswerElement = selectElement.nextElementSibling; // El span .correct-answer
                correctAnswerElement.style.display = 'inline-block';
                correctAnswerElement.innerText = `Respuesta correcta: ${correctDefinition}`;
            }
        });

        if (correctTerms === totalTerms) {
            score += pointsPerQuestion; // Asignar puntos completos si todos los términos son correctos
            correctAnswers++;
        } else if (correctTerms > 0) {
            score += pointsPerTerm * correctTerms; // Asignar puntos parciales
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
            ? question.answer.map(ans => ans.toLowerCase()) // Convertir a minúsculas si es un array
            : (question.answer || "").toLowerCase(); // Usar valor por defecto si no es un array

        if (Array.isArray(correctAnswer)) {
            // Si hay múltiples respuestas correctas
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

    // Añadir los eventos de clic a los botones
    document.getElementById('retryButton').addEventListener('click', retryQuiz);
    document.getElementById('finishButton').addEventListener('click', finishAttempt);
}


function retryQuiz() {
    // Reinicia el índice de preguntas y el puntaje
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    partiallyCorrectAnswers = 0;
    timeLeft = 3600; // Restablece el tiempo (1 hora)

    // Selecciona las preguntas aleatorias nuevamente para la materia seleccionada
    const subject = document.querySelector('.subjectBox.active').getAttribute('data-subject'); // Asume que la materia seleccionada está marcada como "active"
    selectedQuestions = getRandomQuestions(questions[subject], totalQuestions);

    // Restablece los contenedores del quiz y muestra la primera pregunta
    document.getElementById('score').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('progressBarContainer').style.display = 'block';
    document.getElementById('timer').style.display = 'block';

    startTimer(); // Reinicia el temporizador
    showNextQuestion(); // Muestra la primera pregunta
}


function finishAttempt() {
    // Reinicia las variables globales
    currentQuestionIndex = 0;
    selectedQuestions = [];
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    partiallyCorrectAnswers = 0;
    timeLeft = 3600; // Reinicia el tiempo a 1 hora

    // Oculta los contenedores del quiz y de resultados
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('progressBarContainer').style.display = 'none';
    document.getElementById('timer').style.display = 'none';

    // Muestra la selección de materia
    document.getElementById('subjectSelection').style.display = 'flex';

    // Reinicia la barra de progreso
    document.getElementById('progressBar').style.width = '0%';

    // Detiene el temporizador
    clearInterval(timer);

    alert("Gracias por participar en el quiz. ¡Buen trabajo!");
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timerValue').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        updateProgressBar();
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percentage = ((currentQuestionIndex / selectedQuestions.length) * 100).toFixed(2);
    progressBar.style.width = `${percentage}%`;
}
