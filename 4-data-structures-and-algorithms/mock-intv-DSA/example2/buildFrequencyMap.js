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