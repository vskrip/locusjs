'use strict';

var locusjsApp = angular.module('locusjsApp', [
    'ngRoute',
    'locusjsApp.filters',
    'locusjsApp.services',
    'locusjsApp.directives',
]);

locusjsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
        .when('/weight_calc', {templateUrl: 'partials/weightcalc.html', controller: 'WeightCalcCtrl'})
        .otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
}]);
