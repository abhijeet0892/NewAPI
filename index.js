// index.js
const express = require("express");
const userController = require("./controllers/userController");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/api/users", userController.getAllUsers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
