// find the shortest path in an unweighted graph
// using Breadth-First Search (BFS)


//example from video walkthrough
function findShortestPathV(graph, start, target) {
    let queue = [[start]];
    let visited = new Set([start]);

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        // If we reached the target, return the path
        if (node === target) {
            return path;
        }

        // Explore neighbors
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor])
            }
        }
    }

    return null; // If no path found
}

const graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 5, 6],
    4: [2],
    5: [2, 3, 7],
    6: [3],
    7: [5]
};

const start = 1;
const target = 7;
const path = findShortestPathV(graph, start, target);
console.log(`Shortest path from ${start} to ${target}:`, path);


// example from lesson 
// Here's how you can modify the typical BFS algorithm to find the shortest path in an unweighted graph:
function findShortestPath(graph, source, destination) {
  let queue = [[source]]; // Store paths in the queue, starting with the path containing only the source
  let visited = new Set([source]); // Mark the source as visited

  while (queue.length > 0) {
    let path = queue.shift(); // Take the first path from the queue
    let node = path[path.length - 1]; // The current node to process is the last in the path

    if (node === destination) {
      return path; // If the current node is the destination, return the path
    }

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Mark the neighbor as visited
        queue.push([...path, neighbor]); // Enqueue a new path including this neighbor
      }
    }
  }

  return null; // If no path is found and the queue is empty, return null
}

