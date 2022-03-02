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

module.exports = { getAllTuits, deleteTuit };
