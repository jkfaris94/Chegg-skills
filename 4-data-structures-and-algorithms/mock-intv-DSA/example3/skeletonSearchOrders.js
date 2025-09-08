function searchOrders(skuLinkedList, skuIndex, orderList) {
    if (!skuLinkedList || !skuLinkedList.head) return [];

    // 1) Linked list → array
    const requested = [];
    let node = skuLinkedList.head;

    while (node) {
        requested.push(node.value);
        node = node.next;
    }

    // 2) Gather indices
    const indices = [];
    for (let i = 0; i < requested.length; i++) {
        const sku = requested[i];
        const arr = skuIndex[sku];
        if (arr) {
            for (let j = 0; j < arr.length; j++) {
                indices.push(arr[j]);
            }
        }
    }

    // 3) Dedupe + sort
    const uniqueSorted = Array.from(new Set(indices)).sort((a, b) => a - b);

    // 4) Map to orders
    const result = [];
    for (let k = 0; k < uniqueSorted.length; k++) {
        result.push(orderList[uniqueSorted[k]]);
    }

return result;
}

module.exports = searchOrders;