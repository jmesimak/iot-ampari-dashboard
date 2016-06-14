'use strict';

/**
 * @ngdoc overview
 * @name ghIotDashboardApp
 * @description
 * # ghIotDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('ghIotDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/charts.html',
        controller: 'ChartTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
