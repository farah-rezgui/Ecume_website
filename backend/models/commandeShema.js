const mongoose = require('mongoose');
const commandeSchema = new mongoose.Schema ({
    titre : String,
    listeDeProduit : String ,
}, {timestamps : true});


const commande = mongoose.model("commande", commandeSchema);
module.exports = commande;
