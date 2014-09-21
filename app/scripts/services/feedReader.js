/**
 * Created by Manish Kumar Bharti on 21/9/14.
 */

angular.module('jftblogApp')
    .factory('feedService', ['$http', function ($http) {
        return {
            parseFeed: function (url) {
                return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        }
    }]);