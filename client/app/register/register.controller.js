'use strict';

// angular.module('blogsApp')
//   .controller('RegisterCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });


angular.module('blogsApp')
      .controller('RegisterCtrl', ['$scope','Register', '$routeParams','$location',
           function($scope,Register,$routeParams,$location) {
		
        $scope.register = function(){
        	$scope.user = {
            name:$scope.data.username,
            password:$scope.data.password,
            email:$scope.data.email,
            statement:$scope.data.statement,
            link:$scope.data.blog
          };
          console.log("register");
           Register.register($scope);
        };
    }]);