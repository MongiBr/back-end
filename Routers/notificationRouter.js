const express= require('express');
const router=express.Router();
const NotificationController = require('../Controllers/notificationController');

//* AJOUTER NOTIFICATION*/
router.post('/add',NotificationController.ajouterNotification);// ca marche 

//* AFFICHER LES NOTIFICATIONS*/
router.get('/afficher',NotificationController.afficherNotification); //ca marche

//* SUPPRESSION UNE NOTIFICATION*/
router.delete('/delete/:id',NotificationController.supprimerNotification); // ca marche 

//* MISE A JOUR D'UNE NOTIFICATION */
router.put('/update/:id',NotificationController.UpdateNotification);// ca marche 

module.exports= router;
