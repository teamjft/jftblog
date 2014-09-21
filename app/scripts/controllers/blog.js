'use strict';

/**
 * @ngdoc function
 * @name jftblogApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the jftblogApp
 */
angular.module('jftblogApp')
    .controller("BlogCtrl", ['$scope', '$modal', '$log', 'feedService', function ($scope, $modal, $log, feed) {
        $scope.loadFeed = function (feedUrl) {
            $scope.filterText = '';
            feed.parseFeed(feedUrl).then(function (res) {
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