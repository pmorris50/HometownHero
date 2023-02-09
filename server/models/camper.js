const {Schema, model} = require('mongoose');

const camperSchema = new Schema({
    firstName: {
        type: String,
        required: true,
         

    }
})

