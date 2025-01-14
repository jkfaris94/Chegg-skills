const axios = require("axios");

const url = "http://localhost:5001/constellations";
axios
.post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3"
})
.then((response) => {
    console.log(response.data);
});