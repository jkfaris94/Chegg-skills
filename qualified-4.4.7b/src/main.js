const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios
  .get(`${BASE_URL}/constellations`)
  .then((response) => {
    console.log(response.data);
  })
}

function create(body) {
  axios
  .post(`${BASE_URL}/constellations`, body)
  .then((response) => {
    console.log(response.data);
  })
}

function show(id) {
  axios
  .get(`${BASE_URL}/constellations/${id}`)
  .then((response) => {
    console.log(response.data);
  })
}

function update(id, body) {
  axios
  .put(`${BASE_URL}/constellations/${id}`, body)
  .then((response) => {
    console.log(response.data);
  })
}

function destroy(id) {
  axios
  .delete(`${BASE_URL}/constellations/${id}`)
  .then((response) => {
    console.log(response.data);
  })
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
