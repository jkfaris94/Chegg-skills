function sortWords(words) {
    return words.sort()
}

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}

function largestFirst(numbers) {
    return numbers.sort((a, b) => b - a);
}

function sortFlowersByZone(flowers) {
    return flowers.sort((flowersA, flowersB) => (flowersA.zone > flowersB.zone ? 1 : -1));
}

function sortByLength(strings) {
    return strings.sort((a, b) => a.length - b.length);
}