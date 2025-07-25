const path = require("path");

const findRoute = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/findRoute"
));

describe("findRoute", () => {
  test("returns true when there is a route from source to destination", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0]
    ];
    expect(findRoute(n, edges, 0, 3)).toBe(true);
  });

  test("returns false when there is no route from source to destination", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [2, 3]
    ];
    expect(findRoute(n, edges, 0, 3)).toBe(false);
  });

  test("returns true even for longer paths", () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0]
    ];
    expect(findRoute(n, edges, 0, 4)).toBe(true);
  });

  test("handles cases where source equals destination", () => {
    const n = 1;
    const edges = [];
    expect(findRoute(n, edges, 0, 0)).toBe(true);
  });
});
