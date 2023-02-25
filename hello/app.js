const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    id: 1,
    username: "ali",
    email: "justion@gmail.com",
    age: 24,
    hometown: "USA",
    language: "EN, AR, CH, SP",
    jobTiitle: "Software Engineer",
    Active: false,
  },
  {
    id: 2,
    username: "ahmed",
    email: "Danial@gmail.com",
    age: 54,
    hometown: "KSA",
    language: "EN",
    jobTiitle: "Lawyer",
    Active: false,
  },
  {
    id: 3,
    username: "jad",
    email: "Kiki@gmail.com",
    age: 14,
    hometown: "United Kingdom",
    language: "EN, SP",
    jobTiitle: "Student",
    Active: true,
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
  res.send("<h1>users page response</h1>");
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username == username);

  if (user === undefined) {
    res.send("404, Sorry! user not found!");
  } else {
    res.send(user);
  }
});

app.listen(port, () => {
  console.log(`we are running on port ${port}`);
});
