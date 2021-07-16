function sumSpread(a, b) {
  return a + b;
}

console.log("Using Normal Calling : " + sumSpread(10, 20));
var value = [10, 20];
console.log("Using SPREAD on same size of array : " + sumSpread(...value));
var values = [1, 2, 3, 4, 5];
// console.log(sumSpread(values));      // --> WRONG WAY
console.log("Using SPREAD on varied size array : " + sumSpread(...values));

console.log("\n\n");

function sumRest(...args) {
  let sum = 0;
  for (let i of args) sum += i;

  return sum;
}

console.log("Using Normal Calling : " + sumRest(10, 20));
var x = [10, 20];
console.log("Using Rest on same size of array : " + sumRest(...x));
var xArray = [1, 2, 3, 4, 5];
// console.log(sumSpread(xArray));      // --> WRONG WAY
console.log("Using Rest on varied size array : " + sumRest(...xArray));
console.log("Using Rest on a number of inputs : " + sumRest(2, 4, 6, 8, 10));
