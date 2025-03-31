console.log("Hello World")

//computerChoice
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.round(Math.random() * choices.length);

    if(randomChoice === 1) {
        console.log('rock');
    } 
    if (randomChoice === 2)  {
        console.log('paper');
    }
    if (randomChoice === 3) {
        console.log('scissors');
    }
}

//humanChoice
function getHumanChoice () {
    const promptHumanChoice = prompt("Rock, paper or scissors?").toLowerCase();

    switch(promptHumanChoice) {
        case 'rock':
            console.log ('rock')
            break;
        case 'paper':
            console.log('paper')
            break;
        case 'scissors':
            console.log('scissors')
            break;
        default:
            console.log('Invalid choice.')
    }
}

//players score variables
const humanScore = 0;
const computerScore = 0;

//single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    if ((humanChoice === 'rock') && (computerChoice === 'scissors')) {
        console.log('You win! Rock beats scissors.')
        humanScore ++;
    } else if ((humanChoice === 'rock') && (computerChoice === 'paper')) {
        console.log('You lose! Paper beats rock.')
        computerScore ++;
    }

    if ((humanChoice === 'paper') && (computerChoice === 'rock')) {
        console.log('You win! Paper beats rock.')
        humanScore ++;
    } else if ((humanChoice === 'paper') && (computerChoice === 'scissors')) {
        console.log('You lose! Scissors beats paper.')
        computerScore ++;
    }

    if ((humanChoice === 'scissors') && (computerChoice === 'paper')) {
        console.log('You win! Scissors beats paper.')
        humanScore ++;
    } else if ((humanChoice === 'scissors') && (computerChoice === 'rock')) {
        console.log('You lose! Rock beats scissors.')
        computerScore ++;
    }
}