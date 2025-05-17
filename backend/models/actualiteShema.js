const mongoose = require("mongoose");

const actualiteShema = new mongoose.Schema(
  {
   titre : {
      type: String,
      required: true,
    },
    description: {
      type: Map,
      of: String,
      required: true,
    },
    descriptionHome : {
      type : String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    auteur: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const actualite = mongoose.model("actualite", actualiteShema);
module.exports = actualite;