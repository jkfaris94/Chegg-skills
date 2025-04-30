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

module.exports = {
    create: [hasText, create],
    list
}