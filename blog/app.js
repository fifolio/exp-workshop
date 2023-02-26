const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

// CONTROLLERS
const controller = require("./controllers/posts");

// DATA
const posts = require("./models/data");

// MIDDLEWARES
const mid1 = (req, res, next) => {
  console.log(req.url);
  next();
};

// PASSING MIDDLEWARE TO ALL ROUTES
app.use(mid1);

app.get("/posts", controller.getAll);
app.get("/posts/:id", controller.getOne);
app.delete("/posts/:id", controller.deleteOne);
app.patch("/posts/:id", controller.updateOne);
app.post("/posts/", controller.addOne);

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
