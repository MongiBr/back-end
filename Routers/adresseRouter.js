const express= require('express');
const router=express.Router();
const AdressController = require('../Controllers/adresseController');
//////////////////////////////////***********DONE********************************** */
//* AJOUTER ADRESSE*/
router.post('/ajouter',AdressController.ajouterAdresse);// ca marche 

//* AFFICHER ADRESSE*/
router.get('/afficher',AdressController.afficheradresse); //ca marche

//* SUPPRESSION ADRESSE */
router.delete('/supprimer/:id',AdressController.supprimerAdresse); // ca marche 


//* MISE A JOUR D'UNE ADRESSE */
router.put('/modifier/:id',AdressController.modifierAdresse);// ca marche 

module.exports= router;
