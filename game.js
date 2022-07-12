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


//play a round
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

    if (player == 'rock'){
        if (computer == 'scissors'){
            let str = `You Win! ${player} beats ${computer}`
            return str
        }
        else if(computer == 'paper'){
            let str = `You Lose! ${computer} beats ${player}`
            return str
        }
        else{
            let str = 'No Winner! Play again'
            return str
        }
    }

    else if (player == 'scissors'){
        if (computer = 'paper'){
            let str = `You Win! ${player} beats ${computer}`
            return str
        }
        else if (computer = 'rock'){
            let str = `You Lose! ${computer} beats ${player}`
            return str
        }
        else{
            let str = 'No Winner! Play again'
            return str
        }
    }

    else{
        if (computer == 'rock'){
            let str = `You Win! ${player} beats ${computer}`
            return str
        }
        else if (computer == 'scissors'){
            let str = `You Lose! ${computer} beats ${player}`
            return str
        }
        else{
            let str = 'No Winner! Play again'
            return str
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