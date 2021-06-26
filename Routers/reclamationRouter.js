const express= require('express');
const router=express.Router();
const ReclamationController = require('../Controllers/reclamationController');

//* AJOUTER RECLAMATION*/
router.post('/ajouter',ReclamationController.ajouterReclamation);// ca marche 

//* AFFICHER LES RECLAMATIONS*/
router.get('/afficher',ReclamationController.afficherReclamation); //ca marche

//* SUPPRESSION UNE RECLAMATION */
router.delete('/supprimer/:id',ReclamationController.supprimerReclamation); // ca marche 

//* MISE A JOUR D'UNE RECLAMATION */
router.put('/modifier/:id',ReclamationController.modifierReclamation);// ca marche 

module.exports= router;
