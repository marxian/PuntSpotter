'use strict';

angular.module('psControllers', [])
  .controller('PuntBrowser', ['$scope', '$http', '$routeParams', 'puntService', function ($scope, $http, $routeParams, puntService) {
	puntService.load().then(function(punts){
		$scope.punts = punts;
	});
	$scope.choosePunt = function (punt) {
		if (punt) {
			$scope.punt = punt;
		}
	};
}]);


