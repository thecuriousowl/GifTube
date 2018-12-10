(function (){

  var app = angular.module('mainApp')

  function controller($scope, yts) {
    var vm = $scope.vm = {}   

    vm.authenticate = authenticate

    function authenticate() {
      yts.handleClientLoad()
    }

  }

  app.controller('StartController', ['$scope', 'yts', controller])

}())