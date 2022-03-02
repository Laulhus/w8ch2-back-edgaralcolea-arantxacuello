const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { notFoundError, generalError } = require("./middlewares/errors");
const tuitsRouter = require("./routers/tuitsRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

app.use("/", tuitsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
