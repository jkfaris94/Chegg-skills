const sort = require("./mergeSort");

const elements = [260, 926, 954, 208, 669, 183];

function compare(left, right) {
  console.log("compare", left, "to", right);
  return left - right;
}

console.log(sort(compare, elements));