const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
    required: true,
        type: String
    },
    password: {
        required: true,
            type: String
        },
    post: [
        {
             title: {
                required: true,
                type: String
             },
             subtitle: {
                required: true,
                type: String
             },
             tag: {
                required: true,
                type: String
             },
             content : {
                required: true,
                type: String
             }
        }
    ]
})

module.exports = mongoose.model('bolgUserDetail', dataSchema);