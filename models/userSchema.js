const mongoose = require('mongoose');
const bcrypt = require ("bcrypt");
const userSchema = new mongoose.Schema ({
    nom : { type : String , required : true },
    prenom : String ,
    email : {type : String , required : true  , unique : true },
    password : { type : String , required : true },
    etat : {type: Boolean},
}, {timestamps : true});

userSchema.post('save',  function(req , res ,next){
    console.log("new user was created & saved successfully");
    next();
});

userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt();
        const user = this ;
        user.password = await bcrypt.hash(user.password, salt);
        user.etat =false;
        next();
    } catch (err) {
        next(err);
    }
});

const user = mongoose.model("user", userSchema);
module.exports = user;