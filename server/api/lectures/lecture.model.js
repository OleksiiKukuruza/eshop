'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LectureSchema = new Schema({
    title: {
        type: String,
        default: 'New Lecture'
    }
}, { collection: 'lectures' });

module.exports = mongoose.model('Lecture', LectureSchema);
