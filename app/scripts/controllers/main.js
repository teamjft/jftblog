'use strict';

/**
 * @ngdoc function
 * @name jftblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jftblogApp
 */
angular.module('jftblogApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'SitePoint'
        ];
    });
