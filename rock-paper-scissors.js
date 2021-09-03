const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Not a correct input");
  }
};

const getComputerChoice = () => {
  numberChoice = Math.floor(Math.random() * 3);
  if (numberChoice === 0) {
    return "rock";
  } else if (numberChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `It\'s a tie! Both of you have ${userChoice}`;
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return `Computer wins with ${computerChoice}`;
    } else {
      return `Computer looses with ${computerChoice}`;
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return `Computer wins with ${computerChoice}`;
    } else {
      return `Computer looses with ${computerChoice}`;
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return `Computer wins with ${computerChoice}`;
    } else {
      return `Computer looses with ${computerChoice}`;
    }
  } else if (userChoice === "bomb") {
    return "Nobody wins due to a bomb being used - BAM!";
  }
};

const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log(`You picked ${userChoice}`);
  console.log(`Computer picked ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame("bomb");
