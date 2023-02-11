const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const camperSchema = new Schema({
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
    age: {
        type: Number,
        required: true
    },
    gradeFinished: {
        type: Number,
        required: true
    },
    tshirtSize: {
        type: String,
        required: true,
        trim: true
    },
    emergencyContact: [
        {
            type: Schema.Types.ObjectId,
            ref: "emergency"
        }  
    ],

    waiverSigned: {
        type: Boolean,
        required: true
    },
    campId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'camp'
        }
    ]
})

const Camper = mongoose.model('camper', camperSchema);

module.exports = Camper;
