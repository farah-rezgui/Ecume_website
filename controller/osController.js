const os = require ('os');
const { message } = require('./usersController');
const { error } = require('console');

module.exports.getOsInformation = (req,res)=>{
    try{
        const osInformation ={
            hostname: os.hostname(),
            type: os.type(),
            platform:os.platform(),
        }
        res.status(200).json(osInformation);

    }catch(error){
        res.status(500).json({message:error.message});
    }
} 

