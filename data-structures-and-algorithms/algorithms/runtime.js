function sumIntegers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

// // Declare the N constant to be used as input of the function
// const N = 1000; 

// // Note the start time
// const start = process.hrtime.bigint(); 

// // Call the sumIntegers() function
// const answer = sumIntegers(N); 

// // Note the end time
// const end = process.hrtime.bigint(); 

// // Print the results
// console.log(`Summing ${N} numbers took ${end - start} nanoseconds`);


const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
const N = 10000;

let sumOfRunningTime = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();

  const answer = sumIntegers(N);

  const end = process.hrtime.bigint();

  sumOfRunningTime += end - start;
}

const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
);