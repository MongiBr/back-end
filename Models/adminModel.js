const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const user= require('./userModel');
const adminSchema = user.discriminator('Admin',new mongoose.Schema ({
    

    dateInscription : { 
        type : Date,
        default : Date.now }
    })
);

module.exports=adminSchema;