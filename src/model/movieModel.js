const mongoose = require("mongoose");

const { Schema } = mongoose;

const MovieShema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for movie"],
    unique: true,
  },
  genre: {
    type: String,
    required: [true, "Set genre for movie"],
  },
  rating: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  // owner: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "user",
  // },
});

const Movie = mongoose.model("movie", MovieShema);

module.exports = { Movie };
