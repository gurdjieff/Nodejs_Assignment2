'use strict';

 angular.module('blogsApp')
      .factory('Blog', ['$http', '$location','$alert', function($http, $location, $alert){
       var api = {
         likeBlog : function(scope, blogsId) {
              var url = '/api/postblogs/like';
              console.log('url:'+url);
              var myDate = new Date();  
              var body = {
                name:commonData.username,
                date:myDate.toLocaleString(),
                id:blogsId
              }
              $http.post(url, body).success(function(blogs) {
              console.log(blogs);
          }).
          error(function(error) {
            $alert({
              title:'Login Alert: ',
              content: error,
              placement:'top',
              animation: 'amFadeAndSlideTop',
              type: 'info',
              duration: 3
            });
            console.log(error);
          });
        },
          getBlogs : function(scope) {
              var url = '/api/postblogs?key='+commonData.key+'&name='+commonData.username;
              console.log('url:'+url);
              $http.get(url).success(function(blogs) {
              console.log(blogs);
              scope.blogs = blogs;
          }).
          error(function(error) {
             $alert({
              title:'Login Alert: ',
              content: error,
              placement:'top',
              animation: 'amFadeAndSlideTop',
              type: 'info',
              duration: 3
          });
            console.log(error);
          });
        },

        getBlogsByAuthor : function(scope, author) {
          $http.get('/api/postblogs?key='+commonData.key+'&name='+commonData.username+'&author='+author)
              .success(function(blogs) {
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
            var url = '/api/postblogs?key='+commonData.key+'&name='+commonData.username;

              $http.delete(url+'&blogId='+blogId).success(function(result) {
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
        }
     }
      
      return api
    }])

