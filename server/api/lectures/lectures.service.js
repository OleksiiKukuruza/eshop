'use strict';

const path = require('path');
const Lecture = require('./lecture.model');
const RESPONSES = require(path.resolve('./server/shared/responses/responses.status'));


exports.get = function (req, res) {
    let query = {};
    if (req.query.type) {
        query.type = req.query.type;
    }
    let limit = parseInt(req.query.limit, 10) || 10;
    let skip = parseInt(req.query.page, 10) * limit || 0;

    return Lecture.find(query).skip(skip).limit(limit)
        .then((result) => {
            res.status(RESPONSES.STATUS.OK).json({
                status: 'success',
                responses: result
            });
        })
        .catch((err) => {
            res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
        });
};
