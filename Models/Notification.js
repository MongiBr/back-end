const mongoose =require('mongoose');
const notification = new mongoose.Schema({

   
    Titre: {
        type:String,
        required:true,
        trim:true

    },


    Message:  {
        type:String,
        required:true,
        trim:true

    },


    Date: {
        type:Date ,
        default : Date.now

    }
})
module.exports=notification;