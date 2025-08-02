const findLowestScoringStudent = require("../src/solution");

describe("findLowestScoringStudent()", () => {

  it("should return the student with the lowest score given a non-empty list of students", () => {
    /// complete this test
        const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];

    const actual = findLowestScoringStudent(students);
    const expected = { name: "Morgan Sutton", score: 7.4 };
    expect(actual).toEqual(expected);
  });

  it("should return null given an empty list of students", () => {
    /// complete this test
        const students = [];

    const actual = findLowestScoringStudent(students);
    const expected = null;
    expect(actual).toBe(expected);
  });
});