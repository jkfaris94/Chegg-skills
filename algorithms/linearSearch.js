const indexOf = require("./indexOf");

const people = [
  {
    id: 1,
    first_name: "Monah",
    last_name: "Yarnall",
    age: 17,
  },
  {
    id: 2,
    first_name: "Daphne",
    last_name: "McGaugey",
    age: 81,
  },
  {
    id: 3,
    first_name: "Walker",
    last_name: "Bucknell",
    age: 81,
  },
];

function personIs81(person) {
  return person.age === 81;
}

console.log(indexOf(personIs81, people));

function numberIs5(value) {
  return value === 5;
}

console.log(indexOf(numberIs5, [1, 3, 5, 7, 9]));