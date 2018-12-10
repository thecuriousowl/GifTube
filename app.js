(function() {

  var app = angular.module('mainApp', ['ngRoute','ngSanitize'])

  app.config(function($routeProvider){
    $routeProvider
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'ContentController'
      })
      .when('/animate', {
      	templateUrl: 'animationTest.html',
      	controller: 'AnimationController'
      })
      .otherwise({redirectTo: '/main'})
  })

}())