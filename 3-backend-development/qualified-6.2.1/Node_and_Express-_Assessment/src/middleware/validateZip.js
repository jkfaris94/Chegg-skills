const getZoos = require('../utils/getZoos.js');

function validateZip(req, res, next) {
  const zip = req.params.zip
 
  if (!/^\d{5}$/.test(zip)) {
    next(`Zip (${zip}) is invalid!`)
  } else {
    next();
  }
};

module.exports = validateZip;

