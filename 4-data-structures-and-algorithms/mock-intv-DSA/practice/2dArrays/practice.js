const orders = [
  ["SKU1", "SKU2", "SKU3"], // Order 0: Multiple SKUs
  ["SKU2", "SKU4", "SKU2"], // Order 1: Duplicate SKU2
  [], // Order 2: Empty row
  ["SKU1", null, "SKU5"], // Order 3: Null value
  ["SKU6"], // Order 4: Single SKU
  ["SKU3", "SKU4", "SKU1", "SKU3"], // Order 5: Duplicate SKU3
  [undefined, "SKU7"], // Order 6: Undefined value
  ["SKU2", "SKU8", "SKU9"], // Order 7: Unique SKUs
  ["SKU1", "SKU2"] // Order 8: Common SKUs
];

//Write a createSKUIndex function to map each SKU to the row indices where it appears, using a hash table.
//Handle duplicates (use a Set per row) and edge cases (empty rows, null/undefined).

function createSKUIndex(orders) {
    const index = {};

    for (let i = 0; i < orders.length; i++) {
        if (!orders[i].length) continue;
        const seen = new Set();

        for (let j = 0; j < orders[i].length; j++) {
            const sku = orders[i][j];

            if (sku && !seen.has(sku)) {
                index[sku] = index[sku] || [];
                index[sku].push(i);
                seen.add(sku);
            }
        }
    }
    return index;
}

//Write a searchOrders function that takes a linked list of SKUs (mock one in code) and returns the order rows containing any of those SKUs.
function searchOrders(skuList, index, orders) {
    const rowIndices = new Set();
    let current = skuList.head;

    while (current) {
        const sku = current.value;
        if (index[sku]) {
            for (let row of index[sku]) {
                rowIndices.add(row);
            }
        }
        current = current.next
    }
    return Array.from(rowIndices).map(row => orders[row]);  //ask for breakdown
}

function countSKUs(orders) {
  let count = 0;
  for (let i = 0; i < orders.length; i++) {
    if (!orders[i].length) continue; // Skip empty rows
    for (let j = 0; j < orders[i].length; j++) {
      const sku = orders[i][j];
      // Check for non-null, non-undefined, non-empty string
      if (sku && typeof sku === 'string' && sku !== '') {
        console.log(`Counting SKU: ${sku} at row ${i}, col ${j}`);
        count++;
        }
    }
  }
  return count;
}

// Mock linked list
const skuList = {
  head: { value: "SKU1", next: { value: "SKU2", next: null } }
};
const index = createSKUIndex(orders);

console.log(createSKUIndex(orders));
console.log(searchOrders(skuList, index, orders));
// Expected: [["SKU1", "SKU2", "SKU3"], ["SKU2", "SKU4", "SKU2"], ["SKU1", null, "SKU5"], ["SKU3", "SKU4", "SKU1", "SKU3"], ["SKU1", "SKU2"]]
console.log(countSKUs(orders));