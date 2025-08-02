function mergeSort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }

    const middle = Math.floor(elements.length / 2);

    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);

    const leftElementsSorted = mergeSort(compare, leftElements);
    const rightElementsSorted = mergeSort(compare, rightElements);

    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

/**
 * Merges two sorted arrays
 *
 * @param compare
 *  Function to compare elements of the array
 * @param left
 *  The left sorted array
 * @param right
 *  The right sorted array
 * @returns {*[]}
 *  The left and right sorted arrays merged in sorted order
 */

function merge(compare, left, right) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const comparison = compare(left[leftIndex], right[rightIndex]);

    if (comparison <= 0) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sorted.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  );
}

module.exports = mergeSort;


// Worst case
// O(n log n)
// Every element is out of order.

// Average case
// O(n log n)
// Some elements are out of order.

// Best case
// O(n log n)
// All the elements in the first array are either smaller or larger than all the elements in the second array.