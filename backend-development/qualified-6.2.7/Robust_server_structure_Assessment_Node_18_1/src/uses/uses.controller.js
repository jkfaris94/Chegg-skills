const uses = require("../data/uses-data");

function list(req, res) {
  res.json({ data: uses });
}

function read(req, res) {
  const useId = Number(req.params.useId);
  const found = uses.find((u) => u.id === useId);
  if (!found) return res.status(404).json({ error: `Use ID not found: ${useId}` });
  res.json({ data: found });
}

function destroy(req, res) {
  const useId = Number(req.params.useId);
  const index = uses.findIndex((u) => u.id === useId);
  if (index === -1) return res.status(404).json({ error: `Use ID not found: ${useId}` });
  uses.splice(index, 1);
  res.sendStatus(204);
}

function methodNotAllowed(req, res) {
  res.status(405).json({ error: `${req.method} not allowed` });
}

module.exports = {
  list,
  read,
  delete: destroy,
  methodNotAllowed,
};