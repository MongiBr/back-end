const mongoose =require('mongoose');
const annonce= require('./AnnonceModal');
const NonMedicament= annonce.discriminator('NonMedicament',new mongoose.Schema ({    
  

    userId:{
        type : String , 
        required:false, 
        trim :true
    },
    userName: {
        type :String , 
        required: false, 
        trim:true
    },

    TypeNonmedicament: {
        type: [{
        type: String,
        required:true , 
        enum: ['mobilier medicale', 'Soin et Pansement', 'Protection','Autre']
        }],

    }


  
})
)
    


module.exports=NonMedicament;