(function() {

  var app = angular.module("mainApp", ["ngRoute"])

  app.config(function($routeProvider){
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainPageControls"
      })
      .otherwise({redirectTo: "/main"})
  })

}())