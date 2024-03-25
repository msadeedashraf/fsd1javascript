let heading = "Names";
//let heading = "Ingredients";
let myListHeading = `List of ${heading}`;
/*
let listMembers = ["baking powder", "Cheese", "Almond", "Flour", "Nuts"];
*/

let listMembers = [
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
  "Sadeed",
  "Suze",
  "Jonathan",
  "Suzan",
];

let html = `<h1>${myListHeading}</h1> <ul> `;

for (const x in listMembers) {
  html += `<li>${listMembers[x]}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;

/*
<h2>${myvar1}</h2>
    <ul>
      
    <li>${names[0]}</li>
      
    </ul>
*/

/*
let greeting = "Good Morning";

console.log(`${greeting} Sadeed`);
*/
/*
let mySampleString = "Quick brown fox jumps over the lazy dog";

let myStringCount = mySampleString.length;
document.getElementById("demo").innerHTML = mySampleString.toUpperCase();

let firstName = "Sadeed ";
let lastName = "Rocker";
//document.getElementById("demo").innerHTML = firstName + lastName;
let fullName = "";



document.getElementById("demo").innerHTML = fullName.concat(
  firstName,
  lastName
);
*/
//let x = "John";
//let y = "John";
/*
let x = new String("John");
let y = new String("John");

console.log(typeof x);
console.log(typeof y);

if (x === y) {
  console.log("X and Y matched");
} else {
  console.log("X and Y didn't matched");
}
*/
