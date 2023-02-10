const mongoose = require('mongoose');

const { Schema } = require('mongoose');
const {Camper} = require('./index.js')

const campSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    campers: [Camper]
})
const Camp = mongoose.model('Camp', campSchema);
  
module.exports = Camp;
  