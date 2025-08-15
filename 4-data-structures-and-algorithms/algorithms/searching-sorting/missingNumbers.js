/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  const n = numbers.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

/**
 * find missing number using Set
 */
//Hashing / Set (O(n) time, O(n) space):
function missingNumberWithSet(numbers) {
  const set = new Set(numbers);
  const n = numbers.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) return i;
  }
}

/**
 * find missing number using math formula
 */
//Math formula (O(n) time, O(1) space):
function missingNumberMath(numbers) {
  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}