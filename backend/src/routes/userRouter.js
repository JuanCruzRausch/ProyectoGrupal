const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/registration", authController.registration);
userRouter.post("/confirm", authController.confirm);
userRouter.get("/:idSeller", userController.getUser);

module.exports = userRouter;
