const mongoose = require('mongoose');

module.exports = mongoose.model('store', new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    number: {
        type: Number,
        required: [true, "Number is required"],
        min: [1, "Number must be greater than 0"],
    },
    open: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true }));
