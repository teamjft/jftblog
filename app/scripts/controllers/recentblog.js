'use strict';

/**
 * @ngdoc function
 * @name jftblogApp.controller:RecentBlogCtrl
 * @description
 * # RecentBlogCtrl
 * Controller of the jftblogApp
 */
angular.module('jftblogApp')
    .controller('RecentBlogCtrl', ['$scope', '$modal', '$log', '$routeParams', 'feedService', function ($scope, $modal, $log, $routeParams, feed) {

        angular.element(document).ready(function () {
            var feedUrl;
            if ($routeParams.propertyName && $routeParams.propertyValue) {
                feedUrl = 'http://www.jellyfishtechnologies.com/' + $routeParams.propertyName + '/' + $routeParams.propertyValue + '/feed/';
            } else {
                feedUrl = 'http://www.jellyfishtechnologies.com/feed/'
            }

            feed.parseFeed(feedUrl).then(function (res) {
                $scope.feeds = res.data.responseData.feed.entries;
            })

        });

        $scope.readFullBlog = function (size, blogFeed) {
            var modalInstance = $modal.open({
                templateUrl: 'fullBlog.html',
                controller: BlogModalInstanceCtrl,
                size: size,
                resolve: {
                    items: function () {
                        return blogFeed;
                    }
                }
            });

            modalInstance.result.then(function (returnedData) {
                $log.info('Returned Data: ' + returnedData);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }]);


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var BlogModalInstanceCtrl = function ($scope, $modalInstance, items) {
    $scope.feed = items;

    $scope.ok = function () {
        $modalInstance.close('');
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};