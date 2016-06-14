'use strict';

/**
 * @ngdoc function
 * @name ghIotDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghIotDashboardApp
 */
angular.module('ghIotDashboardApp')
  .controller('MainCtrl', function (ApiService) {
    ApiService.deviceReadings("1", function(response) {
      console.log(response);
    })
  });
