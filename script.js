const returnOptions = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return returnOptions[randomIndex];
};

const getHumanChoice = () => {
  let humanChoice = prompt("What is your choice?").toLowerCase().trim();
  while (!returnOptions.includes(humanChoice)) {
    humanChoice = prompt("Available options: 'rock', 'paper', 'scissors'");
  }
  return humanChoice;
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) {
      console.log("TIE");
      console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
    } else if (
      (computerChoice === "rock" || humanChoice === "rock") &&
      (humanChoice === "paper" || computerChoice === "paper")
    ) {
      console.log(computerChoice === "rock" ? "You Won." : "You Lose.");
      console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
      return computerChoice === "rock" ? humanChoice++ : computerScore++;
    } else if (
      (computerChoice === "rock" || humanChoice === "rock") &&
      (humanChoice === "scissors" || computerChoice === "scissors")
    ) {
      console.log(computerChoice === "rock" ? "You Lose." : "You Won.");
      console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
      return computerChoice === "rock" ? computerScore++ : humanScore++;
    } else if (
      (computerChoice === "paper" || humanChoice === "paper") &&
      (humanChoice === "scissors" || computerChoice === "scissors")
    ) {
      console.log(computerChoice === "paper" ? "You Won." : "You Lose.");
      console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
      return computerChoice === "paper" ? humanScore++ : computerScore++;
    }
  };

  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  console.log(
    humanScore > computerScore ? "YOU WON THE GAME!" : "YOU LOST THE GAME"
  );
  console.log(`Final score:
    Computer: ${computerScore}
    You: ${humanScore}
    `);
};
