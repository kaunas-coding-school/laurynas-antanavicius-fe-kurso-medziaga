function oddEven(a){
    if (a % 2 === 0) {
        a = "Even";
    } else if (a % 3 === 0 || a % 5 === 0 || a % 7 === 0) {
        a = "Odd";
    }
    return a;
}

function allNumbers(start, end){
    if (start <= 0 || end > 100 || start > end ) {
        return false;
    }
    var array = [];
    for (var i = 0; i <= end - start; i++) {
        array.push(oddEven(i+start));
    }
return array;
}

console.log(allNumbers(1, 100));
