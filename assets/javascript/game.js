var words = [
    "BARATHEON",
    "DRAGON",
    "STARK",
    "THRONE",
    "TARGARYEN",
    "GREYSCALE",
    "HAND",
    "LANNISTER",
    "HOUSE"
];

var wins = 0; 
var losses = 0; 
var maxGuesses;
var guessLeft = 9; 
var attempts = []; 
var lettersInTitle = []; 
var finished = false; 
var newWord; 

// create a reset function that we can go back to to restart the game
function reset() {
    // choose a word at random from the array above
    newWord = words[Math.floor(Math.random() * words.length)];
    console.log(newWord);
    newWordArr = [];

// replace random word chosen with underscores
    for (var i = 0; i < newWord.length; i++) {
        newWord[i] = "_";
    }
    guessLeft = maxGuesses;
    attempts = [];
}

// display on the screen - not working
function updateScreen() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("guessLeft").innerText = guessLeft;
    document.getElementById("newWord").innerText = lettersInTitle.join("");
    document.getElementById("attempts").innerText = attempts;
}

// PSEUDOCODE
// onkeyup function to note whenever a letter is chosen
// compare letter chosen using indexOf 
// if indexOf === -1, then it is not in the word so we decrement no. of guesses accordingly and push to attempts array
// if indexOf > -1, then display on page
// if guessLeft <= 0, then increment loss counter and game over
// if there are no "_" left in lettersInTitle, then winner
