// // Write a function that calculates the total cost of items in an array
// function addNumbers(a, b) {
//     return a + b;
// }

// // Example usage:
// let input = { a: 5, b: 10 };
// let result = addNumbers(input.a, input.b);
// console.log(result); // Output: 15

// //To create a function that calculates the total cost of items in an array,
// //  you can use the reduce method to sum up the values. Here's an example implementation:
// function calculateTotalCost(items) {
//     return items.reduce((total, item) => total + item.cost, 0);
// }

// // Example usage:
// let items = [
//     { name: "Item 1", cost: 5 },
//     { name: "Item 2", cost: 10 },
//     { name: "Item 3", cost: 15 }
// ];

// let totalCost = calculateTotalCost(items);
// console.log(totalCost); // Output: 30


function sum(a, b) {
    return a + b;
  }

// Test case 1: Positive numbers
console.log(sum(5, 7)); // Expected output: 12

// Test case 2: Negative numbers
console.log(sum(-3, -2)); // Expected output: -5

// Test case 3: Zero
console.log(sum(0, 10)); // Expected output: 10

// Test case 4: Mixed positive and negative numbers
console.log(sum(8, -4)); // Expected output: 4