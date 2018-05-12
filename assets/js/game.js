/*
Wins: (# of times the user has guessed the letter correctly)
Losses: (# of times the user has failed to guess the letter correctly after 
exhausting all guesses)
Guesses Left: (# of guesses left. This will update)
Your Guesses So Far: (the specific letters that the user typed. Display these 
until the user either wins or loses.)

When the player wins, increase the Wins counter and start the game over again 
(without refreshing the page).

When the player loses, increase the Losses counter and restart the game without 
a page refresh (just like when the user wins).
*/

// const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letters = ["A", "B", "C"];
let computerChoice = "";
let userGuess = "";
let wins = 0;
let loses = 0;
let guessesLeft = 3;
let guessesAttempted = [];


document.onkeyup = function(event) {
	event.preventDefault();
	guessesLeft--;
	var input = event.key.toUpperCase();

	function reset() {
		let computerChoice = "";
		let userGuess = "";
		let guessesLeft = 3;
		let guessesAttempted = [];
		document.querySelector("#guesses-left").innerHTML = guessesLeft;
	}

	// Computer randomly chooses a letter
function randomComputerChoice() {
	// Random choice from letters[0] to letters[letters.length] 
	computerChoice = letters[Math.floor(Math.random() * Math.floor(letters.length))];
}

function getUserInput(input) {
	userGuess = input;
	guessesAttempted.push(input);
	document.querySelector("#guesses-attempted").innerHTML = guessesAttempted.join(" ");
}

function checkGuess(computerChoice, userGuess) {
	console.log({
		"computer" : computerChoice,
		"user": userGuess
	})
	if (!(computerChoice === userGuess)) {
		if (guessesLeft > 0) {
			document.querySelector("#guesses-left").innerHTML = guessesLeft;
		} else if (guessesLeft === 0) {
			loses++;
			console.log("game lost!")
			document.querySelector("#loses").innerHTML = loses;
			reset();
		}
	} else {
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		reset();
	} 
}

	randomComputerChoice();
	getUserInput(input);
	checkGuess(computerChoice, userGuess);
}
