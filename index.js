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
            return 'Invalid choice.';
    }
}

console.log(getHumanChoice());

console.log(getComputerChoice())