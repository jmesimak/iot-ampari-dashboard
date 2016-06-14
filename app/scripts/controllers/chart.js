'use strict';

/**
 * @ngdoc function
 * @name ghIotDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghIotDashboardApp
 */
angular.module('ghIotDashboardApp')
  .controller('ChartTestCtrl', ['$scope', function ($scope) {

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

    var statusList = [
      {status: "critical", text: "RIP"},
      {status: "warning", text: "pls water me"},
      {status: "good", text: "all is good"}
    ];

    $scope.status = statusList[0];
    $scope.estimation = 8;
  }]);
