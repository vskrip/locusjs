'use strict';

angular.module('locusjsApp').controller('WeightCalcCtrl', [
    '$scope', function($scope) {
        var show = false;

          $scope.onEditMode = function(){
            show = true;
          };

          $scope.offEditMode = function(){
            show = false;
          };

          $scope.changeMode = function(){
            return show;
          };
    }]
);