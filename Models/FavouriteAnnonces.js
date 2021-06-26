const mongoose = require('mongoose');

const FavouriteAnnonce = new mongoose.Schema({

    id_user: {
        type: String,
        required: true

    },

    id_annonce: {
        type: String,
        required: true
    }

})
module.exports = FavouriteAnnonce;