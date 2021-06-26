
const reclamation = require('../Models/Réclamation')
module.exports = {



    //** AJOUT D'UNE RECLAMATION **/
    ajouterReclamation: function (req, res) {
        const reclamation1 = new reclamation(

            {
                Expediteur: req.body.Expediteur,
                AbbonneeReclamee: req.body.AbbonneeReclamee,
                IdAbbonneeReclamee: req.body.IdAbbonneeReclamee,
                IdExpediteur: req.body.IdExpediteur,
                Titre_reclamation: req.body.Titre_reclamation,
                Contenu: req.body.Contenu,
                Date: req.body.Date,
                idAnnonce: req.body.idAnnonce
            }
        )
        reclamation1.save(function (err) {
            if (err) {
                res.json({ state: 'erreuuur', msg: 'error' + err })
                console.log('erreur' + err);

            } else {
                res.json({ state: 'ok', msg: 'Réclamation ajoutée' })
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficherReclamation: (req, res) => {
        reclamation.find({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },


    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimerReclamation: (req, res) => {
        reclamation.findOneAndRemove({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json({ state: 'ok', msg: 'done' })
            }
        }
        )
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierReclamation: function (req, res) {
        reclamation.updateOne(
            {
                _id: req.params.id
            }, {
            $set: req.body
        },
            {
                Expediteur: req.body.Expediteur,
                IdExpediteur: req.body.IdExpediteur,
                AbbonneeReclamee: req.body.AbbonneeReclamee,
                IdAbbonneeReclamee: req.body.IdAbbonneeReclamee,
                Titre_reclamation: req.body.Titre_reclamation,
                Contenu: req.body.Contenu,
                Date: req.body.Date,
                idAnnonce: req.body.idAnnonce
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