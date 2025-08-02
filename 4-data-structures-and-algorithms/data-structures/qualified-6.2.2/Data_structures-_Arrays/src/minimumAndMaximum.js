/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  if (numbers.length === 0) return [];
  
  const sorted = numbers.slice().sort((a, b) => a - b); 
  return [sorted[0], sorted[sorted.length - 1]];
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length === 0) return [];

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }

  return [min, max];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
