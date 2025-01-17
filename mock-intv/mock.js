const axios = require("axios");
const url = "https://api.frankfurter.app/latest?from=USD";

async function getRates() {
axios 
    .get(url)
    .then((response) => {
       console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
}