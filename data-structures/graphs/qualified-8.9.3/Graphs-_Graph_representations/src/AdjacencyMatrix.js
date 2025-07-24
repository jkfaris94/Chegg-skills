class AdjacencyMatrix {
  constructor() {
    this.adjacencyMatrix = [];
    this.vertices = new Map(); 
  }

  addVertex(vertex) {
    // add solution here
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, this.vertices.size);
      this.expandMatrix(); // Ensures the matrix is properly sized.
    }
  }

  expandMatrix() {
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      this.adjacencyMatrix[i].push(0);
    }
    this.adjacencyMatrix.push(
      new Array(this.adjacencyMatrix.length + 1).fill(0)
    );
  }

  addEdge(vertex1, vertex2, weight = 1) {
    // add solution
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      this.adjacencyMatrix[index1][index2] = weight; // Sets the weight for the edge.
      this.adjacencyMatrix[index2][index1] = weight; // Mirrors the edge for an undirected graph.
    }
  }

  hasEdge(vertex1, vertex2) {
    // add solution
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      return this.adjacencyMatrix[index1][index2] !== 0;
    }
    return false;
  }

  getEdgeWeight(vertex1, vertex2) {
    // add solution
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      return this.adjacencyMatrix[index1][index2];
    }
    return 0;
  }
}

module.exports = AdjacencyMatrix;