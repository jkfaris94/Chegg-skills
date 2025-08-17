function wordFrequencyCounter(text) {
    //set to all lowercase 
    const lower = text.toLowerCase();
    
    //split into words 
    const words = lower.split(' ');

    //count the words using an object
    const counts = {};
    for (let word of words) {
        if (counts[word] === undefined) {
            counts[word] = 0; //initialize it first
        }
        counts[word]++; //increase by 1
    }

    return counts;
}


console.log(wordFrequencyCounter("Banana apple banana Orange orange orange"))




// //solution using maps instead 
// function wordFrequencyCounter2(text) {
//   const words = text.toLowerCase().split(" ");
//   const counts = new Map();

//   for (let word of words) {
//     if (!counts.has(word)) {
//       counts.set(word, 0); // initialize if not seen before
//     }
//     counts.set(word, counts.get(word) + 1); // increment count
//   }

//   return counts;
// }

// // Example
// console.log(wordFrequencyCounter2("Banana apple banana Orange orange orange"));