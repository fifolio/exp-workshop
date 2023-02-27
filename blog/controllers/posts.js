const posts = require("../models/data");

const controller = {
  getAll: (req, res) => {
    res.send(posts);
  },

  getOne: (req, res) => {
    const post = posts.find((post) => post.id == req.params.id);
    if (post) {
      res.send(post);
    } else {
      res.send(`post not found `);
    }
  },

  deleteOne: (req, res) => {
    const post = posts.find((post) => post.id == req.params.id);
    if (post) {
      const index = posts.indexOf(post);
      posts.splice(index, 1);
      res.send(`Post is Deleted.`);
    } else {
      res.send("post not found");
    }
  },

  updateOne: (req, res) => {
    const post = posts.find((post) => post.id == req.params.id);
    if (post) {
      post.userId = post.userId; //! This value is auto-generate
      post.id = post.id; //! This value is auto-generate
      post.title = req.body.title ? req.body.title : post.title;
      post.body = req.body.body ? req.body.body : post.body;
      res.send(post);
    } else {
      res.send("post not found");
    }
  },

  addOne: (req, res) => {
    // Get post.id to update
    const oldId = posts.length - 1;
    const newId = posts[oldId].id + 1;
    const post = {
      userId: 1,
      id: newId,
      title: req.body.title ? req.body.title : "post title",
      body: req.body.body ? req.body.body : "post body",
    };
    posts.push(post);
    res.send("Post Added");
  },
};

module.exports = controller;
