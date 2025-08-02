const axios = require("axios");

//Write your function here
async function getAllCountries() {
  const url = "https://restcountries.com/v3.1/all";
  
  try {
    const response = await axios.get(url);
    return response.data.map(country => ({name: country.name.common, region: country.region}));
  } catch (error) {
    console.error(error);
  }
}
getAllCountries().then(countries => console.log(countries));