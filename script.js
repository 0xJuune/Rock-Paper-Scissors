let options = ["Rock","Paper","Scissors"]
let r = options[0]
let p = options[1]
let s = options[2]

let userText = NaN
let userAnswer = NaN
let computerIndexSelection = NaN

let userScore = 0
let computerScore = 0

// Randomizes a Number 0-2 for the computer player and stores it in computerIndexSelection. Will be used later to select Hand
let computerRandomize = () => {computerIndexSelection = Math.floor(Math.random() * options.length)}

const start = document.querySelector('#start');
const buttR = document.querySelector('#r');
const buttP = document.querySelector('#p');
const buttS = document.querySelector('#s');
const scoreText = document.querySelector('.scoreText');
const feed = document.querySelector('.visualFeed');
const buttonContainer = document.querySelector('.buttonContainer');
const buttons = document.querySelectorAll('button');


// Toggles button visibility; you either see "Start" or the Hand options.  
let swap = () => {
start.classList.toggle('hide');
buttR.classList.toggle('hide');
buttP.classList.toggle('hide');
buttS.classList.toggle('hide')
scoreText.textContent = `SCORE | You: ${userScore} CPU: ${computerScore}`;
console.log("Swap")
}


// Looks for a button click, takes the appropriate action based on #id of buttons.
buttons.forEach((butt) => {
butt.addEventListener('click', () => {
    userAnswer = butt.id
    if (userAnswer == 'start') {
        userScore = 0;
        computerScore = 0;
        swap()
        feed.textContent = 'GO!!'
    }
    else {
    userAnswer = eval(userAnswer)
    playRound()}
})})


// Refreshes Hand selections and handles the hand comparison logic for win conditions.
let playRound = () => {
computerRandomize()
//userInput()
console.log("You Picked: " + userAnswer)
console.log("CPU Picked: " + options[computerIndexSelection])
options.push(options[0]) // Duplicates options[0] and adds it to the end of the array, so it can be numerically above scissors in Index for win condition logic. It's located here so it doesn't get included in computerRandomize()
if (userAnswer == options[computerIndexSelection + 1]) {
    feed.textContent = "You Win the Round!"
    userScore = userScore + 1
} else if (userAnswer == options[computerIndexSelection]) {
    feed.textContent = "Tie Round, try again."
} else {
    feed.textContent = "You lose this round."
    computerScore = computerScore + 1
}
gameScoreFive()
scoreText.textContent = `SCORE | You: ${userScore} CPU: ${computerScore}`
options.pop() // Removes the duplicated version of options[0] located at the end of the array. ([3])
console.log("Score - You: " + userScore + " CPU:" + computerScore)
}


// Shows the results of the First-to-5 Match. Recursively plays one additional round if there's a tie.
let matchScore = () => {
    if (userScore > computerScore) { 
        feed.textContent = "You Win the Game!!!"
}   else {computerScore > userScore
        feed.textContent = "You LOSE!!1!1!!!111"
}}

// Loop for the First-to-5 Gameplay.
let gameScoreFive = () => { 
    if (computerScore > 4 || userScore > 4) {
        matchScore()
        swap()
    }
}