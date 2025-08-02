const graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "G"],
    "F": ["C", "H", "I"],
    "G": ["E"],
    "H": ["F"],
    "I": ["F"]
};

function bfs(graph, start,) {
    let queue = [start]; // Initialize the queue with the start node
    let visited = new Set(); // Set to keep track of visited nodes
    let output = []; // Array to store the order of traversal

    while (queue.length > 0) {
        let node = queue.shift();

        if (!visited.has(node)) {
            visited.add(node); // Mark the current node as visited
            output.push(node); // Add the current node to the output

            let neighbors = graph[node]; // Get the neighbors of the current node
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor); // Add unvisited neighbors to the queue
                }
            }
        }
    }
    return output; // Return the order of traversal
}


// Example usage of the BFS function
const startNode = "A"; // Starting node for BFS
const bfsTraversal = bfs(graph, startNode);
console.log(`BFS Traversal starting from node ${startNode}:`, bfsTraversal); // Output: BFS Traversal starting from node A: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]
// Note: The actual order of traversal may vary depending on the order of neighbors in the graph representation.
//