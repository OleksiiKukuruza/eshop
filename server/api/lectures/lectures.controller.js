'use strict';

const path = require('path');
const Lecture = require('./lecture.model');
const BaseController = require(path.resolve('./server/shared/base.controller'));
const LecturesService = require('./lectures.service');

class LectureController extends BaseController {
    constructor() {
        super(Lecture);
    }
    get(req, res) {
        return LecturesService.get(req, res);
    }
}
module.exports = LectureController;
