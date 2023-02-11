//const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

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
    campers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'camper'
        }
    ]
})
const Camp = mongoose.model('camp', campSchema);
  
module.exports = Camp;
  