// EXPRESS
const express = require("express");
const app = express;

// ROUTES
const route = app.Router();

// VVALIDATION
const validate = require("../middlewares/validation/posts");

// CONTROLLERS
const controller = require("../controllers/posts");

route.get("/", controller.getAll);
route.get("/:id", validate.getOne, controller.getOne);
route.delete("/:id", validate.deleteOne, controller.deleteOne);
route.patch("/:id", validate.updateOne, controller.updateOne);
route.post("/", validate.addOne, controller.addOne);

module.exports = route;
