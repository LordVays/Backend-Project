const mongoose = require('mongoose');


const Post = new mongoose.Schema({

    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true }

});


module.exports = mongoose.model('Post', Post);