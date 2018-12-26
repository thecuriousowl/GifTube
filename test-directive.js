(function() {
  'use strict'

  angular.module('mainApp').directive('testDirective', [directiveFn]) 

  function directiveFn () {
    return {
      restrict: 'A',
      scope: {
        video: '=',
        handleVideo: '&'
      },
      templateUrl: 'test-directive.html',
      controller: ['$scope', ctrlFn],
      link: linkFn
    }

    function ctrlFn ($scope) {
      var vm = $scope.vm = {}

      vm.onClick = onClick

      function onClick (video) {
        $scope.handleVideo({ videoId: video, video: 321 })
      }
    }
    function linkFn (scope, el, attr) {
      var vm = scope.vm
    }
  }

}())