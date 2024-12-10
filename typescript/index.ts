interface User {
    name: string;
    age: number;
}

function processUser(user: User) {
    if (user.age >= 18) {
        console.log(`${user.name} is an adult.`);
    } else {
        console.log(`${user.name} is a minor.`);
    }
}

// Example usage
const user1: User = { name: "Alice", age: 25 };
const user2: User = { name: "Bob", age: 16 };

processUser(user1);  // Output: Alice is an adult.
processUser(user2);  // Output: Bob is a minor.