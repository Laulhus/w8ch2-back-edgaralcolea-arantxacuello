const { model, Schema } = require("mongoose");

const TuitSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
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
