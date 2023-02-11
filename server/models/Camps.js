//const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
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
const Camp = model('Camp', campSchema);
  
module.exports = Camp;
  