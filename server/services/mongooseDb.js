const mongoose = require('mongoose');
const config = require('../config');

const dbUrl = process.env.MONGO_URI;
console.log(dbUrl);

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Mongodb connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

module.exports = {
  mongoose,
  connectDB,
};

