'use strict';

/**
 * @ngdoc function
 * @name jftblogApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the jftblogApp
 */
angular.module('jftblogApp')
    .controller("BlogCtrl", ['$scope', 'FeedService', function ($scope, Feed) {
        $scope.loadFeed = function (feedUrl) {
            Feed.parseFeed(feedUrl).then(function (res) {
                $scope.feeds = res.data.responseData.feed.entries;
            });
        };

        $scope.blogCategories = [
            {name: 'AngularJS', slug: 'angularjs'},
            {name: 'Database', slug: 'database'},
            {name: 'Embedded', slug: 'embedded'},
            {name: 'Grails', slug: 'grails'},
            {name: 'Groovy', slug: 'groovy-2'},
            {name: 'Hibernate', slug: 'hibernate'},
            {name: 'Jasper', slug: 'jasper'},
            {name: 'MongoDB', slug: 'mongodb'},
            {name: 'OAuth', slug: 'oauth-2'},
            {name: 'Spring', slug: 'spring'},
            {name: 'Struts2', slug: 'struts2'}
        ];
    }])
    .factory('FeedService', ['$http', function ($http) {
        return {
            parseFeed: function (url) {
                return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        }
    }]);