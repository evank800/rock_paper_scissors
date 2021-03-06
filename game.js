//displays the computer's play
function computerPlay(){
    let rock = 'Rock'
    let paper = 'Paper'
    let scissors = 'Scissors'

    let array = [rock, paper, scissors];
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomPlay = array[randomIndex]

    return randomPlay
}


let playerCount = 0;
let computerCount = 0;

//play a round
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == 'rock'){
        if (computer == 'scissors'){
            let str = `You Win! ${player} beats ${computer}`;
            playerCount += 1;
            return str;
        }
        else if(computer == 'paper'){
            let str = `You Lose! ${computer} beats ${player}`;
            computerCount += 1;
            return str;
        }
        else{
            let str = 'No Winner! Play again';
            return str;
        }
    }

    else if (player == 'scissors'){
        if (computer == 'paper'){
            let str = `You Win! ${player} beats ${computer}`;
            playerCount += 1;
            return str;
        }
        else if (computer == 'rock'){
            let str = `You Lose! ${computer} beats ${player}`;
            computerCount += 1;
            return str;
        }
        else{
            let str = 'No Winner! Play again';
            return str;
        }
    }

    else{
        if (computer == 'rock'){
            let str = `You Win! ${player} beats ${computer}`;
            playerCount += 1;
            return str;
        }
        else if (computer == 'scissors'){
            let str = `You Lose! ${computer} beats ${player}`;
            computerCount += 1;
            return str;
        }
        else{
            let str = 'No Winner! Play again';
            return str;
        }
    }
}

//play a set of rounds(here 5 rounds)
/* function game(){
    for (let i = 0; i < 5; i++){
        let myPlay = prompt("Rock Paper Scissors: ")
        let result = playRound(myPlay, computerPlay())
        console.log(result)
    }
}
game() */

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


// Convert the contents into strings



const div = document.querySelector('#results');

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

//addEventListener with multiple functionalities
rock.addEventListener('click', () => {const logs = document.createElement('p');
    logs.textContent = playRound('rock', computerPlay());// playRound returns a string
    div.appendChild(logs);
    if (playerCount == 5){
        const para = document.createElement('h2');
        para.textContent = 'You Win!';
        div.appendChild(para);
    }
    else if (computerCount == 5){
        const para = document.createElement('h2');
        para.textContent = 'You lose! Computer wins.';
        div.appendChild(para);     
    };
    playerScore.textContent = `You: ${playerCount}`;
    computerScore.textContent = `Computer: ${computerCount}`;});

paper.addEventListener('click', () => {const logs = document.createElement('p');
    logs.textContent = playRound('paper', computerPlay()); // playRound returns a string
    div.appendChild(logs);
    if (playerCount == 5){
        const para = document.createElement('h2');
        para.textContent = 'You Win!';
        div.appendChild(para);
    }
    else if (computerCount == 5){
        const para = document.createElement('h2');
        para.textContent = 'You lose! Computer wins.';
        div.appendChild(para);
    };
    playerScore.textContent = `You: ${playerCount}`;
    computerScore.textContent = `Computer: ${computerCount}`;});

scissors.addEventListener('click', () => {const logs = document.createElement('p');
    logs.textContent = playRound('scissors', computerPlay()); // playRound returns a string
    div.appendChild(logs);
    if (playerCount == 5){
        const para = document.createElement('h2');
        para.textContent = 'You Win!';
        div.appendChild(para);
    }
    else if (computerCount == 5){
        const para = document.createElement('h2');
        para.textContent = 'You lose! Computer wins.';
        div.appendChild(para);
    };
    playerScore.textContent = `You: ${playerCount}`;
    computerScore.textContent = `Computer: ${computerCount}`;});


    
