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