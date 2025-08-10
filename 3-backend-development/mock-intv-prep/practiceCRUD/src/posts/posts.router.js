const router = require('express').Router();
const controller = require('./posts.controller');

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:postId')
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.destroy);

module.exports = router;