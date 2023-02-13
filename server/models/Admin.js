const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const adminSchema = new Schema({
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
    phoneNumber1: {
        type: Number,
        required: true,
        validate: {
            validator: function (phoneNumber) {
                return /^(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/.test(phoneNumber);
            },
            message: `${this.phoneNumber} is not a valid phone number!`
        }
    },
    adminAccess: {
        type: Boolean,
        required: true,
        default: true,
    }
})

// set up pre-save middleware to create password
adminSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
adminSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
