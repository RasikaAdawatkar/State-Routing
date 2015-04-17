'use strict';

/**
 * @ngdoc function
 * @name stateRoutingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stateRoutingApp
 */
angular.module('stateRoutingApp')
  .controller('MainCtrl', function ($scope,$state) {
  	$scope.r1data=1;
  	var configObj=$state.get('^.sibling','main.route1');  /*using state name*/
  	console.log(configObj)

  

		$scope.moveToLibrary=function(){
			window.location.href="#/main/route1"; /*going to a different state using href*/
		}
	
		$scope.moveToStaff=function(){
			$state.go('main.route2');
			console.log($state.current);    /*gives the current state object*/
		}

  });
