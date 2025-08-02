const path = require("path");

const countSocialGroups = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/countSocialGroups"
));

describe("countSocialGroups", () => {
  test("counts social groups correctly in a small cluster with isolates", () => {
    const n = 5;
    const edges = [
      [1, 2],
      [2, 3],
      [1, 3],
      [4, 5]
    ];
    expect(countSocialGroups(n, edges)).toBe(2);
  });

  test("counts social groups correctly in a fully connected graph", () => {
    const n = 4;
    const edges = [
      [1, 2],
      [1, 4],
      [1, 3],
      [3, 2],
      [3, 4]
    ];
    expect(countSocialGroups(n, edges)).toBe(1);
  });

  test("counts social groups correctly with a single connected component", () => {
    const n = 3;
    const edges = [
      [1, 2],
      [2, 3]
    ];
    expect(countSocialGroups(n, edges)).toBe(1);
  });

  test("handles empty graph", () => {
    const n = 3;
    const edges = [];
    expect(countSocialGroups(n, edges)).toBe(3); // Expect 3 separate nodes, not connected
  });

  test("handles single node with no edges", () => {
    const n = 1;
    const edges = [];
    expect(countSocialGroups(n, edges)).toBe(1); // Single node is its own component
  });

  test("handles graph with loop edges", () => {
    const n = 3;
    const edges = [
      [1, 2],
      [2, 3],
      [3, 1]
    ];
    expect(countSocialGroups(n, edges)).toBe(1); // All nodes connected in a loop
  });

  test("handles graph with three disconnected components", () => {
    const n = 6;
    const edges = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    expect(countSocialGroups(n, edges)).toBe(3); // Each pair forms a separate component
  });

  test("handles graph with five separate clusters", () => {
    const n = 8;
    const edges = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]; // Nodes 7 and 8 are completely isolated
    expect(countSocialGroups(n, edges)).toBe(5); // Three pairs connected and two isolated nodes
  });

  test("complex graph with four separate clusters", () => {
    const n = 10;
    const edges = [
      [1, 2],
      [2, 3],
      [1, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [9, 10],
      [8, 10]
    ];
    expect(countSocialGroups(n, edges)).toBe(4); // Four separate clusters: {1,2,3}, {4,5}, {6,7}, {8,9,10}
  });

  test("complex graph with five separate clusters", () => {
    const n = 12;
    const edges = [
      [1, 2],
      [2, 3],
      [1, 3],
      [4, 5],
      [6, 7],
      [7, 8],
      [6, 8],
      [9, 10],
      [11, 12]
    ];
    expect(countSocialGroups(n, edges)).toBe(5); // Five clusters: {1,2,3}, {4,5}, {6,7,8}, {9,10}, {11,12} as separate components
  });
});
