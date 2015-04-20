'use strict';

 angular.module('blogsApp')
      .factory('BlogDetail', ['$http', '$location', '$alert',function($http, $location,$alert){
       var api = {
        likeComment : function(scope, commentId) {
              var url = '/api/comments/like';
              // console.log('url:'+url);
              var myDate = new Date();  
              var body = {
                name:commonData.username,
                date:myDate.toLocaleString(),
                id:commentId
              }
                          console.log(body);

              $http.post(url, body)
          .success(function(blogs) {
             angular.forEach(scope.comments, function (item, key) {
                if (item._id === commentId) {
                  item.likes.push({
                    name:commonData.username,
                    date:myDate.toLocaleString(),
                  });
                   console.log(item)
                  return;
                }
            });
              console.log(blogs);
          })
          .error(function(error) {
            $alert({
              title:'Follow Alert: ',
              content: error,
              placement:'top',
              animation: 'amFadeAndSlideTop',
              type: 'info',
              duration: 3
            });
            console.log(error);
          });
        },

             getBlog : function(scope, _id) {
              var url = '/api/postblogs?key='+commonData.key+'&name='+commonData.username;

              $http.get(url+'&_id='+_id)
          .success(function(blog) {
              console.log(blog);
              scope.blog = blog.blog;
              scope.comments = blog.comments;

          }).
          error(function(error) {
            if (error.errors) {
            }
            console.log(error);
          });
        },

        updateBlog : function(scope, _id, blog) {
            var url = '/api/postblogs/';
              $http.put(url+_id, blog).success(function(blog) {
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
              $http.post('/api/comments', scope.comment)
          .success(function(comment) {
              console.log(comment);
              scope.comments.push(comment);
              scope.commentInfo = "";
          }).
          error(function(error) {
            if (error.errors) {
              $alert({
                title:'Comment Alert: ',
                content: error.errors.content.message,
                placement:'top',
                animation: 'amFadeAndSlideTop',
                type: 'info',
                duration: 3
              });
            } else if(error) {
              $alert({
                title:'Comment Alert: ',
                content: error,
                placement:'top',
                animation: 'amFadeAndSlideTop',
                type: 'info',
                duration: 3
              }); 
            }
            console.log(error);
          });
        },


        getComments : function(scope, blog_id) {
              var url = '/api/comments?key='+commonData.key+'&name='+commonData.username;
              $http.get(url+'&blog_id='+blog_id).success(function(comments) {
              console.log("comment");
              console.log(comments);

              scope.comments = comments;
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

