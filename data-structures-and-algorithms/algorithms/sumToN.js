function sum(n) {
  // Check the base case
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}


