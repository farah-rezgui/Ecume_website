const mongoose = require('mongoose');

const userSchema = new mongoose.schema ({
    nom : { type : 'string' , required : true },
    prenom : String ,
    email : {type : ' string' , required : true  , unique : tre },
    password : { type : 'string' , required : true },
    rele : { type : 'string' , enum : ['admin','client'] },
}, {timestamps : true});
