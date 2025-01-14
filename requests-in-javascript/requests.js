const axios = require("axios");

const url = "http://localhost:5001/constellations/CCB75Bs";
axios
.delete(url)
.then((response) => {
    console.log(response.data);
});