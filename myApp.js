const express = require("express");
const app = express();

// ✅ Load environment variables
require("dotenv").config();

app.get("/json", function (req, res) {
  // default response
  let response = "Hello json";

  // ✅ Conditionally convert to uppercase
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  }

  // ✅ Send as JSON
  res.json({ message: response });
});

module.exports = app;
