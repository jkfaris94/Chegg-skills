"use strict";
const author01 = {
    id: 1,
    firstName: "John",
    lastName: "Wick"
};
const book01 = {
    id: 1,
    title: "Take Care of Dogs",
    author: author01,
    isAvailable: true
};
const checkAvailable = (book) => {
    return book01.isAvailable ? "available" : "rented out";
};
console.log(`the book ${book01.title} by author ${book01.author.lastName}, ${book01.author.firstName[0]} is ${checkAvailable(book01)}`);
function addNumbers(a, b) {
    return a + b;
}
function concatenateStrings(first, second) {
    return first + second;
}
