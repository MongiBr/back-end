const express= require('express');
const router=express.Router();
const adminController = require('../Controllers/adminController');
/***********************************DONE*************************************** */
//* AJOUTER ADMIN */
router.post('/ajouter',adminController.ajouterAdmin); // ca marche 

//* AFFICHER LES ADMINS */
router.get('/afficher',adminController.afficherAdmin);// ca marche 

//* SUPPRESSION D'UN ADMIN */
router.delete('/supprimer/:id',adminController.supprimerAdmin);// ca marche

//* SUPPRESSION De toute la liste des admis*/
router.delete('/supprimer',adminController.Supprimer); // ca marche

//* MISE A JOUR D'UN ADMIN */
router.put('/modifier/:id',adminController.UpdateAdmin); // ca marche 

module.exports=router; 
