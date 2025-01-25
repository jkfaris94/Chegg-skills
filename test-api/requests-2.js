const axios = require('axios');

async function getInfo (constellation) {
    const baseURL = "http://localhost:5001/constellations/"

    try {
        const response = await axios.get(`${baseURL}${constellation}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

getInfo("");