/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const charCount = new Map();

  // First pass: count each character
  for (const char of word) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Second pass: find the first character with count === 1
  for (const char of word) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no unique character found
  return null;
}

module.exports = firstSingleCharacter;
