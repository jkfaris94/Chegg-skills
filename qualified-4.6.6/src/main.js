const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  const { id } = constellation;

  const apiEndpoint = `http://localhost:5000/constellations/${id}`;

  return axios.put(apiEndpoint , constellation)
    .then(response => response)
    .catch(() => {
      return Promise.reject ({
        error: `Updating constellation (id: ${id}) failed.`,
      });
    });
}

function bulkImport(constellations) {
  if (!Array.isArray(constellations)) {
    return Promise.reject({
      error: "Inputted argument must be an array.",
    });
  }

  if (!constellations.every(isValid)) {
    return Promise.reject({
      error: "All constellations must include relevant fields.",
    });
  }

  const requests = constellations.map(update);

  return Promise.allSettled(requests);
}

module.exports = { bulkImport, update };
