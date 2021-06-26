const express= require('express');
const router=express.Router();
const ExpertController = require('../Controllers/expertController');

//* AJOUTER EXPERT*/
router.post('/ajouter',ExpertController.ajouterExpert);// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',ExpertController.afficherExpert); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/supprimer/:id',ExpertController.supprimerExpert); // ca marche 

//* SUPPRESSION DE TOUTE LA LISTE DES EXPERTS */
router.delete('/supprimer',ExpertController.Supprimer); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/modifier/:id',ExpertController.UpdateExpert);// ca marche 

module.exports= router;
