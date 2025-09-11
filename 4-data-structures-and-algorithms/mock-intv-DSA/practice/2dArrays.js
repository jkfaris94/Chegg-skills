// sumRainfallByRegion.js
function sumRainfallByRegion(matrix) {
  // Edge case: empty matrix or no rows
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  // Initialize result array for each region (row)
  const rows = matrix.length;
  const result = new Array(rows).fill(0);

  // Iterate over each row and column
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Add only positive values to the region's total
      if (matrix[i][j] > 0) {
        result[i] += matrix[i][j];
      }
    }
  }

  return result;
}

// Example usage:
// const matrix = [[2.5, 0, 1.6], [3.4, 6.4, 0], [0, 0, 0]];
// console.log(sumRainfallByRegion(matrix)); // [4.1, 9.8, 0]

module.exports = sumRainfallByRegion;