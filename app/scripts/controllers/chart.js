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

  	$scope.labels = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  	$scope.series = ["Jonnepeber"]
  	$scope.data = [
  		[500, 475, 455, 420, 390, 360]
  	];

  }]);