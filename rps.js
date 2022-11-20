/**
 * Create a string variable userChoice
 * Create a string vairable cpuChoice that holds a random value
 * Create a const variable array that holds the choices 'rock', 'paper', 'scissors
 * prompt user to choice a choice between rock, paper or scissors.
 * compare userChoice to cpuChoice.
 * print result if user wins or loses
 */

let counter = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(user, cpu) {
  const WIN_CONDITION = "You win!";
  const LOSE_CONDITION = "You lose!";
  const DRAW_CONDITION = "Its a draw!";
  const userText = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
  const cpuText = cpu.charAt(0).toUpperCase() + cpu.substr(1).toLowerCase();
  const WIN_TEXT = `${userText} beats ${cpuText}.`;
  const LOSE_TEXT = `${cpuText} beats ${userText}.`

  if(user === cpu) {
    return DRAW_CONDITION
  } else if(user === "rock" && cpu === "scissors" || 
            user === "paper" && cpu === "rock" ||
            user === "scissors" && cpu === "paper") {
    counter++;
    return WIN_CONDITION + ` ${WIN_TEXT}`;
  } else {
    return LOSE_CONDITION + ` ${LOSE_TEXT}`;
  }
}


function game() {
  let userChoice, cpuChoice, result;

  for(let i = 0; i < 5; i++) {
    userChoice = prompt("Rock, paper or scissors?");
    cpuChoice = getComputerChoice();
    result = playRound(userChoice.toLowerCase(), cpuChoice);
    alert(result);
  }
  
  alert(`GAME OVER! You won ${counter} times!`);
}

game();