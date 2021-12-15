function buildQuiz(){

    let questionContainer = document.getElementById('questionContainer')
    let iH = ''
    for (i = 0; i < myQuestions.length; i++) {
        if (i % 2 == 0 || i == 0) {
            iH += `<div class="row" id="quiz">`
        }
        iH += `            
                <div class="col-sm-6" id="question_${i}">
                    <div class="container-fluid" style="margin: 30px;">
                        <div class="row">
                            <h3>Question ${ myQuestions[i].number }</h3>
                        </div>
                        <div class="row">
                            <p>${ myQuestions[i].question }</p>
                        </div>
                        <div class="row">
                            <input type="text" onBlur="getAnswer(this, ${i})" id="submit">
                        </div>
                    </div>
                </div>        
        `
        if (i % 2 != 0) {
            iH += `</div>`
        }
    }
    questionContainer.innerHTML = iH
}

let answersCorrect = []

function getAnswer(currentInput, currentQuestionIndex) {
    let userInput = currentInput.value
    if (userInput == `${myQuestions[currentQuestionIndex].answer}`) {
        document.getElementById("question_"+currentQuestionIndex).style.backgroundColor = 'lightGreen';
        answersCorrect[currentQuestionIndex] = true;
        console.log(answersCorrect);
        correctAnswerTracker();
    }
    else { document.getElementById("question_" + currentQuestionIndex).style.backgroundColor = 'lightCoral';
        answersCorrect[currentQuestionIndex] = false
        console.log(answersCorrect);
        correctAnswerTracker();
    }
}

function correctAnswerTracker() {

    let iH = ''
    let count = 0
    for (var j = 0; j < answersCorrect.length; ++j) {
        if(answersCorrect[j] === true)
        count++ 
    }
    // if (answersCorrect.includes(true)) {
        //     console.log(numberCorrect);
        // }
    if (count > 0) {
        iH += `${count} out of ${myQuestions.length} correct.`;
    }
    numberCorrect.innerHTML = iH
}


const myQuestions = [
    {
        number: 1,
        question: "Who is the greatest basketball player of all time?",
        answer: "Michael Jordan"


    },
    {
        number: 2,
        question: "What is the capitol of The United States?",
        answer: "Washington DC"


    },
    {
        number: 3,
        question: "What is USC slogan?",
        answer: "Fight On"
    },
    {
        number: 4,
        question: "What is the name of the toy cowboy in Toy Story?",
        answer: "Woody"
    },
    {
        number: 5,
        question: "What is the Aloha State?",
        answer: "Hawaii"
    },
    {
        number: 6,
        question: "Who hit his 700th home run on September 17, 2004?",
        answer: "Barry Bonds"
    },
    {
        number: 7,
        question: '"Hi, my name is what?"',
        answer: "Slim Shady"
    },
    {
        number: 8,
        question: "What is the regulation height for a basketball hoop?",
        answer: "10 Feet"
    },
    {
        number: 9,
        question: "Where are the Prymaids located?",
        answer: "Eygpt"
    },
    {
        number: 10,
        question: "What did staples center get renamed too?",
        answer: "Crypto.com Arena"
    },
]
window.onload = function () { buildQuiz(); }