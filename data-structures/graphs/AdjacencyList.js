class AdjacencyList {
  constructor() {
    this.adjacencyList = {}; // Initializes an empty object to store the adjacency list
  }

  addVertex(vertex) {
    // Checks if the vertex already exists
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; // Adds a new vertex with an empty list of neighbors
    }
  }

  addEdge(vertex1, vertex2) {
    // Ensures both vertices exist
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2); // Adds vertex2 to the list of vertex1's neighbors
      this.adjacencyList[vertex2].push(vertex1); // Adds vertex1 to the list of vertex2's neighbors
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1] && // Checks if vertex1 is in the list
      this.adjacencyList[vertex1].includes(vertex2) // Checks if vertex2 is a neighbor of vertex1
    );
  }

  getNeighbors(vertex) {
    // Returns the neighbors of the vertex or an empty list if none
    return this.adjacencyList[vertex] || [];
  }
}

// to manually invoke to check functionality

//Create an instance of the graph:
const graph = new AdjacencyList();

// add verticles to the graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

//add edges and test connections
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.hasEdge("A", "B")); // Should log true
console.log(graph.hasEdge("A", "C")); // Should log true
console.log(graph.hasEdge("B", "C")); // Should log false as no edge was added between B and C

//check neighbors of A
console.log(graph.getNeighbors("A")); // Should log ['B', 'C']
