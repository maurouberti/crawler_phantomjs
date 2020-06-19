'use strict';

const mongoose = require('mongoose')

const Fundamentus = new mongoose.Schema({
    papel: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    setor: {
        type: String,
        required: true
    },
    subsetor: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('fundamentus', Fundamentus);