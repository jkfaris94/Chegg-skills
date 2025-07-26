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

getRates("USD")
   .then(rates => console.log(rates))
   .catch(error => console.error(error));

//Do not modify code below this line
module.exports = {getRates};


