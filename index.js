//computerChoice
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.round(Math.random() * choices.length-1);

    if(randomChoice === 0) {
        return('rock');
    } else if (randomChoice === 1)  {
        return('paper');
    } else if (randomChoice === 2) {
        return('scissors');
    }
}

//humanChoice
function getHumanChoice() {
    const choicePrompt = prompt("Rock, paper or scissors?").toLowerCase()
    
    switch(choicePrompt) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
        default:
            console.log('Invalid choice.');
    }
}

//score variables
let humanScore = 0;
let computerScore = 0;

//play single round
function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return 'You win! Rock beats Scissors.'
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock.'
    }
    if(humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return 'You win! Paper beats Rock.'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats Paper.'
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win! Scissors beats Paper.'
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors.'
    } 
    if (humanScore === computerScore) {
        return 'It\'s a tie!'
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));