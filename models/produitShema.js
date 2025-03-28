const mongoose = require('mongoose');
const produitSchema = new mongoose.Schema ({
    titre : { type : String , required : true },
    discription : String ,
    image : String,
    prix: String,
}, {timestamps : true});


const produit = mongoose.model("produit", produitSchema);
module.exports = produit;