const express = require("express");
const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

module.exports = app;