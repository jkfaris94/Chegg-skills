const Stack = require("./lib/stack");


const match = (expression) => {
  // stack to hold opening brackets
  const stack = [];
  // mapping of closing → opening
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of expression) {
    if (char === '(' || char === '[' || char === '{') {
      // push any opening bracket
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      // on closing bracket, the top must match
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
    // ignore all other characters
  }

  // valid only if no unmatched opens remain
  return stack.length === 0;
};

module.exports = match;
