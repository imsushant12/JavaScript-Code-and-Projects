// Using arrow function.
var elements = [2, 4, 6, 8].every((number) => {
  return number % 2 === 0;
});
console.log(elements);

// UWithout using arrow function.
var elements = [2, 4, 6, 8].every(function isEven(number) {
  return number % 2 === 0;
});
console.log(elements);

var elements = [2, 4, 6, 8].every(function (number) {
  return number % 2 === 0;
});
console.log(elements);

var elements = [2, 4, 6, 8].every(
  (answer = function (number) {
    return number % 2 === 0;
  })
);
console.log(elements);

// Without using return
 
var elements = [2, 4, 6, 8].every((number) => number % 2 === 0);
console.log(elements);
