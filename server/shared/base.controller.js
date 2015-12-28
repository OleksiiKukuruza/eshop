'use strict';

const mongoose = require('mongoose');
const RESPONSES = require('./responses.status.js');

class BaseController {

    constructor(model) {
        if (model instanceof mongoose.Schema) {
            throw new Error('Model should be a mongoose.Schema instance');
        }
        this._model = model;
    }

    getModel() {
        return this._model;
    }

    getModelInstance(config) {
        return new this._model(config);
    }

    create(req, res) {
        const modelInstance = this.getModelInstance(req.body);
        return modelInstance
            .save()
            .then(result => {
                res
                    .status(RESPONSES.STATUS.CREATED)
                    .json(result);
            }, err => {
                res
                    .status(RESPONSES.STATUS.NOT_FOUND)
                    .json(err);
            });
    }

    read(req, res) {
        const model = this.getModel();
        return model
            .find(req.params)
            .then(results => {
                res
                    .status(RESPONSES.STATUS.OK)
                    .json(results);
            }, err => {
                res
                    .status(RESPONSES.STATUS.NOT_FOUND)
                    .json(err);
            });
    }

    readById(req, res) {
        const model = this.getModel();
        return model
            .findById(req.params.id)
            .then(result => {
                res
                    .status(RESPONSES.STATUS.OK)
                    .json(result);
            }, err => {
                res
                    .status(RESPONSES.STATUS.NOT_FOUND)
                    .json(err);
            });
    }

    update(req, res) {
        const model = this.getModel();
        return model
            .findById(req.params.id)
            .then(modelInstance => {
                const updatedInstance = Object.assign(modelInstance, req.body);
                return updatedInstance.save();
            })
            .then(result => {
                res
                    .status(RESPONSES.STATUS.OK)
                    .json(result);
            }, err => {
                res
                    .status(RESPONSES.STATUS.NOT_FOUND)
                    .json(err);
            });
    }

    delete(req, res) {
        const model = this.getModel();
        return model
            .remove({ _id: req.params.id })
            .then(result => {
                res
                    .status(RESPONSES.STATUS.OK)
                    .json(result);
            }, err => {
                res
                    .status(RESPONSES.STATUS.NOT_FOUND)
                    .json(err);
            });
    }
}

module.exports = BaseController;
