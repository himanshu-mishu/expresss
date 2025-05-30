const express = require("express");
const bodyParser = require("body-parser"); // ✅ Step 1: require body-parser

const app = express();

// ✅ Step 2: Mount the middleware BEFORE your routes
app.use(bodyParser.urlencoded({ extended: false }));

// Optional: simple GET route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ✅ GET /name route (for query strings)
app.get("/name", (req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  res.json({ name: `${first} ${last}` });
});

// ✅ POST /name route (for form data)
app.post("/name", (req, res) => {
  const first = req.body.first;
  const last = req.body.last;
  res.json({ name: `${first} ${last}` });
});

module.exports = app;
