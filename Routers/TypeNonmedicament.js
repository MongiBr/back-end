const express= require('express');
const router=express.Router();
const NM = require('../Controllers/nonmedicamentController');

//* AJOUTER EXPERT*/
router.post('/ajouter',NM.ajouterTypeNonmedicament);
// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',NM.modifierTypeNonmedicament); 
//ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/supprimer/:id',NM.supprimerTypeNonmedicament);
// ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/modifier/:id',NM.modifierTypeNonmedicament);
// ca marche 
module.exports= router;
