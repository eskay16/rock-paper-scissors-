let humanScore = 0;
let computerScore = 0;
let totalScore = 0;
const displayCompMove = document.createElement("img");
const displayHumanMove = document.createElement("img");
const openModal = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".modal-close");
const displayHumanScore = document.querySelector("#player");
const displayCompScore = document.querySelector("#computer");
const announceWinner = document.querySelector(".announceWinner");
displayCompMove.className = "selectionImage";
displayHumanMove.className = "selectionImage";
const getComputerChoice = () => {
  const choice = Math.ceil(Math.random() * 3);
  return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors";
};

function playGame(humanChoice) {
 
  const playerMove = document.querySelector(".playerMove");
  const compMove = document.querySelector(".compMove");

  const commentator = document.querySelector(".commentator");

  if (totalScore < 5) {
    playRound(humanChoice, getComputerChoice());
  } else {
    return;
  }

  function playRound(humanSelection, computerSelection) {
    playerMove ? playerMove.replaceWith(displayHumanMove) : "";

    displayHumanMove.setAttribute("src", `./images/${humanChoice}.png`);

    compMove ? compMove.replaceWith(displayCompMove) : "";

    displayCompMove.setAttribute("src", `./images/${computerSelection}.png`);

    if (humanSelection === computerSelection)
      return (commentator.textContent = "tie");

    switch (humanSelection) {
      case "rock":
        computerSelection === "scissors"
          ? ((commentator.textContent = "you win! Rock beats scissors"),
            humanScore++)
          : ((commentator.textContent = "you lose! Paper beats Rock"),
            computerScore++);
        break;

      case "paper":
        computerSelection === "rock"
          ? ((commentator.textContent = "you win! paper beats rock"),
            humanScore++)
          : ((commentator.textContent = "you lose! scissors beats paper"),
            computerScore++);
        break;

      case "scissors":
        computerSelection === "paper"
          ? ((commentator.textContent = "you win! scissors beats paper"),
            humanScore++)
          : ((commentator.textContent = "you lose! Rock beats Scissors"),
            computerScore++);
        break;

      default:
    }

    totalScore = humanScore > computerScore ? humanScore : computerScore;
    displayScores();
    if (totalScore === 5) {
      openModal.classList.add("show");
        announceWinner.textContent = totalScore === humanScore? "You Win!": "You Lose!";

    }
  }
}

const selection = document.querySelector(".selections");

selection.addEventListener("click", (event) => {
  const pickedChoice = event.target.getAttribute("class");

  playGame(pickedChoice);
});

function closeModal(event) {
  openModal.classList.remove("show");

    humanScore = 0;
    computerScore = 0;
    totalScore = 0;
    displayScores();

  }


closeModalBtn.addEventListener("click", closeModal)
openModal.addEventListener("click", (event) => {
  if (event.target === openModal) {
    closeModal();
  }
});


function displayScores(){
displayHumanScore.textContent = `${humanScore}`;
    displayCompScore.textContent = `${computerScore}`;
}