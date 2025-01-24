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

getRates("USD").then(rates => {
    console.log("Rates:", rates);
  });