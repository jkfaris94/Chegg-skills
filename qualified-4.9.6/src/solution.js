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
    totalWins = games[game];
  }

  return totalWins;
}

/* Use an AI assistant to help you write the following function */
function printWinLossStatus(games) {

}

module.exports = {
  getTotalWins,
  printWinLossStatus,
};
