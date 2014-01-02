'use strict';
var LocusjsApp = angular.module('locusjsApp', [
  'ngRoute',
  'locusjsApp.filters',
  'locusjsApp.services',
  'locusjsApp.directives',
  'locusjsApp.controllers'
]);

LocusjsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectCtrl'})
        .when('/profiles', {templateUrl: 'partials/profiles.html', controller: 'ProfileCtrl'})
        .otherwise({redirectTo: '/projects'});
    $locationProvider.html5Mode(true);
}]);
