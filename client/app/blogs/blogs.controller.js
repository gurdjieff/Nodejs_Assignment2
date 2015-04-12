'use strict';


angular.module('blogsApp')
      .controller('BlogsCtrl', ['$scope','Blog', '$routeParams','$location',
           function($scope,Blog,$routeParams,$location) {
     if ($routeParams.author) {
      Blog.getBlogsByAuthor($scope, $routeParams.author);

     } else {
      Blog.getBlogs($scope);
     }

		 $scope.remove = function(blogId){
		 	console.log(blogId);
           Blog.removeABlogs($scope,blogId);
        };
        $scope.edit = function(blogId){
		 	console.log(blogId);
           $location.path('/blogEdit/'+blogId);
        };
    }]);
