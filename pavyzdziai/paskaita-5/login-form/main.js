// Web API console objektas
// log metodas, kuri turi console objektas
console.log(window);

// 1. Susikuriam kintamaji
var data = "laurynas@kaunascoding.lt";
console.log(data);

// 2. Susiraskim #email-input ivedimo laukeli
var emailInput = document.querySelector("#email-input");
console.log(emailInput);

// 3. Modifikuojam, keiciam objekto savybes
emailInput.value = data;

////////
// 1. Susiraskim formos elementa
var loginForm = document.querySelector("form");
console.log(loginForm);

// 2. Klausomes ivykio submit
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(emailInput.value);
});
