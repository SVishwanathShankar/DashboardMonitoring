var httpService = angular.module('dashboardApp.httpService', ['ngResource', 'ngRoute']);
httpService.factory('HttpService', ['$resource', function($resource) {
return $resource('http://localhost:3000/', null,
    {
        'update': { method:'PUT' },
        'query': {method: 'GET', isArray: true },
        'getData': {method: 'POST', isArray: true },
        'testFunction' : function() {
        	alert("Test Function called");
        }
    });
}]);