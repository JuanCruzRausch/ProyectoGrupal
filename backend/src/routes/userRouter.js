const express = require("express");
const authController = require("../controllers/authController");

const userRouter = express.Router();

userRouter.post("/registration", authController.registration);
userRouter.post("/confirm", authController.confirm);


module.exports = userRouter;
