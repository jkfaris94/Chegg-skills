const express = require("express") //The Express package is required and is assigned to a variable.

const app = express(); //The Express package exports a function. When you call that function, you get a new Express application and assign it to a variable.

const sayHello = (req, res, next) => {
    res.send("Hello!");
};

const logging = (req, res, next) => {
    console.log("a request is being made");

    next();
}

app.use(logging);
app.use(sayHello);

module.exports = app; // The Express application is exported to be used in the server.js file.