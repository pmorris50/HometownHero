const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const emergencySchema = new Schema ({
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
    phoneNumber1: {
        type: String,
        required: true,
        validate: {
            validator: function(phoneNumber) {
                return /^(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/.test(phoneNumber);
            },
            message: `${this.phoneNumber} is not a valid phone number!`
        }
    },
    phoneNumber2: {
        type: String,
        required: true,
        validate: {
            validator: function(phoneNumber) {
                return /^(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/.test(phoneNumber);
            },
            message: `${this.phoneNumber} is not a valid phone number!`
        }
    },

});

const Emergency = mongoose.model('emergency', emergencySchema);

module.exports = Emergency;

