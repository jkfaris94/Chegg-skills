const axios = require("axios");  //require axios

const url = "http://localhost:5001/constellations"; //declare url 
axios.get(url) //make get request to url 
    .then((response) => { //response is the argument 
        console.log(response.status); //print code of the service status
        console.log(response.statusText); //response type of the server
        console.log(response.data); //response body
    })
    .catch((error) => {
        console.log(error.message); //print the error message if an error occurs
    })

    axios 
        .post(url, { //post method has 2 arguments (server url, data object)
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

        const deleteURL = "http://localhost:5001/constellations/iK0hLWS" //declare new url with provided id

        axios
        .delete(deleteURL) //make delete request to new url 
        .then((response) => {
            console.log("delete successful", response.data);
        })
        .catch((error) => {
            console.log("oops", error.message);
        });
