const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const campSchema = new Schema ({
    title: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    date: {
        type: String,
    },
    price: {
        type: Number,
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
  