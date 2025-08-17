/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  // This will hold the final result.
  // Keys = words, Values = array of line numbers
   let results = {};
  
  // Loop through each line in the data  
  data.forEach((line, lineIndex) => {
    
  //define words 
  const words = line.toLowerCase().split(/[\s.,';]/).filter(Boolean);
    // Convert line to lowercase, split into words by regex
    // .filter(Boolean) removes empty strings
    
    // Use a Set so duplicate words on the SAME line only count once
  const uniqueWords = new Set(words);
  
    // Loop through each unique word in this line
  for (let word of uniqueWords) {
    // If this word hasn't been seen before, initialize with an empty array
    if (!results[word]) {
      results[word] = []
       }
      // Add this line number to the word's array
      results[word].push(lineIndex);
   }
  });
  
  return results; 
  
}