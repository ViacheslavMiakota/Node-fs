const express = require("express");

const app = express();

const path = require("path");
const cookie = require("cookie-parser");

const usersRouter = require("../routes/userRoutes");

app.use(express.json());
app.use(cookie());

app.use("/", usersRouter);

module.exports = app;
