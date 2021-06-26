const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const user = require('./userModel');
const expertSchema = user.discriminator('Expert',new mongoose.Schema ({

    dateInscription : { 
        type : Date,
        default : Date.now
    },

      
     job: {
        type :String , 
        required:false,
    }
    })
);

module.exports=expertSchema;

