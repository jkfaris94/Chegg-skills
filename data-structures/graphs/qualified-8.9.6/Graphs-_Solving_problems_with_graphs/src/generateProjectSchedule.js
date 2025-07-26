function dfs(project, graph, visited, stack) {
  if (visited.get(project) === "visiting") {
    throw new Error("The graph contains a cycle.");
  }

  if (visited.get(project) === "visited") {
    return;
  }

  visited.set(project, "visiting");

  for (const neighbor of graph.get(project)) {
    dfs(neighbor, graph, visited, stack);
  }

  visited.set(project, "visited");
  stack.push(project);
}

function generateProjectSchedule(projects, dependencies) {
  const graph = new Map();
  const visited = new Map();
  const stack = [];

  // Initialize the graph and visited map
  projects.forEach((project) => {
    graph.set(project, []);
    visited.set(project, "unvisited");
  });

    // Build the graph based on dependencies
  dependencies.forEach(([project, dependency]) => {
    graph.get(dependency).push(project);
  });

  // Perform DFS for each unvisited node
  try {
    projects.forEach((project) => {
      if (visited.get(project) === "unvisited") {
        dfs(project, graph, visited, stack);
      }
    });
  } catch (e) {
    return []; // empty array for cycle detection
  }

  // Step 3: Reverse the stack to get the correct topological order
  return stack.reverse();
}


module.exports = generateProjectSchedule;
