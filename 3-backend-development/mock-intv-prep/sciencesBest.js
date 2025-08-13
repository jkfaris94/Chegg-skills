const list = (req, res) => {
       const knex = req.app.get("db");
       return knex
         .from("sciences")
         .then(sciences => sciences ? res.json(sciences)
                         : res.sendStatus(404))
         .catch(err => res.sendStatus(500)) 
   };


const listScientists = (req, res) => {
  const { scienceId } = req.params;
  const knex = req.app.get("db");
  
  return knex
    .from("scientists")
    .where({science: scienceId})
    .then(scientists => scientists ? res.json(scientists)
                         : res.sendStatus(404))
         .catch(err => res.sendStatus(500)) 
};

const update = (req, res) => {
  const { scienceId } = req.params;
  const knex = req.app.get("db");
  const { name } = req.body;
  
  knex
    .table("sciences")
    .update({ name }, ['id', 'name', 'description'])
    .where({id: scienceId})
    .then((data) => res.json(data))
    
  
};

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

//ADDED ANOTHER MIDDLEWARE FOR DESCRIPTION
const bodyHasDescriptionProperty = (req, res, next) => {
  const { description } = req.body;
  
  if(description) {
    return next();
  } 
  next({
    status: 400,
    message: "A 'description' property is required"
  });
}


const bodyHasNameProperty = (req, res, next) => {
  const { name } = req.body;
  
  if(name) {
    return next();
  } 
  next({
    status: 400,
    message: "A 'name' property is required"
  });
}


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

//created read for /sciences/scienceId
const read = (req, res) => {
    return res.json(res.locals.science);
}


module.exports = {
  list,
  listScientists: [scienceExists, listScientists],
  update: [scienceExists, bodyHasNameProperty, update],
  create: [bodyHasNameProperty, bodyHasDescriptionProperty, create],
  read: [scienceExists, read]
};