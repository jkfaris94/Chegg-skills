const data = ["The cat sat.", "The dog sat."];

function frequentWords(data) {
    const result = {}; //init object

    for (let i = 0; i < data.length; i++) {
        const words = data[i].toLowerCase().split(/[\s.,;"']+/);
        const seen = new Set();

        for (let word of words) {
            if (word === "") continue;
            if (seen.has[word]) continue; 

            if (!result[word]) {
                result[word] = 0;
            }
            result[word]++;
            seen.add(word);
        }
    }
    const output = [];
    for (let word in result) {
        output.push({ word, count: result[word] });
    }

    return output.slice(0, k);
}






// study example push object into arrays
const counts = { apple: 3, banana: 2 };
const arr = [];
for (let key in counts) {
    arr.push({ word: key, freq: counts[key] });
}
console.log(arr); // [{ word: "apple", freq: 3 }, { word: "banana", freq: 2 }]