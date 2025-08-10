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
    .catch(err => res.sendStatus(500));
  
};

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

//created body middleware
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

//solution 2
const read = async (req, res, next) => {
  const knex = req.app.get("db");
  const { scienceId } = req.params;

  try {
    const science = await knex("sciences")
      .where({ id: Number(scienceId) })
      .first();

    if (!science) {
      return res.status(404).json({ error: `Science id not found: ${scienceId}` });
    }
    return res.status(200).json(science);
  } catch (err) {
    return next(err);
  }
};

//solution 2
const create = (req, res) => {
  const knex = req.app.get("db");
  const newScience = req.body;
  
  knex
    .table("sciences")
    .insert(newScience)
    .returning("*")
    .then((rows) => res.status(201).json(rows))
    .catch(err => res.sendStatus(500));
  
};


module.exports = {
  list,
  listScientists: [scienceExists, listScientists],
  update: [scienceExists, bodyHasNameProperty, update],
  read: [scienceExists, read],
  create: [bodyHasNameProperty, bodyHasDescriptionProperty,  create]
};