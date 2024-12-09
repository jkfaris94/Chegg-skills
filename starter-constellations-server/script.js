const axios = require("axios");
const BASE_URL = "http://localhost:5001";


function getConstellations(ids) {
    const promises = ids.map((id) => {
        const url = `${BASE_URL}/constellations/${id}`;
        return axios.get(url);
      });
    
      return Promise.all(promises);
    }
    
    const ids = ["KGQIwSq", "32TN5F8"];
    getConstellations(ids)
        .then((responses) => {
            // Extract and log only the `data` from each response
            const data = responses.map((response) => response.data);
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching constellations:", error.message);
        });