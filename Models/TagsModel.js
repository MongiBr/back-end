const mongoose =require('mongoose');
const Tags = new mongoose.Schema({

   
    Contenu : {
        type:String,
        required:true,
        trim:true
    },

    
})
module.exports= mongoose.model("Tags",Tags)