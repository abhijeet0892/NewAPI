// controllers/userController.js
const userService = require("../services/userService");

exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};
