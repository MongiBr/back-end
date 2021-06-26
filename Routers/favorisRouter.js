const express = require('express');
const router = express.Router();
const fav = require('../Controllers/favouriteController');
//////////////////////////////////***********DONE********************************** */

router.post('/ajouter', fav.ajouterFavoris);// ca marche 

router.get('/afficher', fav.afficherFavoris); //ca marche

router.delete('/supprimer/:id', fav.supprimerFavoris); // ca marche 

router.put('/modifier/:id', fav.modifierFavoris);// ca marche 

module.exports = router;
