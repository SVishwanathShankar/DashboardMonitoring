'use strict';

angular.module('dashboardApp.pipelineIntegrity', ['nvd3'])

.controller('PipelineIntegrityCtrl',['$scope', '$http', '$routeParams', 'HttpService', function($scope, $http, $routeParams, HttpService) {
	 $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y * 100; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Time (In hours)'
                },
                yAxis: {
                    axisLabel: 'Data Integrity (%)',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: 30
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Data Integrity Graph'
            },
            caption: {
                enable: true,
                html: '<ul>If the data integrity graph shows more than 100% <li>It may mean that counters may not be propered fetched</li><li>Please contact the team to verify it</li></ul>',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
            
        };
 
/*
$http.get('http://localhost:3000/').success(function(data) {
                            $scope.data = data;
        });
*/
var getData = HttpService.getData({'tests' : 'test'}).$promise ;
getData.then(function onSuccess(response) {
    // access data from 'response'
    console.log(response);
    $scope.data = response;
    console.log("what is data");
    //var foo = response.foo;
},
function onFail(response) {
    // handle failure
    console.log(response);
});

}]);