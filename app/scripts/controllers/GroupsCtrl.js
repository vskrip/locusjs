'use strict';

angular.module('locusjsApp').controller('GroupsCtrl', [
    '$scope', 'ItemGroupsFactory', function($scope, ItemGroupsFactory) {
        
        var attribute = 'parent_title';
        
        //TODO: Not work service ItemGroupsFactory here
        // $scope.pGroups = ItemGroupsFactory.query();

        $scope.pGroups = [
          {
            "id": 1,
            "parent_title": "Bits",
            "group_title": "Roller Bits",
            "image": "roller_bit.png"
          },
          {
            "id": 2,
            "parent_title": "Bits",
            "group_title": "Diamond Bits",
            "image": "diamond_bit.png"
          },
          {
            "id": 3,
            "parent_title": "Hydraulic Downhole Motors",
            "group_title": "Screw Downhole Motors",
            "image": "screw_downhole_motor.png"
          },
          {
            "id": 4,
            "parent_title": "Hydraulic Downhole Motors",
            "group_title": "Hydraulic Turbine Motors",
            "image": "downhole_turbine_motor.png"
          },
          {
            "id": 6,
            "parent_title": "Adapters Valves Calibrators",
            "group_title": "Adapters",
            "image": "reducer.png"
          },
          {
            "id": 7,
            "parent_title": "Adapters Valves Calibrators",
            "group_title": "Valves",
            "image": "valve.png"
          },
          {
            "id": 8,
            "parent_title": "Adapters Valves Calibrators",
            "group_title": "Calibrators",
            "image": "calibrator.png"
          },
          {
            "id": 9,
            "parent_title": "Telemetry System Items",
            "group_title": "Sondes",
            "image": "tele_sonde.png"
          },
          {
            "id": 10,
            "parent_title": "Telemetry System Items",
            "group_title": "Diamagnetic Extenders",
            "image": "tele_ext.png"
          },
          {
            "id": 11,
            "parent_title": "Drill Pipes",
            "group_title": "Drill Collars",
            "image": "drill_collar.png"
          },
          {
            "id": 12,
            "parent_title": "Drill Pipes",
            "group_title": "Steel Drill Pipes",
            "image": "steel_drill_pipe.png"
          },
          {
            "id": 13,
            "parent_title": "Drill Pipes",
            "group_title": "Aluminium Drill Pipes",
            "image": "aluminium_drill_pipe.png"
          },
          {
            "id": 16,
            "parent_title": "Additional Equipment",
            "group_title": "Jars",
            "image": "jar.png"
          },
          {
            "id": 15,
            "parent_title": "Additional Equipment",
            "group_title": "Squared Pipe",
            "image": "squared_pipe.png"
          }
        ];


        $scope.groups = [];

        var groupValue = "_INVALID_GROUP_VALUE_";
        
        
        for ( var i = 0 ; i < $scope.pGroups.length ; i++ ) {
            
            var parentGroup = $scope.pGroups[ i ];
            
            if ( parentGroup[ attribute ] !== groupValue ) {
        
                var group = {
                    label: parentGroup[ attribute ],
                    items: []
                };
        
                groupValue = group.label;
        
                $scope.groups.push( group );
        
            }
        
            group.items.push( parentGroup );
            
        }
    }]
);