const mongoose = require("mongoose");

const newsLetterShema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const newsletter = mongoose.model("newsletter", newsLetterShema);
module.exports = newsletter;