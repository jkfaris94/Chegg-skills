// Find a path between two nodes in a graph using Depth First Search (DFS) transversal.


// 1
// | \
// 2 - 3
//     |
//     4


const edgeList = [
  [1, 2], // Edge connecting node 1 to node 2
  [1, 3], // Edge connecting node 1 to node 3
  [2, 3], // Edge connecting node 2 to node 3, creating a triangle with nodes 1, 2, and 3
  [3, 4] // Edge connecting node 3 to node 4, extending the structure downward from the triangle
];


function dfsPath(graph, start, goal, path = [], visited = new Set()) {
    path.push(start); // Add the current node to the path
    visited.add(start); // Mark the current node as visited

    if (start === goal) {
        return path; // If the current node is the goal, return the path
    }

    for(let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            let result = dfsPath(graph, neighbor, goal, path, visited);
            if (result) {
                return result; // If a path to the goal is found, return it
            }
        }
    }

    path.pop(); // If no path is found, remove the current node from the path
    return null; // Return null if no path to the goal exists
}

function findPathDfs(graph, start, goal) {
    const path = dfsPath(graph, start, goal);
    return path ? path : `No path found from ${start} to ${goal}`; // Return the path or a message if no path exists
}

const startNode = 1;
const goalNode = 3;
const path = findPathDfs(edgeList, startNode, goalNode);
console.log(`Path from ${startNode} to ${goalNode}:`, path); // Output: Path from 1 to 4: [1, 3, 4] or similar
// Note: The actual path may vary depending on the order of neighbors in the graph representation.
// This code assumes the graph is represented as an adjacency list where each node points to its neighbors
// in an array format.