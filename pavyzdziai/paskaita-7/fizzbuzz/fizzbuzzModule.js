//
//
//
function fizzbuzz(input) {

    if (input % 15 === 0 ) {
        input = "FizzBuzz";
    } else if (input % 5 === 0){
        input = "Buzz";
    } else if (input % 3 === 0) {
        input = "Fizz";
    }

    return input;
}

function allNumbers() {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        array.push(fizzbuzz(i));
    }
    return array;
}
