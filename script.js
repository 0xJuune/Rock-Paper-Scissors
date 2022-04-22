let options = ["Rock","Paper","Scissors"]
options.push(options[0])

let r = options[0]
let p = options[1]
let s = options[2]

let userStore = NaN
let computerStore = NaN

let computerInput = () => {computerStore = options[Math.floor(Math.random() * options.length)]}

let userText = prompt("Rock, Paper, or Scissors?")
let userInput = () => {userStore = userText.charAt(0).toLowerCase(); userStore = eval(userStore)}


userInput()     // asks User for a game input selection.
computerInput() // randomly assigns a game input for the Computer opponent.

console.log(userStore)
console.log(computerStore)

