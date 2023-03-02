// initialize the Database
const mongoose = require("mongoose");

// setup the db infos
const dbHost = "mongodb://localhost/27017";
const dbName = "lwn";
const URL = `${dbHost}/${dbName}`;
const OPTIONS = {};

// Connecting to db
const connect = mongoose.connect(URL, OPTIONS);
const db = mongoose.connection;

// Connect and catch errors
db.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

db.on("connected", () => {
  console.log(`Mongoose connected ${URL} db`);
});

module.exports = db;
