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

function update(req, res) {
    const urlId = Number(req,URLSearchParams.id);
    const { data: { href } ={} } = req.body;

    const foundUrl = urls.find((url) => url.id === urlId);

    if (!foundUrl) {
        return res.status(405).json({ error: `URL ID not found: ${urlId}` });
    }

    if (!href) {
        return res.status(400).json({ error: "URL 'href' is required." });
    }


    foundUrl.href = href;

    res.json({ data: foundUrl });
}

module.exports = {
    list,
    create: [
        create
    ],
    update,
}