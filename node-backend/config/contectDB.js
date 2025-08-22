const mongoose = require('mongoose');

const contectDB = async() => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch(err => console.error('Error connecting to MongoDB', err));
};

module.exports = contectDB;