'use strict';
// var flash = require('connect-flash')
// angular.module('blogsApp')
//   .controller('LoginCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });

angular.module('blogsApp')
      .controller('LoginCtrl', ['$scope','Login', '$routeParams','$location',
           function($scope,Login,$routeParams,$location) {
          commonData.error = null;
        $scope.login = function(){
          commonData.error = null;

        	$scope.user = {
            name:$scope.data.username,
            password:$scope.data.password
          };
          console.log("register");
           Login.login($scope);
        };
    }]);