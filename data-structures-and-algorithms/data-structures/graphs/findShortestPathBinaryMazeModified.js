//You can modify the typical BFS algorithm to find the shortest path in a binary maze. 
// The code implementation below separates the neighbor-finding logic from the BFS traversal logic. 
// This separation not only makes the code cleaner and easier to 
// understand but also allows for easier modifications and testing of the neighbor-finding logic independently.


// This function retrieves all valid neighboring cells of a given cell in the maze.
function getNeighbors(row, col, rows, cols, maze, visited) {
  // Possible directions to move: down, right, up, left
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  // Array to hold valid neighbors
  const neighbors = [];

  // Loop through each possible direction
  for (let [dr, dc] of directions) {
    const neighborRow = row + dr; // Calculate the neighbor's row
    const neighborCol = col + dc; // Calculate the neighbor's column

    // Check if the neighbor is within the maze boundaries, is not a wall, and hasn't been visited
    if (
      neighborRow >= 0 &&
      neighborRow < rows &&
      neighborCol >= 0 &&
      neighborCol < cols &&
      maze[neighborRow][neighborCol] === 0
    ) {
      neighbors.push([neighborRow, neighborCol]); // Add the valid neighbor to the list
    }
  }

  return neighbors; // Return all found neighbors
}

// This function finds the shortest path in a binary maze using the BFS algorithm.
function findShortestPathBinaryMaze(maze) {
  const rows = maze.length; // Number of rows in the maze
  const cols = maze[0].length; // Number of columns in the maze
  // Initialize the BFS queue with the starting point and initial distance of 1
  const queue = [[0, 0, 1]];
  // Set to keep track of visited cells, starting with the initial cell
  const visited = new Set(`0,0`);

  // Check if the starting or ending point is blocked
  if (maze[0][0] === 1 || maze[rows - 1][cols - 1] === 1) return -1;

  // Process the queue until it's empty
  while (queue.length > 0) {
    const [row, col, distance] = queue.shift(); // Dequeue the first path

    // If the end of the maze is reached, return the distance of the path
    if (row === rows - 1 && col === cols - 1) return distance;

    // Get all valid neighbors of the current cell
    const neighbors = getNeighbors(row, col, rows, cols, maze);
    // Enqueue each neighbor with the incremented distance
    for (let [neighborRow, neighborCol] of neighbors) {
      if (!visited.has(`${neighborRow},${neighborCol}`)) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(`${neighborRow},${neighborCol}`); // Mark this cell as visited
      }
    }
  }

  return -1; // Return -1 if no path is found
}


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

console.log(`Shortest path in binary maze: ${findShortestPathBinaryMaze(maze)}`);

const mazeWithoutPath = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0]
];
console.log(
  "Shortest path length",
  findShortestPathBinaryMaze(mazeWithoutPath)
); // Shortest path length: -1