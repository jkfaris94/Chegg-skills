const sort = require("./mergeSort");

const elements = [260, 926, 954, 208, 669, 183];

function compare(left, right) {
  console.log("compare", left, "to", right);
  return left - right;
}

console.log(sort(compare, elements));



//Merge sort algorithm 
// ** one of the most efficent **
// A divide-and-conquer algorithm that continuously splits arrays in half until every element 
// is alone in its own array, then merges each subarray in order
//----- worst case - O(n log n) ----- avg case - O(n log n) ----- best case - O(n log n)
// ALL CASES - O(n log n)
