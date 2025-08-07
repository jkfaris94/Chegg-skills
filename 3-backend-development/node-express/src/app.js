const express = require("express") //The Express package is required and is assigned to a variable.
const morgan = require("morgan");

const app = express(); //The Express package exports a function. When you call that function, you get a new Express application and assign it to a variable.

//application level middlewares:

//Responsive middleware
const sayHello = (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;
  const content = greeting && name ? `${greeting}, ${name},!` : `${greeting}!`;
  res.send(content);
};

const sayGoodbye = (req, res) => {
  res.send("Sorry to see you go!");
};


// //Nonresponsive middleware
// const logging = (req, res, next) => {
//     console.log("a request is being made");

//     next();
// }

// app.use(logging);
app.use(morgan("dev"));
// app.use(sayHello);
app.get("/hello", sayHello);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/:greeting", saySomething);

app.get("/songs", (req, res) => {
  const title = req.query.title;
  res.send(title);
});

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