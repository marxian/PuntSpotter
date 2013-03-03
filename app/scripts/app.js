'use strict';

var app = angular.module('puntSpotter', ['psControllers']);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {})
      .when('#view?punt=:slug', {}).
      otherwise({
        redirectTo: '/'
      });
  });

// Construct a service to manage the punt data
app.factory('puntService', ['$http', '$q', function($http, $q){
  var raw, deferred = $q.defer();

  function load () {
    if (!raw) {
      $http.get('data/punts.json').success(function (data) {
        raw = data;
        deferred.resolve(data);
      });
    }
    return deferred.promise;
  }

  return {
    load: load
  };

}]);
