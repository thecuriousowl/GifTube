(function() {

  var app = angular.module('mainApp')

  var controller = function($scope) {
    var vm = $scope.vm = {}

    vm.list = [ 'Myou629Dk68','zRQ5qZ8jFTA','S1xzKtMqe_4','URflvZepgAM','3jWRrafhO7M' ]

    vm.handleVideo = handleVideo

    function handleVideo (index, video) {
      console.log('handling video', index, video)
    }
  }

  app.controller('AnimationController', ['$scope', controller])

}())