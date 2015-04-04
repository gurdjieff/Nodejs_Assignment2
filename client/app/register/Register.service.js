'use strict';

 angular.module('blogsApp')
      .factory('Register', ['$http', '$location', function($http, $location){
       var api = {
                    // $scope.posts = Register.register($scope);
             register : function(scope) {
                        console.log("register1");
              $http.post('/api/users', scope.user).success(function(posts) {
              scope.user = [];
              console.log("register2");
             $location.path('/home');

          }).
          error(function(error) {
            if (error.errors) {
                console.log(error.errors.name.message);
            }
            console.log(error);
            // alert(data);
          });
        }
     }
      
      return api
    }])