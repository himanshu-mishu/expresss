const express = require("express");
const app = express();

// JSON API endpoint
app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});

module.exports = app;
