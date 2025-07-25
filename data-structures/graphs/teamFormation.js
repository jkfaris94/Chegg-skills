// Function to build an adjacency list from the given employee preferences
function buildAdjacencyList(n, prefer1, prefer2) {
  // Initialize an adjacency list for the number of employees, n
  const graph = [...Array(n + 1)].map(() => []);

  // Populate the adjacency list based on mutual preferences
  for (let i = 0; i < prefer1.length; i++) {
    graph[prefer1[i]].push(prefer2[i]);
    graph[prefer2[i]].push(prefer1[i]);
  }
  return graph;
}

// Function to perform BFS to determine if a bipartite marking is possible
function bfs(start, graph, markers) {
  // Initialize the BFS queue with the starting node
  const queue = [start];
  // Start by assigning the first team marker (0)
  markers[start] = 0;

  // Process each node in the queue
  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the front node
    // Check all adjacent nodes (collaborators)
    for (let collaborator of graph[node]) {
      if (markers[collaborator] === null) {
        // If unmarked, assign the opposite marker
        markers[collaborator] = 1 - markers[node];
        queue.push(collaborator); // Enqueue the newly marked node
      } else if (markers[collaborator] === markers[node]) {
        return false; // Detect conflict if two adjacent nodes have the same marker
      }
    }
  }
  return true; // Return true if no conflicts are found
}

// Main function to check if it's possible to divide employees into two teams
function canFormTeams(n, prefer1, prefer2) {
  // Initialize the markers array to track team assignments
  const markers = Array(n + 1).fill(null);
  // Build the adjacency list using the buildAdjacencyList function
  const graph = buildAdjacencyList(n, prefer1, prefer2);

  // Attempt to assign teams to all employees using BFS
  for (let i = 1; i <= n; i++) {
    if (markers[i] === null && !bfs(i, graph, markers)) {
      // Check unmarked node and perform BFS
      return false; // Return false if any part of the graph cannot be bipartite
    }
  }
  return true; // Return true if all employees can be divided into two teams without conflicts
}




// Example usage
const n = 5;
const prefer1 = [1, 2, 2, 3, 4];
const prefer2 = [3, 3, 5, 4, 5];

console.log("Can form teams:", canFormTeams(n, prefer1, prefer2)); // Should output true

console.log(
  "Cannot form teams:",
  canFormTeams(4, [1, 1, 1, 2, 3], [2, 3, 4, 3, 4])
); // Should output false