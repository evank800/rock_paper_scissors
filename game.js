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