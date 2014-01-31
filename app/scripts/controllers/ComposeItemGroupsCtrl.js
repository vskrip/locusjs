'use strict';

angular.module('locusjsApp').controller('ComposeItemGroupsCtrl', [
    '$scope', function($scope) {
        //TODO: Move JSON data into single file
        $scope.composeGroups = [{
            group: "Bits",
            items: [{
                title: "Diamond Bits",
                image: "kls.png"
            },{
                title: "Roller Bits",
                image: "roller_bit2.png"
            }]
        },{
            group: "Hydraulic Downhole Motors / Jar",
            items: [{
                title: "Screw Downhole Motors",
                image: "kls.png"
            },{
                title: "Hydraulic Turbine Motors",
                image: "kls.png"
            },{
                title: "Jar",
                image: "kls.png"
            }]
        },{
            group: "Telemetrical System Items",
            items: [{
                title: "Sondes",
                image: "kls.png"
            },{
                title: "Diamagnetic Extenders",
                image: "kls.png"
            }]
        },{
            group: "Adapters / Valves / Calibrators",
            items: [{
                title: "Adapters",
                image: "kls.png"
            },{
                title: "Valves",
                image: "kls.png"
            },{
                title: "Calibrators",
                image: "kls.png"
            }]
        },{
            group: "Drill Pipes",
            items: [{
                title: "Drill Collars",
                image: "kls.png"
            },{
                title: "Steel Drill Pipes",
                image: "kls.png"
            },{
                title: "Alumimium Drill Pipes",
                image: "kls.png"
            }]
        }];
    }]
);