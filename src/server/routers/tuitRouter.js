const express = require("express");
const {
  getAllTuits,
  deleteTuit,
  likeTuit,
  createTuit,
} = require("../controllers/tuitsControllers");

const tuitRouter = express.Router();

tuitRouter.get("/", getAllTuits);
tuitRouter.delete("/delete/:id", deleteTuit);
tuitRouter.patch("/like/:id", likeTuit);
tuitRouter.post("/create", createTuit);

module.exports = tuitRouter;
