'use strict';

angular.module('puntSpotter', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '#browse' 
      })
      .when('/boat', {
        templateUrl: '#boat'
      });
  });
