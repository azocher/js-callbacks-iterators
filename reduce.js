// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// adding reducer method
var reducer = function(accumulator, currentValue) {
    return accumulator * currentValue;
}

console.log(numbers.reduce(reducer));

