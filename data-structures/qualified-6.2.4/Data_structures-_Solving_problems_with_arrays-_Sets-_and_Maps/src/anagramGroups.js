/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const map = new Map();

  for (const word of words) {
    // Sort the word to get its anagram signature
    const key = word.split('').sort().join('');

    // Group by sorted key
    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  // Convert the Map values to an array of groups
  return Array.from(map.values());
}

module.exports = anagramGroups;
