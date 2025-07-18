const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
  return customers.sort((a, b) => {
    const lastNameComparison = a.lastName.localeCompare(b.lastName);
    if (lastNameComparison !== 0) {
      return lastNameComparison;
    }
    // If last names are equal, compare by first name
    return a.firstName.localeCompare(b.firstName);
  });
}
module.exports = sortByName;
