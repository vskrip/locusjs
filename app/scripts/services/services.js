'use strict';

/* Services */

var services = angular.module('locusjsApp.services', ['ngResource']);

//TODO:Change url in production version

var baseUrl = 'http://localhost\\:3000';

services.factory('CompoItemsFactory', function ($resource) {
    return $resource(baseUrl + '/compoItems', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    });
});

services.factory('CompoItemFactory', function ($resource) {
    return $resource(baseUrl + '/compoItems/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});

services.value('version', '0.0.1');
