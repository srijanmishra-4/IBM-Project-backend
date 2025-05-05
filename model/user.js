const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId : {type : Number},
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tests: [
        {
            testId: { type: String }, 
            data: { type: Object } 
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
