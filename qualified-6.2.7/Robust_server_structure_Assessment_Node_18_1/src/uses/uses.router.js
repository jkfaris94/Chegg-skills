const router = require("express").Router();
const controller = require("./uses.controller");

router
  .route("/")
  .get(controller.list)
  .all(controller.methodNotAllowed);

router
  .route("/:useId")
  .get(controller.read)
  .delete(controller.delete)
  .all(controller.methodNotAllowed);

module.exports = router;