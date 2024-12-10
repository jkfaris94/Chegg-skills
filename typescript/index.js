var author01 = {
    id: 1,
    firstName: "John",
    lastName: "Wick"
};
var book01 = {
    id: 1,
    title: "Take Care of Dogs",
    author: author01,
    isAvailable: true
};
var checkAvailable = function (book) {
    return book01.isAvailable ? "available" : "rented out";
};
console.log("the book ".concat(book01.title, " by author ").concat(book01.author.lastName, ", ").concat(book01.author.firstName[0], " is ").concat(checkAvailable(book01)));
