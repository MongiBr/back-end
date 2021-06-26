
const Adresse = require('../Models/Adresse')
module.exports={



      //** AJOUT D'UNE ADRESSE **/
      ajouterAdresse: function(req,res){
        const adresse1 = new Adresse(

            {   
                Gouvernorat:req.body.Gouvernorat,
                Ville:req.body.Ville, 
                Code_postale:req.body.Code_postale,
                pays:req.body.pays 
            }
        )
        adresse1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('yooooooooooooooooooooooo' +err);
            }
            else{
                res.json({state:'ok',msg:'adresse ajouté'})
            }
        })
    },


    //** AFFICHAGE D'UNE ADRESSE **/
    afficheradresse: (req,res) =>{
        Adresse.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
  

   
    //** SUPPRESSION D'UNE ADRESSE **/
    supprimerAdresse: (req,res)=>{
        Adresse.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    //**SUPPRESSION DE TOUTE LES ADRESSE */
    Supprimer: (req,res) =>{
        Adresse.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

    //** MISE A JOUR D'UNE ADRESSE**/
    modifierAdresse: function(req,res){
        Adresse.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                Gouvernorat:req.body.Gouvernorat, 
                Ville:req.body.Ville, 
                Code_postale:req.body.Code_postale,
                Pays:req.body.Pays 
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