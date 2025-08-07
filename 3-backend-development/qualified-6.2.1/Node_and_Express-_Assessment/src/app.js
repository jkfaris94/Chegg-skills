const express = require('express');

const app = express();

const getZoos = require('./utils/getZoos.js');
const validateZip = require('./middleware/validateZip.js')

app.get(
  '/zoos/all',
  (req, res) => {
    if (req.query.admin === 'true') {
      const all = getZoos();
      return res.send(`All zoos: ${all.join('; ')}`);
    }
    return res.send('You do not have access to that route.');
  }
);

app.get(
  '/check/:zip',
  validateZip,
  (req, res) => {
    // 1) pull zip from the params
    const { zip } = req.params;

    // 2) look it up
    const zoos = getZoos(zip);

    // 3) respond with the exact strings your tests expect
    if (zoos !== undefined) {
      return res.send(`${zip} exists in our records.`);
    } else {
      return res.send(`${zip} does not exist in our records.`);
    }
  }
);

app.get(
  "/zoos/:zip",
  validateZip,
  (req, res) => {
    const zip = req.params.zip
    const zoos = getZoos(zip);
    if (zoos !== undefined) {
      if (zoos.length > 0) {
        return res.send(`${zip} zoos: ${zoos.join('; ')}`);
      }
      return res.send(`${zip} has no zoos.`);
    }
    return res.send(`${zip} does not exist in our records.`);
  }
);



//not found handlker
app.use((req, res, next) => {
  res.status(404).send('That route could not be found!');
});

// Error‐handler (for invalid zip)
app.use((err, req, res, next) => {
  res.status(400).send(err);
});

module.exports = app;