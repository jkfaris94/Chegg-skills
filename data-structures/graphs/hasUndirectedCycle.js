const graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

//helper function to perform DFS and check for cycles
// This function uses recursion to traverse the graph and check for cycles
function dfs(graph, node, parent, visited) {
  visited.add(node);

  for (let neighbor of graph[node]) {
    // If the neighbor is not visited, recurse into it
    if (!visited.has(neighbor)) {
      if (dfs(graph, neighbor, node, visited)) {
        return true; // If a cycle was detected in the recursion, propagate the true value up
      }
    } else if (neighbor !== parent) {
      // If the neighbor is visited and it's not the parent, it's a cycle
      return true;
    }
  }
  return false; // If no cycle was found in any adjacency, return false
}

// Main function to check if the graph has a cycle
function hasCycle(graph, startNode) {
  const visited = new Set();

  // Initiate DFS from the start node
  return dfs(graph, startNode, null, visited);
}

const containsCycle = hasCycle(graph, "A");
console.log(`Does the graph contain a cycle? ${containsCycle}`); // Output: true
// Note: The graph is undirected, so the edges are bidirectional.
// The function returns true if a cycle exists, otherwise false.
// This code assumes the graph is represented as an adjacency list where each node points to its neighbors