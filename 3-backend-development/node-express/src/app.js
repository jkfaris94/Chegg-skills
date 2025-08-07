const express = require("express") //The Express package is required and is assigned to a variable.
const morgan = require("morgan");

const app = express(); //The Express package exports a function. When you call that function, you get a new Express application and assign it to a variable.

app.use(morgan("dev"));

//middleware function
const checkForAbbreviationLength = (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next("State abbreviation is invalid.");
  } else {
    next();
  }
};

app.get(
    "/states/:abbreviation", 
    checkForAbbreviationLength,
    (req, res, next) => {
        res.send(`${abbreviation} is a nice state, I wanna visit`);
    }
); 

app.get(
  "/travel/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    res.send(`Enjoy your trip to ${req.params.abbreviation}!`);
  }
);

// Not-found handler
app.use((req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app; // The Express application is exported to be used in the server.js file.