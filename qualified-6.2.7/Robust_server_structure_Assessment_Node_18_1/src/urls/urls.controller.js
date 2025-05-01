const urls = require("../data/urls-data");

function list(req, res) {
    res.json({ data: urls });
}

function create(req, res) {
    const { data: { href } = {} } = req.body;

    if (!href) {
        return res.status(400).json({ error: "URL 'href' is required." });
      }
      
    const newUrl = {
        id: urls.length + 1,
        href,
    }
    urls.push(newUrl);
    res.status(201).json({ data: newUrl})
}

module.exports = {
    list,
    create: [
        create
    ],
}