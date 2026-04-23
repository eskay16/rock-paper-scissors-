// console.log("JS loaded");

// const getComputerChoice = () => {
//     const choice = Math.ceil(Math.random() * 3);
//     return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors";
// }

// const getHumanChoice = () => {
//     const humanChoice = window.prompt("Enter Rock, paper or scissors", "").toLowerCase();
//     return humanChoice;
// }

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//          playRound(getHumanChoice(), getComputerChoice());
//     }

//     function playRound(humanSelection, computerSelection) {
//         if (humanSelection === computerSelection) return console.log("tie");

//         switch (humanSelection) {
//             case "rock":
//                 computerSelection === "scissors"
//                     ? (console.log("you win! Rock beats scissors"), humanScore++)
//                     : (console.log("you lose! Paper beats Rock"), computerScore++);
//                 break;

//             case "paper":
//                 computerSelection === "rock"
//                     ? (console.log("you win! paper beats rock"), humanScore++)
//                     : (console.log("you lose! scissors beats paper"), computerScore++);
//                 break;

//             case "scissors":
//                 computerSelection === "paper"
//                     ? (console.log("you win! scissors beats paper"), humanScore++)
//                     : (console.log("you lose! Rock beats Scissors"), computerScore++);
//                 break;

//             default:
//                 console.log("Invalid input");
//         }
//     }

//     console.log(
//         humanScore > computerScore
//             ? "you win!"
//             : humanScore == computerScore
//             ? "tie"
//             : "you lose!",
//         ` you ${humanScore}: computer ${computerScore}`
//     );
// }

// playGame();