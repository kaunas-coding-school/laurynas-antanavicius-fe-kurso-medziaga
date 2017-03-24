var fs = require("fs");

// var 1
fs.readFile(process.argv[2], 'utf-8' ,function (err, data) {
    if (err) {
        console.error(err);
    }
    // var text = data.toString();

    var textArray = data.split("\n");

    var count = textArray.length - 1;

    console.log(count);

});


// var 2 - chaining methods
//
// var count = fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;
