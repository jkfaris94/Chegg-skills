/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  let result = {}
  
  //go through each line in the data 
  for (let i = 0; i < data.length; i++) {
    //convert to lowercase and split into words 
    const words = data[i].toLowerCase().split(/[\s.,';]/);
    
    // use Set to remember what words have been seen on this line 
    const seen = new Set();
    
    for (let word of words) {
      if (word === "") continue; //skip empty strings
      
      // only add the line number if we havent already for this word on line
      if (!seen.has(word)) {
        if (!result[word]) {
          result[word] = [];
        }
        result[word].push(i);
        seen.add(word);
      }
    }
  }
  return result;
}

module.exports = concordance;