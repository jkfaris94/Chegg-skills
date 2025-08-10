const knex = require('../db/connection');
const TABLE = 'posts';

function list(filter = {}) {
  const q = knex(TABLE).select('*').orderBy('id');
  if (filter.user_id) q.where({ user_id: Number(filter.user_id) });
  return q;
}
function read(id) { return knex(TABLE).where({ id }).first(); }
function create(data) { return knex(TABLE).insert(data).returning('*').then(r => r[0]); }
function update(id, data) { return knex(TABLE).where({ id }).update(data).returning('*').then(r => r[0]); }
function destroy(id) { return knex(TABLE).where({ id }).del(); }

module.exports = { list, read, create, update, destroy };