'use strict';

 angular.module('blogsApp')
      .factory('Releventusers', ['$http', '$location', function($http, $location){
       var api = {

        searchByBlogAuthor : function(scope, author) {
              $http.get('/api/comments/searchByBlogAuthor/'+author).success(function(comments) {
              console.log(comments);
              Array.prototype.contains = function(element) {  
                  for (var i = 0; i < this.length; i++) {  
                      if (this[i] == element) {  
                          return true;  
                      }  
                  }  
                  return false;  
              }  
              var authors = [];
              angular.forEach(comments, function (comment, key) {
                var flag = false;
                angular.forEach(authors, function (item, key) {
                  if (item.username == comment.name) {
                    flag = true;
                    var tempBlog = {
                        title:comment.blog_title,
                        _id:comment.blog_id
                    };

                var flag2 = false;

                 angular.forEach(item.commentBlogs, function (item, key) {
                  if (item._id == comment.blog_id) {
                    flag2 = true;
                    return;
                  } 
                });
                 if (flag2 == false) {
                  var tempBlog = {
                        title:comment.blog_title,
                        _id:comment.blog_id
                    };
                    item.commentBlogs.push(tempBlog);
                 }
                    return;
                  } 
                });

                if (flag == false) {
                  var tempBlog = {
                        title:comment.blog_title,
                        _id:comment.blog_id
                    };
                  var element = {
                  username : comment.name,
                  commentBlogs : [tempBlog]
                };
                  authors.push(element);
                }
                
              });              
              scope.relevantAuthors = authors;
              console.log(authors);
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

