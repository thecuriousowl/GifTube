(function(){

  var genericService = function() {
    
    var doSomething = function() {

    }


    return {
      doSomething: doSomething
    }
  }

  var myService = angular.module("myService")
  module.factory("genericService", genericService)
  
}())