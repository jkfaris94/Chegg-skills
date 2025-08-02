const knex = require("../db/connection");

function list() {
  // your solution here
  return knex("comments").select("*");
}

function listCommenterCount() {
  // your solution here
return knex("comments")
    .join("users", "comments.commenter_id", "users.user_id")
    .select("users.user_email as commenter_email")
    .count("comments.comment_id as count")
    .groupBy("users.user_email")
    .orderBy("users.user_email")
    .then((rows) =>
      rows.map((row) => ({
        commenter_email: row.commenter_email,
        count: Number(row.count),
      }))
    );
}

function read(commentId) {
  // your solution here
   return knex("comments")
    .join("users", "comments.commenter_id", "users.user_id")
    .join("posts", "comments.post_id", "posts.post_id")
    .select(
      "comments.comment_id",
      "comments.comment",
      "users.user_email as commenter_email",
      "posts.post_body as commented_post"
    )
    .where("comments.comment_id", commentId)
    .first();
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
