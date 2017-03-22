function minimum(a, b) {

    if (typeof(a) === 'object') {
        var min = a[0];
        for (var i = 0; i < a.length; i++) {
            if (a[i] < min){
                min = a[i];
            }
        }
        return min;
    }

    if (a > b) {
        return b;
    }
    return a;
}

function maximum(numbers){
    return Math.max.apply(null, numbers);
}

function count(numbers){
    return numbers.length;
}

function returnAll(numbers) {
    var min = minimum(numbers);
    var max = maximum(numbers);
    var cnt = count(numbers);
    var stats = [min, max, cnt];
    return stats;
}

console.log(returnAll([3,5,-1,10]));
