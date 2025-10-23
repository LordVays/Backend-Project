const { Schema, model, default: mongoose } = require('mongoose');


const Product = new mongoose.Schema({

    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },

})


module.exports = mongoose.model('Product', Product);