const path = require("path");

const findMinimumDroneMoves = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/findMinimumDroneMoves"
));

describe("findMinimumDroneMoves", () => {
  // Define the grid size for the tests
  const gridSize = 12;
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

  test("Open field - straightforward path", () => {
    const start = [0, 0];
    const target = [11, 11];
    const moves = findMinimumDroneMoves(grid, start, target);
    expect(moves).toBe(6);
  });

  test("Partially blocked path", () => {
    // Adding obstacles
    const obstacleGrid = grid.map((arr) => arr.slice());
    obstacleGrid[5][5] = 1;
    obstacleGrid[6][6] = 1;
    const start = [0, 0];
    const target = [10, 10];
    const moves = findMinimumDroneMoves(obstacleGrid, start, target);
    expect(moves).toBe(4);
  });

  test("Single move needed", () => {
    const start = [1, 1];
    const target = [3, 4];
    const moves = findMinimumDroneMoves(grid, start, target);
    expect(moves).toBe(1);
  });

  test("Target is the starting point", () => {
    const start = [5, 5];
    const target = [5, 5];
    const moves = findMinimumDroneMoves(grid, start, target);
    expect(moves).toBe(0);
  });

  test("No possible path due to obstacles", () => {
    const blockedGrid = grid.map((arr) => arr.slice());
    // Blocking all possible first moves from start
    blockedGrid[3][2] = 1;
    blockedGrid[2][3] = 1;
    const start = [0, 0];
    const target = [11, 11];
    const moves = findMinimumDroneMoves(blockedGrid, start, target);
    expect(moves).toBe(-1);
  });

  test("Edge case at grid boundaries", () => {
    const start = [0, 0];
    const target = [11, 0];
    const moves = findMinimumDroneMoves(grid, start, target);
    expect(moves).toBe(7);
  });

  test("Handles non-standard grid sizes", () => {
    const largeGridSize = 15;
    const largeGrid = Array.from({ length: largeGridSize }, () =>
      Array(largeGridSize).fill(0)
    );
    const start = [0, 0];
    const target = [14, 14];
    const moves = findMinimumDroneMoves(largeGrid, start, target);
    expect(moves).toBe(8);
  });
});
