//CREATED POST GET FOR / 
const create = (req, res) => {
  const knex = req.app.get("db");
  const { name, description } = req.body;
  
  knex
    .table("sciences")
    .insert({ name, description }, ['name', 'description'])
    .then((data) => res.status(201).json(data))
    .catch(err => res.status(500));
}

//EDIT PROVIDED MIDDLEWARE TO STORE LOCALLY
const scienceExists = (req, res, next) => {
  const { scienceId } = req.params;
  const knex = req.app.get("db");
  knex
    .table("sciences")
    .where({id: scienceId})
    .first()
    .then(science => {
    if(science) {
        res.locals.science = science; // STORE THE LOCAL RECORD
        return next();
    }
    next({
        status: 404,
        message: `Science id not found: ${scienceId}`
      });
  })          
}

//CREATED READ FUNCTION TO GRAB THE LOCAL STORED SCIENCE
const read = (req, res) => {
    return res.json(res.locals.science);
}




//---------------------------------------------------example 2------------------------------------------------------
            // middleware to check and store customer  
async function customerExists(req, res, next) {
  const { customerId } = req.params;

  const customer = await service.read(customerId);

  if (customer) {
    res.locals.customer = customer; // customers provided already locally stored 
    return next();
  }
  next({ status: 404, message: `Customer id not found: ${customerId}` });
}

function read(req, res) {
  // Complete the implementation of this method.
  res.json({ data: res.locals.customer });
}

async function create(req, res) {
  // Complete the implementation of this method.
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}


//-----------------------service file for knex---------------------------
const knex = require("../db/connection");

const tableName = "customer";

function read(customer_id) {
  // Complete the implementation of this method.
  // TIP: Remember to use the .first() method to retrieve the first value.
  return knex(tableName)
      .where({ id: customer_id} )
      .first();
}

function create(newCustomer) {
  // Complete the implementation of this method.
  // TIP: Remember to add .then((createdData) => createdData[0]) at the end of your knex query. 
  return knex(tableName)
      .insert(newCustomer, "*")
      .then((createdData) => createdData[0]);
}