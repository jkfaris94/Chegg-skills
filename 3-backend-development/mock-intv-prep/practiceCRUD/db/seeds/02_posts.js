/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('posts').del();

  await knex('posts').insert([
    { id: 1, user_id: 1, title: 'On Analytical Engines', body: 'The notes…' },
    { id: 2, user_id: 2, title: 'COBOL Musings',         body: 'Why English-like syntax…' },
    { id: 3, user_id: 3, title: 'Git Internals',         body: 'Blobs, trees, commits…' },
  ]);

  await knex.raw(`
    SELECT setval(
      pg_get_serial_sequence('posts','id'),
      COALESCE((SELECT MAX(id) FROM posts), 0)
    );
  `);
};