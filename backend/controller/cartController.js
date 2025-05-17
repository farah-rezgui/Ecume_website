const Cart = require("../models/cartShema");

exports.initCart = async (req, res) => {
  const cart = new Cart({});
  const createdCart = await cart.save();
  res.status(200).json(createdCart);
};

exports.addToCart = async (req, res) => {
  const {
    id_cart,
    id_produit,
    quantity, // Receive quantity from the frontend
  } = req.body;

  const cart = await Cart.findById(id_cart);
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  let produit;
  try {
    produit = cart.produit.find((prod) => prod._id.toString() === id_produit);
  } catch (error) {
    return res.status(433).json({ message: "Product not found" });
  }

  if (produit) {
    produit.quantity += quantity; // Increment the quantity by the received value
  } else {
    cart.produit.push({ _id: id_produit, quantity }); // Add the product with the specified quantity
  }

  await cart.save();
  res.status(200).json({ success: true, cart });
};
exports.getCart = async (req, res) => {
  const { id_cart } = req.body;
  const cart = await Cart.findById(id_cart).populate("produit._id");
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  res.status(200).json(cart);
};

exports.deleteFromCart = async (req, res) => {
  const { id_cart, id_produit } = req.body;
  const cart = await Cart.findById(id_cart);
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  const produitIndex = cart.produit.findIndex(
    (prod) => prod._id.toString() === id_produit
  );
  if (produitIndex === -1) {
    return res.status(404).json({ message: "Product not found in cart" });
  }
  cart.produit.splice(produitIndex, 1);
  await cart.save();
  res.status(200).json({ success: true, cart });
};
