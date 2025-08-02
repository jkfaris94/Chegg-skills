// Linear Search Algorithm
// This function searches for a value in an array and returns its index.
function indexOf(value, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (elements[index] === value) {
      return index;
    }
  }
  return -1;
}

const index = indexOf(5, [1, 3, 5, 7, 9]);

console.log(index);