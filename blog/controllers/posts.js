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
    res.send(`${post} deleted`);
  },
};

module.exports = controller;
