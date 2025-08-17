//Problem 1: Word-to-First-Line Mapping (Hash Table + Arrays)

// Task: Given an array of strings (lines), create a hash table mapping each 
// word to the first line number it appears on.



function test(data) {
  const result = {}; // Create an empty object

  for (let i = 0; i < data.length; i++) { // Iterate through each line
    const words = data[i].toLowerCase().split(/[\s.,;"']+/); // Convert to lowercase and split into words
    for (let word of words) {
      if (word === "") continue; // Skip empty strings
      result[word] = i;
      if (!result[word]) { // Only set if word hasn't been seen
        result[word] = i; // Store first line number
      }
    }
  }
  return result;
}

// Test cases
console.log(test(["cat dog", "dog cat"])); // { cat: 0, dog: 0 }
console.log(test(["CAT dog", "cat DOG", "Cat"])); // { cat: 0, dog: 0 }
console.log(test([""])); // {}