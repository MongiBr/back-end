const mongoose =require('mongoose');

const categorie = new mongoose.Schema({
    

    nom:{
        type:String,
        required:true,
        trim:true
    },
     
    description :{
        type:String , 
        required:false,
        trim : true 

    }


})

module.exports= mongoose.model("catégorie",categorie) ; 