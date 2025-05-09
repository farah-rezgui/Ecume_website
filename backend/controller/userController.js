const userModel = require ('../models/userSchema');

module.exports.getAllUser = async (req , res) =>{
    try {
        const userList = await userModel.find();
        res.status(200).json({userList})
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
module.exports.addUser = async (req , res) =>{
    try {
        console.log(req.body);
        const {username , email ,password  } = req.body;
        const user = new userModel({username ,email ,password  });
        const userAdded = await user.save()
        res.status(200).json({userAdded});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.deleteUser = async (req , res) =>{
    try {
        console.log(">>> SUPPRESSION utilisateur ID:", req.params.id);
        //console.log(req.params.id);
        const {id} = req.params;
        //const id1 = req.params.id;
        const checkIfUserExists =await userModel.findById(id);
        if (!checkIfUserExists ){
            throw new Error ("user not found");
        }
        
        const user = await userModel.findByIdAndDelete(id);
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.updateUser = async (req , res) =>{
    try {
        const {id} = req.params;
        //console.log(req.body);
        const {username , email } = req.body;
        const checkIfUserExists =await userModel.findById(id);
        if (!checkIfUserExists ){
            throw new Error ("user not found");
        }
        const updateUser = await userModel.findByIdAndUpdate(id ,{
            $set : {username  , email}
        },{new : true}
    )
        res.status(200).json({updateUser});
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};
module.exports.triUser = async ( req , res ) => {
    try{
        const userList = await userModel.find().sort({username:1});
        res.status(200).json({userList});
    } catch (error){
        res.status(500).json({message: error.message});
    }
};