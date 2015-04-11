'use strict';

 angular.module('blogsApp')
      .factory('Postblog', ['$http', '$location', function($http, $location){
       var api = {
                    // $scope.posts = Register.register($scope);
             postblogs : function(scope) {
              $http.post('/api/postblogs', scope.blog).success(function(blog) {
              console.log("postblog");
              scope.blog = {};
             $location.path('/blogs');
          }).
          error(function(error) {
            if (error.errors) {
               commonData.error = error.errors.content.message;
            }
            console.log(error);
          });
        }
     }
      
      return api
    }])
