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

let home = `<h1>Welcome to my home page</h1>`;

app.get("/", (req, res) => {
  res.send(`${home}`);
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

app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username == username);
  console.log(user);
  if (user === undefined) {
    res.send("404, Sorry! user not found!");
  } else {
    res.send(user);
  }
});

app.delete("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username == username);
  if (user === undefined) {
    res.send("404, Sorry! user not found!");
  } else {
    const index = users.indexOf(user);
    users.splice(index, 1);
    console.log("user deleted");
    res.send("user deleted");
  }
});

//* A patch is a partial update descriptor, expressed in JSON or XML. A patch tells MarkLogic Server what update to apply and where to apply it.
app.patch("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username === username);
  if (user === undefined) {
    console.log("user not found");
  } else {
    user.username = req.body.username ? req.body.username : user.username;
    user.email = req.body.email ? req.body.email : user.email;
    console.log("updated");
    res.send("updated");
  }
});

app.listen(port, () => {
  console.log(`we are running on port ${port}`);
});
