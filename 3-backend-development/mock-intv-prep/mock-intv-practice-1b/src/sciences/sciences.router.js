const router = require("express").Router();
const controller = require("./sciences.controller");

router
  .route("/")
  .get(controller.list)
  .post(controller.create);

router
  .route("/:scienceId")
  .patch(controller.update)
  .get(controller.read);

router
  .route("/:scienceId/scientists")
  .get(controller.listScientists);

module.exports = router;