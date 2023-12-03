const express = require("express");
const userControllers = require("../controllers/users.controllers");
const router = express.Router();

router.post("/create-user", userControllers.createUser);

module.exports = { userRouter: router };
