const express= require('express');
const router=express.Router();
const medicament =require('../Controllers/medicamentController');

//* AJOUTER MEDICAMENT */
router.post('/ajouter',medicament.ajouterMedicament); // ca marche 

//* AFFICHER LES MEDICAMENTS */
router.get('/afficher',medicament.afficherMedicament);// ca marche 

//* SUPPRESSION  MEDICAMENTS */
router.delete('/supprimer/:id',medicament.supprimerMedicament);// ca marche

//* SUPPRESSION TOUS LES MEDICAMENTSs*/
router.delete('/supprimer',medicament.Supprimer); // ca marche

//* MISE A JOUR MEDICAMENT */
router.put('/modifier/:id',medicament.UpdateMedicament); // ca marche 

module.exports= router;
