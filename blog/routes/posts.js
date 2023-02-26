// EXPRESS
const express = require("express");
const app = express;

// CONTROLLERS
const controller = require("../controllers/posts");

// ROUTES
const route = app.Router();

const validateId = (req, res, next) => {
  const id = req.params.id;
  const pattern = /^[1-9]{1,3}$/
  if (pattern.test(id)) {
    next();
  } else {
    next({
      name: "validation Error",
      element: "params: id",
      msg: "The post id must be a number from 1-999",
    });
  }
};

route.get("/", controller.getAll);
route.get("/:id", [validateId], controller.getOne);
route.delete("/:id", controller.deleteOne);
route.patch("/:id", controller.updateOne);
route.post("/", controller.addOne);

module.exports = route;
