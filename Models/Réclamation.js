const mongoose = require('mongoose');
const reclamation = new mongoose.Schema({

    idAnnonce: {
        type: String,
        required: false,
        trim: false
    },
    Expediteur: {
        type: String,
        required: false,
        trim: false
    },
    IdExpediteur: {
        type: String,
        required: false,
        trim: false
    },
    AbbonneeReclamee: {
        type: String,
        required: false,
        trim: false
    },
    IdAbbonneeReclamee: {
        type: String,
        required: false,
        trim: false
    },

    Titre_reclamation: {
        type: String,
        required: false,
        trim: true

    },


    Contenu: {
        type: String,
        required: true,
        trim: true

    },


    Date: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model("reclamation", reclamation)