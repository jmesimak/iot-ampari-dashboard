'use strict';

/**
 * @ngdoc function
 * @name ghIotDashboardApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the ghIotDashboardApp
 */
angular.module('ghIotDashboardApp')
  .controller('StatusCtrl', function ($scope) {
    var statusList = [
      {status: "critical", text: "RIP"},
      {status: "warning", text: "pls water me"},
      {status: "good", text: "all is good"}
    ];

    $scope.status = statusList[0];
    $scope.estimation = 8;
  });
