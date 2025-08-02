/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../linked-list/stack");

function isPalindrome(text) {
  // normalize: lowercase and strip non-alphanumeric
  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  // empty string (no alphanumeric chars) is not a palindrome per spec
  if (cleanText.length === 0) {
    return false;
  }

  const stack = new Stack();
  // Push all characters onto the stack
  for (const ch of cleanText) {
    stack.push(ch);
  }
  
  // Pop and compare each character
  for (const ch of cleanText) {
    if (stack.pop() !== ch) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
