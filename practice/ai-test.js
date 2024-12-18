// Write a function that calculates the total cost of items in an array
function addNumbers(a, b) {
    return a + b;
}

// Example usage:
let input = { a: 5, b: 10 };
let result = addNumbers(input.a, input.b);
console.log(result); // Output: 15

//To create a function that calculates the total cost of items in an array,
//  you can use the reduce method to sum up the values. Here's an example implementation:
function calculateTotalCost(items) {
    return items.reduce((total, item) => total + item.cost, 0);
}

// Example usage:
let items = [
    { name: "Item 1", cost: 5 },
    { name: "Item 2", cost: 10 },
    { name: "Item 3", cost: 15 }
];

let totalCost = calculateTotalCost(items);
console.log(totalCost); // Output: 30
