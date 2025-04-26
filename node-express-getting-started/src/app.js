// The Express package is required and is assigned to a variable.
const express = require("express");
//require Morgan
const morgan = require("morgan");

// The Express package exports a function. 
// When you call that function, you get a new Express application and assign it to a variable.
const app = express();

const sayHello = (req, res, next) => {
    // Middleware function body
    res.send("Hello!");
  };
  
app.use(morgan("dev"));
app.use(sayHello);




// The Express application is exported to be used in the server.js file.
module.exports = app;