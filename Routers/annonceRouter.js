const express = require('express');
const router = express.Router();

const annonceController = require('../Controllers/annonceController');



//* AJOUTER ANNONCE */
router.post('/ajouter',  annonceController.ajouterAnnonce); // ca marche

//* AFFICHER ANNONCE*/
router.get('/afficher', annonceController.afficherAnnonce);// ca marche 

//* SUPPRESSION ANNONCE */
router.delete('/supprimer/:id', annonceController.supprimerAnnonce);// ca marche

//* MISE A JOUR ANNONCE */
router.put('/modifier/:id', annonceController.UpdateAnnonce); // ca marche 

router.get('/afficherTitre', annonceController.afficherAnnonceTiltle); // ca marche 
module.exports = router;
