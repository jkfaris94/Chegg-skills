function getKnightMoves(chessboard, row, col) {
  // Define all possible "L-shaped" moves a knight can make on a chessboard
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1]
  ];
  const moves = []; // Store valid moves

  // Check each potential move to see if it's valid
  for (let [dr, dc] of directions) {
    const moveRow = row + dr; // New row position
    const moveCol = col + dc; // New column position
    // Ensure the new position is within the bounds of the chessboard
    if (
      moveRow >= 0 &&
      moveRow < chessboard.length &&
      moveCol >= 0 &&
      moveCol < chessboard[0].length
    ) {
      moves.push([moveRow, moveCol]); // Add valid move to moves list
    }
  }

  return moves; // Return all valid moves
}

function findMinimumMoves(chessboard, start, target) {
  const queue = [[...start, 0]]; // Initialize queue with start position and move count
  const visited = new Set([`${start[0]},${start[1]}`]); // Track visited positions

  // Process each position in the queue
  while (queue.length > 0) {
    const [row, col, moveCount] = queue.shift(); // Current position and move count

    // Check if the current position is the target
    if (row === target[0] && col === target[1]) return moveCount;

    // Get all valid moves from the current position
    const moves = getKnightMoves(chessboard, row, col);
    for (let [moveRow, moveCol] of moves) {
      // Check if the move has not been visited
      if (!visited.has(`${moveRow},${moveCol}`)) {
        queue.push([moveRow, moveCol, moveCount + 1]); // Enqueue new position with incremented move count
        visited.add(`${moveRow},${moveCol}`); // Mark as visited
      }
    }
  }

  return -1; // Return -1 if no path to the target is found
}

// Example usage
const chessboardSize = 8; // 8x8 chessboard
const chessboard = Array.from({ length: chessboardSize }, () =>
  Array(chessboardSize).fill(0)
);
const start = [0, 0]; // starting position of the knight
const target = [7, 7]; // target position to reach
console.log(findMinimumMoves(chessboard, start, target)); // Outputs 6

const verySmallChessboardSize = 2;
const verySmallChessboard = Array.from(
  { length: verySmallChessboardSize },
  () => Array(verySmallChessboardSize).fill(0)
);
console.log(findMinimumMoves(verySmallChessboard, start, target)); // Outputs -1
