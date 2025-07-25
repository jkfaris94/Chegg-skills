// Find a valid path in an undirected graph using Depth First Search (DFS).

// Convert edge list to adjacency list
function buildAdjacencyList(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []); // +1 for 1-based indexing

    edges.forEach(([u, v]) => {
        graph[u].push(v);
        graph[v].push(u); // For undirected graph, add both connections
    });

    return graph;
}

// Define the dfs helper function
function dfs(graph, current, destination, visited) {
  if (current === destination) return true; // Base case: destination is reached

  visited.add(current); // Mark current node as visited
  for (let neighbor of graph[current]) {
    if (!visited.has(neighbor) && dfs(graph, neighbor, destination, visited)) {
      return true; // Recursive call to visit neighbors
    }
  }
  return false; // If no path is found, return false
}

function hasValidPath(n, edges, source, destination) {
  const graph = buildAdjacencyList(n, edges);
  const visited = new Set(); // Initialize the visited set
  // Start DFS from the source node
  return dfs(graph, source, destination, visited);
}

// Example usage
const n = 5; // Number of nodes
const edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]; // Edges of the graph
const source = 1; // Starting node
const destination = 4; // Destination node
const isValidPath = hasValidPath(n, edges, source, destination);
console.log(`Is there a valid path from ${source} to ${destination}?`, isValidPath); // Output: true or false based on the path existence
// Note: The graph is undirected, so the edges are bidirectional.
// The function returns true if a valid path exists, otherwise false.
// This code assumes the graph is represented as an edge list and converts it to an adjacency list for DFS traversal.

