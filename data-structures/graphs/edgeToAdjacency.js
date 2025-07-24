//Example of an edge list
//Assume you have the following edge list representing a graph:
const edgeList = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4]
];

//Conversion to an adjacency list:
//will look something like this
const adjacencyList = [
  [], // Vertex 0 (unused for 1-based indexing)
  [2, 3], // Vertex 1 is connected to Vertex 2 and 3
  [1, 3], // Vertex 2 is connected to Vertex 1 and 3
  [1, 2, 4], // Vertex 3 is connected to Vertex 1, 2, and 4
  [3] // Vertex 4 is connected to Vertex 3
];

// Algorithm 
function buildAdjacencyList(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []); // +1 for 1-based indexing

  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u); // For undirected graph, add both connections
  });

  return graph;
}