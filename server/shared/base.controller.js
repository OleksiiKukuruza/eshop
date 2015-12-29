'use strict';

const mongoose = require('mongoose');
const RESPONSES = require('./responses.status.js');

class BaseController {

    constructor(model) {
        if (!(model.schema instanceof mongoose.Schema)) {
            throw new Error('Model.schema should be a mongoose.Schema instance');
        }
        this._model = model;
    }

    create(req, res) {
        new this._model(req.body)
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
        this._model
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
        this._model
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
        this._model
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
        this._model
            .remove({_id: req.params.id})
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
