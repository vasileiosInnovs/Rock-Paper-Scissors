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

console.log(getComputerChoice());
