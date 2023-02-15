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
        type: String,
        required: true
    },
    gradeFinished: {
        type: String,
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
            ref: "emergency",
            required: false
        }
    ],
    waiverSigned: {
        type: Boolean,
        required: true,
        default: false,
    },
    campId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'camp',
            required: false
        }
    ]
})

const Camper = mongoose.model('camper', camperSchema);

module.exports = Camper;
