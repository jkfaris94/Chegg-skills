const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

function create(req, res) {
  const { data: { text } = {} } = req.body;
  const newNote = {
    id: notes.length + 1,
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

function destroy(req, res) {
  const { noteId } = req.params;
  const index = notes.findIndex((note) => note.id === Number(noteId));
  if (index > -1) {
    notes.splice(index, 1);
  }
  res.sendStatus(204);
}

function hasText(req, res, next) {
  const { data: { text } = {} } = req.body;

  if (text) {
    return next();
  }
  next({ status: 400, message: "A 'text' property is required." });
}

function list(req, res) {
  const { ratingId } = req.params;
  res.json({ 
    data: notes.filter(
      ratingId ? (notes) => notes.rating_id == ratingId : () => true
    ) 
  });
}

function noteExists(req, res, next) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  if (foundNote) {
    res.locals.note = foundNote;
    return next();
  }
  next({
    status: 404,
    message: `Note id not found: ${noteId}`,
  });
}

function read(req, res) {
  res.json({ data: res.locals.note });
}

function update(req, res) {
  const note = res.locals.note;
  const { data: { text } = {} } = req.body;

  note.text = text;

  res.json({ data: note });
}

module.exports = {
  create: [hasText, create],
  list,
  read: [noteExists, read],
  update: [noteExists, hasText, update],
  delete: destroy,
  noteExists,
};
