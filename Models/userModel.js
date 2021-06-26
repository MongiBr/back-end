const mongoose =require('mongoose');
//The function trim returns the string without white spaces
let mongooseHidden = require('mongoose-hidden')()
const bcrypt = require('bcrypt')



const userSchema = new mongoose.Schema({

    Nom:{
        type:String,
        required:true,
        trim:true
    },
    Prenom :{
        type:String,
        required:true,
        trim:true
        
    },
    test : {
      type  :String, 
      
      trim:true,
      hide:true,
      hideJSON: true 
    },
    Nom_utilisateur:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    etat: {
        type: [{
        type: String,
        required:true , 
        enum: ['Utilisateur', 'Expert', 'Administrateur']
        }],
        default: ['Utilisateur']
    }, 
   

    
    dateInscription : { 
    type : Date,
    default : Date.now },
    
    

   
    // cryptage
    Mot_de_passe:{   /* controle*/ 
        type:String,
        required:true,
        trim:true,
      
    },
    
    Photo_profile:{
        type:String,
        required:false,
        trim :true , 
        
    },

  
    Genre: {
        type:[{
            type: String,                                                                       
            enum: ['Homme','Femme'],
           required:true, 
        }],
      
       
    },
    Email:{
        type:String,
        required:true,
        trim:true,
       
    },
    Numero_telephone:{
        type:String,
        required:true,
        trim:true
    },
    
    })
   
  
    
  /*  userSchema.pre('save',function(next) {
        if (!this.isModified('Mot_de_passe'))
            return next()
        bcrypt.hash(this.Mot_de_passe,10,(err,passwordHash)=> {
            if (err)
                return next(err)
            this.Mot_de_passe=passwordHash
            next() ; 
        }); 
    }) ; 
    */
   /* userSchema.methods.Mot_de_passe.compare= function(Mot_de_passe,cb) {
        bcrypt.compare(Mot_de_passe,this.Mot_de_passe,(err,isMatch)=>{
            if (err)
                return cb(err)
            else {
            if (!isMatch)
            return cb(null,isMatch); 
            return cb(null,this)}
        })
    }
    */
    userSchema.plugin(mongooseHidden, { hidden: { _id: false , test: true } })
    
  /*adresse*/ 


module.exports=mongoose.model('User',userSchema);