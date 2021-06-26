
const admin = require('../Models/AdminModel')

module.exports={

    //** AJOUT D'UN ADMIN **/
    ajouterAdmin: function(req,res){
        const admin1 = new admin(

            {  
                dateInscription:req.body.dateInscription,   
                Nom:req.body.Nom,
                Prenom:req.body.Prenom,
                Nom_utilisateur:req.body.Nom_utilisateur,
                Mot_de_passe:req.body.Mot_de_passe,
                Photo_profile:req.body.Photo_profile,
                Genre:req.body.Genre,
                Email:req.body.Email,
                Numero_telephone:req.body.Numero_telephone,
                etat:req.body.etat
            }
        )
        admin1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'admin ajouter'})
            }
        })
    },
    
 
    //** AFFICHAGE D'UN ADMIN **/
    afficherAdmin: (req,res) =>{
        admin.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    //** SUPPRESSION D'UN ADMIN **/
    supprimerAdmin: (req,res)=>{
        admin.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

    //** SUPPRESSION de toute la liste */
    Supprimer: (req,res) =>{
        admin.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

    //** MISE A JOUR D'UN ADMIN **/
    UpdateAdmin : function(req,res){
        admin.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                Nom:req.body.Nom,
                Prenom:req.body.Prenom,
                Nom_utilisateur:req.body.Nom_utilisateur,
                Mot_de_passe:req.body.Mot_de_passe,
                Photo_profile:req.body.Photo_profile,
                Genre:req.body.Genre,
                Email:req.body.Email,
                Numero_telephone:req.body.Numero_telephone, 
                etat:req.body.etat
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                }
            }
        )
    } 
 }