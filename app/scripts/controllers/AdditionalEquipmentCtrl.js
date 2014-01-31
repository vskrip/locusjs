'use strict';

angular.module('locusjsApp').controller('AdditionalEquipmentCtrl', [
    '$scope', function($scope) {

        $scope.additionalList = [
            {item: "Squared pipe", diameter: "", model: "", number:"", length: "26,3"},
        ];
    }]
);