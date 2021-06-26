const mongoose =require('mongoose');

const commentaireAnnonceSchema = new mongoose.Schema({

    contenu : { type : String},

    date : { type : Date, default : Date.now }
  })

  
  module.exports=mongoose.model('Commentaire',commentaireAnnonceSchema);
