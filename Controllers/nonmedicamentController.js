
const Nm = require('../Models/Nonmedicament')
const _ = require('lodash')
module.exports = {

    //** AJOUT D'UNE RECLAMATION **/
    ajouterTypeNonmedicament: function (req, res) {
        
      
        const Nm1 = new Nm(
            {
                Titre: req.body.Titre,
                Ville: req.body.Ville,
                Prix: req.body.Prix,
                Description: req.body.Description,
                Gouvernorat: req.body.Gouvernorat,
                Date_Annonce: req.body.Date_Annonce,
                Etat1Anononce: req.body.Etat1Anononce,
                Etat2Anononce: req.body.Etat2Anononce,
                TypeAnnonce: req.body.TypeAnnonce,
                Tags: req.body.Tags,
                Catégorie: req.body.Catégorie,
                TypeNonmedicament: req.body.TypeNonmedicament,
                userId: req.body.userId,
                userName: req.body.userName,
                images: req.body.images,
                
                Photo_annonce: req.body.Photo_annonce,
            }
        )
         console.log('img : ',req.body.images)
        Nm1.save(function (err) {
            if (err) {
                res.json({ state: 'erreuuur', msg: 'error' + err })
                console.log('erreur' + err);

            } else {
                res.json({ state: 'ok', msg: 'NonMedicament ajouter' });
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficher: (req, res) => {
        Nm.find({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },
    afficherTypeNonmedicament: (req, res) => {
        Nm.find({ TypeNonmedicament: req.body.TypeNonmedicament }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },


    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimerTypeNonmedicament: (req, res) => {
        Nm.findOneAndRemove({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json({ state: 'ok', msg: 'done' })
            }
        }
        )
    },

    Supprimer: (req, res) => {
        Nm.remove({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierTypeNonmedicament: function (req, res) {
        Nm.updateOne(
            {
                _id: req.params.id
            }, {
            $set: req.body
        },
            {
                Titre: req.body.Titre,
                Ville: req.body.Ville,
                Prix: req.body.Prix,
                Description: req.body.Description,
                Gouvernorat: req.body.Gouvernorat,
                Photo_annonce: req.body.annonce_picture,
                Date_Annonce: req.body.Date_Annonce,
                Etat1Anononce: req.body.Etat1Anononce,
                Etat2Anononce: req.body.Etat2Anononce,
                TypeAnnonce: req.body.TypeAnnonce,
                Tags: req.body.Tags,
                Produit: req.body.Produit,
                Catégorie: req.body.Catégorie,
                TypeNonmedicament: req.body.TypeNonmedicament,
                userId: req.body.userId,
                userName: req.body.userName,
                images: req.body.Images,
            },
            function (err, list) {
                if (err) {
                    res.json({ state: 'no', msg: 'error' + err })
                } else {
                    res.json({ state: 'ok', msg: 'done' })
                }
            }
        )
    }
}