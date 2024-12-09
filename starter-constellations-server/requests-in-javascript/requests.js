const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function update(id, body) {
  if (!id || !body) return Promise.reject(false);
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.put(url, body);
}

const hydrus = {
  name: "Hydrus",
  meaning: "Water Snake",
  starsWithPlanets: 5,
  quadrant: "SQ1"
};

update("UPtAzfV", hydrus)
  .then(({ data }) => console.log(data))
  .catch(console.log);