angular.module('stateRoutingApp')
  .controller('route2Ctrl', function ($scope,$http) {
  	console.log($scope.r1data)
  $http.get('../../JSON/category-details.json').success(function(data){
  	$scope.categories=data.curriculum;
  	console.log($scope.categories)
});

  });