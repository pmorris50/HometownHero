const mongoose = require('mongoose');

const { Schema } = require('mongoose');
const Emergency = require('./Emergency')

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
    emergencyContact: [Emergency.Schema],

    waiverSigned: {
        type: Boolean,
        required: true
    },
    campId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Camp'
        }
    ]
})
const Camper = mongoose.model('Camper', camperSchema);

module.exports = Camper;
