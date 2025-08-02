import * as fs from "fs";
import * as path from "path";

describe('Context API conversion', () => {
  describe("General", () => {
    test('does not pass props to `Route` components within the `App` component', () => {
      const componentPath = path.join(__dirname, "..", "src", "App.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/\<Dashboard\s?\/\>/i);
      expect(fnString).toMatch(/\<NoMatch\s?\/\>/i);
    });

    test('does not pass props within the `Dashboard` component', () => {
      const componentPath = path.join(
        __dirname, "..", "src", "components", 
        "Dashboard", "Dashboard.js"
      );
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/\<Contacts\s?\/\>/i);
      expect(fnString).toMatch(/\<Tasks\s?\/\>/i);
      expect(fnString).toMatch(/\<Sales\s?\/\>/i);
      expect(fnString).toMatch(/\<Calls\s?\/\>/i);
    });
  });
  
  describe("Contacts", () => {
    test('creates a custom context provider within the `ContactsContext.js` file', () => {
      const componentPath = path.join(__dirname, "..", "src", "contexts", "ContactsContext.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/createContext\(/i);
      expect(fnString).toMatch(/ContactsContextProvider/i);
      expect(fnString).toMatch(/ContactsContext.Provider/i);
    });

    test('uses the `useState()` hook within the `ContactsContext.js` file', () => {
      const componentPath = path.join(__dirname, "..", "src", "contexts", "ContactsContext.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/useState\(/i);
    });

    test('includes the custom `ContactsContextProvider` within the `App` component', () => {
      const componentPath = path.join(__dirname, "..", "src", "App.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/ContactsContextProvider/i);
    });

    test('uses the `ContactsContext` within the `CurrentStats` component', () => {
      const componentPath = path.join(__dirname, "..", "src", "components", "CurrentStats.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/useContext\(/i);
      expect(fnString).toMatch(/ContactsContext/i);
    });

    test('uses the `ContactsContext` within the `Contacts` component', () => {
      const componentPath = path.join(
        __dirname, "..", "src", "components", 
        "Dashboard", "Contacts", "Contacts.js"
      );
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/useContext\(/i);
      expect(fnString).toMatch(/ContactsContext/i);
    });
  });
  
  describe("Calls", () => {
    test('creates a custom context provider within the `CallsContext.js` file', () => {
      const componentPath = path.join(__dirname, "..", "src", "contexts", "CallsContext.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/createContext\(/i);
      expect(fnString).toMatch(/CallsContextProvider/i);
      expect(fnString).toMatch(/CallsContext.Provider/i);
    });

    test('uses the `useState()` hook within the `CallsContext.js` file', () => {
      const componentPath = path.join(__dirname, "..", "src", "contexts", "CallsContext.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/useState\(/i);
    });

    test('includes the custom `CallsContextProvider` within the `App` component', () => {
      const componentPath = path.join(__dirname, "..", "src", "App.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/CallsContextProvider/i);
    });

    test('uses the `CallsContext` within the `CurrentStats` component', () => {
      const componentPath = path.join(__dirname, "..", "src", "components", "CurrentStats.js");
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/useContext\(/i);
      expect(fnString).toMatch(/CallsContext/i);
    });

    test('uses the `CallsContext` within the `Calls` component', () => {
      const componentPath = path.join(
        __dirname, "..", "src", "components", 
        "Dashboard", "Calls", "Calls.js"
      );
      const fnString = fs.readFileSync(componentPath, "utf-8");

      expect(fnString).toMatch(/useContext\(/i);
      expect(fnString).toMatch(/CallsContext/i);
    });
  });
});
