// output should be 9
const maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0]
];

// //output should be -1 because there is no path
// const maze = [
//   [0, 1, 0, 0, 0],
//   [0, 1, 0, 1, 0],
//   [0, 1, 0, 0, 0],
//   [0, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0]
// ];

// example from video walkthrough
function getNeighbors(row, col, rows, cols, maze) {
    const directions = [
        [1,0], // down
        [0,1], // right
        [-1,0], // up
        [0,-1] // left
    ];
    const neighbors = [];

    for (let [dr, dc] of directions) {
        const neighborRow = row + dr;
        const neighborCol = col + dc;

        if (neighborRow >= 0 && 
            neighborRow < rows && 
            neighborCol >= 0 && 
            neighborCol < cols && 
            maze[neighborRow][neighborCol] === 0
        ) {
            neighbors.push([neighborRow, neighborCol]);
        }
    }
    return neighbors;
}


findShortestPathBinaryMaze = (maze) => {
    const rows = maze.length;
    const cols = maze[0].length;
    const queue = [[0, 0, 1]]; // [row, col, distance]
    const visited = new Set(["0,0"]); // Using a string to represent the visited cell
    
    if(maze[0][0] === 1 || maze[rows - 1][cols - 1] === 1) return -1; // If start or end is blocked

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();
        // If we reached the bottom-right corner
        if (row === rows - 1 && col === cols - 1) return distance;
        const neighbors = getNeighbors(row, col, rows, cols, maze);
        for (let [neighborRow, neighborCol] of neighbors) {
            if (!visited.has(`${neighborRow},${neighborCol}`)) {
                queue.push([neighborRow, neighborCol, distance + 1]);
                visited.add(`${neighborRow},${neighborCol}`);
            }
        }
    }

    return -1; // If no path found
}


console.log(`Shortest path in binary maze: ${findShortestPathBinaryMaze(maze)}`);





// let topLeft = maze[0][0]; // Accesses the value 0 from the maze provided
// let bottomRightRowIndex = maze.length - 1;
// let bottomRightColIndex = maze[0].length - 1;
// let bottomRight = maze[bottomRightRowIndex][bottomRightColIndex];
// //example from auto AI
// function findShortestPathBinaryMaze(maze) {
//   const rows = maze.length;
//   const cols = maze[0].length;
//   const queue = [[0, 0, 1]]; // [row, col, distance]
//   const visited = new Set();
//   visited.add('0,0');

//   while (queue.length > 0) {
//     const [row, col, distance] = queue.shift();

//     // If we reached the bottom-right corner
//     if (row === rows - 1 && col === cols - 1) {
//       return distance;
//     }

//     // Directions: right, down, left, up
//     const directions = [
//       [0, 1], // right
//       [1, 0], // down
//       [0, -1], // left
//       [-1, 0] // up
//     ];

//     for (const [dr, dc] of directions) {
//       const newRow = row + dr;
//       const newCol = col + dc;

//       if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
//           maze[newRow][newCol] === 0 && !visited.has(`${newRow},${newCol}`)) {
//         visited.add(`${newRow},${newCol}`);
//         queue.push([newRow, newCol, distance + 1]);
//       }
//     }
//   }

//   return -1; // If no path found
// }

// console.log(`Shortest path in binary maze: ${findShortestPathBinaryMaze(maze)}`);
        
