const fs = require("fs");
const path = require("path");
const { getFortune, fullSession } = require("../src/main");

const wait = (ms) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(true), ms));

describe("Assignment", () => {

  beforeEach(() => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("#getFortune()", () => {
    it("should print the question and fortune", async () => {
      const question = "Will the weather be excellent today?";
      await getFortune(question);
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const firstCall = console.log.mock.calls[0][0];
      expect(firstCall).toContain(`Your question was: ${question}`);

      const secondCall = console.log.mock.calls[1][0];
      expect(secondCall).toContain(`Your fortune is:`);
    });

    it("should only print an error if no message is provided", async () => {
      await getFortune();
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const call = console.log.mock.calls[0][0];
      expect(call).toContain(`There was an error: A question is required...`);
    });
  });

  describe("#fullSession()", () => {
    it("should print the welcome message", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const call = console.log.mock.calls[0][0];
      expect(call).toContain("Provide me a question");
    });

    it("should reprint the question", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const call = console.log.mock.calls[1][0];
      expect(call).toContain(`Your question was: ${question}`);
    });

    it("should print the fortune", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const call = console.log.mock.calls[2][0];
      expect(call).toContain(`Your fortune is:`);
    });

    it("should say goodbye", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const call = console.log.mock.calls[3][0];
      expect(call).toContain("Best of luck in the future...");
    });

    it("should say hello and then error if no question is provided", async () => {
      await fullSession();
      await wait(250);
      expect(console.log).toHaveBeenCalled();

      const first = console.log.mock.calls[0][0];
      expect(first).toContain("Provide me a question");

      const second = console.log.mock.calls[1][0];
      expect(second).toContain(
        `There was an error: A question is required...`
      );
    });
  });
  
  describe("Implementation", () => {
    const filePath = path.join(__dirname, "..", "src", "main.js");
    const contents = fs.readFileSync(filePath, "utf-8");
    it("should define functions using `async`", () => {
      expect(contents).toContain("async");

      const count = contents.split("async").length - 1;
      expect(count).toEqual(2);
    });

    it("should use `await` multiple times to evaluate promises", () => {
      expect(contents).toContain("await");

      const count = contents.split("await").length - 1;
      expect(count).toBeGreaterThan(3);
    });

    it("should not use .then() or .catch()", () => {
      expect(contents).not.toContain(".then");
      expect(contents).not.toContain(".catch");
    });
  });

});
