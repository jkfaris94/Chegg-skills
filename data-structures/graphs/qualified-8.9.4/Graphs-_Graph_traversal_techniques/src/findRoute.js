function findRoute(n, edges, source, destination) {
   const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
  }
  
  // Initialize visited set to keep track of visited nodes
  const visited = new Set();
  
  // Recursive DFS
  function dfs(node) {
    if (node === destination) return true;
    visited.add(node);
    for (const nei of graph[node]) {
      if (!visited.has(nei) && dfs(nei)) {
        return true;
      }
    }
    return false;
  }
  return dfs(source);
}

module.exports = findRoute;