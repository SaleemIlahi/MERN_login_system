
const mongoose = require('mongoose')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: Number,
        required: true,
        min: [10,'Enter a valid Mobile Number']
    },
    email: {
        type: String,
        validate: [isEmail, 'Enter a valid Email address'],
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: [8,"Minimum 8 character Required"],
        // select: false 
    }
})

// Compiling Schema
const userModel = mongoose.model('user',userSchema)

module.exports = userModel