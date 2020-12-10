const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ContactSchema = new Schema({
    name : {
        required: true,
        type : String,
        unique : true,
        minlength : 3,
        maxlength : 30
    },
    email : {
        required: true,
        type : String,
        unique : true
    },
    phone : {
        required : true,
        type : Number,
        unique: true
    }
})

const Contact = model('Contact', ContactSchema);

module.exports= Contact

