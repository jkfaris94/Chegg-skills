// Define the graph using an adjacency list
const graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

function dfCycle(graph, node, visited, parent) {
    visited[node] = true; // Mark the current node as visited

    for (let neighbor of graph[node]) {
        if(!visited[neighbor]) {
            // If the neighbor hasn't been visited, recurse into it
            if (dfCycle(graph, neighbor, visited, node)) {
                return true; // Cycle found in the recursive call
            }
        } else if (neighbor !== parent) {
            // If the neighbor is visited and is not the parent
            return true; // Cycle detected
        }
    } 
    return false; // No cycle found from this node
}

function hasCycle(graph) {
    const visited = {}; // Object to keep track of visited nodes

    // Iterate through each node in the graph
    for (let node in graph) {
        if (!visited[node]) {
            // If the node hasn't been visited, start DFS from it
            if (dfCycle(graph, node, visited, null)) {
                return true; // Cycle found
            }
        }
    }
    return false; // No cycle found in the entire graph
}

const containsCycle = hasCycle(graph);
console.log(`Does the graph contain a cycle? ${containsCycle}`); // Output: true
// Note: The graph is undirected, so the edges are bidirectional.
// The function returns true if a cycle exists, otherwise false.
// This code assumes the graph is represented as an adjacency list where each node points to its neighbors
// in an array format.
//