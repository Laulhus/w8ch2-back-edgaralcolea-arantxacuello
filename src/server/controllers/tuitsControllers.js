require("dotenv").config();
const Tuit = require("../../database/models/Tuit");

const getAllTuits = async (req, res) => {
  const tuits = await Tuit.find();
  res.json({ tuits });
};

const deleteTuit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tuit = await Tuit.findByIdAndDelete(id);
    if (tuit) {
      res.json({ tuit: { id } });
    } else {
      const error = new Error("Tuit not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const createTuit = async (req, res, next) => {
  try {
    const newTuit = await Tuit.create(req.body);
    if (newTuit) {
      res.status(201);
      res.json(newTuit);
      return;
    } else {
      const error = new Error("Invalid data format");
      error.code = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const likeTuit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedTuit = Tuit.findByIdAndUpdate(
      id,
      { likes: (likes += 1) },
      { new: true }
    );
    res.status(200);
    res.json(updatedTuit);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTuits, deleteTuit, createTuit, likeTuit };
