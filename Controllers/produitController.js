
const prod =require('../Models/PrduitModel')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterProduit: function(req,res){
        const prod1 = new prod(
    
            {  
                Nom:req.body.Nom
            }
        )
        prod1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'produit ajouter'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficherProduit: (req,res) =>{
        prod.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimerProduit: (req,res)=>{
        prod.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },

    Supprimer: (req,res) =>{
        prod.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierProduit: function(req,res){
        prod.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
               
                Nom:req.body.Nom
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