const axios = require("axios");

const url = "http://localhost:5001/constellations";
// Make get request to url and print data to console. 
axios.get(url)
    .then((response) => {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
// make a post request to url and add a constellation
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
// make delete request to delete the constellation using newly given id:
const idToDelete = "dFBbdkr";
axios.delete(`${url}/${idToDelete}`);

axios.get(`${url}/${idToDelete}`);

