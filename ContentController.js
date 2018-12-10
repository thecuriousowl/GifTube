(function() {

  var app = angular.module('mainApp')

  var controller = function($scope, $sce, yts) {
    var vm = $scope.vm = {}   
    vm._list = [ 'Myou629Dk68','zRQ5qZ8jFTA','S1xzKtMqe_4','URflvZepgAM','3jWRrafhO7M','SaeXN-MByjU','PXRX47L_3yE','Z1PCtIaM_GQ','2ccaHpy5Ewo' ]
    vm.videosList = []
    
    vm.authenticate = authenticate
    vm.loadVideos = loadVideos
    vm.resizeVideos =  resizeVideos
    vm.test = test

    _init()

    function authenticate() {
      yts.handleClientLoad()
      console.log("Youtube Authenticated")
    }

    function test() {
      console.log("Making a Request")
      yts.test()
    }

    function loadVideos(input) {

    }

    function resizeVideos() {

    }

    function _init () {
      
    }

  }

  app.controller('ContentController', ['$scope', '$sce', 'yts', controller])

}())