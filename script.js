let options = ["Rock","Paper","Scissors"]
// uncomment to add [0] to end. options.push(options[0]) 

let r = options[0]
let p = options[1]
let s = options[2]

let userText = prompt("Rock, Paper, or Scissors?")

let user
let userAnswer = NaN
let computerIndexSelection = NaN
let userScore = 0
let computerScore = 0


// Randomizes a Number 0-2 for the computer player and stores it in computerIndexSelection. Will be used later to select Hand
let computerRandomize = () => {computerIndexSelection = Math.floor(Math.random() * options.length)}

// Takes user's typed choice, and uses it to select one of three letter variables for choosing a Hand. 
let userInput = () => {userAnswer = userText.charAt(0).toLowerCase(); userAnswer = eval(userAnswer)}

// Refreshes Hand selections and handles the hand comparison logic for win conditions.
let playRound = () => {
computerRandomize() 
userInput()   
console.log("You Picked: " + userAnswer)
console.log("CPU Picked: " + computerIndexSelection)
options.push(options[0]) // Duplicates options[0] and adds it to the end of the array, so it can be numerically above scissors in Index for win condition logic. It's located here so it doesn't get included in computerRandomize()
if (userAnswer == options[computerIndexSelection + 1]) {
    console.log("You Win!")
    userScore = userScore + 1
} else if (userAnswer == options[computerIndexSelection]) {
    console.log("Tie Game, try again.")
} else {
    console.log("You LOSE!!!!11!1!")
    computerScore = computerScore + 1
}
options.pop() // Removes the duplicated version of options[0] located at the end of the array. ([3])
console.log("Score - You: " + userScore + " CPU:" + computerScore)
}

playRound()