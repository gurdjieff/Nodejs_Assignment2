'use strict';

 angular.module('blogsApp')
      .factory('BlogDetail', ['$http', '$location', function($http, $location){
       var api = {
             getBlog : function(scope, _id) {
              $http.get('/api/postblogs/'+_id).success(function(blog) {
              console.log(blog);
              scope.blog = blog;
          }).
          error(function(error) {
            if (error.errors) {
            }
            console.log(error);
          });
        },

        updateBlog : function(scope, _id, blog) {
              $http.put('/api/postblogs/'+_id, blog).success(function(blog) {
              console.log(blog);
             $location.path('/blogs');
          }).
          error(function(error) {
                console.log(error);

            if (error.errors) {
              commonData.error = error.errors.content.message;
            } else if (error) {
              commonData.error = error;

            }
            console.log(error);
            // alert(data);
          });
        },

        postComment : function(scope) {
                      console.log(scope.comment);

              $http.post('/api/comments', scope.comment).success(function(comment) {
              console.log(comment);
              scope.comments.push(scope.comment);
          }).
          error(function(error) {
            if (error.errors) {
                commonData.error = error.errors.content.message;
            }
            console.log(error);
          });
        },

        getComments : function(scope, blog_id) {
              $http.get('/api/comments/'+blog_id).success(function(comments) {
              console.log(comments);
              scope.comments = comments;
          }).
          error(function(error) {
            if (error.errors) {
                commonData.error = error.errors.content.message;
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

