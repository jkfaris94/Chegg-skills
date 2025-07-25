//our objective is to determine the number of distinct social groups, where a social group is defined as a set of 
// individuals who are directly or indirectly connected through any number of intermediary connections



function countSocialGroups(n, edges) {
  // Build adjacency list
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (const nei of graph[node]) {
      if (!visited.has(nei)) {
        dfs(nei);
      }
    }
  }

  // For each individual, if not yet visited, that’s a new group
  for (let i = 1; i <= n; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i);
    }
  }

  return count;
}
module.exports = countSocialGroups;