
const Fav = require('../Models/FavouriteAnnonces')

module.exports = {


    //** AJOUT D'UNE ADRESSE **/
    ajouterFavoris: function (req, res) {
        const fav1 = new Fav(
            {
                id_user: req.body.id_user,
                id_annonce: req.body.id_annonce
            }
        )
        fav1.save(function (err) {
            if (err) {
                res.json({ state: 'erreuuur', msg: 'error' + err })
                console.log('yooooooooooooooooooooooo' + err);
            }
            else {
                res.json({ state: 'ok', msg: 'adresse ajouté' })
            }
        })
    },


    //** AFFICHAGE D'UNE ADRESSE **/
    afficherFavoris: (req, res) => {
        Fav.find({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },



    //** SUPPRESSION D'UNE ADRESSE **/
    supprimerFavoris: (req, res) => {
        Fav.findOneAndRemove({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json({ state: 'ok', msg: 'done' })
            }
        })
    },
    //**SUPPRESSION DE TOUTE LES ADRESSE */
    Supprimer: (req, res) => {
        Fav.remove({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },

    //** MISE A JOUR D'UNE ADRESSE**/
    modifierFavoris: function (req, res) {
        Fav.updateOne(
            {
                _id: req.params.id
            }, {
            $set: req.body
        },
            {
                id_user: req.body.id_user,
                id_annonce: req.body.id_annonce
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