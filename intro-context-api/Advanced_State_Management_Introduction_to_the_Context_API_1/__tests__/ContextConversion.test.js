import * as fs from "fs";
import * as path from "path";

describe('Context API conversion', () => {
  test('creates a new context within the `TasksContext.js` file', () => {
    const componentPath = path.join(__dirname, "..", "src", "contexts", "TasksContext.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/createContext\(/i);
  });

  test('includes a `TasksContext.Provider` within the `App` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "App.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/TasksContext.Provider/i);
  });
  
  test('does not pass tasks as a property within the `App` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "App.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).not.toMatch(/tasks\=/i);
  });
  
  test('accesses the context within the `CurrentStats` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "components", "CurrentStats.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/useContext\(/i);
  });
  
  test('accesses the context within the `Tasks` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "components", "Dashboard", "Tasks.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/useContext\(/i);
  });
});
