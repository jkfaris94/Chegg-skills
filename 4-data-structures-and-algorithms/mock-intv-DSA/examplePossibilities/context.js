function wordContextMap(data) {
  const result = {};
  for (let i = 0; i < data.length; i++) {
    const words = data[i].toLowerCase().split(/[\s.,;"']+/);
    const seen = new Set();
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (word === "" || seen.has(word)) continue;
      if (!result[word]) {
        result[word] = [];
      }
      // Extract context: 10 chars before and after the word
      const start = Math.max(0, data[i].toLowerCase().indexOf(word) - 10);
      const end = Math.min(data[i].length, data[i].toLowerCase().indexOf(word) + word.length + 10);
      const context = data[i].slice(start, end);
      result[word].push({ line: i, context });
      seen.add(word);
    }
  }
  return result;
}

function findContextLines(words, contextMap, data) {
  const lineToWords = new Map(); // Map line number to array of matched words
  let current = words.head;
  while (current) {
    const word = current.value.toLowerCase();
    if (contextMap[word]) {
      for (let entry of contextMap[word]) {
        const lineNum = entry.line;
        if (!lineToWords.has(lineNum)) {
          lineToWords.set(lineNum, []);
        }
        lineToWords.get(lineNum).push(current.value); // Keep original case
      }
    }
    current = current.next;
  }
  const result = [];
  for (let [lineNum, matchedWords] of lineToWords) {
    result.push({ line: data[lineNum], words: matchedWords });
  }
  return result;
}