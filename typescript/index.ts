type uniqueID = number;

interface Author {
    id: uniqueID;
    firstName: string;
    lastName: string;
}

interface Book {
    id: uniqueID;
    title: string;
    author: Author;
    isAvailable: boolean;
}

const author01: Author = {
    id: 1,
    firstName: "John",
    lastName: "Wick"
}

const book01: Book = {
    id: 1,
    title: "Take Care of Dogs",
    author: author01,
    isAvailable: true
}
const checkAvailable = (book: Book) => {
    return book01.isAvailable ? "available" : "rented out";
}

console.log(`the book ${book01.title} by author ${book01.author.lastName}, ${book01.author.firstName[0]} is ${checkAvailable(book01)}`);


function addNumbers(a: number, b: number): number {
    return a + b;
}

function concatenateStrings(first: string, second: string): string {
    return first + second;
}