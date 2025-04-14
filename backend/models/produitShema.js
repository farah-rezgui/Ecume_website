const mongoose = require("mongoose");
const produitSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true },
    description: String,
    image: {
      type: String,
      required: false,
      match: [/\.(jpeg|jpg|png|gif|webp)$/i, "URL d'image invalide"],
    },
    prix: {
      type: Number,
      required: true,
      min: 0,
    },
    quantityStock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);
const produit = mongoose.model("produit", produitSchema);
module.exports = produit;