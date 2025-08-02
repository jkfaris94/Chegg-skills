import * as fs from "fs";
import * as path from "path";

describe('Context API conversion', () => {
  test('creates a custom context provider within the `TasksContext.js` file', () => {
    const componentPath = path.join(__dirname, "..", "src", "contexts", "TasksContext.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/createContext\(/i);
    expect(fnString).toMatch(/TasksContextProvider/i);
    expect(fnString).toMatch(/TasksContext.Provider/i);
  });
  
  test('uses the `useState()` hook within the `TasksContext.js` file', () => {
    const componentPath = path.join(__dirname, "..", "src", "contexts", "TasksContext.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/useState\(/i);
  });

  test('includes the custom `TasksContextProvider` within the `App` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "App.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/TasksContextProvider/i);
  });
});
