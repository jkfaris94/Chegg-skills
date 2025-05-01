const express = require("express");

const app = express();
const urlsRouter = require("./urls/urls.router");

app.use(express.json());

// TODO: Add code to meet the requirements and make the tests pass.
const urls = require("./data/urls-data");

app.use("/urls", urlsRouter);

// Not found handler
app.use((req, res, next) => {
    res.status(404).json({
       error: `Not found: ${req.originalUrl}`
    });
  });
  
  // Error handler
  app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });

  
module.exports = app;
