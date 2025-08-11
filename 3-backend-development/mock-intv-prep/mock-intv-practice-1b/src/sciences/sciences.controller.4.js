//READ
const read = (req, res) => {
  const knex = req.app.get("db");
  const { scienceId } = req.params; //note require params

  knex
      .table("sciences")
      .where({ id: scienceId }) //read one knex
      .first() //crucial
      .then((data) => res.status(200).json(data))
      .catch(err => res.status(500));
};

//create new science
const create = (req, res, next) => {
  const knex = req.app.get("db");
  const { name, description } = req.body; //note request body
  
  knex
    .table("sciences")
    .insert({ name, description }, ['name', 'description']) //create knex
    .then((data) => res.status(201).json(data))
    .catch(err => res.status(500));
}



//added middleware
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