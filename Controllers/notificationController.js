
const notification =require('../Models/Notification')
module.exports={


        
    //** AJOUT D'UNE NOTIFICATION **/
    ajouterNotification: function(req,res){
        const notification1 = new notification(
    
            {  
                Titre:req.body.Title,
                Message:req.body.Description,
                Date:req.body.Date
            }
        )
        notification1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'Notification ajouter'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE NOTIFICATION **/
    afficherNotification: (req,res) =>{
        notification.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE NOTIFICATION **/
    supprimerNotification: (req,res)=>{
        notification.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },


    //** MISE A JOUR D'UNE NOTIFICATION**/
    UpdateNotification: function(req,res){
        notification.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                Titre:req.body.Title,
                Message:req.body.Description,
                Date:req.body.Date
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