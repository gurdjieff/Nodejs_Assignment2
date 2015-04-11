'use strict';
angular.module('blogsApp')
  .controller('MainCtrl', ['$scope','$http', '$location',function ($scope, $http, $location) {
    $scope.awesomeThings = [];
    $scope.commonData = commonData;


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.loginOut = function() {
      commonData.loginState = false;
      $location.path('/login');

    };
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  }]);
