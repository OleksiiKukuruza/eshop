(function () {
    'use strict';
    angular
        .module('eshop')
        .config(function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        });
})();
