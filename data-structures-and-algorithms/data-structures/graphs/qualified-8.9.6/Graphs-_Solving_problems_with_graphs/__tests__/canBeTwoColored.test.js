const path = require("path");

const canBeTwoColored = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/canBeTwoColored"
));

describe("canBeTwoColored", () => {
  test("handles an open network", () => {
    const graph = [[], [2, 4], [1, 3], [2, 4], [1, 3]];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles a complex network with inevitable conflict", () => {
    const graph = [[], [2, 3, 4], [1, 3], [1, 2, 4], [1, 3]];
    expect(canBeTwoColored(graph)).toBe(false);
  });

  test("handles a sparse network where all components are bipartite", () => {
    const graph = [[], [2], [1], [], [5], [4]];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles an empty graph", () => {
    const graph = [[]];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles a single node graph", () => {
    const graph = [[], []];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles a simple bipartite graph", () => {
    const graph = [[], [2], [1, 3], [2]];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles a non-bipartite graph with an odd cycle", () => {
    const graph = [[], [2, 3], [1, 3], [1, 2]];
    expect(canBeTwoColored(graph)).toBe(false);
  });

  test("handles a disconnected graph where all components are bipartite", () => {
    const graph = [[], [2], [1], [], [5], [4]];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles a complex bipartite graph", () => {
    const graph = [[], [2, 4], [1, 3, 5], [2], [1], [2]];
    expect(canBeTwoColored(graph)).toBe(true);
  });

  test("handles a graph with multiple components, one of which is non-bipartite", () => {
    const graph = [[], [2], [1], [], [5, 6], [4, 6], [4, 5]];
    expect(canBeTwoColored(graph)).toBe(false);
  });
});
