'use strict';

 angular.module('blogsApp')
      .factory('Register', ['$http', '$location', function($http, $location){
       var api = {
                    // $scope.posts = Register.register($scope);
             register : function(scope) {
                        console.log("register1");
              $http.post('/api/users', scope.user).success(function(user) {
              console.log(user);
              commonData.loginState = true;
              commonData.username = user.name;
              commonData.key = user.key;
              scope.user = [];
             $location.path('/blogs');

          }).
          error(function(error) {
            if (error.errors) {
              commonData.error = error.errors.content.message;
                console.log(error.errors.content.message);
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