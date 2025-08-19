function wordSequenceMap(data) {
  const result = {};
  for (let i = 0; i < data.length; i++) {
    const words = data[i].toLowerCase().split(/[\s.,;"']+/);
    const seen = new Set();
    for (let j = 0; j < words.length - 1; j++) {
      if (words[j] === "" || words[j + 1] === "") continue;
      const pair = `${words[j]} ${words[j + 1]}`;
      if (seen.has(pair)) continue;
      if (!result[pair]) {
        result[pair] = [];
      }
      result[pair].push({ line: i, position: j });
      seen.add(pair);
    }
  }
  return result;
}

function findSequenceLines(words, sequenceMap, data) {
  const result = [];
  const linesAdded = new Set();
  let current = words.head;

  while (current) {
    const pair = current.value.toLowerCase();
    if (sequenceMap[pair]) {
      for (let entry of sequenceMap[pair]) {
        const lineNum = entry.line;
        if (!linesAdded.has(lineNum)) {
          result.push({ line: data[lineNum], pair: current.value });
          linesAdded.add(lineNum);
        }
      }
    }
    current = current.next;
  }

  return result;
}