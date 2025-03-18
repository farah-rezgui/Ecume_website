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