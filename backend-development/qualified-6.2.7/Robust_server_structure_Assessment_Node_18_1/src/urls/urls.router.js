const express = require("express");
const router = express.Router();
const controller = require("./urls.controller");

// /urls
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(controller.methodNotAllowed);

// /urls/:urlId
router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .all(controller.methodNotAllowed);

// /urls/:urlId/uses
router
  .route("/:urlId/uses")
  .get(controller.listUsesByUrl)
  .all(controller.methodNotAllowed);

router
  .route("/:urlId/uses/:useId")
  .get(controller.readUseByUrl)
  .delete(controller.deleteUseByUrl)
  .all(controller.methodNotAllowed);

module.exports = router;