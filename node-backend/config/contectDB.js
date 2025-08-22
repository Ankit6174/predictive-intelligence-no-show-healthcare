const mongoose = require('mongoose');

const contectDB = async() => {
    try {
        const conntedContect = process.env.MONGO_URL || 'mongodb://localhost:27017/test';
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test');
        console.log(`Connected to -> ${conntedContect}`);
    } catch {
        console.log("Failed to connect");
    }
};

module.exports = contectDB;