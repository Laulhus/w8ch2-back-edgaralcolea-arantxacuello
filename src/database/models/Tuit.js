const { model, Schema } = require("mongoose");

const TuitSchema = new Schema({
  date: {
    timestamps: true,
    default: Date.now,
  },
  text: {
    required: true,
    maxlength: 200,
    minlength: 1,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Tuit = model("tuit", TuitSchema, "tuits");

module.exports = Tuit;
