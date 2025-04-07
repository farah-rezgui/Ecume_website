const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
{
    username: {
    
    type: String,
    required: true,
    unique: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
    type: String,
    required: true,
    minLength: 8,
    match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
    ],
    },
},
{ timestamps: true }
);

// Comparer les mots de passe
userSchema.methods.matchPassword = async function (enteredPassword) {
return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware pour hacher le mot de passe
userSchema.pre("save", async function (next) {
if (!this.isModified("password")) {
    return next();
}
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
