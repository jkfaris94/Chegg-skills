//Kahn's algorithm for topological sorting

function topologicalSort(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let inDegree = Array(numCourses).fill(0);

    //build the graph and update the in-degree array based on prerequisites
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i); // Add courses with no prerequisites to the queue
        }
    }

    let result = [];
    while (queue.length > 0) {
        let current = queue.shift();
        result.push(current); // Add the course to the result
        for (let neighbor of graph[current]) {
            inDegree[neighbor]--; // Decrease the in-degree of the neighbor
            if (inDegree[neighbor] === 0) queue.push(neighbor); // If in-degree becomes zero, add to the queue

        }
    }

    return result.length === numCourses ? result : "The graph contains a cycle."; // Check if all courses are included
}

let numCourses = 4;
let courses = ["intro to programming", "data structures", "algorithms", "web development"];
const prerequisites = [
    [1, 0], // "data structures" depends on "intro to programming"
    [2, 1], // "algorithms" depends on "data structures"

]

let sortedOrder = topologicalSort(numCourses, prerequisites);
console.log("course order:",sortedOrder.map(course => courses[course])); // Output the sorted order of courses