const knex = require('../db/connection');
const TABLE = 'users';

function list() {
  return knex(TABLE).select('*').orderBy('id');
}
function read(id) {
  return knex(TABLE).select('*').where({ id }).first();
}
function create(data) {
  return knex(TABLE).insert(data).returning('*').then(r => r[0]);
}
function update(id, data) {
  return knex(TABLE).where({ id }).update(data).returning('*').then(r => r[0]);
}
function destroy(id) {
  return knex(TABLE).where({ id }).del();
}

module.exports = { list, read, create, update, destroy };