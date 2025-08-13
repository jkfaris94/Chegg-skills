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

// Worst case
// O(n)
// Every element is out of order.

// Average case
// O(n)
// Some elements are out of order.

// Best case
// O(1)
// All the elements in the first array are either smaller or larger than all the elements in the second array.