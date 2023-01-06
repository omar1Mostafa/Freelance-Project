const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    },
    location:{
        type: {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
            }
        },
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Events', eventSchema);