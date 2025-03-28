const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema ({
    nom : { type : String , required : true },
    prenom : String ,
    email : {type : String , required : true  , unique : true },
    etat : {type: Boolean},
    adresse : String,
    numero: Number,
    codePostal : Number,
}, {timestamps : true});


const client = mongoose.model("client", clientSchema);
module.exports = client;