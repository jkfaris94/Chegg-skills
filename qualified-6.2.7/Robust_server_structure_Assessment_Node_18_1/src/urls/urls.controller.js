const urls = require("../data/urls-data");
const uses = require("../data/uses-data");

function list(req, res) {
  res.json({ data: urls });
}

function create(req, res) {
  const { data: { href } = {} } = req.body;
  if (!href) return res.status(400).json({ error: "href is required" });

  const newUrl = { id: urls.length + 1, href };
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
}

function read(req, res) {
  const urlId = Number(req.params.urlId);
  const found = urls.find((url) => url.id === urlId);
  if (!found) return res.status(404).json({ error: `URL ID not found: ${urlId}` });

  // Record use
  const newUse = { id: uses.length + 1, urlId: found.id, time: Date.now() };
  uses.push(newUse);

  res.json({ data: found });
}

function update(req, res) {
  const urlId = Number(req.params.urlId);
  const found = urls.find((url) => url.id === urlId);
  if (!found) return res.status(404).json({ error: `URL ID not found: ${urlId}` });

  const { data: { href } = {} } = req.body;
  if (!href) return res.status(400).json({ error: "href is required" });

  found.href = href;
  res.json({ data: found });
}

function listUsesByUrl(req, res) {
  const urlId = Number(req.params.urlId);
  const found = urls.find((url) => url.id === urlId);
  if (!found) return res.status(404).json({ error: `URL ID not found: ${urlId}` });

  const filtered = uses.filter((use) => use.urlId === urlId);
  res.json({ data: filtered });
}

function readUseByUrl(req, res) {
  const urlId = Number(req.params.urlId);
  const useId = Number(req.params.useId);

  const foundUrl = urls.find((url) => url.id === urlId);
  if (!foundUrl) {
    return res.status(404).json({ error: `URL ID not found: ${urlId}` });
  }

  const foundUse = uses.find(
    (use) => use.id === useId && use.urlId === urlId
  );

  if (!foundUse) {
    return res.status(404).json({ error: `Use ID ${useId} not found for URL ${urlId}` });
  }

  res.json({ data: foundUse });
}

function deleteUseByUrl(req, res) {
  const urlId = Number(req.params.urlId);
  const useId = Number(req.params.useId);

  const foundUrl = urls.find((url) => url.id === urlId);
  if (!foundUrl) {
    return res.status(404).json({ error: `URL ID not found: ${urlId}` });
  }

  const index = uses.findIndex((use) => use.id === useId && use.urlId === urlId);
  if (index === -1) {
    return res.status(404).json({ error: `Use ID ${useId} not found for URL ${urlId}` });
  }

  uses.splice(index, 1);
  res.sendStatus(204);
}

function methodNotAllowed(req, res) {
  res.status(405).json({ error: `${req.method} not allowed` });
}

module.exports = {
  list,
  create,
  read,
  update,
  listUsesByUrl,
  readUseByUrl,
  deleteUseByUrl,
  methodNotAllowed,
};