const express= require('express');
const router=express.Router();
const cors = require('cors');
const userController = require('../Controllers/userController');
const User = require('../Models/userModel');
/********************************DONE****************************************/
//get pour recuperer des donnes **AFFICHAGE DES UTILISATEURS**
router.get('/afficher',userController.listUser); //ca marche

//get pour recuperer des donnes **AFFICHAGE D'UN UTILISATEUR PAR SON ID**
router.get('/deconnexion',userController.Logout)// ca marche
router.get('/afficher/:id',userController.getbyid)
//** AFFICHER un utilisateur appartier de son nom  */
router.get('/afficherN',userController.afficherUser)
// **SUPPRESSION D'UN UTILISATEUR PAR SON ID**
router.delete('/supprimer/:id',userController.suprimerUser) //ca marche
//**SUPPRESSION DE TOUS LES UTILISATEURS */
router.delete('/Supprimer',userController.Supprimer)
// **MISE A JOUR D'UN UTILISATEUR PAR SON ID**
router.put('/modifier/:id',userController.UpdateUser)// ca marche
//post pour envoyer des donnes //**AJOUT D'UN UTILISATEUR **/
router.post('/ajouter',userController.addUser)
// ca marche 
// fil update fil postaman , zone body ,tekteb ela theb tebedlou 
// w fil lien /adduser wila /update/id
router.post('/authentification',userController.Auth)


module.exports=router;