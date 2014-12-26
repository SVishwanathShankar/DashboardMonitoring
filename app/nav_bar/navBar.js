'use strict';

angular.module('dashboardApp.navBar', ['ngRoute'])

.controller('NavBarCtrl', function($scope) {
	$scope.NavBarElements = [
		{'name': 'Help'},
		{'name': 'Profile'},
		{'name': 'Settings'},
		{'name': 'Dashboard'}
	];
});