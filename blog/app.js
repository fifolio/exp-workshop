const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my blog");
});

app.listen(port, () => {
  console.log(`we are connected at port ${port}`);
});
