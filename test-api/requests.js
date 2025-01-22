const axios = require("axios");

const url = "http://localhost:5001/constellations";
axios.get(url)
    .then((response) => {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
axios
    .post(url, {
        name: "Ara",
        meaning: "Altar",
        starsWithPlanets: 7,
        quadrant: "SQ3",
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
