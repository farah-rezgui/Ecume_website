const userModel = require ('../models/userSchema');
const { message } = require('./usersController');

module.exports.getAllUsers = async (req , res) =>{
    try {
        const usersList = await userModel.find();
        res.status(200).json({usersList})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.getUserById = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const user = await userModel.findById(id);
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.addUserAdmin = async (req , res) =>{
    try {
        console.log(req.body);
        const {nom , prenom , email , password ,adresse ,numero ,codePostal} = req.body;
        const user = new userModel({nom, prenom , email , password,adresse ,numero ,codePostal});
        const userAdded = await user.save()
        res.status(200).json({userAdded});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.deleteUser = async (req , res) =>{
    try {
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const checkIfUserExists =await userModel.findById(id);
        if (!checkIfUserExists ){
            throw new Error ("User not found");
        }
        
        const user = await userModel.findByIdAndDelete(id);
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.updateUser = async (req , res) =>{
    try {
        console.log(req.body);
        const {nom , prenom , adresse ,numero ,codePostal } = req.body;

        const checkIfUserExists =await userModel.findById(id);
        if (!checkIfUserExists ){
            throw new Error ("User not found");
        }
        const updateUser = await userModel.findByIdAndUpdate(id ,{
            $set : {nom,prenom,adresse ,numero ,codePostal}
        },{new : true}
    )
        res.status(200).json({updateUser});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.triUsers = async ( req , res ) => {
    try{
        const usersListe = await userModel.find().sort();
        res.status(200).json({usersList});
    } catch (error){
        res.status(500).json({message: error.message});
    }
};