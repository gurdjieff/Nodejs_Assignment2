'use strict';

 angular.module('blogsApp')
      .factory('Releventusers', ['$http', '$location', function($http, $location){
       var api = {

        searchByBlogAuthor : function(scope, author) {
              $http.get('/api/comments/searchByBlogAuthor/'+author).success(function(blogs) {
              console.log(blogs);
              scope.blogs = blogs;
          }).
          error(function(error) {
            if (error.errors) {
            }
            console.log(error);
          });
        },

        removeABlogs : function(scope, blogId) {
              $http.delete('/api/postblogs/'+blogId).success(function(result) {
              console.log(result);

            angular.forEach(scope.blogs, function (item, key) {
                if (item._id === blogId) {
                   console.log(key)
                scope.blogs.splice(key, 1);
                  return;
                }
            });

          }).
          error(function(error) {
            if (error.errors) {
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

