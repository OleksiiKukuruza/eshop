'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');

module.exports = () => {
    // Initialize express app
    const app = express();

    // Setting application local variables
    app.locals.title = config.app.title;

    // Passing the request url to environment locals
    app.use((req, res, next) => {
        res.locals.url = req.protocol + ':// ' + req.headers.host + req.url;
        next();
    });

    // Showing stack errors
    app.set('showStackError', true);

    // Logger
    app.use(morgan('dev'));

    // Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/', express.static(path.resolve('./app')));
    app.use('/build', express.static(path.resolve('./build')));

    app.use('/api/lectures', require(path.resolve('./server/api/lectures')));

    app.get('/', (req, res) => {
        res.sendFile('./index.html');
    });

    app.get('*', (req, res) => {
        res.status(404).json({ 'err': 'page not found' });
    });

    app.use(err => {
        if (err) {
            console.error(err);
        }
    });
    return app;
};
