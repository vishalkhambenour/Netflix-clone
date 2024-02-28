const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    limit: { type: String },
    genre: { type: String },
    year: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = model("Movie", moviesSchema);
