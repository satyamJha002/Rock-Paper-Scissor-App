let userScore = 0
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userChoice_span = document.getElementById("userChoice")
const compChoice_span = document.getElementById("compChoice")

const movesLabelMap = {
    r: 'Rock',
    p: 'Paper',
    s: 'Scissors'
}

const resultMap = {
    0: 'Its a Draw',
    1: 'You Win!',
    2: 'Computer Wins!'
}

function endRound(decision, userChoice, resultMessage, userScore, compScore) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = resultMessage;
    switch (decision) {
        case '1':
            userChoice.classList.add('green-glow');
            break;
        case '2':
            userChoice.classList.add('red-glow');
            break;
        default:
            userChoice.classList.add('gray-glow');
    }
}

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(userChoice) {
    clean();
    const computerChoice = getCompChoice();
    const userChoice_div = document.getElementById(userChoice);
    displayChoices(userChoice, computerChoice);
    let res = decide(userChoice, computerChoice);
    endRound(res, userChoice_div, resultMap[res], userScore, computerScore);
}

function displayChoices(userChoice, compChoice) {
    userChoice_span.innerHTML = movesLabelMap[userChoice];
    compChoice_span.innerHTML = movesLabelMap[compChoice];
}

function clean() {
    rock_div.classList.remove('green-glow', 'gray-glow', 'red-glow');
    paper_div.classList.remove('green-glow', 'gray-glow', 'red-glow');
    scissors_div.classList.remove('green-glow', 'gray-glow', 'red-glow');
}

function decide(userMove, compMove) {
    let result = '0';
    switch (userMove + compMove) {
        case "rs":
        case "pr":
        case "sp":
            result = '1';
            userScore++;
            break;
        case "rp":
        case "ps":
        case "sr":
            result = '2'
            computerScore++;
            break;
        case "rr":
        case "pp":
        case "ss":
            result = '0'
            break;
    }

    return result;
}

function main() {
    rock_div.addEventListener("click", () => game("r"))
    paper_div.addEventListener("click", () => game("p"))
    scissors_div.addEventListener("click", () => game("s"))
}

main();