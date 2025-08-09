const express = require("express");
const app = express();

app.use(express.json());

// simple async wrapper to avoid try/catch in every handler
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

app.get("/", (req, res) => res.json({ status: "ok" }));

app.use("/users", require("./users/users.router")(asyncHandler));
app.use("/posts", require("./users/posts.router")(asyncHandler));
app.use("/comments", require("./users/comments.router")(asyncHandler));

// 404
app.use((req, res) => res.status(404).json({ error: `Not found: ${req.originalUrl}` }));

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

module.exports = app;