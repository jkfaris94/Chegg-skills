function findUniqueCharacters(str) {
    const uniqueChars = new Set();

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        uniqueChars.add(currentChar);
        console.log(currentChar);
    }

    return uniqueChars
}

const inputString = "hello world";
const uniqueCharacters = findUniqueCharacters(inputString);
console.log(uniqueCharacters);