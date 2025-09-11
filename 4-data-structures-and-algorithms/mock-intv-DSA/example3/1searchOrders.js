function searchOrders(skuLinkedList, skuIndex, orderList) {
    // Edge: empty/null list --> []
    if (!skuLinkedList || !skuLinkedList.head) {
        return [];
    }

    // Step 1: Traverse linked list to array (like in search lines) 
    const requested = [];
    let node = skuLinkedList.head;
    while (node !== null) {
        requested.push(node.value);
        node = node.next;
    }

    // Step 2: Collect indices from hash table (ignore missing SKUs) 
    const indices = [];
    for (const sku of requested) {
        if (skuIndex[sku]) {
            // spread to add all indices for this SKU 
            indices.push(...skuIndex[sku]);
        }
    }

    // Step 3: dedup + sort ascending (deterministic) 
    const uniqueSorted = Array.from(new Set(indices)).sort((a, b) => a - b);

    // Step 4: map indices to original orders (no mutation)
    const result = [];
    for (const idx of uniqueSorted) {
        result.push(orderList[idx]);
    }
    
    return result;
}

module.exports = searchOrders;