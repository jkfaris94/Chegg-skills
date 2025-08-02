const notes = require("../data/notes-data")

function list(req, res) {
    res.json({ data: notes });
}

function hasText(req, res, next) {
    const { data: { text } = {} } = req.body;
    if (text) {
      return next();
    }
    return next({ status: 400, message: "A 'text' property is required." });
  };

  function create(req, res, next) {
    const { data: { text } = {} } = req.body;
  
    const newNote = {
      id: notes.length + 1, // Assign the next ID
      text,
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  }

  function noteExists(req, res, next) {
    const noteId = Number(req.params.noteId);
    const foundNote = notes.find((note) => note.id === noteId);
    if (foundNote) {
        res.locals.note = foundNote;
      return next();
    } 
      return next({
        status: 404,
        message: `Note id not found: ${req.params.noteId}`,
      });
  };

  function read(req, res, next) {
    const noteId = Number(req.params.noteId);
    const foundNote = notes.find((note) => note.id === noteId);
    res.json({ data: foundNote });
  }

  function update(req, res) {
    const foundNote = res.locals.note;
    const { data: { text } = {} } = req.body;
  
    // update the note
    foundNote.text = text;
  
    res.json({ data: foundNote });
  }

  function destroy(req, res) {
    const { noteId } = req.params;
    const index = notes.findIndex((note) => note.id === Number(noteId));
    notes.splice(index, 1);
    res.sendStatus(204);
  }

module.exports = {
    create: [hasText, create],
    list,
    read: [noteExists, read],
    update: [noteExists, hasText, update],
    delete: [noteExists, destroy]
};