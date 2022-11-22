/**
 * Create a string variable userChoice
 * Create a string vairable cpuChoice that holds a random value
 * Create a const variable array that holds the choices 'rock', 'paper', 'scissors
 * prompt user to choice a choice between rock, paper or scissors.
 * compare userChoice to cpuChoice.
 * print result if user wins or loses
 */

let playerScore = 0,
  cpuScore = 0;
const gameLog = document.createElement("div");
const scoreboard = document.createElement("div");
const playerScoreLabel = document.createElement("div");
const cpuScoreLabel = document.createElement("div");
const resetBtn = document.createElement("button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function reset() {
  playerScoreLabel.textContent = "Player: 0";
  cpuScoreLabel.textContent = "Cpu: 0";
  document.querySelector(".rockBtn").disabled = false;
  document.querySelector(".paperBtn").disabled = false;
  document.querySelector(".scissorsBtn").disabled = false;
  playerScore = 0;
  cpuScore = 0;
  gameLog.textContent = "";
  resetBtn.style.display = "none";
}

function playRound(user) {
  const cpu = getComputerChoice();
  const WIN_CONDITION = "You win!";
  const LOSE_CONDITION = "You lose!";
  const DRAW_CONDITION = "Its a draw!";
  const userText = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
  const cpuText = cpu.charAt(0).toUpperCase() + cpu.substr(1).toLowerCase();
  const WIN_TEXT = `${userText} beats ${cpuText}.`;
  const LOSE_TEXT = `${cpuText} beats ${userText}.`;
  let isGameOver = false;

  if (user === cpu) {
    gameLog.textContent = DRAW_CONDITION;
  } else if (
    (user === "rock" && cpu === "scissors") ||
    (user === "paper" && cpu === "rock") ||
    (user === "scissors" && cpu === "paper")
  ) {
    gameLog.textContent = WIN_CONDITION + ` ${WIN_TEXT}`;
    playerScore++;
    playerScoreLabel.textContent = `Player: ${playerScore}`;
  } else {
    gameLog.textContent = LOSE_CONDITION + ` ${LOSE_TEXT}`;
    cpuScore++;
    cpuScoreLabel.textContent = `Cpu: ${cpuScore}`;
  }

  if (playerScore > 4) {
    gameLog.textContent = `Congrats ${WIN_CONDITION}`;
    isGameOver = true;
  }

  if (cpuScore > 4) {
    gameLog.textContent = `Game Over! ${LOSE_CONDITION}`;
    isGameOver = true;
  }

  if (isGameOver) {
    document.querySelector(".rockBtn").disabled = true;
    document.querySelector(".paperBtn").disabled = true;
    document.querySelector(".scissorsBtn").disabled = true;
    resetBtn.style.display = "block";
    resetBtn.addEventListener("click", reset);
  }
}

function game() {
  const body = document.querySelector("body");
  const buttonContainer = document.createElement("div");
  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));

  buttonContainer.classList.add("container");
  rockBtn.classList.add("rockBtn");
  paperBtn.classList.add("paperBtn");
  scissorsBtn.classList.add("scissorsBtn");
  resetBtn.classList.add("resetBtn");
  scoreboard.classList.add("scoreboard");
  gameLog.classList.add("gamelog");

  rockBtn.textContent = "🪨";
  paperBtn.textContent = "📃";
  scissorsBtn.textContent = "✂️";
  resetBtn.textContent = "Reset";
  resetBtn.style.display = "none";
  playerScoreLabel.textContent = "Player: 0";
  cpuScoreLabel.textContent = "Cpu: 0";

  scoreboard.appendChild(playerScoreLabel);
  scoreboard.appendChild(cpuScoreLabel);
  body.appendChild(scoreboard);
  buttonContainer.appendChild(rockBtn);
  buttonContainer.appendChild(paperBtn);
  buttonContainer.appendChild(scissorsBtn);
  body.appendChild(buttonContainer);
  body.appendChild(gameLog);
  body.appendChild(resetBtn);
}

game();
