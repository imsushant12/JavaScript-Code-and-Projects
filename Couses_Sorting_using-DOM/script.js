const courses = [
  {
    name: "JavaScript",
    price: 1.5,
  },
  {
    name: "Java",
    price: 2.3,
  },
  {
    name: "C++",
    price: 2.7,
  },
  {
    name: "React",
    price: 2.5,
  },
  {
    name: "Python",
    price: 2.2,
  },
  {
    name: "Angular",
    price: 3.2,
  },
];

// Function to generate the list of courses in the place of <li> tag.
function generateList() {
  const ul = document.querySelector(".list-group");
  // Initially emptying all the values in ul tag to get a sorted courses.
  ul.innerHTML = "";

  // Iterating through course and then adding them as li (+span) --> ul
  courses.forEach((course) => {
    // Creating an li tag with class name as : list-group-item
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    // Adding text in the li tag
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    // Similarly creating a span tag and adding that span tag
    // to the previously created li tag.
    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    // Appending the span to the li tag.
    li.appendChild(span);

    // Finally injecting the li tags into te ul tag of the HTML page.
    ul.appendChild(li);
  });
}

// Calling the generateList function whenever page loads.
window.addEventListener("load", generateList);

// Sorting the array of courses a/c to their prices. (low to high)
const button = document.querySelector(".sort-btn-1");
button.addEventListener("click", () => {
  courses.sort((x, y) => x.price - y.price);
  generateList();
});

// Sorting the array of courses a/c to their prices. (high to low)
const button2 = document.querySelector(".sort-btn-2");
button2.addEventListener("click", () => {
  courses.sort((x, y) => y.price - x.price);
  generateList();
});

