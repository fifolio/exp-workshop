const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const postsRouter = require("./routes/posts");

app.use(bodyParser.json());
app.use("/posts", postsRouter);

const errMiddleware = (err, req, res, next) => {
  res.statue(400).json({ err: err });
};
app.use(errMiddleware);

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
