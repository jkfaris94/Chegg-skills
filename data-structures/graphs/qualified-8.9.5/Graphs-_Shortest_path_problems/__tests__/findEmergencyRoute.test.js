const path = require("path");

const findEmergencyRoute = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/findEmergencyRoute"
));

describe("findEmergencyRoute", () => {
  test("Direct route between two stations", () => {
    const graph = [[], [2], [1]];
    const result = findEmergencyRoute(graph, 1, 2);
    expect(result).toEqual([1, 2]);
  });

  test("Route through intermediaries", () => {
    const graph = [[], [2], [1, 3], [2]];
    const result = findEmergencyRoute(graph, 1, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  test("No available route", () => {
    const graph = [[], [2], [1], [], [], [3]];
    const result = findEmergencyRoute(graph, 1, 4);
    expect(result).toBeNull();
  });

  test("Multiple Routes", () => {
    const graph = [[], [2, 5], [1, 3], [2, 5], [], [1, 3]];
    const result = findEmergencyRoute(graph, 1, 3);
    const expectedPaths = [
      [1, 5, 3],
      [1, 2, 3]
    ];

    const match = expectedPaths.some(
      (expectedPath) =>
        result.length === expectedPath.length &&
        result.every((value, index) => value === expectedPath[index])
    );

    expect(match).toBe(true);
  });

  test("Large Network with Single Connection", () => {
    const graph = [
      [],
      [2],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 7],
      [6, 8],
      [7]
    ];
    const result = findEmergencyRoute(graph, 1, 8);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("Disconnected Network", () => {
    const graph = [[], [], [3, 5], [2, 5], [6], [2, 3], [4]];
    const result = findEmergencyRoute(graph, 1, 6);
    expect(result).toBeNull();
  });
});
