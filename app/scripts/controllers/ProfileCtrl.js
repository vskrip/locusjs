'use strict';

angular.module('locusjsApp').controller('ProfileCtrl', [
    '$scope', function($scope) {
        $scope.myData = [{depth: 24.5, zenith: 0.49, azimuth: 13.93},
                         {depth: 59, zenith: 0.64, azimuth: 32.01},
                         {depth: 74.5, zenith: 0.87, azimuth: 39.31},
                         {depth: 98.5, zenith: 1.39, azimuth: 101.53},
                         {depth: 123.5, zenith: 1.77, azimuth: 132.03},
                         {depth: 150.5, zenith: 2.04, azimuth: 154.98},
                         {depth: 173.5, zenith: 2.39, azimuth: 203.75}];
        $scope.gridOptions = { 
            data: 'myData',
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEdit: true,
            columnDefs: [{field: 'depth', displayName: 'Depth', enableCellEdit: true}, 
                         {field:'zenith', displayName:'Zenith', enableCellEdit: true},
                         {field:'azimuth', displayName:'Azimuth', enableCellEdit: true}]
        };    
}]);