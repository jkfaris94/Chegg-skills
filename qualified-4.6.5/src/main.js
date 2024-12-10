const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  tell(question)
    .then((response) => {
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${response}`);
    })
    .catch((err) => {
      console.log(`There was an error: ${err}`);
    });
}

function fullSession(question) {
  welcome()
    .then(console.log)
    .then(() => getFortune(question))
    .then(() => goodbye())
    .then(console.log)
    .catch((err) => {
      console.log(`There was an error: ${err}`);
    });
}

module.exports = { getFortune, fullSession };
