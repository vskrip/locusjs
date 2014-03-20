'use strict';

/* Services */

var services = angular.module('locusjsApp.services', ['ngResource']);

//TODO:Change url in production version

var baseUrl = 'http://localhost\\:3000';

services.factory('ItemsFactory', function ($resource) {
    return $resource(baseUrl + '/items', {}, {
        query: { method: 'GET', isArray: true },
        compoItems: {method: 'GET', isArray: true},
        create: { method: 'POST' }
    });
});

services.factory('ItemFactory', function ($resource) {
    return $resource(baseUrl + '/items/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        removeFromCompo: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});

services.factory('CompoItemsFactory', function ($resource) {
    return $resource(baseUrl + '/compoItems', {}, {
        query: { method: 'GET', isArray: true },
    });
});

services.factory('CompoItemFactory', function ($resource) {
    return $resource(baseUrl + '/compoItems/:id', {}, {
        update: { method: 'PUT', params: {id: '@id'} },
    });
});

//TODO: Delete from production version how redundant
services.factory('ParentGroupsFactory', function ($resource) {
    return $resource(baseUrl + '/parentGroups', {}, {
        query: { method: 'GET', isArray: true },
    });
});

//TODO: Delete from production version how redundant
services.factory('ItemsParentGroupFactory', function ($resource) {
   return $resource(baseUrl + '/itemsParentGroup/:parent_title', {}, {
       query: { method: 'GET', params: {parent_title: '@parent_title'}, isArray: true }
   });
});

services.factory('ItemGroupsFactory', function ($resource) {
    return $resource(baseUrl + '/itemGroups', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    });
});

services.factory('ItemGroupFactory', function ($resource) {
    return $resource(baseUrl + '/itemGroups/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});

services.value('version', '0.0.1');
