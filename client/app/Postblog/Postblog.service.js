'use strict';

 angular.module('blogsApp')
      .factory('Postblog', ['$http', '$location', function($http, $location){
       var api = {
                    // $scope.posts = Register.register($scope);
             postblogs : function(scope) {
                        console.log("register1");
              $http.post('/api/postblogs', scope.blog).success(function(blog) {
              console.log("postblog");
              scope.blog = {};

             $location.path('/home');

          }).
          error(function(error) {
            if (error.errors) {
                // console.log(error.errors.name.message);
            }
            console.log(error);
            // alert(data);
          });
        }
     }
      
      return api
    }])
