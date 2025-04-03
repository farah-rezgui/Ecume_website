const clientModel = require ('../models/clientShema');
const { message } = require('./usersController');

module.exports.getAllClient = async (req , res) =>{
    try {
        const clientList = await clientModel.find();
        res.status(200).json({clientList})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.getClenitById = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const client = await clientModel.findById(id);
        res.status(200).json({client})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.addClient = async (req , res) =>{
    try {
        console.log(req.body);
        const {nom , prenom ,  email ,adresse ,numero ,codePostal} = req.body;
        const client = new clientAddedModel({nom , prenom , email ,adresse ,numero ,codePostal });
        const clientAdded = await client.save()
        res.status(200).json({clientAdded});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.deleteClient = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const checkIfClientExists =await clientModel.findById(id);
        if (!checkIfClientExists ){
            throw new Error ("client not found");
        }
        
        const client = await clientModel.findByIdAndDelete(id);
        res.status(200).json({client})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.updateClient = async (req , res) =>{
    try {
        console.log(req.body);
        const {nom , prenom , email  ,adresse ,numero ,codePostal} = req.body;

        const checkIfClientExists =await clientModel.findById(id);
        if (!checkIfClientExists ){
            throw new Error ("client not found");
        }
        const updateClient = await clientModel.findByIdAndUpdate(id ,{
            $set : {nom ,}
        },{new : true}
    )
        res.status(200).json({updateClient});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.triClient = async ( req , res ) => {
    try{
        const clientListe = await clientModel.find().sort();
        res.status(200).json({clientList});
    } catch (error){
        res.status(500).json({message: error.message});
    }
};