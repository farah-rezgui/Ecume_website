const mongoose = require('mongoose');
const bcrypt = require ("bcrypt");
const userSchema = new mongoose.schema ({
    nom : { type : string , required : true },
    prenom : String ,
    email : {type : string , required : true  , unique : tre },
    password : { type : string , required : true },
    rele : { type : string , enum : ['admin','client'] },
    etat : {type: Boolean},
}, {timestamps : true});

userSchema.pre('save', async function(req , res ,next) {
    try {
        const salt = await bcrypt.genSalt();
        const user = this ;
        user.password = await bcrypt.hash(user.password, salt);
        user.etat=false;
        next();
    } catch (err) {
        next(err);
    }
});

const user = mongoose.model("user", userSchema);
module.exports = user;