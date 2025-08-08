const router = require("express").Router();
const controller = require("./sciences.controller");


// some routes
router
  .route("/")
  .get(controller.list);



router
  .route("/:scienceId")
  .patch(controller.update);

router
  .route("/:scienceId/scientists")
  .get(controller.listScientists);


module.exports = router;