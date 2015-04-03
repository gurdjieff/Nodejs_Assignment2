'use strict';

// angular.module('blogsApp')
//   .controller('LoginCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });

angular.module('blogsApp')
      .controller('LoginCtrl', ['$scope','Login', '$routeParams','$location',
           function($scope,Login,$routeParams,$location) {
        $scope.login = function(){
        	$scope.user = {
            name:$scope.data.username,
            password:$scope.data.password
          };
          console.log("register");
           Login.login($scope);
        };
    }]);