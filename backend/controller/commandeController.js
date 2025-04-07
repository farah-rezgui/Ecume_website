const commandeModel = require("../models/commandeShema");
const Product = require("../models/produitShema");

module.exports.getAllCommande = async (req, res) => {
  try {
    const commandeListe = await commandeModel.find();
    res.status(200).json({ commandeListe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getCommandeById = async (req, res) => {
  try {
    //console.log(req.params.id);
    const { id } = req.params;
    //const id1 = req.params.id;
    const commande = await commandeModel.findById(id);
    res.status(200).json({ commande });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.addCommande = async (req, res) => {
  try {
    const { client, products } = req.body;

    if (
    !client ||
    !products ||
    !Array.isArray(products) ||
    products.length === 0
    ) {
    return res
        .status(400)
        .json({ message: "Client and products are required." });
    }

    // Validate and calculate total
    let totalAmount = 0;
    const validatedProducts = [];

    for (const item of products) {
    const { productId, quantity } = item;

    if (!productId || !quantity || quantity <= 0) {
        return res.status(400).json({ message: "Invalid product data." });
    }

      const product = await Product.findById(productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with ID ${productId} not found.` });
      }

      const prix = product.prix;
      totalAmount += prix * quantity;

      validatedProducts.push({
        productId,
        quantity,
        prix,
        titre: product.titre,
      });}

    // Create new order
    const newCommande = new commandeModel({
      client,
      products: validatedProducts,
      totalAmount,
    });

    const savedCommande = await newCommande.save();

    res.status(201).json(savedCommande);
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports.deleteCommande = async (req, res) => {
  try {
    //console.log(req.params.id);
    const { id } = req.params;
    //const id1 = req.params.id;
    const checkIfCommandeExists = await commandeModel.findById(id);
    if (!checkIfCommandeExists) {
      throw new Error("commande not found");
    }

    const commande = await commandeModel.findByIdAndDelete(id);
    res.status(200).json({ commande });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.updateCommande = async (req, res) => {
  try {
    console.log(req.body);
    const { quantity, price, name, email, phone, address, client, products } =
      req.body;

    const checkIfCommandeExists = await commandeModel.findById(id);
    if (!checkIfCommandeExists) {
      throw new Error("commande not found");
    }
    const updateCommande = await commandeModel.findByIdAndUpdate(
      id,
      {
        $set: { nom },
      },
      { new: true }
    );
    res.status(200).json({ updateCommande });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.triCommande = async (req, res) => {
  try {
    const commandeListe = await commandeModel.find().sort();
    res.status(200).json({ commandeList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
