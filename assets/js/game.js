var computerChoice = ["A", "B", "C", "D", "E", "F", "G"];
var x = 12;
var wins = 1;
var losses = 0;

var letters = [];
// For each wrong guess the remaining # of guesses decrements by 1 from 12 to 0.
// It stops at 0 and counts as 1 loss.
function wrongAnswer() {
  if (x > 0) {
    x--;
    userLost();
  }
}

function userLost() {
  if ( x === 0) {
    losses++;
    document.getElementById('lost').innerHTML = losses;
  }
}

document.onkeyup = function(event) {
  var input = event.key;
  var userGuess = input.toUpperCase();

  var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  document.getElementById('computerPick').innerHTML = computerGuess;

  if (userGuess === computerGuess) {
    document.getElementById('win').innerHTML = wins++;
    console.log("true");
  } else {
    document.getElementById('remainingGuesses').innerHTML = x;
    console.log("false");
    wrongAnswer();
  }

  var addLetters = letters.push(userGuess);
  document.getElementById('printGuesses').innerHTML = userGuess;

}
