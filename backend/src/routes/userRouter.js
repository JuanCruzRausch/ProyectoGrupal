const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", authController.signup);
userRouter.post("/changePassword", authController.changePassword);
userRouter.get("/:idSeller", userController.getUser);

module.exports = userRouter;
