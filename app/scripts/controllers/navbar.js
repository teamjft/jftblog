'use strict';

/**
 * @ngdoc function
 * @name jftblogApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the jftblogApp
 */
angular.module('jftblogApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.isActiveTab = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
