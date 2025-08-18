/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  let result = {}; // Initialize an empty object to store the concordance 

  // Iterate through each line of data array, index = line number
  for (let i = 0; i < data.length; i++) { 

    // Convert line to lowercase and split into words
    const words = data[i].toLowerCase().split(/[\s.,';]/); 
    const seen = new Set(); // Create Set to track unique words to avoid duplicates 

    for (let word of words) { // Process each word in the current line
      if (word === "") continue; // Skip empty strings 

      if (!seen.has(word)) { // Check if word hasn't been seen 
        if (!result[word]) { // If word not in concordance, init empty array for it
          result[word] = [];
        }
        result[word].push(i); // Add the current line number to the word's array
        seen.add(word); // Mark word as seen on this line
      }
    }
  }
  return result; // Return the completed concordance object
}

module.exports = concordance;