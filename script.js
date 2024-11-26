const options = document.querySelectorAll(".options button");
const humanScoreElement = document.querySelector(".score .human");
const computerScoreElement = document.querySelector(".score .computer");
const computerChoiceElement = document.querySelector(".computer");
const roundResultElement = document.querySelector(".score .result");
let computerScore = 0;
let humanScore = 0;
let computerChoice = null;
let humanChoice = null;
let winner = null;
const getComputerChoice = () => {
  const returnOptions = ["Rock", "Paper", "Scissors"];

  const randomIndex = Math.floor(Math.random() * 3);
  computerChoice = returnOptions[randomIndex];
};

const calcWinner = () => {
  computerChoice = computerChoice;

  switch (humanChoice) {
    case computerChoice:
      winner = "tie";
      break;
    case "Rock":
      computerChoice === "Paper" ? (winner = "computer") : (winner = "human");
      break;
    case "Scissors":
      computerChoice === "Rock" ? (winner = "computer") : (winner = "human");
      break;
    case "Paper":
      computerChoice === "Scissors"
        ? (winner = "computer")
        : (winner = "human");
      break;

    default:
      break;
  }
  return winner;
};
const updateUI = () => {
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  computerChoiceElement.textContent = computerChoice ?? "Choose you option";

  let roundResultText = "";
  switch (winner) {
    case "human":
      roundResultText = "WIN";
      break;
    case "computer":
      roundResultText = "LOSE";
      break;
    case "tie":
      roundResultText = "TIE";
      break;
    case null:
      break;
    default:
      break;
  }

  roundResultElement.textContent = roundResultText;
  roundResultElement.className = `result ${roundResultText.toLowerCase()}`;
};

const updateScore = () => {
  winner === "human" ? humanScore++ : computerScore++;
};

const playRound = () => {
  getComputerChoice();
  calcWinner();
  updateScore();
  updateUI();
};

const resetButtonHighlight = () =>
  options.forEach((btn) => btn.classList.remove("clicked"));

const resetGame = () => {
  computerScore = 0;
  humanScore = 0;
  computerChoice = null;
  humanChoice = null;
  winner = null;
  updateUI();

  resetButtonHighlight();
};
const checkWinner = () => {
  if (humanScore === 5) {
    alert("You won!");
    resetGame();
  } else if (computerScore === 5) {
    alert("You lost!");
    resetGame();
  }
};

options.forEach((button) => {
  button.addEventListener("click", (e) => {
    {
      // Highlight clicked button
      resetButtonHighlight();
      button.classList.add("clicked");

      humanChoice = e.target.value;
      playRound();
      checkWinner();
    }
  });
});
