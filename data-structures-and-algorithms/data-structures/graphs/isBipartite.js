// bfs checks if a given part of the graph can be colored bipartitely starting from 'start' node.
function bfs(graph, start, color) {
  let queue = [start]; // Initialize queue with the start node
  color[start] = 0; // Begin coloring the start node with color 0

  // Process the queue until it's empty
  while (queue.length > 0) {
    let node = queue.shift(); // Dequeue the next node to process

    // Iterate over each neighbor of the current node
    for (let neighbor of graph[node]) {
      // If the neighbor hasn't been colored yet
      if (color[neighbor] === -1) {
        color[neighbor] = 1 - color[node]; // Assign an alternate color to avoid matching the current node's color
        queue.push(neighbor); // Enqueue this neighbor to continue the BFS from there
      } else if (color[neighbor] === color[node]) {
        // If the neighbor is already colored the same as the current node
        return false; // This indicates a conflict, proving the graph cannot be bipartite
      }
    }
  }
  return true; // If no conflicts were found, the component can be bipartitely colored
}

// isBipartite checks the entire graph to see if it can be completely colored bipartitely.
function isBipartite(graph) {
  let color = new Array(graph.length + 1).fill(-1); // Create a color array filled with -1, indicating uncolored nodes

  // Loop through each node in the graph to handle potentially disconnected components
  for (let i = 1; i < graph.length; i++) {
    if (color[i] === -1) {
      // If the node has not been colored
      if (!bfs(graph, i, color)) {
        // Perform BFS to check if this component can be bipartitely colored
        return false; // If BFS returns false, the graph is not bipartite
      }
    }
  }
  return true; // If all components are bipartite, the entire graph is bipartite
}


// Example graph represented as adjacency list 
let graph = [  //bipartite graph
    [],
    [2,4],
    [1,3],
    [2,4],
    []
];


// const graph = [ //non-bipartite graph
//     [],
//     [2, 3, 4],
//     [1, 3],
//     [1, 2, 4],
//     [1, 3]
// ]


const result = isBipartite(graph);
console.log("Is the graph bipartite?", result); 


const bipartiteGraph = [
  [], // Index 0 is unused in 1-based indexing
  [2, 4], // Neighbors of vertex 1
  [1, 3], // Neighbors of vertex 2
  [2, 4], // Neighbors of vertex 3
  [1, 3] // Neighbors of vertex 4
];
console.log("Is the graph bipartite?", isBipartite(bipartiteGraph)); // Logs true

//    1
//  / | \
// 2  3--4

const nonBipartiteGraph = [[], [2, 3, 4], [1], [1, 4], [1, 3]];
console.log("Is the graph bipartite?", isBipartite(nonBipartiteGraph)); // Logs false