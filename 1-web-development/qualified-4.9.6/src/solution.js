/*
  Write each function according to the instructions.
  
  When a function's parameters reference `games`, it references an object that looks like the one that follows.
  {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 29 }
  }
*/


/* Use an AI assistant to debug the following function */
function getTotalWins(games) {
  let totalWins = 0;

  for (const game in games) {
    // Each game entry in 'games' is an object like { wins: number, lost: number }
    // We need to sum up the "wins" property of each game.
    totalWins += games[game].wins;
  }

  return totalWins;
}

/* Use an AI assistant to help you write the following function */
function printWinLossStatus(games) {
  const result = [];

  for (const game in games) {
    const { wins, lost } = games[game];

    if (wins > lost) {
      result.push("has more wins");
    } else if (wins < lost) {
      result.push("has more losses");
    } else {
      result.push("has the same number of wins and losses");
    }
  }

  return result;
}

module.exports = {
  getTotalWins,
  printWinLossStatus,
};
