//top-down recursive factorial
// This function calculates the factorial of a number using a top-down approach.
// It demonstrates both the forward and backward phases of recursion.
// The forward phase occurs when the function calls itself, and the backward phase occurs when it returns
function factorial(number, total = 1) {
  console.log("Forward phase", number, "*", total);

  // Base case stays the same
  if (number <= 1) {
    console.log("base case", number);
    return total;
  }

  total = factorial(number - 1, total * number);

  console.log("Backward phase", number, total);
  return total;
}

console.log(factorial(5));


// recursice function to us iteration instead of recursion to prevent stack overflow errors
function factorialIteration(number) {
  // Base case
  if (number <= 1) {
    return 1;
  }

  // Penultimate means second to the last in a series.
  let penultimate = 1;
  let total = 0;

  // Calculate the factorial from 1 to `number`
  for (let ultimate = 1; ultimate <= number; ultimate++) {
    console.log(ultimate, "*", penultimate);
    total = ultimate * penultimate;
    penultimate = total;
  }
  return total;
}

console.log(factorialIteration(5));