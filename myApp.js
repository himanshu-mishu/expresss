const express = require("express");
const app = express();

// Middleware to serve static files from /public
app.use("/public", express.static(__dirname + "/public"));

// Route to serve HTML file at '/'
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
