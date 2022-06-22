// comentando ando
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const categoriesRouter = require('./routes/categoriesRouter')
const publicationRouter = require('./routes/publicationRouter')

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use('/categories', categoriesRouter)
app.use('/publication', publicationRouter)

module.exports = app;
