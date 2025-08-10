require('dotenv').config();

module.exports = {
  development: {
    client: 'pg', // use 'pg' for PostgreSQL
    connection: process.env.DATABASE_URL,
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' },
  },
};