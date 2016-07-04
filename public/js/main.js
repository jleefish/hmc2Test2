var app = angular.module('hmcArchiveApp', []);

/**
 * Configure the Routes
 */
//app.config(['$routeProvider', function ($routeProvider) {
//    console.log("angular working")
//    
//    $routeProvider
//    // Home
//    .when("/", {templateUrl: "partials/home.html", controller: "indexCtrl"})
//    // else 404
//    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
//}]);

app.controller("indexCtrl", ["$scope","$http", function($scope,$http){
  $http.get('http://142.55.49.240/data')
      .success(function(data){
        $scope.results = data;
      console.log(data);
      console.log("Angular is running...")
  })
  .error(function(err){
      console.log("http error")
  })
}])
