// comentando ando
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

module.exports = app;
