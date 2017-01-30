'user strict';

var screenInput = document.getElementById('js-screen');
var numberInput = document.querySelectorAll('.js-number');
var firstNumber, actionValue;
var actionInput = document.querySelectorAll('.js-action');
var resultInput = document.getElementById('js-result');

// Ivedame pirmaji skaiciu ir veiksma
function actionSave(e) {
  firstNumber = parseInt(screenInput.value);
  actionValue = e.target.value;
  screenInput.value = null;
}

// Atvaizduojame rezultata ekrane
function showResult() {
  var secondNumber = parseInt(screenInput.value);
  var result;
  switch (actionValue) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "X":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      result = firstNumber + secondNumber;
  }
  screenInput.value = result;
}

// Issaugojame reiksme
function saveValue(e) {
  screenInput.value += e.target.value;
}

// Priskiriam click funkcija skaiciams
for (var i = 0; i < numberInput.length; i++) {
  numberInput[i].addEventListener('click', saveValue);
}

// Priskiriam click funkcija veiksmams
for (var i = 0; i < actionInput.length; i++) {
  actionInput[i].addEventListener('click', actionSave);
}

// Priskiriam click funkcija rezultatui
resultInput.addEventListener('click', showResult);
