const express = require("express");
const router = express.Router();
const { getAllTuits, deleteTuit } = require("../controllers/tuitsControllers");

router.get("/", getAllTuits);

router.delete("/delete", deleteTuit);

module.exports = router;
