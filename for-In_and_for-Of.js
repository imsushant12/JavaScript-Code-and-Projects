// For of is generally used for the arrays:
var arr = ["Hey", "there!", "How", "are", "you?"];
for (const i of arr) 
    console.log(i);

// For in is generally used for the objects:
var obj = {
  day: "Thursday",
  date: 8,
  month: "July",
  year: 2021,
};
for (const i in obj)
  console.log(`The Key is : ${i} \t and its value is : ${obj[i]}`);
