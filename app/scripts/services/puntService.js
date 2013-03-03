'use strict';

angular.module('puntspotterApp')
  .factory('puntService', function ($http, $q) {
    var raw, deferred = $q.defer();

    function load() {
      if (!raw) {
        $http.get('data/punts.json').success(function (data) {
          raw = data;
          deferred.resolve(data);
        });
      }
      return deferred.promise;
    }

    function search(match) {
      var def = $q.defer();
      load().then(function(data){
        def.resolve(_.where(data, match));
      });
      return def.promise;
    }

    function get(match) {
      var def = $q.defer();
      load().then(function(data){
        def.resolve(_.findWhere(data, match) || null);
      });
      return def.promise;
    }

    return {
      load: load,
      search: search,
      get: get
    };

  });
