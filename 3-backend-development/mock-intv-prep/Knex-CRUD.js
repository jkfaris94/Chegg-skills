// =============================
// CREATE (INSERT)
// =============================

// Insert single row
knex("users")
  .insert({ first_name: "Alice", last_name: "Smith", email: "alice@example.com" })
  .then((ids) => console.log("Inserted IDs:", ids));

// Insert and return specific columns (Postgres only)
knex("users")
  .insert({ first_name: "Alice", last_name: "Smith" }, ["id", "first_name"])
  .then((rows) => console.log(rows));

// Insert multiple rows
knex("users").insert([
  { first_name: "Bob", last_name: "Jones" },
  { first_name: "Carol", last_name: "White" }
]);

// =============================
// READ (SELECT)
// =============================

// Get all rows
knex("users")
  .select("*")
  .then((rows) => console.log(rows));

// Get specific columns
knex("users").select("id", "first_name", "email");

// Filter results
knex("users").where({ id: 1 }).first(); // single row

// More complex filters
knex("users")
  .where("first_name", "Alice")
  .andWhere("email", "like", "%@example.com");

// Ordering & limiting
knex("users")
  .orderBy("id", "desc")
  .limit(5)
  .offset(0);

// =============================
// UPDATE
// =============================

// Update one row by ID
knex("users")
  .where({ id: 1 })
  .update({ email: "new_email@example.com" });

// Update and return updated row (Postgres only)
knex("users")
  .where({ id: 1 })
  .update({ email: "new_email@example.com" }, ["id", "email"]);

// Update multiple rows
knex("users")
  .where("last_name", "Smith")
  .update({ last_name: "Johnson" });

// =============================
// DELETE
// =============================

// Delete one row by ID
knex("users")
  .where({ id: 1 })
  .del();

// Delete with condition
knex("users")
  .where("email", "like", "%@old-domain.com")
  .del();

// =============================
// JOINS
// =============================

// Inner join: posts with author names
knex("posts")
  .join("users", "posts.user_id", "users.id")
  .select("posts.id", "posts.title", "users.first_name");

// Left join: include users with no posts
knex("users")
  .leftJoin("posts", "users.id", "posts.user_id")
  .select("users.*", "posts.title as post_title");

// =============================
// AGGREGATES
// =============================

// Count rows
knex("users").count("id as user_count");

// Group & count
knex("posts")
  .select("user_id")
  .count("id as post_count")
  .groupBy("user_id");