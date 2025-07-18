const sort = require("./bubbleSort");

const elements = [4685, 471, 880, 808];

function compare(left, right) {
  console.log("compare", left, "to", right);
  return left - right;
}

console.log(sort(compare, elements));