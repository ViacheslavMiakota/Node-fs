const express = require("express");

const app = express();

const usersRouter = require("../routes/userRoutes");

app.use(express.json());

app.use("/", usersRouter);

module.exports = app;
