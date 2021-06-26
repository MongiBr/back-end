const express= require('express');
const router=express.Router();
const prod = require('../Controllers/produitController');

//* AJOUTER PRODUIT*/
router.post('/ajouter',prod.ajouterProduit);// ca marche 

//* AFFICHER LES PRODUITS*/
router.get('/afficher',prod.afficherProduit); //ca marche

//* SUPPRESSION LES PRODUITS */
router.delete('/supprimer/:id',prod.supprimerProduit);
router.delete('/supprimer',prod.Supprimer); // ca marche 

//* MISE A JOUR D'UN PRODUIT*/
router.put('/modifier/:id',prod.modifierProduit);// ca marche 
module.exports= router;
