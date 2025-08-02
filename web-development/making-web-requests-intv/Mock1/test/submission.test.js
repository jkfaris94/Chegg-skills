const {expect} = require('chai')
const {getRates} = require('../src/solution')
const axios = require("axios");

const currency1 = "USD";
const currency2 = "EUR";

async function getRatesSolution(currency) {
  const res = await axios.get(`https://api.frankfurter.app/latest?from=${currency}`);
  return res.data.rates
}

describe("getRates", async () => {
  it("should display todays foreign exchange rates for a given currency", async () => {
    let rates1 = await getRates(currency1);
    let rates2 = await getRatesSolution(currency1);
    expect(rates1).to.eql(rates2);
  })
    it('should display todays foreign exchange rates for another given currency', async () => {
    let rates1 = await getRates(currency2);
    let rates2 = await getRatesSolution(currency2);
    expect(rates1).to.eql(rates2)
  })
})
