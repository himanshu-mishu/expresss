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

module.exports = app;
