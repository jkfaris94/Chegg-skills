// Implementation of Breadth First Search (BFS) algorithm for traversing a graph.

function bfs(start) {
  let visited = new Set(); // Initializes a set to keep track of visited nodes.
  let queue = [start]; // Starts the queue with the initial node.

  while (queue.length > 0) {
    // Continues until there are no more nodes to process.
    let node = queue.shift(); // Removes the first node from the queue for processing.
    console.log(node);
    visited.add(node); // Marks the current node as visited to prevent revisiting.
    const neighbors = graph[node]; // Accesses all adjacent nodes (neighbors) of the current node.

    for (let next of neighbors) {
      // Iterates over each neighbor of the current node.
      if (!visited.has(next)) {
        // Checks if the neighbor has not been visited.
        queue.push(next); // Adds the neighbor to the queue for future exploration.
        visited.add(next); // Marks the neighbor as visited.
      }
    }
  }
}

// Example usage of the BFS function
const graph = {
  "A": ["B", "C"],
  "B": ["A", "D", "E"],
  "C": ["A", "F"],
  "D": ["B"],
  "E": ["B", "G"],
  "F": ["C", "H", "I"],
  "G": ["E"],
  "H": ["F"],
  "I": ["F"]
};  
const startNode = "A"; // Starting node for BFS
bfs(startNode); // Initiates BFS traversal starting from node A
// Output: A B C D E F G H I
// Note: The actual order of traversal may vary depending on the order of neighbors in the graph representation.
// This code assumes the graph is represented as an adjacency list where each node points to its neighbors
// in an array format.





// //   1
// //  / \
// // 2   3
// //  \   \
// //   4   5
// //        \
// //         6
// //        / \
// //       7   8
// const graph = [
//   [], // Index 0 is empty because we start from 1
//   [2, 3], // Node 1 is connected to Node 2 and Node 3
//   [1, 4], // Node 2 is connected to Node 1 and Node 4
//   [1, 5], // Node 3 is connected to Node 1 and Node 5
//   [2], // Node 4 is connected to Node 2
//   [3, 6], // Node 5 is connected to Node 3 and Node 6
//   [5, 7, 8], // Node 6 is connected to Node 5, Node 7, and Node 8
//   [6], // Node 7 is connected to Node 6
//   [6] // Node 8 is connected to Node 6
// ];

// bfs(1);