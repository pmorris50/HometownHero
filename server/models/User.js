//const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const camperSchema = require('./Camper');
const Camper = require('./index')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    email
                );
            },
            message: `${this.email} is not a valid email address!`,
        },
    },
    password: {
        type: String,
        required: true,
    },
    adminAccess: {
        type: Boolean,
        required: true,
        default: false,
    },
    campers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Camper'
        }
    ]
    //campers: [{ type: [Camper.schema], required: true}]
    //campers: [camperSchema]
})

// set up pre-save middleware to create password
// userSchema.pre('save', async function(next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
  
//     next();
//   });
  
//   // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
//   };
  
const User = model('User', userSchema);
  
module.exports = User;
  