const express = require("express");
const { messageRoute } = require("./reservation.routes");

// const { todoRoute } = require("./todo.route");
// const { authRoute } = require("./auth.route");
const router = express.Router();

const setCorsHeaders = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
};

router.use(setCorsHeaders); // Apply CORS headers to all routes


router.get("/", (req, res) => {

  res.json("This is simple todolist api");
});

router.use("/reservation", messageRoute);
// router.use("/todo", todoRoute);
// router.use("/auth", authRoute);

module.exports = {
  allRouter: router,
};
