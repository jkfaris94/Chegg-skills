function indexOrders(orderList) {
    // Edge: empty list = --> {}
    if (!orderList || orderList.length === 0) {
        return {};
    }

    const result = {};

    // nested traversal: outer for orders, inner for SKUs
    for (let i = 0; i < orderList.length; i++) {
        const order = orderList[i];
        // Set for dedup per order (like per-line in concordance) 
        const seenInThisOrder = new Set();

        for (let j = 0; j < order.length; j++) {
            const sku = order[j];
            // Skip if already seen in this order
            if (seenInThisOrder.has(sku)) continue;
            seenInThisOrder.add(sku);

            // Hash table: init array if new, push index
            if (!result[sku]) {
                result[sku] = [];
            }
            result[sku].push(i);
        }
    }

    return result;
}

module.exports = indexOrders;