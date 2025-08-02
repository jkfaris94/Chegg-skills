/*
  The `faker` package has already been installed. 
  
  Require the `faker` package at the top of this file. Make sure to assign it to a variable named `faker`.
  
=================  
  IMPORTANT NOTE: When running tests and/or submitting your solution in the Qualified Web IDE, make sure to add the top directory `@faker-js/` (i.e., @faker-js/faker) when requiring the faker package. Otherwise, Qualified throws an error because it can't find it.
=================  
  
  Use the `faker` package inside of the `plantGenerator()` function.
  
  For the `name` property, return a string value using any method from `faker` that you want. 
  
  For the `color` property, return a string value using one of the available color methods from `faker`.

  `plantGenerator` should return a different `name` and `color` combination each time it is called.
  
  Finally, export `plantGenerator` as a function.
*/
const faker = require('@faker-js/faker');


function plantGenerator() {
  return {
    name: "faker.name.firstName()",
    color: "greenfaker.commerce.color()",
  };
}



module.exports = plantGenerator;