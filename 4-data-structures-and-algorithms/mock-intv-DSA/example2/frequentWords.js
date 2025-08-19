function buildFrequencyMap(data) {
  const result = {};

  for (let i = 0; i < data.length; i++) {
    const words = data[i].toLowerCase().split(/[\s.,;"']+/);
    const seen = new Set();
    
    for (let word of words) {
      if (word === "" || seen.has(word)) continue;
      if (!result[word]) {
        result[word] = { count: 0, lines: [] };
      }
      result[word].count += 1;
      result[word].lines.push(i);
      seen.add(word);
    }
  }
  return result;
}

function findFrequentWords(words, frequencyMap, data, threshold) {
  const lineNumbers = new Set();
  let current = words.head;

  while (current) {
    const word = current.value.toLowerCase();
    if (frequencyMap[word]) {
      const wordCount = frequencyMap[word].count;
      if (wordCount >= threshold) {
        for (let num of frequencyMap[word].lines) {
          lineNumbers.add(num);
        }
      }
    }
    current = current.next;
  }

  const result = [];
  for (let num of lineNumbers) {
    result.push(data[num]);
  }
  return result;
}


// 2. **`findFrequentWords(words, frequencyMap, data)`**:
// - **Input**: A linked list of words, the frequency map from `buildFrequencyMap`, and the original `data` array.
// - **Output**: An array of strings (lines from `data`) where the total frequency of the words from the linked list on that line is at least a given threshold (e.g., 2).
// - **Example**:
// ```javascript
// // words: ["cat", "dog"], frequencyMap as above, threshold: 2
// // Output: ["Cat and dog."] // Because "cat" (count: 2) + "dog" (count: 2) = 4 ≥ 2