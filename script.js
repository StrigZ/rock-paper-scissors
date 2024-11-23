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
    switch (humanChoice) {
      case computerChoice:
        console.log("TIE");
        console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
        break;
      case "rock":
        console.log(computerChoice === "paper" ? "You Lose." : "You Won.");
        console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
        computerChoice === "paper" ? computerScore++ : humanScore++;
        break;
      case "scissors":
        console.log(computerChoice === "rock" ? "You Lose." : "You Won.");
        console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
        computerChoice === "rock" ? computerScore++ : humanScore++;
        break;
      case "paper":
        console.log(computerChoice === "scissors" ? "You Lose." : "You Won.");
        console.log(`Computer: ${computerChoice}, you: ${humanChoice}`);
        computerChoice === "scissors" ? computerScore++ : humanScore++;
        break;

      default:
        break;
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
