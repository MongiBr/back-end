
const commentaire =require('../Models/CommentaireAnnonce')
module.exports={


        
    //** AJOUT D'UN COMMENTAIRE **/
    ajouterCommentaire: function(req,res){
        const commentaire1 = new commentaire(
    
            {  
                contenu:req.body.contenu,
                date:req.body.date
            }
        )
        commentaire1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'Commentaire ajouter'})
            }
        }
        )
    },


    


    //** AFFICHAGE D'UN COMMENTAIRE A PARTIR **/
    afficherCommentaire: (req,res) =>{
        commentaire.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UN COMMENTAIRE **/
    supprimerCommentaire: (req,res)=>{
        commentaire.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      }
      )  
    },

   // SUPPRESSION DE TOUS LES COMMENTAIRE D'UNE ANNONCE

   Supprimer: (req,res)=>{
    commentaire.Remove({},(err,list)=>{
      if(err){
          res.json({state : 'no', msg :'error'+err})
      }else{
        res.json({state : 'ok',msg:'done'}) 
      }
  }
  )  
},

         
      
     
    

    
    //** MISE A JOUR D'UN COMMENTAIRE**/
    UpdateCommentaire: function(req,res){
        commentaire.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                
                contenu:req.body.contenu,
                date:req.body.date
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