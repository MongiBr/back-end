
const Medicament =require('../Models/Medicament')
const validate=require('../Models/Medicament')
const FormulaireOrdonnance = require('../Models/FormulaireOrdonnance')
module.exports={

    //** AJOUT D'UN ADMIN **/
    ajouterMedicament: function(req,res){
        // First Validate The Request
        const { error } = validate(req.body);
        if (error) 
        {
        return res.status(400).send(error.details[0].message);
        }
       
        const Medicament1 = new Medicament(
                
            {  
                
                Titre:req.body.Titre,
                Ville:req.body.Ville,
                Prix:req.body.Prix,
                Description:req.body.Description,
                Gouvernorat:req.body.Gouvernorat,
                Photo_annonce:req.body.annonce_picture,
                Date_Annonce:req.body.Date_Annonce,
                Etat1Anononce:req.body.Etat1Anononce,
                Etat2Anononce:req.body.Etat2Anononce,
                TypeAnnonce:req.body.TypeAnnonce, 
                images:req.body.images, 
                Tags:req.body.Tags,
                Catégorie:req.body.Catégorie, 
                Dosage:req.body.Dosage , 
                DateFabrication:req.body.DateFabrication,
                DateExpiration:req.body.DateExpiration, 
                FormulaireOrdonnance:req.body.FormulaireOrdonnance,
                userId:req.body.userId,
                userName:req.body.userName
             
            }
        )
        Medicament1.save(function(err){
            
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'medicament ajouter'})
            }
            
                
                
            
        })


        
    },
    
 
    //** AFFICHAGE D'UN ADMIN **/
    afficherMedicament: (req,res) =>{
        Medicament.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    //** SUPPRESSION D'UN ADMIN **/
    supprimerMedicament: (req,res)=>{
        Medicament.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

    //** SUPPRESSION de toute la liste */
    Supprimer: (req,res) =>{
        Medicament.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

    //** MISE A JOUR D'UN ADMIN **/
    UpdateMedicament: function(req,res){
        Medicament.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                Titre:req.body.Titre,
                Ville:req.body.Ville,
                Prix:req.body.Prix,
                Description:req.body.Description,
                Gouvernorat:req.body.Gouvernorat,
                Photo_annonce:req.body.annonce_picture,
                Date_Annonce:req.body.Date_Annonce,
                Etat1Anononce:req.body.Etat1Anononce,
                Etat2Anononce:req.body.Etat2Anononce,
                TypeAnnonce:req.body.TypeAnnonce, 
                images:req.body.images, 
                Tags:req.body.Tags,
                Catégorie:req.body.Catégorie, 
                Dosage:req.body.Dosage , 
                DateFabrication:req.body.DateFabrication,
                DateExpiration:req.body.DateExpiration,
                userId:req.body.userId,
                userName:req.body.userName
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