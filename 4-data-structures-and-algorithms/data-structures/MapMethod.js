const addressBook = new Map(); // An empty Map

// To add an entry to the map, use the set() method. 
// The set() method takes two arguments: a key and a value.

addressBook.set("sherlock", {
  email: "holmes@scotlandyard.com",
  address: "221B Baker Street, London"
});
// The key "sherlock" identifies the value.
console.log(addressBook);

//Adding a second entry creates a new key-value pair in the map.
addressBook.set("hercule", {
  email: "poirot@scotlandyard.com",
  address: "Flat 203 at 56B Whitehaven Mansions"
});
console.log(addressBook);

// Attempting to add a second entry with the same key results
// in replacing the original value. The keys are never duplicated.

addressBook.set("sherlock", {
  email: "jones@nypd.com",
  address: "13 5th Avenue, Queens"
});
console.log(addressBook);

// You can get the number of entries in a map by its size property:
console.log(addressBook.size); // 2

// To retrieve a value from the map, use the get() method with the specific key.
const poirot = addressBook.get("hercule"); // gets {email: "poirot@scotlandyard.com", address: "Flat 203 at 56B Whitehaven Mansions"}
console.log(poirot);

//And to completely remove an entry from the map, use the delete() method.
addressBook.delete("sherlock");
console.log(addressBook); // Now only contains the entry for "hercule"



// There are several methods for iterating a map. You can iterate by keys, values, or entries,
//  using the built-in keys(), values(), or entries() methods, respectively.

// To print the list of usernames in the map created above, for example, you can use a for ... of loop over the keys.
for (let key of addressBook.keys()) {
  console.log(key);
}

// or, to simply print the values in the map, you can run this code:
for (let value of addressBook.values()) {
  console.log(value);
}

// An entry is a single key-value pair in a map. Take a look at this map and its entries:
const months = new Map();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");
// To iterate through the entries, you can use the entries() method:
for (let [key, value] of months.entries()) {
  console.log(`${key + 1} : ${value}`); // print 1: January etc
}

// You can also use the forEach() method to iterate through the entries:
months.forEach((value, key) => console.log(`${key + 1} : ${value}`)); // print 1: January etc

// you can create a map directly from that data. For example, 
// an array of arrays in the form [[key1, value1], [key2, value2], ... ]
const days = [
  [0, "Sunday"],
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"]
];

const dayMap = new Map(days);


// Conversely, you can use the spread operator to create an array of arrays from a map.
const dayArray = [...dayMap];
// results in:
// [
//   [0, "Sunday"],
//   [1, "Monday"],
//   [2, "Tuesday"],
//   [3, "Wednesday"],
//   [4, "Thursday"],
//   [5, "Friday"],
//   [6, "Saturday"],
// ]

//the efficency of maps notation is 0(1) for get, set, has, and delete operations.