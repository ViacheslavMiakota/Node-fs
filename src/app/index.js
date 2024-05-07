const express = require("express");

const app = express();

const usersRouter = require("../routes/userRoutes");
const moviesRouter = require("../routes/movieRoutes");

app.use(express.json());

app.use("/", usersRouter);
app.use("/", moviesRouter);

module.exports = app;
