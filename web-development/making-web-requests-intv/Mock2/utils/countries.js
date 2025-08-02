const axios = require("axios");

async function getAllCountriesSolution() {
  const res = await axios.get(`https://restcountries.eu/rest/v2/all`)
  let countries = res.data.map(country => {
    return {"name": country.name, "region": country.region, "currencies": country.currencies} 
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

module.exports = {getAllCountriesSolution, getCountriesByLanguageSolution}