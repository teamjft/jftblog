'use strict';

/**
 * @ngdoc overview
 * @name jftblogApp
 * @description
 * # jftblogApp
 *
 * Main module of the application.
 */
var app = angular.module('jftblogApp', ['ngResource', 'ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'MainCtrl',
            templateUrl: '../views/main.html'
        }).when('/blog', {
            controller: 'BlogCtrl',
            templateUrl: '../views/blog.html'
        }).otherwise({redirectTo: '/'});
}]);