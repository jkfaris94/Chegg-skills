const sort = require("./quickSort");

function compare(left, right) {
  console.log("compare", left, right);
  return left - right;
}

console.log(sort(compare, [50, 23, 9, 18, 61, 32]));