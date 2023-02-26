const express = require("express");

// CONTROLLERS
const controller = require("../controllers/posts");

const route = express.Router();
route.get("/", controller.getAll);
route.get("/:id", controller.getOne);
route.delete("/:id", controller.deleteOne);
route.patch("/:id", controller.updateOne);
route.post("/", controller.addOne);

module.exports = route;
