const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Mount body-parser middleware BEFORE routes
app.use(bodyParser.urlencoded({ extended: false }));

// Handle both GET and POST on the same /name path
app
  .route("/name")
  .get((req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const { first, last } = req.body;
    res.json({ name: `${first} ${last}` });
  });

module.exports = app;
