const { date, number } = require('joi');
const mongoose = require('mongoose');
require("dotenv").config();

const SALT = 10;

const schema = mongoose.Schema;

const UserSchema = new schema({
    fullName: {
        type: String,
        required: [true, "Name field is required!"]
    },
    iName: {
        type: String,
        required: [true, "iName field is required!"]
    },
    ssn: {
        type: String,
        required: [true, "NIC is required!"],
        
    },
    dateOfBirth: {
        type: String,
        required: [true, "Dateofbirth field is required!"]
    },
    age: {
        type: Number, //this type date of interger
        required: [true, "Age field is required!"] //required or not
    },
    address: {
        type: String,
        required: [true, "Address field is required!"]
    },
    nationality: {
        type: String,
        required: [true, "Nationality field is required!"]
    },
    gdivision: {
        type: String,
        required: [true, "Religion field is required!"]
    },
    email: {
        type: String,
        required: [true, "Email field is required!"],
        // unique: true
    },
    contactNumber: {
        type: Number,
        required: [true, "Contactnumber field is required!"]
    },
    usertype: {
        type: String,
        default:'user'
        
    },
    // photos: {
    //     type: Image, //nic images & live photo
    //     required: [true, "Images field is required"]
    // },
    create_date: {
        type: Date,
        default: Date.now
    }
}, {
    collection:'users'
});


const User = mongoose.model('User', UserSchema);
module.exports = User