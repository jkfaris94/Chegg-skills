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

//enum
enum StatusCode { 
    Success = 200, 
    NotFound = 404, 
    Error = 500 
  }
  let response: StatusCode = StatusCode.Success;

//tuple
let book: [string, string, number] = ["The Hobbit", "J.R.R. Tolkien", 295];
console.log(book);

function firstElement<T>(elements: T[]): T | undefined {
    return elements.length > 0 ? elements[0] : undefined;
    
    // Usage
let names = ["Alice", "Bob", "Charlie"];
let ages = [30, 25, 35];

let firstName = firstElement(names); // Automatically inferred as firstElement<string>
let firstAge = firstElement(ages); // Automatically inferred as firstElement<number>
}

console.log(firstElement); 