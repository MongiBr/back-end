
const ord = require('../Models/FormulaireOrdonnance')
const fs = require("fs");
const path = require('path');

module.exports = {



    //** AJOUT D'UNE NOTIFICATION **/
    AjouterOrdonnance: function (req, res) {
        const ord1 = new ord(
            {
                contenu: req.file.originalname,
                expediteur: req.body.expediteur,
                destinataire: req.body.destinataire,
                Idannonce: req.body.Idannonce,
                approuved: req.body.approuved
            }
        )

        ord1.save(function (err) {
            if (err) {
                res.json({ state: 'erreuuur', msg: 'error' + err })
                console.log('erreur' + err);

            } else {
                res.json({ state: 'ok', msg: 'La Formulaire est Remplie' })
            }
        }
        )
    },

    //** AFFICHAGE D'UNE NOTIFICATION **/
    afficherOrdonnance: (req, res) => {
        ord.find({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },


    //** SUPPRESSION D'UNE NOTIFICATION **/
    supprimerOrdonnance: (req, res) => {
        ord.findOneAndRemove({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json({ state: 'ok', msg: 'done' })
            }
        }
        )
    },


    //** MISE A JOUR D'UNE NOTIFICATION**/
    UpdateOrdonnance: function (req, res) {
        ord.updateOne(
            {
                _id: req.params.id
            }, {
            $set: req.body
        },
            {
                contenu: req.file.originalname,
                expediteur: req.body.expediteur,
                destinataire: req.body.destinataire,
                Idannonce: req.body.Idannonce,
                approuved: req.body.approuved
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