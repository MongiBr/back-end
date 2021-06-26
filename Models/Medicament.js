const mongoose = require('mongoose');
//The function trim returns the string without white spaces
const prod = require('./AnnonceModal');
const { Schema, model } = require("mongoose")
const FormulaireOrdonnance = require('./FormulaireOrdonnance')
const medicSchema = prod.discriminator('Medicament', new mongoose.Schema({

    username: {
        type: String,
        required: false,
        trim: true
    },
    userId: {
        type: String,
        required: false,
        trim: true
    },


    Dosage: {
        type: String,
        required: false,
        trim: true
    },


    DateFabrication: {
        type: Date,
        required: false,
        max: Date.now
    },
    DateExpiration: {
        type: Date,
        required: false,
        min: Date.now
    },



    FormulaireOrdonnance: [FormulaireOrdonnance],

    FormulaireOrdonnance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FormulaireOrdonnance",
    }],


}
)

);
medicSchema.DateExpiration instanceof Date;
medicSchema.DateExpiration instanceof Date;

function validateDate(Medicament) {
    const schema = {

        DateFabrication: Joi.string().max(Date.now).required(),
        DateExpiration: Joi.string().min(Date.now).required()
    };
    return Joi.validate(Medicament, schema);
}

exports.validate = validateDate;

module.exports = medicSchema;