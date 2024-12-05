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

function create(body) {
  const url = `${BASE_URL}/constellations`;
  return axios.post(url, body)
    .then(response => {
      console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.log("Error creating constellation", error);
    });
}

function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.get(url)
    .then(response => {
      console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.log(`Error fetching constellation with ID ${id}:`, error);
    });
}

function update(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.put(url, body)
  .then(response => {
    console.log(response.data);
    return response.data
  })
  .catch(error => {
    console.log(`Error updating constellation with ID ${id}:`, error)
  });
}

function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.delete(url)
  .then(response => {
    console.log(response.data);;
    return response.data
  })
  .catch(error => {
    console.log(`Error, unable to delete constellation with ID ${id}:`, error)
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
