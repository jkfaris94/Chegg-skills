function findEmergencyRoute(graph, source, destination) {
  let queue = [[source]];
  let visited = new Set([source]);
  
  while (queue.length > 0) {
    let path = queue.shift();
    let node = path[path.length - 1];
    
    if (node === destination) {
      return path;
    }
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}
