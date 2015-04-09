'use strict';

 angular.module('blogsApp')
      .factory('Blog', ['$http', '$location', function($http, $location){
       var api = {
             getBlogs : function(scope) {
              $http.get('/api/postblogs').success(function(blogs) {
              console.log(blogs);
              scope.blogs = blogs;
             // $location.path('/home');
          }).
          error(function(error) {
            if (error.errors) {
                // console.log(error.errors.name.message);
            }
            console.log(error);
          });
        },
        getMyBlogs : function(scope) {
              $http.get('/api/postblogs/blog/'+'title').success(function(blogs) {
              console.log(blogs);
              scope.blogs = blogs;
             // $location.path('/home');
          }).
          error(function(error) {
            if (error.errors) {
                // console.log(error.errors.name.message);
            }
            console.log(error);
          });
        }
     }
      
      return api
    }])

