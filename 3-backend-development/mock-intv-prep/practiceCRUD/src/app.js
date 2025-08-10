const express = require('express');
const cors = require('cors');

const usersRouter = require('./users/users.router');
const postsRouter = require('./posts/posts.router');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);


// Example test route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = error;
  res.status(status).json({ error: message });
});

module.exports = app;