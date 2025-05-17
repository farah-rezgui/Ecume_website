const mongoose = require("mongoose");

const cartShema = new mongoose.Schema(
  {
    produit: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "produit",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const cart = mongoose.model("cart", cartShema);
module.exports = cart;