'use strict';

angular.module('locusjsApp').controller('AssemblyCtrl', [
  '$scope', '$state', 'CompoItemsFactory', function($scope, $state, CompoItemsFactory) {

    $scope.compositionList = CompoItemsFactory.query();

    $scope.weightCalcData = [
      {bottomHole: "2934", fluidWeight: "1,18", weightTool: "31,345"}
    ];
    
    $scope.goToSelectMode = function () {
      $state.go('groups');
    };
    
    $scope.goToViewMode = function () {
      $state.go('index');
    };
  }]
);