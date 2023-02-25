const express = require("express");

//* Express body-parser is an npm library used to process data sent through an HTTP request body. It  exposes four express middlewares for parsing text, JSON, url-encoded and raw data set through an HTTP request body. These middlewares are functions that process incoming requests before they reach the target controller.
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [
  {
    username: "ali",
    email: "justion@gmail.com",
  },
  {
    username: "ahmed",
    email: "Danial@gmail.com",
  },
  {
    username: "jad",
    email: "Kiki@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/admin", (req, res) => {
  res.send("You in the Admin area");
});

app.get("/admin/dashboard", (req, res) => {
  res.send("<h1>you are now in the dashboard</h1>");
});

app.get("/users", (req, res) => {
  res.json({ users: users });
});

app.post("/users", (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
  };
  users.push(user);
  console.log(user);
  res.json({ user: user });
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username == username);
  console.log(user);

  if (user === undefined) {
    res.send("404, Sorry! user not found!");
  } else {
    res.send(user);
  }
});

app.listen(port, () => {
  console.log(`we are running on port ${port}`);
});
