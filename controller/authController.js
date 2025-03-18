const userModel = require ('../models/userSchema');
const { message } = require('./usersController');

module.exports.getAllUsers = async (req , res) =>{
    try {
        const usersList = await userModel.find();
        res.status(200).json({usersList})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
}
module.exports.addUserClient = async (req , res) =>{
    try {
        console.log(req.body);
        const {nom , prenom , email , password} = req.body;
        const role = "client";
        const user = new userModel({nom, prenom , email , password , role });
        const userAdded = await user.save()
        res.status(200).json({userAdded});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
}
module.exports.addUserAdmin = async (req , res) =>{
    try {
        console.log(req.body);
        const {nom , prenom , email , password} = req.body;
        const role = "admin";
        
        res.status(200).json({usersList})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
}