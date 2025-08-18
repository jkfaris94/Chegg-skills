/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  const lineNumbers = new Set(); // Set for unique line numbers
  let current = words.head; // Start at linked list head

  while (current) { // Loop through linked list
    const word = current.value.toLowerCase(); // Get lowercase word
    if (concordance[word]) { // If word in concordance
      for (let num of concordance[word]) {
        lineNumbers.add(num); // Add line numbers        
      }
    }
    current = current.next; // Move to next node
  }
  // Build array of lines from line numbers
  const result = [];
  for (let num of lineNumbers) {
    result.push(data[num]);    
  }
  
  return result; // Return matching lines
}

module.exports = searchLines;