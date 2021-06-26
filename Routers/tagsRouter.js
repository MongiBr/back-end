const express= require('express');
const router=express.Router();
const tag = require('../Controllers/tagsController');
///////////////////////////////////////////////DONE//////////////////////////////////////////////
//* AJOUTER EXPERT*/
router.post('/ajouter',tag.ajouterTag);// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',tag.affichertag); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/supprimer/:id',tag.supprimertag); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/modifier/:id',tag.modifierTag);// ca marche 
module.exports= router;
