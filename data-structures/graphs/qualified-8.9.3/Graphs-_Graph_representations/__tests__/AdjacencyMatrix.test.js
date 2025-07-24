const path = require("path");

const AdjacencyMatrix = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/AdjacencyMatrix"
));

describe('AdjacencyMatrix', () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyMatrix();
    });

    test('addVertex adds a new vertex and expands the matrix', () => {
        graph.addVertex('A');
        expect(graph.vertices.has('A')).toBe(true);
        expect(graph.adjacencyMatrix.length).toBe(1);
        expect(graph.adjacencyMatrix[0]).toEqual([0]); // Ensure the matrix is expanded correctly
    });

    test('expandMatrix adds a new row and column', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        expect(graph.adjacencyMatrix.length).toBe(2);
        expect(graph.adjacencyMatrix[0].length).toBe(2);
        expect(graph.adjacencyMatrix[1].length).toBe(2);
    });

    test('addEdge adds an edge with a default weight of 1', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        const indexA = graph.vertices.get('A');
        const indexB = graph.vertices.get('B');
        expect(graph.adjacencyMatrix[indexA][indexB]).toBe(1);
        expect(graph.adjacencyMatrix[indexB][indexA]).toBe(1);
    });

    test('addEdge supports custom weights', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B', 5);
        const indexA = graph.vertices.get('A');
        const indexB = graph.vertices.get('B');
        expect(graph.adjacencyMatrix[indexA][indexB]).toBe(5);
        expect(graph.adjacencyMatrix[indexB][indexA]).toBe(5);
    });

    test('hasEdge correctly identifies the presence of an edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.hasEdge('A', 'B')).toBe(true);
    });

    test('hasEdge returns false when there is no edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        expect(graph.hasEdge('A', 'B')).toBe(false);
    });

    test('getEdgeWeight returns the correct weight of an existing edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B', 3);
        expect(graph.getEdgeWeight('A', 'B')).toBe(3);
    });

    test('getEdgeWeight returns 0 when there is no edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        expect(graph.getEdgeWeight('A', 'B')).toBe(0);
    });
});
