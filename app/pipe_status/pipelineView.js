'use strict';

angular.module('dashboardApp.pipelineView', ['ngRoute'])

.controller('PipeLineCtrl', function($scope) {
	$scope.pipeLineElements = [
		{'name': 'Piepeline Integrity and Latency', 'class': 'active'},
		{'name': 'TERS Integrity and Latency', 'class': ''},
		{'name': 'TERS Machines Status', 'class': ''},
		{'name': 'TSW Integrity and Latency', 'class': ''},
		{'name': 'TSW Machines Status', 'class': ''},
		{'name': 'M&A REST Integrity and Latency', 'class': ''},
		{'name': 'M&A REST Machines Status', 'class': ''},
		{'name': 'M&A Hadoop Integrity and Latency', 'class': ''},
		{'name': 'LVS Ingest Integrity and Latency', 'class': ''},
		{'name': 'LVS Ingest Machines Status', 'class': ''},
		{'name': 'Ares Hadoop Integrity and Latency', 'class': ''}
	];
});