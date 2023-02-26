const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

// CONTROLLERS
const controller = require("./controllers/posts");

app.get("/posts", controller.getAll);
app.get("/posts/:id", controller.getOne);
app.delete("/posts/:id", controller.deleteOne);
app.patch("/posts/:id", controller.updateOne);
app.post("/posts/", controller.addOne);

const errMiddleware = (err, req, res, next) => {
  res.statue(400).json({ err: err });
};

app.use(errMiddleware);

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
