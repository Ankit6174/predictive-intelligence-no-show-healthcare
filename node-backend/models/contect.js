const mongoose = require('mongoose');

const contect = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }
});

const userSchema = mongoose.model('contect', contect);

module.exports = userSchema;