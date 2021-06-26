
const tag =require('../Models/TagsModel')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterTag: function(req,res){
        const tag1 = new tag (
    
            {  
                Contenu:req.body.Contenu
            }
        )
        tag1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'tags ajouter'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    affichertag: (req,res) =>{
        tag.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimertag: (req,res)=>{
        tag.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierTag: function(req,res){
        tag.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                Contenu:req.body.Contenu
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