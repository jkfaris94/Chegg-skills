// controllers/posts.controller.js
const knex = require("../db/connection");

// GET /posts
function list(req, res, next) {
  knex("posts")
    .select("*")
    .then((data) => res.json({ data }))
    .catch(next);
}

// GET /posts/:postId
function read(req, res, next) {
  const { postId } = req.params;

  knex("posts")
    .select("*")
    .where({ post_id: postId })
    .first()
    .then((post) => {
      if (post) {
        res.json({ data: post });
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    })
    .catch(next);
}

// POST /posts
function create(req, res, next) {
  const newPost = req.body.data;

  knex("posts")
    .insert(newPost)
    .returning("*")
    .then((rows) => res.status(201).json({ data: rows[0] }))
    .catch(next);
}

// PUT /posts/:postId
function update(req, res, next) {
  const { postId } = req.params;
  const updatedFields = req.body.data;

  knex("posts")
    .where({ post_id: postId })
    .update(updatedFields)
    .returning("*")
    .then((rows) => {
      if (rows.length) {
        res.json({ data: rows[0] });
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    })
    .catch(next);
}

// DELETE /posts/:postId
function destroy(req, res, next) {
  const { postId } = req.params;

  knex("posts")
    .where({ post_id: postId })
    .del()
    .then((deletedCount) => {
      if (deletedCount) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    })
    .catch(next);
}

module.exports = {
  list,
  read,
  create,
  update,
  delete: destroy,
};