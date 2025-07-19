/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const charCount = new Map();

  for (const char of word) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  let oddCount = 0;

  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) return false;
    }
  }

  return true;
}

module.exports = permutationPalindrome;
