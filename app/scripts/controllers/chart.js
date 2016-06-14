'use strict';

/**
 * @ngdoc function
 * @name ghIotDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghIotDashboardApp
 */
angular.module('ghIotDashboardApp')
  .controller('ChartCtrl', ['$scope', function ($scope) {

  	$scope.moistureLabels = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  	$scope.moistureSeries = ["Moisture"]
  	$scope.moistureData = [
  		[500, 475, 455, 420, 390, 360]
  	];

    $scope.temperatureLabels = ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00"];
  	$scope.temperatureSeries = ["Temperature"]
  	$scope.temperatureData = [
  		[24, 23, 21, 19, 22, 20]
  	];
  }]);
