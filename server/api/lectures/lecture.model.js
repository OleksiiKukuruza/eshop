'use strict';

const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;

const LectureSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: 'PLANNED'
    },
    duration: {
        type: Number
    },
    type: {
        type: String
    }
}, {collection: 'lectures'});

LectureSchema.plugin(deepPopulate);

module.exports = mongoose.model('Lecture', LectureSchema);
