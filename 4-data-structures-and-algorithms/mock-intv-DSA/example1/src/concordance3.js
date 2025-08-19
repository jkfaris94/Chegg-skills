function concordance(data) {
  const result = {}; //create an array 
  
  for (let i = 0; i < data.length; i++) {
    const words = data[i].toLowerCase().split(/[\s.,';]/); //define word 
    const seen = new Set();
    
    for (let word of words) {
      if (word === "") continue; //emty are not words
      if (seen.has(word)) continue; //utilizes set to check for duplicates
      
      if (!result[word]) { //if hasnt been seen before, create array
        result[word] = [];
       }
      
      result[word].push(i); //push to words array
      seen.add(word); // add seen word to set
    }   
  }
  return result;
}

module.exports = concordance;



//more simple variation