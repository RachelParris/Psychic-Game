var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var x = 12;
var wins = 0;
var losses = 0;


document.getElementById('win').innerHTML = wins;
document.getElementById('lost').innerHTML = losses;
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
  	wins++
    document.getElementById('win').innerHTML = wins;
    console.log("true");
  } else {
    document.getElementById('remainingGuesses').innerHTML = x;
    console.log("false");
    wrongAnswer();
  }

  document.getElementById('printGuesses').innerHTML = userGuess;

}
