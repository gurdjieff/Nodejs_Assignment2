'use strict';

angular.module('blogsApp')
      .controller('RegisterCtrl', ['$scope','Register', '$routeParams','$location',
           function($scope,Register,$routeParams,$location) {
          commonData.error = null;
        $scope.register = function(){
          commonData.error = null;

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
    }])
    .controller('ProfileCtrl', ['$scope','Register', '$routeParams','$location',
           function($scope,Register,$routeParams,$location) {
        Register.getProfile($scope);
        $scope.update = function(){
          // $scope.user = {
          //   name:$scope.data.username,
          //   password:$scope.data.password,
          //   email:$scope.data.email,
          //   statement:$scope.data.statement,
          //   link:$scope.data.blog
          // };
          console.log("update");
           Register.updateProfile($scope);
        };
    }])
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
      ;