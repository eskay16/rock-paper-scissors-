let humanScore = 0;
let computerScore = 0;

const getComputerChoice = ()=>{
    const choice = Math.ceil(Math.random() * 3);
    return choice;
}


const getHumanChoice = ()=>{

    const humanChoice = Number(window.prompt("Enter 1 for Rock, 2 for paper and 3 for scissors", ""));

    return humanChoice;
}



console.log(getHumanChoice());
console.log("computer choice", getComputerChoice());