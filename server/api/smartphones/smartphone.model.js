'use strict';

const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseModel = require(path.resolve('./server/shared/base.model'));

const SmartphoneSchema = new Schema(Object.assign(
    {
        model: {
            type: String
        }
    },
    BaseModel), {collection: 'smartphones'});

module.exports = mongoose.model('Smartphone', SmartphoneSchema);
