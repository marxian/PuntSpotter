'use strict';

angular.module('puntspotterApp')
  .controller('PuntBrowser', function ($scope, $http, $routeParams, puntService) {
	puntService.load().then(function (punts) {
		$scope.punts = punts;
	});
	$scope.choosePunt = function (punt) {
		$scope.punt = punt;
	};
});


