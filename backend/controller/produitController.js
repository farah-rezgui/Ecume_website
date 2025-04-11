const produitModel = require ('../models/produitShema');

module.exports.getAllProduit = async (req , res) =>{
    try {
        const produitList = await produitModel.find();
        res.status(200).json({produitList})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.getProduitById = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const produit = await produitModel.findById(id);
        res.status(200).json({produit})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.addProduit = async (req , res) =>{
        try {
            const { titre, description, prix, quantityStock } = req.body;
            const imagePath = req.file ? req.file.path : null; // récupère le chemin du fichier
        
            const produit = new produitModel({
            titre,
            description,
            prix,
            quantityStock,
            image: imagePath,
            });
        
            const savedProduit = await produit.save();
            res.status(200).json(savedProduit);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        };
module.exports.deleteProduit = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const checkIfProduitExists =await produitModel.findById(id);
        if (!checkIfProduitExists ){
            throw new Error ("Produit not found");
        }
        
        const produit = await produitModel.findByIdAndDelete(id);
        res.status(200).json({produit})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.updateProduit = async (req , res) =>{
    try {
        console.log(req.body);
        const {titre ,description ,image ,prix , quantityStock} = req.body;

        const checkIfProduitExists =await produitModel.findById(id);
        if (!checkIfProduitExists ){
            throw new Error ("Produit not found");
        }
        const updateProduit = await produitModel.findByIdAndUpdate(id ,{
            $set : {titre ,description ,image ,prix , quantityStock}
        },{new : true}
    )
        res.status(200).json({updateProduit});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.triProduit = async ( req , res ) => {
    try{
        const produitList = await produitModel.find().sort();
        res.status(200).json({produitList});
    } catch (error){
        res.status(500).json({message: error.message});
    }
};