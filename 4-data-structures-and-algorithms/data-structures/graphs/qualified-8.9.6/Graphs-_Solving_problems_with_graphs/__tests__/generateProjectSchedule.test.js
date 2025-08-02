const path = require("path");

const generateProjectSchedule = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/generateProjectSchedule"
));

describe("generateProjectSchedule", () => {
  test("handles simple linear dependencies", () => {
    const projects = ["Design", "Implement", "Test", "Deploy"];
    const dependencies = [
      ["Implement", "Design"],
      ["Test", "Implement"],
      ["Deploy", "Test"]
    ];
    const expected = ["Design", "Implement", "Test", "Deploy"];
    expect(generateProjectSchedule(projects, dependencies)).toEqual(expected);
  });

  test("handles complex dependencies with forks", () => {
    const projects = ["Setup", "Build", "Test", "Deploy"];
    const dependencies = [
      ["Build", "Setup"],
      ["Test", "Setup"],
      ["Deploy", "Build"],
      ["Deploy", "Test"]
    ];
    const validOrders = [
      ["Setup", "Build", "Test", "Deploy"],
      ["Setup", "Test", "Build", "Deploy"]
    ];
    const result = generateProjectSchedule(projects, dependencies);
    expect(validOrders).toContainEqual(result);
  });

  test("handles independent projects", () => {
    const projects = ["Research", "Explore"];
    const dependencies = [];
    const validOrders = [
      ["Research", "Explore"],
      ["Explore", "Research"]
    ];
    const result = generateProjectSchedule(projects, dependencies);
    expect(validOrders).toContainEqual(result);
  });

  test("returns an empty array for cycles in the graph", () => {
    const projects = ["A", "B", "C"];
    const dependencies = [
      ["A", "B"],
      ["B", "C"],
      ["C", "A"]
    ]; // This setup forms a cycle
    expect(generateProjectSchedule(projects, dependencies)).toStrictEqual([]);
  });

  test("returns an empty array if no projects are provided", () => {
    const projects = [];
    const dependencies = [];
    expect(generateProjectSchedule(projects, dependencies)).toEqual([]);
  });

  test("handles single project with no dependencies", () => {
    const projects = ["Solo"];
    const dependencies = [];
    const expected = ["Solo"];
    expect(generateProjectSchedule(projects, dependencies)).toEqual(expected);
  });
});
