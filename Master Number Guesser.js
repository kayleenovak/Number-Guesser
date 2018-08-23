var numberInput = document.querySelector('.number-input');
var guessButton = document.querySelector('.guess');
var guessed = document.querySelector('.number-guess');
var highOrLow = document.querySelector('.high-low');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');
var lastguess = document.querySelector('.last-guess');
var minChange = document.querySelector('.min-change');
var maxChange = document.querySelector('.max-change');
var minNum = document.getElementById('minimum');
var maxNum = document.getElementById('maximum');
var rangeButton = document.querySelector('.range-button');
var randomNumber;

function generateNumber(max, min) {
  randomNumber = Math.floor(Math.random() * (max - min) + min);
};

function errorMessage () {
  var numerical = parseInt(numberInput.value);
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value);
  if (numerical < min || numerical > max ) {
      lastguess.innerText = `Please choose a number between ${min} and ${max}`;
      lastguess.style.color = "#eb008b";
      guessed.innerText = '';
      highlow.innerText = '';
  } else {
      lastguess.innerText = 'Your Last Guess Was';
      lastguess.classList.add('last-guess-class');
      lastguess.style.color = '#000000'
  }
}  

rangeButton.addEventListener('click', function() {
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value);
  var numerical = parseInt(numberInput.value);  
  generateNumber(max, min);
  errorMessage();
  guessButton.disabled = false;
  rangeButton.disabled = true;
  resetButton.disabled = false;
})


guessButton.addEventListener('click', function () {
  var numberVal = numberInput.value;
  var numerical = parseInt(numberInput.value);
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value); 
  guessed.innerHTML = numberVal;
  
  errorMessage();

  resetButton.disabled = false;

  if (numberVal == randomNumber) {
    highOrLow.innerHTML = 'BOOM!';
  } else if (numberVal < randomNumber) {
    highOrLow.innerHTML = 'That is too low!';
  }  else {
    highOrLow.innerHTML = 'That is too high!';
  }

  if(randomNumber == numberVal) {
    var min = min - 10;
    var max = max + 10;
    minNum.value = `${min}`;
    maxNum.value = `${max}`;
    generateNumber(max, min);
    minChange.innerText = 'Your minimum has been decreased by 10';
    maxChange.innerText = 'Your maximum has been increased by 10';
    rangeButton.disabled = true;
  } else {
    minChange.innerText = '';
    maxChange.innerText = '';;
  }
});

clearButton.addEventListener('click', function() {
  numberInput.value = '';
  clearButton.disabled = true;
});

resetButton.addEventListener('click', function () {
  var min = parseInt(minNum.value);
  var max = parseInt(maxNum.value);
  generateNumber(max, min);
  numberInput.value = '';
  guessed.innerText = '';
  minNum.value = '';
  maxNum.value = '';
  highOrLow.innerText = 'Game has been reset!';
  minChange.innerText = '';
  maxChange.innerText = '';
  resetButton.disabled = true;
  guessButton.disabled = true;
  clearButton.disabled = true;
  rangeButton.disabled = false;
});

numberInput.addEventListener('keyup', function() {
  if (numberInput.value.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
});