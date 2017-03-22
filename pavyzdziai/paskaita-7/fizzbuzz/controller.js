
// Susirandam konteineri
var list = document.querySelector("#js-list");

// Gaunam reiksmes is app.js modulio
var numbers = allNumbers();

// Atvaizduojam HTML, printinam
for (var i = 0; i < numbers.length; i++) {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = numbers[i];
    list.appendChild(paragraph);
}
