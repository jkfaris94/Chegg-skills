function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  
  const totals = new Map();

  // Get first node whether we were given a list (with .head) or a node
  const getHead = (list) => (list && (list.head ?? list)) || null;

  // Extract the city/rainfall payload from a node (supports .value, .data, or direct)
  const getPayload = (node) => (node?.value ?? node?.data ?? node);

  function traverse(list) {
    let current = getHead(list);
    while (current) {
      const item = getPayload(current);
      if (item && typeof item.city === "string" && item.rainfall != null) {
        const city = item.city;
        const rainfall = Number(item.rainfall) || 0;
        // Sum rainfall while preserving first-seen order
        totals.set(city, (totals.get(city) ?? 0) + rainfall);
      }
      current = current.next ?? null;
    }
  }

  traverse(firstMonthTotals);
  traverse(secondMonthTotals);

  // Convert to required array of { city, rainfall } objects
  return Array.from(totals, ([city, rainfall]) => ({ city, rainfall }));
  
}

module.exports = combineMonthlyRainfallTotals;