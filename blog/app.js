const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routes/posts");

const errMiddleware = (err, req, res, next) => {
  res.status(400).json({ err: err });
};

//* use() is used to bind *application-level middleware to an instance of the app object which is instantiated on the creation of the Express server
app.use(errMiddleware);
app.use(express.json());
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
