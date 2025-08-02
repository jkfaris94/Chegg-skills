const axios = require("axios");
//Write your functions here
async function getAllCountries() {
  const URL = "https://restcountries.com/v3.1/all"
  
  try {
    const { data: countries } = await axios.get(URL)
    console.log("Name:", countries.name.common, "Region:", countries.region, "capital:", countries.capital);
    
  } catch (error) {
    console.error(error.message)
  }
}

// Write a function called getAllCountries that does not take any parameters. 
// getAllCountries should return an array of objects. 
// Each object should have three properties: name, region, and capital.

// Use this endpoint for your query: https://restcountries.com/v3.1/all