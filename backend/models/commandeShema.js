const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "produit",
    required: true,
    },
    quantity: {
    type: Number,
    required: true,
    min: 1,
    },
    prix: {
    type: Number,
    required: true,
    },
    titre: {
    type: String,
    required: true,
  },
});
const clientSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
email: String,
phone: String,
address: {
    street: String,
    city: String,
    postalCode: String,
    country: String,
},
});

const orderSchema = new mongoose.Schema({
client: {
    type: clientSchema,
    required: true,
},
products: {
    type: [productSchema],
    required: true,
    validate: (v) => Array.isArray(v) && v.length > 0,
},
totalAmount: {
    type: Number,
    required: true,
},
status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending",
},
createdAt: {
    type: Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Order", orderSchema);
