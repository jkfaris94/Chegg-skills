const binary = (max) => {
  const result = [];
  if (max <= 0) return result;

  const queue = ["1"];

  for (let i = 0; i < max; i++) {
    const s = queue.shift();
    result.push(s);
    queue.push(s + "0");
    queue.push(s + "1");
  }

  return result;
};


module.exports = binary;
