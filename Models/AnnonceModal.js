

const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Produit = new Schema({




    Nom: {

        type: String,

        trim: true
        ///////////slkfslmkdlmsq////*
    },

})
const Tags = new Schema({



    Contenu: {

        type: String,
        required: true,
        trim: true
        ///////////slkfslmkdlmsq////*
    },

})



const annonceSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: false,
        trim: true
    },

    userId: {
        type: String,
        required: false,
        trim: true
    },

    Titre: {
        type: String,
        required: false,
        trim: true
    },

  

    Description: {
        type: String,
        required: false,
        trim: true
    },


    Gouvernorat: {
        type: String,
        required: false,
        trim: true
    },

    Ville: {
        type: String,
        required: false,
        trim: true
    },
    
    images: [{
        type: String,
        required: false,
        
    }],

    Catégorie: {
        type: [{
            type: String,
            enum: ['Medicament', 'NonMedicament']
        }],

    },

  

    Etat1Anononce: {
        type: [{
            type: String,
            enum: ['En_attente_Expert', 'Validé_Expert', 'Rejeté_Expert']
        }],
        default: ['En_attente_Expert']
    },

    Etat2Anononce: {
        type: [{
            type: String,
            enum: ['Resolue', 'Disponible', 'irrésolu']
        }],
        default: ['irrésolu']
    },

    Prix: {
        type: Number,
        required: false,
        trim: true,
        default: '0'
    },

    Photo_annonce: {
        type: String,
        required: false,
        trim: true
    },
    // date de creation de l'annonce 
    Date_Annonce: {
        type: Date,
        default: Date.now
    },
    // lezem naamlou controle wa9te yabaath lordonnance llexpert wyvalideha lexpert yet3te el num tel . 
    //el phone number yothher  w chat yother kif lexpert a validé lordonnace (ken fil medicament) !!!

    TypeAnnonce: [{
        type: String,
        enum: ["Annonce d'offre gratuit /Vente(Prix Symbolique)", "Annonce de Recherche"],
        required: true
    }],



    Tags: [Tags],

    Tags: [
        {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Tags",

        }],
    Produit: [Produit],

    Produit: [
        {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Produit",

        }],


}
)


module.exports = mongoose.model('annonce', annonceSchema);





