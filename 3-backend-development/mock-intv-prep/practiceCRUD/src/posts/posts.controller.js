const service = require('./posts.service');
const users = require('../users/users.service');

async function list(req, res) {
  res.json({ data: await service.list({ user_id: req.query.user_id }) });
}
async function read(req, res, next) {
  const post = await service.read(Number(req.params.postId));
  if (!post) return next({ status: 404, message: 'Post not found' });
  res.json({ data: post });
}
async function create(req, res, next) {
  const { data } = req.body;
  if (!data?.user_id) return next({ status: 400, message: 'user_id is required' });
  const user = await users.read(Number(data.user_id));
  if (!user) return next({ status: 400, message: 'user_id does not exist' });
  res.status(201).json({ data: await service.create(data) });
}
async function update(req, res, next) {
  const id = Number(req.params.postId);
  const existing = await service.read(id);
  if (!existing) return next({ status: 404, message: 'Post not found' });
  if (req.body.data?.user_id) {
    const user = await users.read(Number(req.body.data.user_id));
    if (!user) return next({ status: 400, message: 'user_id does not exist' });
  }
  res.json({ data: await service.update(id, req.body.data) });
}
async function destroy(req, res, next) {
  const id = Number(req.params.postId);
  const existing = await service.read(id);
  if (!existing) return next({ status: 404, message: 'Post not found' });
  await service.destroy(id);
  res.sendStatus(204);
}

module.exports = { list, read, create, update, destroy };