function getDroneMoves(grid, row, col) {
  const directions = [
    [3, 2],
    [3, -2],
    [-3, 2],
    [-3, -2],
    [2, 3],
    [2, -3],
    [-2, 3],
    [-2, -3] 
  ];
  const moves =[];
  
  // Check each potential move to see if it's valid
  for (let [dr, dc] of directions) {
    const moveRow = row + dr; // New row position
    const moveCol = col + dc; // New column position
    // Ensure the new position is within the bounds of the chessboard
    if (
      moveRow >= 0 &&
      moveRow < grid.length &&
      moveCol >= 0 &&
      moveCol < grid[0].length &&
      grid[moveRow][moveCol] === 0
    ) {
      moves.push([moveRow, moveCol]); // Add valid move to moves list
    }
  }

  return moves; // Return all valid moves
}

function findMinimumDroneMoves(grid, start, target) {
  const queue = [[...start, 0]];
  const visited = new Set([`${start[0]}, ${start[1]}`]);
  
  while (queue.length > 0) {
    const [row, col, moveCount] = queue.shift();
    
    if (row === target[0] && col === target[1]) {
      return moveCount;
    } 
    
    const moves = getDroneMoves(grid, row, col);
    for (let [moveRow, moveCol] of moves) {
      
      if (!visited.has(`${moveRow}, ${moveCol}`)) {
        queue.push([moveRow, moveCol, moveCount + 1]);
        visited.add(`${moveRow}, ${moveCol}`)
      }
    }
  }
  return -1;
}

module.exports = findMinimumDroneMoves;