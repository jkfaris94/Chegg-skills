// 100 * (100 + 1) / 2
// => 100 * 101 / 2
// => 10100 / 2
// => 5050


//constant linear time complexity O(n)
function sumIntegers2(n) {
  return (n * (n + 1)) / 2;
}

const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
const N = 1000000;

let sumOfRunningTime = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();

  const answer = sumIntegers2(N);

  const end = process.hrtime.bigint();

  sumOfRunningTime += end - start;
}

const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
);