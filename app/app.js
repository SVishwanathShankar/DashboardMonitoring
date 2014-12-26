/* App Module */

var dashboardApp = angular.module('dashboardApp', [
  'ngRoute',
  'dashboardApp.view1',
  'dashboardApp.view2',
  'dashboardApp.navBar',
  'dashboardApp.leftNav',
  'dashboardApp.pipelineView',
  'dashboardApp.datePicker',
  'dashboardApp.version',
  'dashboardApp.pipelineIntegrity',
  'dashboardApp.pipelineLatency',
  'dashboardApp.httpService'
]);

dashboardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/view1', {
    	templateUrl: 'partials/overallView.html',
    	controller: 'View2Ctrl'
  	  }).
      when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      }).
      otherwise({
        templateUrl: 'partials/overallView.html',
        controller: 'View2Ctrl'
      });
  }]);

