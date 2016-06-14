'use strict';

/**
 * @ngdoc service
 * @name ghIotDashboardApp.apiservice
 * @description
 * # apiservice
 * Service in the ghIotDashboardApp.
 */
angular.module('ghIotDashboardApp')
  .service('ApiService', function ($http) {
    var get = function(id, resource, callback) {
      var url = "http://52.50.248.242:3000/"+resource+"/"+id+"/readings";
      $http.get(url)
      .then(function(response){
        callback(response);
      });
    }

    this.deviceReadings = function(id, callback) {
      get(id, "device", callback);
    }
  });
