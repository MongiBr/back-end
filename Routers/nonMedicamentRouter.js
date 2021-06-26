const express = require('express');
const router = express.Router();
const nomedicament = require('../Controllers/nonmedicamentController');





//* AJOUTER MEDICAMENT */
router.post('/ajouter', nomedicament.ajouterTypeNonmedicament);
//* AFFICHER LES MEDICAMENTS */
router.get('/afficherNM', nomedicament.afficherTypeNonmedicament);
router.get('/afficher', nomedicament.afficher);
// ca marche 

//* SUPPRESSION  MEDICAMENTS */
router.delete('/supprimer/:id', nomedicament.supprimerTypeNonmedicament);// ca marche

//* SUPPRESSION TOUS LES MEDICAMENTSs*/
router.delete('/supprimer', nomedicament.Supprimer); // ca marche

//* MISE A JOUR MEDICAMENT */
router.put('/modifier/:id', nomedicament.modifierTypeNonmedicament); // ca marche 

module.exports = router;
