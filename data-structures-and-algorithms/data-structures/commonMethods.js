//array of names
const names = [
  "Aegnor",
  "Elenwe",
  "Cirdan",
  "Luthien",
  "Amerie",
  "Galion",
  "Daeron",
  "Orophin"
];

//The push() method of the array adds one or more elements to the end of the array.
names.push("Glorfindel");
console.log(names);

//The pop() method removes the last element from an array and returns that element.
person = names.pop();
console.log(person);

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
names.unshift("Glorfindel");
console.log(names);

//The shift() method removes the first element from an array and returns that element.
names.shift();
console.log(names);

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
names.splice(2, 1, "Cirdan");
console.log(names);

// the map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const upperCaseNames = names.map(name => name.toUpperCase());   
console.log(upperCaseNames);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const longNames = names.filter(name => name.length > 6);
console.log(longNames);

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// In this case, it calculates the total number of characters in all names.
// The second argument to reduce is the initial value of the accumulator, which is set to 0.
const totalCharacters = names.reduce((total, name) => total + name.length, 0);
console.log(totalCharacters);