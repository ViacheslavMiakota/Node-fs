const express = require("express");

const app = express();

const usersRouter = require("../routes/userRoutes");
const moviesRouter = require("../routes/movieRoutes");
const authRouter = require("../routes/authRoutes");

app.use(express.json());

app.use("/auth", authRouter);
app.use("/", usersRouter);
app.use("/", moviesRouter);

module.exports = app;
