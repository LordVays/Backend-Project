const mongoose = require('mongoose');


const User = new mongoose.Schema({

    name: { type: String, require: true },
    surname: { type: String, require: true },
    age: { type: Number, require: true }

});


module.exports = mongoose.model('User', User);