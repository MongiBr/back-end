const express = require('express');

const router = express.Router();
const Ordonnance = require('../Controllers/formulaireOrdonnance');

//////////////////////////////************************* DONE********************************************** */

/* AJOUTER EXPERT*/
router.post('/ajouter',  Ordonnance.AjouterOrdonnance)

//* AFFICHER LES ADMINS*/
router.get('/afficher', Ordonnance.afficherOrdonnance); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/delete/:id', Ordonnance.supprimerOrdonnance); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/update/:id', Ordonnance.UpdateOrdonnance);// ca marche 

module.exports = router;
