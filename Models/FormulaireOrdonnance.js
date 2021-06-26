// expediteur , contenu , approuved (default : false)

// idannonce , id abonné 

const mongoose = require('mongoose');

const FormulaireOrdonnance = mongoose.model('FormulaireOrdonnance', new mongoose.Schema(

    {

        expediteur: {
            type: String,
            required: false,
            trim: true

        },
        destinataire: {
            type: String,
            required: false,
            trim: true
        },
        Idannonce: {
            type: String,
            required: false,
            trim: true
        },
        // contenuName: {
        //     type: String,
        //     required: true,
        // },
        contenu: {
            type: String,
            required: true
        },

        approuved: {
            type: Boolean,
            default: false
        },



    }))

module.exports = FormulaireOrdonnance