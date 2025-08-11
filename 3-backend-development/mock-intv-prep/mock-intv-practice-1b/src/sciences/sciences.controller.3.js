//READ
const read = async (req, res, next) => {
  const knex = req.app.get("db");
  const { scienceId } = req.params;

  try {
    const science = await knex("sciences")
      .where({ id: scienceId })
      .first();

    return res.status(200).json(science);
  } catch (err) {
    return next(err);
  }
};

//create new science
const create = (req, res, next) => {
  const knex = req.app.get("db");
  const { name, description } = req.body;
  console.log("create name:", name);
  console.log("create description:", description);
  
  try {
    const rows = knex("sciences")
      .insert({ name, description }, ['name', 'description']);
      res.status(201).json({ data: rows[0] });
  } catch (err) {
    console.error(err);
    return next({ status: 500, message: "Database insert failed" });
  }
}
