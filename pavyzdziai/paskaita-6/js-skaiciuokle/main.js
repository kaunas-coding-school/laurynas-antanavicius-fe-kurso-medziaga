console.log("Hello");

// 1. Pasirenkam mygtuka is html strukturos
var numberButton = document.querySelectorAll(".js-number-button");
console.log(numberButton);
var screenInput = document.querySelector("#js-screen");
// console.log(screenInput);

// 2. Sekam paspaudimo veiksmą
for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", enterNumber);
}

// Pirmoji funkcija numeriu ivedimui
function enterNumber(event) {
    // console.log(event.target.value);
    if (screenInput.value == "0") {
        screenInput.value = Number(event.target.value);
    } else {
        screenInput.value += Number(event.target.value);
    }
}
