/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();

    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE'); // delete posts when user is deleted

    table.text('title').notNullable();
    table.text('body').notNullable();
    table.boolean('published').notNullable().defaultTo(false);

    table.timestamps(true, true);

    // helpful indexes
    table.index(['user_id']);
    table.index(['created_at']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts');
};
