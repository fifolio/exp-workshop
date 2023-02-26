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
};

module.exports = controller;
