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


async function getExchangeRate2(fromCurrency2, toCurrency2) {
  const URL = `https://api.frankfurter.app/latest?from=${fromCurrency2}`;

  try {
    const response = await axios.get(URL);
    const rates = response.data.rates;

    if (!(toCurrency2 in rates)) {
      throw new Error(`Currency "${toCurrency2}" not found in rates.`);
    }

    return rates[toCurrency2];
  } catch (error) {
    console.error("Error fetching rate:", error.message);
    throw error;
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
  });
  

  const from2 = "USD";
   const to2 = "EUR";

  getExchangeRate2(from2, to2)
  .then(rate => {
    console.log(`1 ${from2} to ${to2} is ${rate}`);
  });

//Do not modify code below this line
module.exports = {getRates};