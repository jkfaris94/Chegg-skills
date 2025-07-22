const evaluate = (expression) => {
  // define operator functions
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const stack = [];
  // strip out any whitespace
  for (const char of expression.replace(/\s+/g, '')) {
    if (char in ops) {
      // operator → pop two operands, apply, push result
      const right = stack.pop();
      const left = stack.pop();
      stack.push(ops[char](left, right));
    } else {
      // operand → push its numeric value
      stack.push(Number(char));
    }
  }

  // the final value is the only element left
  return stack.pop();
};

module.exports = evaluate;
