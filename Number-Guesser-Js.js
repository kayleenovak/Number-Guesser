var clearButton = document.querySelector('.clear');
var guessButton = document.querySelector('.guess');
var guessed = document.querySelector('.number-guess');
var highOrLow = document.querySelector('.high-low');
var lastGuess = document.querySelector('.last-guess');
var maxChange = document.querySelector('.max-change');
var maxNum = document.getElementById('maximum');
var minChange = document.querySelector('.min-change');
var minNum = document.getElementById('minimum');
var numberInput = document.querySelector('.number-input');
var randomNumber;
var rangeButton = document.querySelector('.range-button');
var resetButton = document.querySelector('.reset');

clearButton.addEventListener('click', clearGuess)
guessButton.addEventListener('click', guessNumber)
numberInput.addEventListener('keyup', clearBtnDisable) 
rangeButton.addEventListener('click', setMinMax);
resetButton.addEventListener('click', resetGame)


function changeHighLowText(numberVal, numerical, min, max) {
    if (numberVal == randomNumber) {
    highOrLow.innerText = 'BOOM!';
  } else if (numberVal < randomNumber) {
    highOrLow.innerText = 'That is too low!';
  } else if (numberVal > max || numberVal < min) {
    highOrLow.innerText = '';
  } else {
    highOrLow.innerText = 'That is too high!';
  }
}

function changeMinMax(min,max) {
  var min = min - 10;
  var max = max + 10;
  minNum.value = `${min}`;
  maxNum.value = `${max}`;
  generateNumber(max, min);
  changeMinMaxText();
  rangeButton.disabled = true;
}

function changeMinMaxText() {
  minChange.innerText = 'Your minimum has been decreased by 10';
  maxChange.innerText = 'Your maximum has been increased by 10';
}

function chooseNumClass(min, max){
  lastGuess.innerText = `Please choose a number between ${min} and ${max}`;
  lastGuess.style.color = "#eb008b";
  guessed.innerText = '';
}

function clearBtnDisable() {
  if (numberInput.value.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
}

function clearGuess() {
  numberInput.value = '';
  clearButton.disabled = true;
}

function delegateClass(numerical, min, max) {
  if (numerical < min || numerical > max ) {
    chooseNumClass(min, max);
  } else {
    lastGuessClass();
  }
}

function delegateMinMaxChange(randomNumber, numberVal, min, max) {
  if(randomNumber == numberVal) {
    changeMinMax(min, max);
  } else {
    minMaxChangeText();
  }
}

function errorMessage() {
  var numerical = parseInt(numberInput.value);
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value);
  delegateClass(numerical, min, max)
}

function generateNumber(max, min) {
  randomNumber = Math.floor(Math.random() * (max - min) + min);
};

function guessNumber() {
  var numberVal = numberInput.value;
  var numerical = parseInt(numberInput.value);
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value); 
  guessed.innerText = numberVal;
  resetButton.disabled = false;
  errorMessage();
  changeHighLowText(numberVal, numerical, min, max);
  delegateMinMaxChange(randomNumber, numberVal, min, max)
}

function lastGuessClass() {
  lastGuess.innerText = 'Your Last Guess Was';
  lastGuess.classList.add('last-guess-class');
  lastGuess.style.color = '#000000';
} 

function minMaxChangeText() {
  minChange.innerText = '';
  maxChange.innerText = '';
}

function rangeButtonDisable() {
  guessButton.disabled = false;
  rangeButton.disabled = true;
  resetButton.disabled = false;
} 

function resetButtonDisable() {
  resetButton.disabled = true;
  guessButton.disabled = true;
  clearButton.disabled = true;
  rangeButton.disabled = false;
}

function resetGame() {
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value);
  highOrLow.innerText = 'Game has been reset!';
  generateNumber(max, min);
  minMaxChangeText();
  resetButton();
  resetText();
}

function resetText() {
  numberInput.value = '';
  guessed.innerText = '';
  minNum.value = '';
  maxNum.value = '';
  lastGuess.innerText = '';
}

function setMinMax() {
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value);
  var numerical = parseInt(numberInput.value);  
  generateNumber(max, min);
  errorMessage();
  rangeButtonDisable();
}