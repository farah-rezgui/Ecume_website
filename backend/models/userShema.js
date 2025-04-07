const mongoose = require('mongoose');
const userSchema = new mongoose.Schema ({
    nom : { type : String , required : true },
    prenom : String ,
    email : {type : String , required : true  , unique : true },
    etat : {type: Boolean},

}, {timestamps : true});


const user = mongoose.model("user", userSchema);
module.exports = user;