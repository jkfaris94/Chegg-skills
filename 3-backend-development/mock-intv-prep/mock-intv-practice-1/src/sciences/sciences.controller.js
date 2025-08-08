function list(req, res) {
       const knex = req.app.get("db");
       return knex
         .from("sciences")
         .then(sciences => sciences ? res.json(sciences) : res.sendStatus(404))
         .catch(err => res.sendStatus(500)) 
   };


function update(req, res) {
    const { scienceId } = req.params;
    const knex = req.app.get("db");
    const { name } = req.body;
  
    knex
      .table("sciences")
      .update({ name }, ['id', 'name', 'description'])
      .where({id: scienceId})
      .then((data) => res.json(data))
      .catch(err => res.sendStatus(500));
  
};

function listScientists(req, res) {
    const { scienceId } = req.params;
    const knex = req.app.get("db");
  
    return knex
      .from("scientists")
      .where({science: scienceId})
      .then(scientists => scientists ? res.json(scientists)
                           : res.sendStatus(404))
           .catch(err => res.sendStatus(500)) 
}

// some helper middleware
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
      return next();
    }
    next({
        status: 404,
        message: `Science id not found: ${scienceId}`
      });
  })          
}

module.exports = {
  bodyHasNameProperty,
  scienceExists, 
  list,
  update: [scienceExists, bodyHasNameProperty, update],
  listScientists: [scienceExists, listScientists]
}