angular.module('stateRoutingApp')
  .controller('curriculumCtrl', function ($scope,$http,$stateParams) {
  $http.get('../../JSON/category-details.json').success(function(data){
  	$scope.categories=data.curriculum;
  	console.log($scope.categories)
  	console.log($stateParams.id)
});
  });