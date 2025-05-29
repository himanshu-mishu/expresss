const express = require("express");
const app = express();

// Step 1: Load environment variables
require("dotenv").config();

// Step 2: Create the /json route
app.get("/json", function (req, res) {
  let message = "Hello json";

  // Step 3: Check the environment variable and modify the message
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  // Step 4: Send the JSON response
  res.json({ message: message });
});

module.exports = app;
