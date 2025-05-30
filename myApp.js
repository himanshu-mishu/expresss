const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

// GET /name (with query string)
app.get("/name", (req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  res.json({ name: `${first} ${last}` });
});

// POST /name (with body)
app.post("/name", (req, res) => {
  const first = req.body.first;
  const last = req.body.last;
  res.json({ name: `${first} ${last}` });
});

module.exports = app;
