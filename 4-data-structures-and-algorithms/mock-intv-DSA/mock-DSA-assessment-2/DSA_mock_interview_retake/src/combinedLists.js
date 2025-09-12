function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  
  // Step 1: Initialize hash table for totals
  const totals = {};
  
  // Step 2: Traverse first list and accumulate rainfalls
  let current = firstMonthTotals.head;
  while (current !== null) {
    const { city, rainfall } = current.value;
    if (!totals[city]) {
      totals[city] = 0;
    }
    totals[city] += rainfall;
    current = current.next;
  }
  
  // Step 3: Traverse second list and accumulate (sums overlaps)
  current = secondMonthTotals.head;
  while (current !== null) {
    const { city, rainfall } = current.value;
    if (!totals[city]) {
      totals[city] = 0;
    }
    totals[city] += rainfall;
    current = current.next;
  }
  
  // Step 4: Convert hash table to array of objects
  const result = [];
  for (const city in totals) {
    result.push({
      city: city,
      rainfall: totals[city]
    });
  }
  
  return result;
}

module.exports = combineMonthlyRainfallTotals;
