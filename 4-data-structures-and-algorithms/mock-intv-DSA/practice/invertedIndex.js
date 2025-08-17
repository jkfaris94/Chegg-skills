//Loop through each string in the input array, keeping track of the index (0, 1, 2, etc.).
// → That’s your “document index.”

// Split each string into words, lowercase them.

// For each word:

// If it’s not in your index → create a new array starting with the current index.

// If it’s already in your index → push the current index (only if not already in the array — avoid duplicates).

function buildInvertedIndex(data) {
    const index = {};

    data.forEach((str, i) => {
        const words = str.toLowerCase().split(" ");
        
        for (let word of words) {
            if (!index[word]) {
                index[word] = []; //initialize with empty array
            }
            if (!index[word].includes[i]) {
                index[word].push(i); //add document index if not already there
            }
        }
    });

    return index;
}




const data = [
  "Cats are fun",
  "Dogs are loyal",
  "Cats and dogs live together"
];

console.log(buildInvertedIndex(data));