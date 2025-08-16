/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  const lineNumbers = new Set();
  
  // Turn the linked list into an array of words (all lowercase)
  let current = words.head;
  while (current) {
    const word = current.value.toLowerCase();
    //if the word is in concordance, add all its line numbers 
    if (concordance[word]) {
        for (let num of concordance[word]) {
          lineNumbers.add(num);
        }
    }
    current = current.next;
  }
  
  //get the actual lines from the data using the line numbers 
  const result = [];
  for (let num of lineNumbers) {
    result.push(data[num]);
  }
  return result;
}

module.exports = searchLines;