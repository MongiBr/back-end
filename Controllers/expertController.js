
const expert = require('../Models/expert')
module.exports = {

    //** AFFICHAGE D'UN EXPERT **/
    afficherExpert: (req, res) => {
        expert.find({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },
    //** AJOUT D'UN EXPERT **/
    ajouterExpert: function (req, res) {
        const expert1 = new expert(

            {
                dateInscription: req.body.dateInscription,
                Nom: req.body.Nom,
                Prenom: req.body.Prenom,
                Nom_utilisateur: req.body.Nom_utilisateur,
                Mot_de_passe: req.body.Mot_de_passe,
                Photo_profile: req.body.Photo_profile,
                Genre: req.body.Genre,
                Email: req.body.Email,
                job: req.body.job,
                Numero_telephone: req.body.Numero_telephone,
                etat: req.body.etat
            }
        )
        expert1.save(function (err) {
            if (err) {
                res.json({ state: 'erreuuur', msg: 'error' + err })
                console.log('erreur' + err);
            }
            else {
                res.json({ state: 'ok', msg: 'expert ajouter' })
            }
        })
    },


    //** SUPPRESSION D'UN EXPERT **/
    supprimerExpert: (req, res) => {
        expert.findOneAndRemove({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json({ state: 'ok', msg: 'done' })
            }
        })
    },
    //**SUPPRESSION DE TOUTE LA LISTE DES EXPERTS */
    Supprimer: (req, res) => {
        expert.remove({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },

    //** MISE A JOUR D'UN EXPERT**/
    UpdateExpert: function (req, res) {
        expert.updateOne(
            {
                _id: req.params.id
            }, {
            $set: req.body
        },
            {
                dateInscription: req.body.dateInscription,
                Nom: req.body.Nom,
                Prenom: req.body.Prenom,
                Nom_utilisateur: req.body.Nom_utilisateur,
                Mot_de_passe: req.body.Mot_de_passe,
                Photo_profile: req.body.Photo_profile,
                Genre: req.body.Genre,
                Email: req.body.Email,
                job: req.body.job,
                Numero_telephone: req.bodY.Numero_telephone,
                etat: req.body.etat
            },
            function (err, list) {
                if (err) {
                    res.json({ state: 'no', msg: 'error' + err })
                } else {
                    res.json({ state: 'ok', msg: 'done' })
                }
            }
        )
    },
}