const urls = require("../data/urls-data");

function list(req, res) {
    res.json({ data: urls });
}

module.exports = {
    list,
}