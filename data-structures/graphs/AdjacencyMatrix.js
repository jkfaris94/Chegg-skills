class AdjacencyMatrix {
  constructor() {
    this.adjacencyMatrix = []; // Initializes an empty matrix.
    this.vertices = new Map(); // Maps vertex identifiers to matrix indices.
  }

  // Adds a vertex and expands the matrix to accommodate it.
  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, this.vertices.size);
      this.expandMatrix(); // Ensures the matrix is properly sized.
    }
  }

  // Expands the matrix size, adding a new row and column for each new vertex.
  expandMatrix() {
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      this.adjacencyMatrix[i].push(0); // Adds a new column to each row.
    }
    this.adjacencyMatrix.push(
      new Array(this.adjacencyMatrix.length + 1).fill(0)
    ); // Adds a new row.
  }

  // Adds an edge between two vertices with an optional weight.
  addEdge(vertex1, vertex2, weight = 1) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      this.adjacencyMatrix[index1][index2] = weight; // Sets the weight for the edge.
      this.adjacencyMatrix[index2][index1] = weight; // Mirrors the edge for an undirected graph.
    }
  }

  // Checks if there is an edge between two vertices.
  hasEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      return this.adjacencyMatrix[index1][index2] !== 0;
    }
    return false;
  }

  // Returns the weight of the edge between two vertices, or 0 if no edge exists.
  getEdgeWeight(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      return this.adjacencyMatrix[index1][index2];
    }
    return 0;
  }
}


//To test the AdjacencyMatrix class, follow these steps:
// Initiate the graph 
const graph = new AdjacencyMatrix();

// Add verticles to the graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// Add edges with weights 
graph.addEdge("A", "B", 2); // Adds an undirected edge with a weight of 2.
graph.addEdge("B", "C", 3); // Adds another undirected edge with a weight of 3.

//Check for edge presence and verify weights:
console.log(graph.hasEdge("A", "B")); // Expected: true
console.log(graph.getEdgeWeight("A", "B")); // Expected: 2
console.log(graph.hasEdge("C", "B")); // Expected: true, weight is 3 both ways.

