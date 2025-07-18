/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  let left = 0;
  let right = customers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midCustomer = customers[mid];

    const lastNameCompare = lastName.localeCompare(midCustomer.lastName);
    const firstNameCompare = firstName.localeCompare(midCustomer.firstName);

    if (lastNameCompare === 0 && firstNameCompare === 0) {
      return mid;
    }

    if (lastNameCompare < 0 || (lastNameCompare === 0 && firstNameCompare < 0)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1; // Not found
}

module.exports = searchByName;
