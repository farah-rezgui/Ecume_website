const mongoose = require("mongoose");

const cartShema = new mongoose.Schema(
  {
    produit: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "produit", // Reference to the produit collection
      },
    ],
  },
  { timestamps: true }
);

const cart = mongoose.model("cart", cartShema);
module.exports = cart;