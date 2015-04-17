angular.module('stateRoutingApp')
  .controller('route1Ctrl', function ($scope,$state,$rootScope) {
console.log($scope.r1data);
/*$scope.show=0;
  	var count=0;*/
$scope.getConfigObj=function(){

	var configObj=$state.get('main.route1');
	console.log(configObj)
	/*count++;*/
	
/*	if(count==1){
		$scope.show=1;
		console.log($scope.show)
		}
	
   if(count==2){
	  $scope.show=0;
	  count=0;
	}*/

}
/*prevent from going into the next state*/
/*$rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams){ 
    event.preventDefault(); 
    
})*/

 /* $rootScope.$on('$viewContentLoading', 
function(event, viewConfig){ 
   console.log("loading.....")
})
*/
  $rootScope.$on('$viewContentLoaded', 
function(event, viewConfig){ 
   console.log("loaded")
})

var newUrl=$state.is("main.route1");
console.log(newUrl)
  });