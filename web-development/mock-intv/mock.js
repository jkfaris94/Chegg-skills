const axios = require("axios");

async function getRates(baseCurrency) {
    const url = `https://api.frankfurter.app/latest?from=${baseCurrency}`;

    try {
    const response = await axios.get(url);
    return response.data.rates;
    } catch (error) {
    console.error("Error fetching rates:", error);
}
}

// .then .catch method

function getRates(currency) {
    const url = `https://api.frankfurter.app/latest?from=${currency}`;
    
  return axios.get(url)
    .then(response => response.data.rates)
    .catch(error => {
    console.error(error.message);
  });
  }
  getRates(usd) 