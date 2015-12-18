'use strict';

const path = require('path');
const Lecture = require('./lecture.model');
const RESPONSES = require(path.resolve('./server/shared/responses.status'));


exports.get = function (req, res) {
    return Lecture.find(req.query)
        .then(result => {
            res.status(RESPONSES.STATUS.OK).json(result);
        }, err => {
            res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
        });
};
