
const cat =require('../Models/Categorie')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterCategorie: function(req,res){
        const cat1 = new cat(
    
            {  
                nom:req.body.nom, 
                description:req.body.description

            }
        )
        cat1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'catégorie ajouter'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficherCategorie: (req,res) =>{
        cat.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimerCategorie: (req,res)=>{
        cat.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierCategorie: function(req,res){
        cat.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                nom:req.body.nom, 
                description:req.body.description
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