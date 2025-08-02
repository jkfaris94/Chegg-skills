const path = require("path");

const markTerritory = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/markTerritory"
));

describe("markTerritory", () => {
  test("Simple expansion", () => {
    const grid = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
    ];
    const sr = 0,
      sc = 1,
      newType = 2;
    const expected = [
      [2, 2, 0],
      [0, 2, 2],
      [0, 0, 2]
    ];
    expect(markTerritory(grid, sr, sc, newType)).toEqual(expected);
  });

  test("Isolated start", () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];
    const sr = 1,
      sc = 1,
      newType = 2;
    const expected = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0]
    ];
    expect(markTerritory(grid, sr, sc, newType)).toEqual(expected);
  });

  test("Edge case where entire grid is updated", () => {
    const grid = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ];
    const sr = 0,
      sc = 0,
      newType = 3;
    const expected = [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ];
    expect(markTerritory(grid, sr, sc, newType)).toEqual(expected);
  });

  // Additional tests for more complex scenarios or edge cases
  test("No change when new type is the same as original", () => {
    const grid = [
      [1, 1],
      [1, 1]
    ];
    const sr = 0,
      sc = 0,
      newType = 1;
    const expected = [
      [1, 1],
      [1, 1]
    ];
    expect(markTerritory(grid, sr, sc, newType)).toEqual(expected);
  });

  test("Complex pattern", () => {
    const grid = [
      [1, 0, 2],
      [0, 1, 2],
      [1, 1, 2]
    ];
    const sr = 2,
      sc = 0,
      newType = 3;
    const expected = [
      [1, 0, 2],
      [0, 3, 2],
      [3, 3, 2]
    ];
    expect(markTerritory(grid, sr, sc, newType)).toEqual(expected);
  });
});
