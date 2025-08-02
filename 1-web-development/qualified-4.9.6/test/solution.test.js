const { expect } = require("chai");
const { getTotalWins, printWinLossStatus } = require("../src/solution");

describe("Solution Functions", () => {
  let cart;
  beforeEach(() => {
    games = {
      "Magic The Gathering Arena": { wins: 44, lost: 99 },
      "Black Jack": { wins: 35, lost: 29 }
    };
  });

  describe("#getTotalWins()", () => {
    it("should return 0 if the games object is empty", () => {
      const actual = getTotalWins({});
      expect(actual).to.equal(0);
    });

    it("should return the total wins for the games", () => {
      const actual = getTotalWins(games);
      const expected = 79;
      expect(actual).to.equal(expected);
    });
  });

  describe("#printWinLossStatus()", () => {
    it("should return the correct status in an array", () => {
      const actual = printWinLossStatus(games);
      const expected = ['has more losses', 'has more wins'];
      expect(actual).to.have.ordered.members(expected);
    });
    
    it("should return the correct status in an array", () => {
      games = {
        "Magic The Gathering Arena": { wins: 44, lost: 99 },
        "Black Jack": { wins: 0, lost: 0 },
        "Poker": {wins: 33, lost: 26}
      };
      const actual = printWinLossStatus(games);
      const expected = ['has more losses','has the same number of wins and losses','has more wins'];
      expect(actual).to.have.ordered.members(expected);
    });    
  });
});
