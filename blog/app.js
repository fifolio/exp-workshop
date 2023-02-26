const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const postsRouter = require("./routes/posts");

app.use(bodyParser.json());
app.use("/posts", postsRouter);

const errMiddleware = (err, req, res, next) => {
  res.status(400).json({ err: err });
};
app.use(errMiddleware);

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
