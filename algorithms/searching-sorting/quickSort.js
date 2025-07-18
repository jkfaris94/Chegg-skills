//wuick sort algorithm
// A quicksort implementation that sorts an array of elements using a comparison function.
// The comparison function should return a positive number if the first argument is greater than the second,
// a negative number if the first argument is less than the second, and zero if they are equal.
// The algorithm uses recursion to sort the elements in place.
function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex);
    quickSort(compare, elements, lowerIndex, index - 1);
    quickSort(compare, elements, index + 1, upperIndex);
  }
  return elements;
}

function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]);

    if (comparison > 0) {
      if (partitionIndex !== index) {
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++;
    }
  }

  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

module.exports = quickSort;

// Worst case
// O(n²)
// The pivot element lies in an extreme end of the sorted array. One subarray is always empty, and another subarray contains n-1 elements.

// Average case
// O(n log n)
// The depth of the recursion is O(log n). At each level, the partitions do O(n) operations. O(log n) * O(n) = O(n log n)

// Best case
// O(n log n)
// The pivot happens to be in the middle.

//Some implementations of quicksort can have a best-case time complexity of O(n).