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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
