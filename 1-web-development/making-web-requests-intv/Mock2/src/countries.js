const axios = require("axios");

async function getAllCountriesSolution() {
  const res = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`)
  //const res = await axios.get(`https://restcountries.eu/rest/v2/all`)
  let countries = res.data.map(country => {
    return {"name": country.name.common, "region": country.region} 
  })
  return countries
}

async function getCountriesByLanguageSolution(language) {
  if(language.length !== 2) return "Language code not found"
  const res = await axios.get(`https://restcountries.eu/rest/v2/lang/${language}`)
  let refinedCountries = res.data.map(country => {
    return {"name": country.name, "region": country.region} 
  })
  return refinedCountries
}

getAllCountriesSolution();

module.exports = {getAllCountriesSolution, getCountriesByLanguageSolution}