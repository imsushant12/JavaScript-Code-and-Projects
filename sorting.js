var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// using .sort() function:
const sortedValuesObjects = items.sort((item1, item2) => item1.value - item2.value);
const sortedValues = sortedValuesObjects.map(item => item.value);
console.log(sortedValuesObjects);
console.log(sortedValues);


