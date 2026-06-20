const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

let posts = [];

router.get("/", (req, res) => {
  res.render("index", { posts });
});

router.get("/posts/new", (req, res) => {
  res.render("new");
});

router.post("/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: uuid(),
    title,
    content,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  posts.push(newPost);

  res.redirect("/");
});

router.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.send("Post not found");
  }

  res.render("show", { post });
});

router.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.send("Post not found");
  }

  res.render("edit", { post });
});

router.post("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.send("Post not found");
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.updatedAt = new Date().toLocaleString();

  res.redirect(`/posts/${post.id}`);
});

router.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect("/");
});

module.exports = router;
