function bfs(graph, color, start) {
    let queue = [start];
    color[start] = 0; // Start coloring with color 1

    while (queue.length > 0) {
        let node = queue.shift();

        for (let neighbor of graph[node]) {
            if (color[neighbor] === -1) { // If the neighbor is uncolored
                color[neighbor] = 1 - color[node]; // Color with opposite color
                queue.push(neighbor);
            } else if (color[neighbor] === color[node]) {
            return false; // If the neighbor has the same color, not bipartite
            }
        }
    }
    return true; // All neighbors colored correctly
}

function isBipartite(graph) {
    let color = Array(graph.length).fill(-1); // -1 means uncolored
    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1 && !bfs(graph, color, i)) {
            return false; // If any component is not bipartite, return false
        }
    }
    return true; // All components are bipartite
}


// Example graph represented as adjacency list 
const graph = [  //bipartite graph
    [],
    [2,4],
    [1,3],
    [2,4],
];


// const graph = [ //non-bipartite graph
//     [],
//     [2, 3, 4],
//     [1, 3],
//     [1, 2, 4],
//     [1, 3]
// ]


const result = isBipartite(graph);
console.log("Is the graph bipartite?", result); 