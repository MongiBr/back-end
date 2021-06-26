const mongoose =require('mongoose');
const Produit = new mongoose.Schema({

   
    Nom: {
        type:String,
        required:true,
        trim:true
    },


    
})
module.exports=mongoose.model('Produit',Produit);