const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');

const SALT = 10;

var schema = mongoose.Schema;

var AdminSchema = new schema({
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
    email: {
        type: String,
        required: [true, "Email field is required!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6
    },
    contactNumber: {
        type: Number,
        required: [true, "Contactnumber field is required!"]
    },
    usertype: {
        type: String,
        default: 'admin'

    },
    // photos: {
    //     type: Image, //nic images & live photo
    //     required: [true, "Images field is required"]
    // },
    create_date: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: 'admin'
    }
);

// saving user data
// AdminSchema.pre('save', function (next) {
//     var admin = this;
//     if (admin.isModified('password')) {
//         //check if password is modified or available
//         bcrypt.genSalt(SALT, function (err, salt) {
//             if (err) {
//                 return next(err)
//             };
//             bcrypt.hash(admin.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err)
//                 };
//                 admin.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// //compare password
AdminSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

// //generate token
// AdminSchema.methods.generateToken = function (callback) {
//     var admin = this;
//     var token = jwt.sign(admin._id.toHexString(), process.env.SECRET);

//     callback(null, token);
// };

// //find by token
// AdminSchema.statics.findByToken = function (token, callback) {
//     jwt.verify(token, process.env.SECRET, function (err, decode) {
//         //decode is user._id
//         Admin.findById(decode, function (err, admin) {
//             if (err) {
//                 return res.status(404).json({
//                     status: false,
//                     message: "Admin not found",
//                     data: err
//                 });
//             }
//             callback(null, admin);
//         });
//     });
// };

const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin 