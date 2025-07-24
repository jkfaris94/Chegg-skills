class AdjacencyList {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add solution here
    // Checks if the vertex already exists
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; // Adds a new vertex with an empty list of neighbors
    }
  }

  addEdge(vertex1, vertex2) {
    // add solution here
    // Ensures both vertices exist
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2); // Adds vertex2 to the list of vertex1's neighbors
      this.adjacencyList[vertex2].push(vertex1); // Adds vertex1 to the list of vertex2's neighbors
    }
  }

  hasEdge(vertex1, vertex2) {
    // add solution here
    return (
      this.adjacencyList[vertex1] && // Checks if vertex1 is in the list
      this.adjacencyList[vertex1].includes(vertex2) // Checks if vertex2 is a neighbor of vertex1
    );
  }

  getNeighbors(vertex) {
    // add solution here
    return this.adjacencyList[vertex] || [];
  }
}

module.exports = AdjacencyList;