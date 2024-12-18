function getRandomNumber() {
  // Math.floor(Math.random() * 100) generates a random number
  const randomNumber = Math.floor(Math.random() * 100);
  const min = 5;
  try {
    if (randomNumber < min) {
      throw `Random number is too small! ${randomNumber} is less than ${min}.`;
    } else {
      console.log(`The random number is: ${randomNumber}`);
    }
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}

getRandomNumber();
getRandomNumber();
getRandomNumber();
getRandomNumber();
getRandomNumber();