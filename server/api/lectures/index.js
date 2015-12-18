'use strict';

const express = require('express');
const ControllerClass = require('./lectures.controller');
const controller = new ControllerClass();
const router = express.Router();

router.route('')
    .get(controller.read.bind(controller))
    .post(controller.create.bind(controller));

router.route('/:id')
    .get(controller.readById.bind(controller))
    .put(controller.update.bind(controller))
    .delete(controller.delete.bind(controller));

module.exports = router;
