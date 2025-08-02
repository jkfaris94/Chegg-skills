//recursive factorial
// This function calculates the factorial of a number using recursion.
// It demonstrates both the forward and backward phases of recursion.
// The forward phase occurs when the function calls itself, and the backward phase occurs when it returns
function factorial(number) {
  console.log("Forward phase", number);

  // Base case
  if (number <= 1) {
    console.log("base case", number);
    return 1;
  }

  // Recursive case
  const numberMinusOneFactorial = factorial(number - 1);

  console.log("Backward phase", number, "*", numberMinusOneFactorial);

  return number * numberMinusOneFactorial;
}

console.log(factorial(5));