'use strict';



angular.module('puntSpotter')
  .controller('PuntBrowser', function ($scope, $http) {
	$http.get('data/punts.json').success(function(data) {
		$scope.punts = data;
	});
  	//$scope.punts = [{name:"one"},{name:"two"},{name:"three"}];
  });
