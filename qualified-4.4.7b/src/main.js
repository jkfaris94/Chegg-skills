const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  const url = `${BASE_URL}/constellations`;
  return axios.get(url)
    .then(response => {
      console.log(response.data); // Log the data key
      return response.data; // Return all constellation resources
    })
    .catch(error => {
      console.error("Error fetching constellations:", error);
    });
}

function create(body) {}

function show(id) {}

function update(id, body) {}

function destroy(id) {}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
