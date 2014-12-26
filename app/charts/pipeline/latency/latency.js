'use strict';

var app = angular.module('dashboardApp.pipelineLatency', ['nvd3']);

app.controller('PipelineLatencyCtrl', ['$scope', '$http', function($scope, $http) {
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
                    axisLabel: 'Data Latency (In hours)',
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
                text: 'Data Latency Graph'
            },
            caption: {
                enable: true,
                html: '<ul>If the data latency graph shows 0 hours as latency<li>It may mean that counters may not be propered fetched</li><li>Please contact the team to verify it</li></ul>',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
            
        };
        
        console.log("I am getting printed");
        //$scope.data = sinAndCos();
        $http.get('http://localhost:3001/').success(function(data) {
                            $scope.data = data;
        });
        console.log(JSON.stringify($scope.data));

        /*Random Data Generator */
}]);
