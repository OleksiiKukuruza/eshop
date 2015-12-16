module.exports = function (config) {
    'use strict';
    config.set({
        browsers: ['PhantomJS2'],
        frameworks: ['jasmine'],
        reporters: ['dots', 'coverage'],
        files: [
            'build/js/vendors.js',
            'app/**/*.js',
            'test/unit/**/*.js'
        ],
        preprocessors: {
            'app/**/*.js': ['coverage', 'babel'],
            'test/**/*.js': ['babel']
        },
        coverageReporter: {
            type: 'html',
            dir: 'test/coverage/'
        }
    });
};
