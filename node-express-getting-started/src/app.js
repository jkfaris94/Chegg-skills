// // The Express package is required and is assigned to a variable.
// const express = require("express");
// //require Morgan
// const morgan = require("morgan");

// // The Express package exports a function. 
// // When you call that function, you get a new Express application and assign it to a variable.
// const app = express();

// const sayHello = (req, res) => {
//     console.log(req.query);
//     const name = req.query.name;
//     const content = name ? `Hello, ${name}!` : "Hello!";
//     res.send(content);
//   };

//   const saySomething = (req, res) => {
//     const greeting = req.params.greeting;
//     const name = req.query.name;
  
//     const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
//     res.send(content);
//   };

//   const sayGoodbye = (req, res) => {
//     res.send("Sorry to see you go!");
//   };
  
// app.use(morgan("dev"));
// app.get("/hello", sayHello);
// app.get("/say/goodbye", sayGoodbye);
// app.get("/say/:greeting", saySomething);


// app.get("/songs", (req, res) => {
//     const title = req.query.title;
//     res.send(title);
//   });

// // The Express application is exported to be used in the server.js file.
// module.exports = app;



const express = require("express");
const morgan = require("morgan");
const app = express();

app.get("/states/:abbreviation", (req, res, next) => {
    const abbreviation = req.params.abbreviation;
    if (abbreviation.length !== 2) {
      next("State abbreviation is invalid.");
    } else {
      res.send(`${abbreviation} is a nice state, I'd like to visit.`);
    }
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

  app.use(morgan("dev"));

module.exports = app;