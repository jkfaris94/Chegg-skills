const numbers = new Set(); // Empty Set []

// Adding elements to the Set
numbers.add(3); // Set contains [3]
numbers.add(7); // Set contains [3, 7]
numbers.add(5); // Set contains [3, 7, 5]

console.log(numbers);

numbers.delete(5); // Set contains [3, 7]

console.log(numbers);

// Find the sum of all numbers in the Set
let sum = 0;
for (let num of numbers.values()) {
  sum = sum + num;
}
console.log(sum);

// Find the sum of all numbers in the Set
// numbers.forEach((e) => (sum = sum + e));
// console.log(sum); // 3 + 7 = 10

// changing an array to a Set
const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];
const uniqueGrades = new Set(studentGrades); // Duplicates will be removed

for (let grade of uniqueGrades.values()) {
  console.log(grade); // 'B', 'F', 'A', 'D'
}


// Create an array from the Set
const distinctGrades = [...uniqueGrades]; // Array contains ['B', 'F', 'A', 'D']
console.log(distinctGrades);

//check if a value exists in the Set
numbers.has(3); //true
numbers.has(8); //false
uniqueGrades.has("C"); // false

//common uses of sets
// How many unique characters are in the word 'Data Structures'?
const word = "Data Structures";

// Create a Set - lowercase the word
const set = new Set(word.toLowerCase());

// Size of the Set is the number of unique characters
console.log(set.size);