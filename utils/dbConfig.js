const mongoose = require('mongoose');

const uri = 'mongodb+srv://srijan:srijan@cluster0.ckatk.mongodb.net/IBMProject';

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1); // Exit process if connection fails
    }
};

module.exports = connectDB;
