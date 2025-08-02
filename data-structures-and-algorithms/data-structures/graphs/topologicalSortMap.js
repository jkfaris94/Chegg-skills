// Topological Sort for Course Scheduling using Depth-First Search (DFS)

// The code below uses a visited map to mark nodes as 'visiting', 'visited', or 'unvisited'. 
// If a node is encountered that is already marked as 'visiting' during its own DFS traversal, it indicates a cycle, and an error is thrown.

function dfs(course, graph, visited, stack) {
  // Checks if the current node is already in the recursion stack (indicating a cycle)
  if (visited.get(course) === "visiting") {
    throw new Error("The graph contains a cycle.");
  }

  // If the node has been fully processed, skip further processing
  if (visited.get(course) === "visited") {
    return;
  }

  // Mark the node as visiting (currently in the stack)
  visited.set(course, "visiting");

  // Recursively visit all the adjacent nodes (dependencies that need to be taken first)
  graph.get(course).forEach((neighbor) => {
    if (visited.get(neighbor) !== "visited") {
      dfs(neighbor, graph, visited, stack);
    }
  });

  // Mark the node as fully visited and push to the result stack
  visited.set(course, "visited");
  stack.push(course);
}

function topologicalSort(courses, prerequisites) {
  let graph = new Map();
  let visited = new Map(); // Tracks visit status of each course
  let stack = []; // Stack to store the courses in topological order

  // Initialize the graph and visited map
  courses.forEach((course) => {
    graph.set(course, []);
    visited.set(course, "unvisited");
  });

  // Build the graph based on prerequisites
  prerequisites.forEach(([course, prereq]) => {
    graph.get(prereq).push(course);
  });

  // Perform DFS for each unvisited node
  try {
    courses.forEach((course) => {
      if (visited.get(course) === "unvisited") {
        dfs(course, graph, visited, stack);
      }
    });
  } catch (e) {
    return e.message; // Handle cycle detection
  }

  // Since the DFS adds courses in reverse topological order, reverse the stack
  return stack.reverse();
}

// Example usage
const courses = ["CS101", "CS102", "CS103", "CS104"];
const prerequisites = [
  ["CS102", "CS101"],
  ["CS103", "CS102"],
  ["CS104", "CS103"],
  // Uncomment the next line to introduce a cycle
  // ["CS101", "CS104"]
];
try {
  const order = topologicalSort(courses, prerequisites);
  console.log("Topological Order:", order);
} catch (error) {
  console.error("Error:", error.message);
}



// Example usage for testing with different course structures
// Uncomment the following lines to test with different course structures:


// const courses1 = [
//   "Intro to Programming",
//   "Data Structures",
//   "Algorithms",
//   "Web Development"
// ];
// const prerequisites1 = [
//   ["Data Structures", "Intro to Programming"],
//   ["Algorithms", "Data Structures"]
// ];

// console.log(
//   "Topological Sort of Basic Coding Curriculum:",
//   topologicalSort(courses1, prerequisites1)
// );

// const courses2 = [
//   "Advanced JavaScript",
//   "React Development",
//   "Node.js Development",
//   "Full Stack Capstone"
// ];
// const prerequisites2 = [
//   ["React Development", "Advanced JavaScript"],
//   ["Node.js Development", "Advanced JavaScript"],
//   ["Full Stack Capstone", "React Development"],
//   ["Full Stack Capstone", "Node.js Development"]
// ];

// // Running the topological sort function with the advanced coding curriculum setup
// console.log(
//   "Topological Sort of Advanced Coding Curriculum:",
//   topologicalSort(courses2, prerequisites2)
// );