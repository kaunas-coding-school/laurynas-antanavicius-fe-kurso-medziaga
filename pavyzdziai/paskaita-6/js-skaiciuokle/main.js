(function() {
    'use strict';
    // console.log("Hello");

    // 1. Pasirenkam mygtuka is html strukturos
    var numberButton = document.querySelectorAll(".js-number-button");
    // console.log(numberButton);
    var screenInput = document.querySelector("#js-screen");
    // console.log(screenInput);
    var operatorInput = document.querySelectorAll(".js-operator-button");
    // console.log(operatorInput);
    var resultInput = document.querySelector("#js-result");
    var clearButton = document.querySelector("#js-clear");

    var firstNumber, operatorValue;

    // 2. Sekam paspaudimo veiksmą
    for (var i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener("click", enterNumber);
    }

    for (var j = 0; j < operatorInput.length; j++) {
        operatorInput[j].addEventListener("click", saveNumber);
    }

    resultInput.addEventListener("click", showResult);
    clearButton.addEventListener("click", clearScreen);

    // Pirmoji funkcija numeriu ivedimui
    function enterNumber(event) {
        // console.log(event.target.value);
        if (screenInput.value == "0") {
            screenInput.value = Number(event.target.value);
        } else {
            screenInput.value += Number(event.target.value);
        }
    }

    // TODO Funkcija kuri issaugo skaiciu ir veiksma
    function saveNumber(event) {
        firstNumber = Number(screenInput.value);
        operatorValue = event.target.value;
        // console.log(firstNumber, operatorValue);
        screenInput.value = 0;
    }

    // TODO Funkcija kuri parodo rezultata
    function showResult() {
        var secondNumber = Number(screenInput.value);
        var result;

        switch (operatorValue) {
            case "X":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            default:
                console.error("No operator value received");
        }
        screenInput.value = result;
        // result = firstNumber * secondNumber;
        // result = firstNumber / secondNumber;
        // result = firstNumber + secondNumber;
        // result = firstNumber - secondNumber;
    }

    function clearScreen() {
        firstNumber = undefined;
        operatorValue = undefined;
        screenInput.value = 0;
    }

})();
