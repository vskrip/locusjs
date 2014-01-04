'use strict';

angular.module('locusjsApp').controller('ProjectCtrl', [
    '$scope', function($scope) {
        $scope.projects = [
        {id: 1, title:'Тевлинско-Русскинское', cluster: '125Б', well: '2939'},
        {id: 2, title:'Равнинное', cluster: '2', well: '3309'},
        {id: 3, title:'Тевлинско-Русскинское', cluster: '150', well: '4049У'},
        {id: 4, title:'Повховское', cluster: '38', well: '2033'},
        {id: 5, title:'Повховское', cluster: '57', well: '9889'},
        {id: 6, title:'Кечимовское', cluster: '115', well: '7683'},
        ];
}]);