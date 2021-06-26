const express= require('express');
const router =express.Router()
const cat = require('../Controllers/categorieController');
//////////////////////////////////***********DONE********************************** */
//* AJOUTER ADRESSE*/
router.post('/ajouter',cat.ajouterCategorie);// ca marche 

//* AFFICHER ADRESSE*/
router.get('/afficher',cat.afficherCategorie); //ca marche

//* SUPPRESSION ADRESSE */
router.delete('/supprimer/:id',cat.supprimerCategorie); // ca marche 


//* MISE A JOUR D'UNE ADRESSE */
router.put('/modifier/:id',cat.modifierCategorie);// ca marche 

module.exports= router;
