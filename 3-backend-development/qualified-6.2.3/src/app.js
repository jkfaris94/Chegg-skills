const express = require("express");
const app = express();

const notes = require("./data/notes-data");

app.use(express.json());

// GET /notes/:noteId
app.get("/notes/:noteId", (req, res, next) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);

  if (foundNote) {
    res.json({ data: foundNote });
  } else {
    const error = new Error(`Note id not found: ${req.params.noteId}`);
    error.status = 404; // set status
    next(error);        // send the error
  }
});

// GET /notes
app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// POST /notes
let lastPasteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

app.post("/notes", (req, res, next) => {
  const { data: { text } = {} } = req.body;
  if (text) {
    const newNote = {
      id: ++lastPasteId,
      text,
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  } else {
    res.sendStatus(400);
  }
});

// Not found handler (any route not matched above)
app.use((request, response, next) => {
  const error = new Error(`Not found: ${request.originalUrl}`);
  error.status = 404;
  next(error);
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  response.status(error.status || 400).json({ error: error.message });
});

module.exports = app;
