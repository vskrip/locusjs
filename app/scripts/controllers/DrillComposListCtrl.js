'use strict';

angular.module('locusjsApp').controller('DrillComposListCtrl', [
    '$scope', function($scope) {
        $scope.compositionList = [
            {item: "Screw downhole motor", diameter: "178", model: "BG", number:"34", length: "9,3", image: "screw_downhole_motor.png"},
            {item: "Straight reducer", diameter: "152/147", model: "", number:"25", length: "0,4", image: "kls.png"},
            {item: "Diamond bit", diameter: "220,7", model: "BIT", number:"10345", length: "0,3", image: "diamond_bit.png"},
        ];
    }]
);