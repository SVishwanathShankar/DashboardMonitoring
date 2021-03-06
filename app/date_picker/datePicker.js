angular.module('dashboardApp.datePicker', ['ui.bootstrap'])

.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dtFrom = new Date();
    $scope.dtTo = new Date();
  };
  $scope.today();
  $scope.clear = function () {
    $scope.dtFrom = null;
    $scope.dtTo = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];
});