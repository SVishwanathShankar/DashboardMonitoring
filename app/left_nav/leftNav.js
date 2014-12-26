'use strict';

angular.module('dashboardApp.leftNav', ['ngRoute'])

.controller('LeftNavCtrl', function($scope) {
	$scope.leftNavElements = [
		{'name': 'Piepeline Integrity and Latency', 'class': 'active', 'link': '#/view1'},
		{'name': 'TERS Integrity and Latency', 'class': '', 'link': '#/view2'},
		{'name': 'TERS Machines Status', 'class': '', 'link': '#/view1'},
		{'name': 'TSW Integrity and Latency', 'class': '', 'link': '#/view2'},
		{'name': 'TSW Machines Status', 'class': '', 'link': '#/view1'},
		{'name': 'M&A REST Integrity and Latency', 'class': '', 'link': '#/view2'},
		{'name': 'M&A REST Machines Status', 'class': '', 'link': '#/view1'},
		{'name': 'M&A Hadoop Integrity and Latency', 'class': '', 'link': '#/view2'},
		{'name': 'LVS Ingest Integrity and Latency', 'class': '', 'link': '#/view1'},
		{'name': 'LVS Ingest Machines Status', 'class': '', 'link': '#/view2'},
		{'name': 'Ares Hadoop Integrity and Latency', 'class': '', 'link': '#/view1'}
	];
});