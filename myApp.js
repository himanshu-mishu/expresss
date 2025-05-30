require("dotenv").config();
const express = require("express");
const app = express();

// ✅ Load environment variables

app.get("/json", function (req, res) {
  let response = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  }
  res.json({ message: response });
});
module.exports = app;
