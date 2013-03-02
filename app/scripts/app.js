'use strict';



angular.module('puntSpotter', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '#browse'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
