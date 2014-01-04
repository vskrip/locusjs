'use strict';

var locusjsApp = angular.module('locusjsApp', [
  'ngRoute',
  'ngGrid',
  'locusjsApp.filters',
  'locusjsApp.services',
  'locusjsApp.directives'
]);

locusjsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
        .when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectCtrl'})
        .when('/profiles', {templateUrl: 'partials/profiles.html', controller: 'ProfileCtrl'})
        .otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
}]);
