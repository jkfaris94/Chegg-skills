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

const create = (req, res, next) => {
  const knex = req.app.get("db");
  const { name, description } = req.body || {};

  if (!name) {
    return res.status(400).json({ error: "A 'name' property is required" });
  }
  if (!description) {
    return res.status(400).json({ error: "A 'description' property is required" });
  }

  knex("sciences")
    .insert({ name, description }, ["id", "name", "description"])
    .then((rows) => {
      // Postgres returns the created row object; SQLite returns the new id
      if (rows && typeof rows[0] === "object") {
        return res.status(201).json(rows[0]);
      }
      const [id] = rows;
      return knex("sciences")
        .select("id", "name", "description")
        .where({ id })
        .first()
        .then((row) => res.status(201).json(row));
    })
    .catch(next);
};


const read = (req, res) => {
return res.json(res.locals.science);
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


const scienceExists = (req, res, next) => {
  const { scienceId } = req.params;
  const knex = req.app.get("db");
  knex
    .table("sciences")
    .where({id: scienceId})
    .first()
    .then(science => {
    if(science) {
      res.locals.science = science; // Store the science record
      return next();
    }
    next({
        status: 404,
        message: `Science id not found: ${scienceId}`
      });
  })          
}

const bodyHasDescription = (req, res, next) => {
  const { description } = req.body;
  
  if(description) {
    return next();
  } 
  next({
    status: 400,
    message: "A 'description' property is required"
  });
}


module.exports = {
  list,
  listScientists: [scienceExists, listScientists],
  update: [scienceExists, bodyHasNameProperty, update],
  read: [scienceExists, read],
  create
};