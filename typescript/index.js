function processUser(user) {
    if (user.age >= 18) {
        console.log("".concat(user.name, " is an adult."));
    }
    else {
        console.log("".concat(user.name, " is a minor."));
    }
}
// Example usage
var user1 = { name: "Alice", age: 25 };
var user2 = { name: "Bob", age: 16 };
processUser(user1); // Output: Alice is an adult.
processUser(user2); // Output: Bob is a minor.
