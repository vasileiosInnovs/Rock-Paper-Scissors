console.log("Hello World!")

// create a new function named getComputerChoice
// getComputerChoice randomly returns rock , paper or scissor
// test using console.log()
function getComputerChoice (){
   const options = Math.floor(Math.random() * 3);

// use switch condition to randomly select an option aligning itself to the random number generated
   switch (options){
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2:
        return "scissors";
        break
    default:
        return "Not in the mood!"
   }
   return

}
console.log(getComputerChoice())


// create a new function named getHumanChoice
// write a code that getHumanChoice returns one of the valid choices
// use prompt to get user input
// test using console.log()
// create a function named getHumanChoice
// create a constant variable options to store the three items
// create a variable for the prompt
// prompt for the user's input
// if condition to choose one of the options of the three
// elif rock, paper, scissors
// else invalid choice
// console.log getHumanChoice
function getHumanChoice (){
    const choice = prompt("Rock, paper or scissors").toLowerCase();
    switch(choice) {
        case "rock":
          return "rock";
          break;
        case "paper":
          return "paper";
          break;
        case "scissors":
          return "scissors";
          break;
        default:
          return "Invalid choice!";
    }
    return
}
console.log(getHumanChoice())


// create variable humanScore
humanScore = 0;
// create variable computerScore
computerScore = 0;
// initialize variable to 0

// create a function named playRound
// define two paremeters for playRound: humanChoice and computerChoice
// make function humanChoice case-insensitive
// write code for your playRound function to console.log a string value representing the round winner 
// increment the humanScore or computerScore variable based on the round winner 

// create a new function named playGame
// move playRound function and score variables to be declared in playGame function 
// call playRound five times to play five rounds