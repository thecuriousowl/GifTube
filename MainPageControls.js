(function() {

/*
  window.test = function (event) {
    console.log('test', event)
  }
  window.hidePlayer = function () {
      console.log("error")
    }
*/
  var app = angular.module("mainApp");
  // Controller for handling generic UI elements
  var MainPageControls = function($scope, $sce) {
    var vm = $scope.vm = {}

    // Read in data from local file
    var _list = ["SfSegih-VlM", "a2RA0vsZXf8", "VWHlPH23P-w"]
    var _counter = 0
    vm.OffOn = true
    vm.YoutubeIDs = []
    vm.currentID = "" 

    // api
    vm.addRow = addRow
    vm.closePlayer = closePlayer
    vm.startPlayer = startPlayer

    // events
    // $scope.$on('something', somethingHandler)
    // $scope.$broadcast('something', 'abc')

    // var events = {}
    // $scope.$on = function (eventKey, handlerFn) {
    //   events[eventKey] = handlerFn
    // }

    // $scope.$broadcast = function (eventKey, data) {
    //   if (events[eventKey]) {
    //     events[eventKey]($event, data)
    //   }
    // }

    // init
    _init()

    // api fn
    function addRow (input) {
      vm.YoutubeIDs.push(input);
      _counter++;
    }
    function closePlayer() {
      vm.currentID = " "
      console.log(vm.currentID)
      vm.OffOn = true
    }
    function startPlayer (ev, input) {
      ev.stopPropagation()
      var temp = "https://www.youtube.com/embed/" + input
      vm.currentID = $sce.trustAsResourceUrl(temp)
      console.log(vm.currentID)
      vm.OffOn = false
    }

    // event fns
    // function somethingHandler (ev, data) {
      // data === 'abc'
    // }
    
    // private
    function _init () {
      for (var i = 0; i < _list.length; i++)  {
        addRow(_list[i]);
      }
    }
  };

  app.controller('MainPageControls', ['$scope', '$sce', MainPageControls]);


}());