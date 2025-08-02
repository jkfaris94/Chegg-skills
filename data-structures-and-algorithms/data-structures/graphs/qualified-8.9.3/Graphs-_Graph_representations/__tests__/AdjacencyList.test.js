const path = require("path");

const AdjacencyList = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/AdjacencyList"
));

describe('AdjacencyList', () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyList();
    });

    test('addVertex adds a new vertex', () => {
        graph.addVertex('A');
        expect(graph.adjacencyList['A']).toEqual([]);
    });

    test('addVertex does not add the same vertex twice', () => {
        graph.addVertex('A');
        graph.addVertex('A');
        expect(graph.adjacencyList['A']).toEqual([]);
    });

    test('addEdge adds an edge between two vertices', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.adjacencyList['A']).toContain('B');
        expect(graph.adjacencyList['B']).toContain('A');
    });

    test('addEdge does not add an edge if one of the vertices does not exist', () => {
        graph.addVertex('A');
        graph.addEdge('A', 'B');
        expect(graph.adjacencyList['A']).not.toContain('B');
    });

    test('hasEdge returns true if there is an edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.hasEdge('A', 'B')).toBe(true);
        expect(graph.hasEdge('B', 'A')).toBe(true);
    });

    test('hasEdge returns false if there is no edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        expect(graph.hasEdge('A', 'B')).toBe(false);
    });

    test('getNeighbors returns all neighbors of a vertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        expect(graph.getNeighbors('A').sort()).toEqual(['B', 'C'].sort());
    });

    test('getNeighbors returns an empty array if no neighbors', () => {
        graph.addVertex('A');
        expect(graph.getNeighbors('A')).toEqual([]);
    });

    test('getNeighbors returns an empty array if the vertex does not exist', () => {
        expect(graph.getNeighbors('A')).toEqual([]);
    });
});
