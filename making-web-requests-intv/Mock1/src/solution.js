const axios = require("axios");
//Write your functions here


async function getRates(CUR) {
   const URL = `https://api.frankfurter.app/latest?from=${CUR}`;

   try {
        const response = await axios.get(URL);
        return response.data.rates;
   } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch exchange rates");
   }
}

// This function fetches the exchange rate from one currency to another
async function getExchangeRate(fromCurrency, toCurrency) {
   const URL = `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`;

   try {
      const response = await axios.get(URL);
      const rates = response.data.rates;
      if (!toCurrency in rates) {
         throw new Error(`currency code "${toCurrency}" is not supported or not found`)
      }
      return rates[toCurrency]; 
   } catch (error) {
      console.error("error fetching specific rate,", error);
      throw new Error("error fetching specific rate");
   }
}

getRates("USD")
   .then(rates => console.log(rates))
   .catch(error => console.error(error));

const from = "EUR";
const to = "USD";

getExchangeRate(from, to)
  .then(rate => {
    console.log(`1 ${from} to ${to} is ${rate}`);
  })
  .catch(error => console.error(error));

//Do not modify code below this line
module.exports = {getRates};