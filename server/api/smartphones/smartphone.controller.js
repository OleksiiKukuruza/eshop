'use strict';

const path = require('path');
const Smartphone = require('./smartphone.model.js');
const BaseController = require(path.resolve('./server/shared/base.controller'));

class SmartphoneController extends BaseController {
    constructor() {
        super(Smartphone);
    }
}
module.exports = SmartphoneController;
