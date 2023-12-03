const express = require("express");
const cors = require("cors");
const { userRouter } = require("./app/modules/routes/users.route");
const app = express();
//parsers
app.use(express.json());
app.use(cors());

// applications routes

// about the users router
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

module.exports = app;
