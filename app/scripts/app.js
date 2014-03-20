'use strict';

var locusjsApp = angular.module('locusjsApp', [
  'ui.router',
  'locusjsApp.filters',
  'locusjsApp.services',
  'locusjsApp.directives'
]);

locusjsApp.config(function($stateProvider){
  $stateProvider
    .state('index', {
      url: "",
      views: {
        "leftTopView": {
          templateUrl: "/partials/bhaItems.html",
          controller: "AssemblyCtrl"
        },
        "leftMiddleView": {
          templateUrl: "/partials/bhaAddItemControll.html",
          controller: "AssemblyCtrl"
        },
        "leftBottomView": {
          templateUrl: "/partials/weightTool.html"
        },
        "rightTopView": {
          templateUrl: "/partials/bhaView.html",
          controller: "AssemblyCtrl"          
        }
      }
    })
    .state('groups', {
      url: "/groups",
      views: {
        "leftTopView": {
          templateUrl: "/partials/bhaItems.html",
          controller: "AssemblyCtrl"          
        },
        "leftMiddleView": {
          templateUrl: "/partials/backToViewControll.html",
          controller: "AssemblyCtrl"
        },
        "rightTopView": {
          templateUrl: "/partials/groups.html",
          controller: "GroupsCtrl"
        }
      }
    })
    .state('groupView', {
      url: "/groupView",
      views: {
        "leftTopView": {
          templateUrl: "/partials/bhaItems.html",
          controller: "AssemblyCtrl"          
        },
        "leftMiddleView": {
          templateUrl: "/partials/backToViewControll.html",
          controller: "AssemblyCtrl"
        },
        "rightTopView": {
          templateUrl: "/partials/groupItems.html"
        }        
      }  
    });
});