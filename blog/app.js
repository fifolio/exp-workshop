const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// CONTROLLERS
const controller = require("./controllers/posts");

// DATA
const posts = require("./models/data");

app.get("/posts", controller.getAll);
app.get("/posts/:id", controller.getOne);

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
