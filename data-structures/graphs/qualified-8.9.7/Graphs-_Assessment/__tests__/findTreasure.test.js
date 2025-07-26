const path = require("path");

const findTreasure = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/findTreasure"
));

describe("Treasure map search tests", () => {
  test('should find the word "ABC" horizontally in the top row', () => {
    const board = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ];
    const word = "ABC";
    expect(findTreasure(board, word)).toBe(true);
  });

  test('should not find the word "AEI" because it requires diagonal moves', () => {
    const board = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ];
    const word = "AEI";
    expect(findTreasure(board, word)).toBe(false);
  });

  test('should not find the word "AEF" because it requires diagonal moves', () => {
    const board = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ];
    const word = "AEF";
    expect(findTreasure(board, word)).toBe(false);
  });

  test("should find the word vertically", () => {
    const board = [
      ["A", "B", "C"],
      ["D", "B", "F"],
      ["G", "B", "I"]
    ];

    expect(findTreasure(board, "BBB")).toBe(true);
    expect(findTreasure(board, "ADG")).toBe(true);
    expect(findTreasure(board, "CFI")).toBe(true);
  });

  test("should handle a single cell board matching the word", () => {
    const board = [["A"]];
    const word = "A";
    expect(findTreasure(board, word)).toBe(true);
  });

  test("should return false for a single cell board not matching the word", () => {
    const board = [["A"]];
    const word = "B";
    expect(findTreasure(board, word)).toBe(false);
  });

  test("should find the word in a large complex path", () => {
    const board = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I", "J"],
      ["K", "L", "M", "N", "O"],
      ["P", "Q", "R", "S", "T"],
      ["U", "V", "W", "X", "Y"]
    ];
    const word = "ABCDEJIHGFKLMNOTSRQPUVWXY";
    expect(findTreasure(board, word)).toBe(true);
  });

  test("should find the word by traversing horizontally and vertically", () => {
    const board = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I", "J"],
      ["K", "L", "M", "N", "O"],
      ["P", "Q", "R", "S", "T"],
      ["U", "V", "W", "X", "Y"]
    ];
    const word = "ABCHMRQVWXS";
    expect(findTreasure(board, word)).toBe(true);
  });

  test("should return false when the word is longer than any possible path in the board", () => {
    const board = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ];
    const word = "ABCDEFGHIJ";
    expect(findTreasure(board, word)).toBe(false);
  });

  test('should return false for the word "ABCB" that requires backtracking', () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "ABCB";
    expect(findTreasure(board, word)).toBe(false);
  });
});
