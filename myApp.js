const express = require("express");
const app = express();
require("dotenv").config();

// Optional: Root-level logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// ✅ JSON response with conditional env logic
app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message });
});

// ✅ ✅ Time middleware chained at route
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString(); // 🕒 Add current time
    next();
  },
  (req, res) => {
    res.json({ time: req.time }); // ✅ Send it as JSON
  }
);

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});
app.get("/name", (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;
