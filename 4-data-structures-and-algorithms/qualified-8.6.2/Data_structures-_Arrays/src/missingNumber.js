/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  // Step 1: Determine n 
  const n = numbers.length + 1;
  
  // Step 2: Loop through each possible integer i from 1 to n for i from 1 to n 
  for (let i = 1; i <= n; i++) {
    // Step 3: Check if i is not in the array if i is not in numbers 
    if (!numbers.includes(i)) {
      // Step 4: If i is not found, return it as the missing number return i
      return i;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  // determine n
  const n = numbers.length + 1;
  
  // Calculate expected sum of numbers 1 to n expectedSum = n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;
  
 // Step 3: Iterate through array to compute actual sum actualSum = 0 for each number in numbers { actualSum = actualSum + number }
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);
  
  //return the missing number from expectedSum - actualSum
  return expectedSum - actualSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
