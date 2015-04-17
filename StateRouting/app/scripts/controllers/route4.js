angular.module('stateRoutingApp')
  .controller('route4Ctrl', function ($scope,$state,$rootScope,$http) {
 $http.get('../../Json/game-details.json').success(function(data) {
 	var d  =data.gameDetails;/* array of objects*/
    //console.log($scope.details);
    for (var i=0;i<d.length;i++){

    	d[i].total=d[i].round1+d[i].round2;
    }
    $scope.details = d;
    console.log($scope.details)
   
});

  });