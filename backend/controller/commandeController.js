const commandeModel = require ('../models/commandeShema');
const { message } = require('./usersController');

module.exports.getAllCommande = async (req , res) =>{
    try {
        const commandeListe = await commandeModel.find();
        res.status(200).json({commandeListe})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.getCommandeById = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const commande = await commandeModel.findById(id);
        res.status(200).json({commande})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.addCommande = async (req , res) =>{
    try {
        console.log(req.body);
        const { quantity, price , name , email, phone , address ,client , products , totalAmount,status , createdAt} = req.body;
        const commande = new commandeModel({ quantity, price , name , email, phone , address ,client , products , totalAmount,status , createdAt});
        const commandeAdded = await commande.save()
        res.status(200).json({commandeAdded});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.deleteCommande = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const checkIfCommandeExists =await commandeModel.findById(id);
        if (!checkIfCommandeExists ){
            throw new Error ("commande not found");
        }
        
        const commande = await commandeModel.findByIdAndDelete(id);
        res.status(200).json({commande})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.updateCommande = async (req , res) =>{
    try {
        console.log(req.body);
        const { quantity, price , name , email, phone , address ,client , products} = req.body;

        const checkIfCommandeExists =await commandeModel.findById(id);
        if (!checkIfCommandeExists ){
            throw new Error ("commande not found");
        }
        const updateCommande = await commandeModel.findByIdAndUpdate(id ,{
            $set : {nom ,}
        },{new : true}
    )
        res.status(200).json({updateCommande});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.triCommande = async ( req , res ) => {
    try{
        const commandeListe = await commandeModel.find().sort();
        res.status(200).json({commandeList});
    } catch (error){
        res.status(500).json({message: error.message});
    }
};