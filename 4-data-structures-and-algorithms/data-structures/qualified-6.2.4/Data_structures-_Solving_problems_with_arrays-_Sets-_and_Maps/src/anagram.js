/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  // Remove non-alphabetic characters and convert to lowercase
  s1 = s1.replace(/\W/g, '').toLowerCase();
  s2 = s2.replace(/\W/g, '').toLowerCase();

  // Early exit if lengths differ
  if (s1.length !== s2.length) return false;

  const charMap = new Map();

  // Count characters in s1
  for (const char of s1) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Subtract counts using s2
  for (const char of s2) {
    if (!charMap.has(char)) return false;

    charMap.set(char, charMap.get(char) - 1);

    if (charMap.get(char) < 0) return false;
  }

  return true;
}

module.exports = anagram;
