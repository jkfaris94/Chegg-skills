function wordProximityMap(data) {
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
      result[word].push({ line: i, position: j });
      seen.add(word);
    }
  }
  return result;
}

function findProximityLines(words, proximityMap, data, maxDistance) {
  const lineNumbers = new Set();
  let current = words.head;
  const wordPositions = [];

  // Collect all positions for words in the linked list
  while (current) {
    const word = current.value.toLowerCase();
    if (proximityMap[word]) {
      wordPositions.push(...proximityMap[word]);
    }
    current = current.next;
  }

  // Check for proximity in each line
  const linesChecked = new Set();
  for (let i = 0; i < wordPositions.length; i++) {
    for (let j = i + 1; j < wordPositions.length; j++) {
      const pos1 = wordPositions[i];
      const pos2 = wordPositions[j];
      if (pos1.line === pos2.line && Math.abs(pos1.position - pos2.position) <= maxDistance) {
        lineNumbers.add(pos1.line);
      }
    }
  }

  // Build result array
  const result = [];
  for (let num of lineNumbers) {
    result.push(data[num]);
  }
  return result;
}