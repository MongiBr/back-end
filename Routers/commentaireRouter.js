const express= require('express');
const router=express.Router();
const CommentaireController = require('../Controllers/commentaireController');

//* AJOUTER COMMENTAIRE*/
router.post('/add',CommentaireController.ajouterCommentaire);// ca marche 

//* AFFICHER LES COMMENTAIRES*/
router.get('/afficher',CommentaireController.afficherCommentaire); //ca marche

//* SUPPRESSION D4UN COMMENTAIRE */
router.delete('/delete/:id',CommentaireController.supprimerCommentaire); // ca marche 

//* SUPPRESSION DE TOUS LES COMMENTAIRES D4UNE ANNONCE
router.delete('/supprimer',CommentaireController.Supprimer); // ca marche

//* MISE A JOUR D'UN COMMENTAIRE */
router.put('/update/:id',CommentaireController.UpdateCommentaire);// ca marche 


module.exports= router;
