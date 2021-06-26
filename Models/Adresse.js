const mongoose =require('mongoose');
//The function trim returns the string without white spaces

const Adresse = new mongoose.Schema ({
    

    Gouvernorat: { 
        type : String ,
        required: true, 
        trim :true, 
    },

    Ville: {
        type :String , 
        required :true , 
        trim :true ,
    },

    Code_postale: {
        type :String , 
        required :true , 
        trim :true,
    },
    pays: {
        type :String , 
        required : true, 
        trim :true,
    }


})


module.exports= mongoose.model("Adresse",Adresse)