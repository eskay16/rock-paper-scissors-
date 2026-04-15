console.log("JS loaded");


const getComputerChoice = ()=>{
    const choice = Math.ceil(Math.random() * 3);
    return choice === 1? "rock": choice === 2? "paper": "scissors";
}

const getHumanChoice = ()=>{

    const humanChoice = window.prompt("Enter Rock, paper or scissors", "").toLowerCase();

    return humanChoice;
}


function playGame(){
let humanScore = 0;
let computerScore = 0;
const round = playRound;



for(let i = 0; i < 5; i++){
    round(getHumanChoice,getComputerChoice);
}



function playRound(humanChoice, computerChoice){

    const humanSelection= humanChoice();
    const computerSelection = computerChoice();

    if(humanSelection === computerSelection) return console.log("tie");

    switch(humanSelection){
        case "rock":
            computerSelection === "scissors"? console.log("you win! Rock beats scissors"): console.log("you lose! Paper beats Rock"); 
            computerSelection === "scissors"?  humanScore++ : computerScore++;
            break;
        case "paper":
            computerSelection === "rock"? console.log("you win! paper beats rock"): console.log("you lose! scissors beats paper"); 
            computerSelection === "rock"?  humanScore++ : computerScore++;
            break;
        case "scissors":
            computerSelection === "paper"? console.log("you win! scissors beats paper"): console.log("you lose! Rock beats Scissors"); 
            computerSelection === "paper"?  humanScore++ : computerScore++;
            break;
        default:
}
}

return (console.log(humanScore > computerScore? "you win!":humanScore == computerScore?"tie": "you lose!", ` you ${humanScore}: computer ${computerScore}`)
);
}

playGame();
