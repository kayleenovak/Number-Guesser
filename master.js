var randomNumber;
var numberInput = document.getElementById('numberInput');
var guessButton = document.getElementById('guess');
var guessed = document.getElementById('numberguess');
var highOrLow = document.getElementById('highlow');
var clearButton = document.getElementById('clear');
var resetButton = document.querySelector('.reset');
var lastguess = document.querySelector('.lastguess');
var minNum = document.getElementById('minimum');
var maxNum = document.getElementById('maximum');
var min = minNum.value;
var max = maxNum.value;


document.addEventListener("DOMContentLoaded", generateNumber);

guessButton.addEventListener('click', function () {
  var numberVal = numberInput.value;
  var numerical = parseInt(numberInput.value);
  var min = minNum.value;
  var max = maxNum.value;

  guessed.innerHTML = numberVal;
  resetButton.disabled = false;

  if (numberVal == randomNumber) {
  highOrLow.innerHTML = "BOOM!";
} else if (numberVal < randomNumber) {
  highOrLow.innerHTML = "That is too low!";
}  else {
    highOrLow.innerHTML = "That is too high!";
}

  if (numerical < min || numerical > max || isNaN(numerical)) {
    lastguess.innerText = `Please choose a number between $(min) and $(max)`;
    lastguess.style.color = "#eb008b";
    guessed.innerText = "";
    highlow.innerText = "";
  }  
});

clearButton.addEventListener('click', function() {
  numberInput.value = " ";
  clearButton.disabled = true;
});

resetButton.addEventListener('click', function () {
  generateNumber();
  numberInput.value = "";
  guessed.innerText = "";
  highlow.innerText = "Game has been reset!";
  resetButton.disabled = true;
});

numberInput.addEventListener('keyup', function() {
  if (numberInput.value.length === 0) {
  clearButton.disabled = true;
} else {
  clearButton.disabled = false;
}
});
  

function generateNumber() {
 randomNumber = Math.random() * (max - min) + min;
console.log(randomNumber);
};  