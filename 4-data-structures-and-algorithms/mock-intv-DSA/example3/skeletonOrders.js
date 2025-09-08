function indexOrders(orderList) {
    const result = {};

    for (let i = 0; i < orderList.length; i++) {
        const order = orderList[i];
        // Use a per-order seen set to avoid duplicate indexing for the same SKU within one order
        const seenInThisOrder = new Set();
        for (let j = 0; j < order.length; j++) {
            const sku = order[j];

            if (seenInThisOrder.has(sku)) continue;
            seenInThisOrder.add(sku);
            
            if (!result[sku]) result[sku] = [];
            result[sku].push(i);
        }
    }
    return result;
}
module.exports = indexOrders;