const knex = require("../db/connection");

function list() {
  // your solution here
  return knex("comments").select("*");
}

function listCommenterCount() {
  // your solution here
  return knex("comments")
  .join("users", "comments.user_id", "users.user_id")
  .select("users.user_email as commenter_email")
  .count("comments.comment_id as count")
  .groupBy("users.user_email");
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
