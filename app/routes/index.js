const express = require("express");
const { messageRoute } = require("./reservation.routes");

// const { todoRoute } = require("./todo.route");
// const { authRoute } = require("./auth.route");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("This is simple todolist api");
});

router.use("/reservation", messageRoute);
// router.use("/todo", todoRoute);
// router.use("/auth", authRoute);

module.exports = {
  allRouter: router,
};