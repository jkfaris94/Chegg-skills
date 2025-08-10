const service = require('./users.service');

async function list(req, res) {
  res.json({ data: await service.list() });
}
async function read(req, res, next) {
  const user = await service.read(Number(req.params.userId));
  if (!user) return next({ status: 404, message: 'User not found' });
  res.json({ data: user });
}
async function create(req, res) {
  const { data } = req.body;
  res.status(201).json({ data: await service.create(data) });
}
async function update(req, res, next) {
  const id = Number(req.params.userId);
  const existing = await service.read(id);
  if (!existing) return next({ status: 404, message: 'User not found' });
  res.json({ data: await service.update(id, req.body.data) });
}
async function destroy(req, res, next) {
  const id = Number(req.params.userId);
  const existing = await service.read(id);
  if (!existing) return next({ status: 404, message: 'User not found' });
  await service.destroy(id);
  res.sendStatus(204);
}

module.exports = { list, read, create, update, destroy };