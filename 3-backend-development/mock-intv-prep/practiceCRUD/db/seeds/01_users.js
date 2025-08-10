/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Clear existing
  await knex('users').del();

  // Insert
  await knex('users').insert([
    { id: 1, email: 'ada@example.com',   name: 'Ada Lovelace' },
    { id: 2, email: 'grace@example.com', name: 'Grace Hopper' },
    { id: 3, email: 'linus@example.com', name: 'Linus Torvalds' },
  ]);

  // Reset sequence safely (works even on Render)
  await knex.raw(`
    SELECT setval(
      pg_get_serial_sequence('users','id'),
      COALESCE((SELECT MAX(id) FROM users), 0)
    );
  `);
};