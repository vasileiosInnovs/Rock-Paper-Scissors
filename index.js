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

