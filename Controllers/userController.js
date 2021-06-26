
const User = require('../Models/userModel');
const validate = require('../Models/userModel')
const bcrypt = require('bcryptjs');
const expert = require('../Models/expert')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')


module.exports = {




    //**AJOUT D'UN UTILISATEUR **/
    addUser: async (req, res) => {
        // First Validate The Request

        // Check if this user already exisits
        let users = await User.findOne({ Email: req.body.Email });

        let a = await User.findOne({ Nom_utilisateur: req.body.Nom_utilisateur })
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(req.body.Mot_de_passe, salt);
        if (users) {
            return res.status(400).send('your email must be unique ');

        }
        else
            if (a) {
                return res.status(400).send('Nom dutilisateur  must be unique ');
            }
            else {

                const users = new User({
                    Nom: req.body.Nom,
                    Prenom: req.body.Prenom,
                    Nom_utilisateur: req.body.Nom_utilisateur,
                    Mot_de_passe: password,
                    Photo_profile: req.body.Photo_profile,
                    Genre: req.body.Genre,
                    Email: req.body.Email,
                    Numero_telephone: req.body.Numero_telephone,
                    etat_abonné: req.body.etat_abonné,
                    test: req.body.Mot_de_passe

                });


                const a1 = await users.save()

                try {
                    // sign the token 
                    const token = jwt.sign(
                        {
                            user: a1._id,
                        }, '${process.env.JWT_SECRET}');
                    // send the token in a HTTP.only cookie
                    console.log(token)
                    res.cookie("token", token, {
                        httpOnly: true,
                    })
                        .send();


                } catch (err) {
                    console.log("err" + err);
                    res.status(500).send();
                }



                try {
                    res.json("ajout avec succee");
                    console.log(' ajout avec succes ');
                } catch (err) {
                    console.log(' il ya une erroooor !! ', err);
                }
                console.log("user ajouté")


            }

    },
    //** AFFICHAGE LA LISTE DES UTILISATEURS**/
    listUser: (req, res) => {
        User.find({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
            console.log("liste user ");
        }
        )
    },
    //** AFFICHAGE UN UTILISATEUR A PARTIR DE SON  TITRE **/
    afficherUser: (req, res) => {
        User.find({ Nom: req.body.Nom }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },


    //** RECUPERATION D'UN UTILISATEUR A PARTIR DE SON ID**/
    getbyid: (req, res) => {
        User.findOne({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        })
    },

    //** SUPPRESSION D'UN UTILISATEUR A PARTIR DE SON ID**/
    suprimerUser: (req, res) => {
        User.findOneAndRemove({ _id: req.params.id }, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json("Delete suceeded")
            }
        })
    },
    Supprimer: (req, res) => {
        User.remove({}, (err, list) => {
            if (err) {
                res.json({ state: 'no', msg: 'error' + err })
            } else {
                res.json(list)
            }
        }
        )

    },

    //** MISE A JOUR D'UN UTILISATEUR A PARTIR DE SON ID**/
    UpdateUser: function (req, res) {
        User.updateOne(
            {
                _id: req.params.id
            }, {
            $set: req.body
        },
            {
                Nom: req.body.Nom,
                Prenom: req.body.Prenom,
                Nom_utilisateur: req.body.Nom_utilisateur,
                Mot_de_passe: req.body.Mot_de_passe,
                Photo_profile: req.body.Photo_profile,
                Genre: req.body.Genre,
                Email: req.body.Email,
                Numero_telephone: req.body.Numero_telephone,
                etat: req.body.etat,




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

    Auth: async (req, res) => {
        try {
            const user = await User.findOne({ Email: req.body.Email });

            const valid =  req.body.Mot_de_passe
            let fetchedUser = user
            if (!valid) {
                console.log("heyyyy pasww")
                return res.status(401).json({ errorMessage: "mot de passe incorrecte" });
            }
            if (user && valid) {   //STEP ONE !!    
                /* console.log("hoooooo") 
                     const token = jwt.sign(
                         {
                         User: user._id,
                     },'${process.env.JWT_SECRET}');
                     // send the token in a HTTP.only cookie
                     console.log(token)
                     res.cookie("token",token, {
                         httpOnly : true , 
                     })
                     .send() ; 
                     console.log(token)
                     console.log("done")    */
                // step  2
                const token = jwt.sign(
                    { Email: fetchedUser.Email, userId: fetchedUser._id },
                    '${process.env.JWT_SECRET}'

                );
                res.status(200).json({
                    token: token,
                    expiresIn: 3600,
                    nom: fetchedUser.Nom,
                    role: fetchedUser.etat,
                    userId: fetchedUser._id
                });




            }


            // ERROR 401 authorization required        


        } catch (err) {
            console.log(err)
        }
        return res.status(401).json({ errorMessage: "Email incorrecte" });
        //user.Mot_de_passe===req.body.Mot_de_passe        

    },




    Logout: async (req, res) => {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0)
        }).send();
    }
}










