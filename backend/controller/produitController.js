const produitModel = require("../models/produitShema");

module.exports.getAllProduit = async (req, res) => {
try {
    const produitList = await produitModel.find();
    res.status(200).json({ produitList });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

module.exports.getProduitById = async (req, res) => {
try {
    const { id } = req.params;
    const produit = await produitModel.findById(id);
    if (!produit) {
    return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ produit });
    } catch (error) {
    res.status(500).json({ message: error.message });
}
};

module.exports.addProduit = async (req, res) => {
try {
    const { titre, description, prix, quantityStock } = req.body;
    const imagePath = req.file ? "/uploads/" + req.file.originalname : null;

    const produit = new produitModel({
    titre,
    description,
    prix: Number(prix),
    quantityStock: Number(quantityStock),
    image: imagePath,
    });

    const savedProduit = await produit.save();
    res.status(201).json(savedProduit);
    } catch (error) {
    res.status(500).json({ message: error.message });
}
};

module.exports.deleteProduit = async (req, res) => {
try {
    const { id } = req.params;
    const checkIfProduitExists = await produitModel.findById(id);
    if (!checkIfProduitExists) {
    return res.status(404).json({ message: "Produit not found" });
    }

    const produit = await produitModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Produit supprimé avec succès", produit });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

module.exports.updateProduit = async (req, res) => {
    try {
    const { id } = req.params;
    const { titre, description, prix, quantityStock } = req.body;

      // Handle multiple files
    let imagePaths = [];
    if (req.files && req.files.length > 0) {
        imagePaths = req.files.map(file => "/uploads/" + file.originalname);
    }

    const produit = await produitModel.findById(id);
    if (!produit) {
        return res.status(404).json({ message: "Produit not found" });
    }
    produit.titre = titre;
    produit.description = description;
    produit.prix = prix;
    produit.quantityStock = quantityStock;
    
    // Only update image if new files were uploaded
    if (imagePaths.length > 0) {
      produit.image = imagePaths[0]; // or store all paths if you want multiple images
    }

    await produit.save();

    res.status(200).json({ produit });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};
module.exports.triProduit = async (req, res) => {
try {
    const { sortBy = "createdAt", order = "desc" } = req.query;
    const sortOrder = order === "asc" ? 1 : -1;

    // Create a sorting object
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder;

    const produitList = await produitModel.find().sort(sortOptions);
    res.status(200).json({ produitList });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};