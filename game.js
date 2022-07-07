function computerPlay(){
    let rock = 'Rock'
    let paper = 'Paper'
    let scissors = 'Scissors'

    let array = [rock, paper, scissors];
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomPlay = array[randomIndex]

    return randomPlay
}

console.log(computerPlay())

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
console.log(playRound('rock', computerPlay()))