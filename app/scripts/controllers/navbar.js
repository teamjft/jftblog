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

        $scope.blogCategories = [
            {name: 'Database', slug: 'database'},
            {name: 'Embedded', slug: 'embedded'},
            {name: 'Git', slug: 'git-2'},
            {name: 'GORM', slug: 'gorm'},
            {name: 'Grails', slug: 'grails'},
            {name: 'Groovy', slug: 'groovy-2'},
            {name: 'GSP', slug: 'gsp'},
            {name: 'Hibernate', slug: 'hibernate'},
            {name: 'Jasper', slug: 'jasper'},
            {name: 'Java', slug: 'java'},
            {name: 'Linux', slug: 'java'},
            {name: 'MongoDB', slug: 'mongodb'},
            {name: 'Node.js', slug: 'node-js'},
            {name: 'OAuth', slug: 'oauth-2'},
            {name: 'Spring', slug: 'spring'},
            {name: 'Struts2', slug: 'struts2'},
            {name: 'Testing', slug: 'testing'}
        ];

        $scope.authors = [
            {name: 'Abdullah Qayuum', slug: 'abdullah'},
            {name: 'Aman Goel', slug: 'aman'},
            {name: 'Amit Anand', slug: 'amit'},
            {name: 'Amit Pandey', slug: 'apandey'},
            {name: 'Anand Kushwaha', slug: 'anand'},
            {name: 'Gaurav Chauhan', slug: 'gchauhan'},
            {name: 'Komal Gulati', slug: 'komal'},
            {name: 'Manish Bharti', slug: 'manish'},
            {name: 'Mridul Pandey', slug: 'mridul'},
            {name: 'Neeraj Bhatt', slug: 'neeraj'},
            {name: 'Prabhat Singh', slug: 'prabhat'},
            {name: 'Prashant Gupta', slug: 'pgupta'},
            {name: 'Praveen Kumar', slug: 'praveen'},
            {name: 'Tinku Saini', slug: 'tinku'},
            {name: 'Vivek Sadh', slug: 'vsadh'},
            {name: 'Vivek Yadav', slug: 'vivek'}
        ];
    });
