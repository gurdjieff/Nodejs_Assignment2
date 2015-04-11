'use strict';

 angular.module('blogsApp')
      .factory('Register', ['$http', '$location', function($http, $location){
       var api = {
                    // $scope.posts = Register.register($scope);
             register : function(scope) {
                        console.log("register1");
              $http.post('/api/users', scope.user).success(function(posts) {
              console.log("register2");
              commonData.loginState = true;
              commonData.username = scope.user.name;
              scope.user = [];


             $location.path('/blogs');

          }).
          error(function(error) {
            if (error.errors) {
              commonData.error = error.errors.name.message;
                console.log(error.errors.name.message);
            } else if (error) {
              commonData.error = error;

            }
            console.log(error);
            // alert(data);
          });
        }
     }
      
      return api
    }])