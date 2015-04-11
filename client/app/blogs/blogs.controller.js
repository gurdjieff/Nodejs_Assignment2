'use strict';


angular.module('blogsApp')
      .controller('BlogsCtrl', ['$scope','Blog', '$routeParams','$location',
           function($scope,Blog,$routeParams,$location) {
		 Blog.getBlogs($scope);

		 $scope.remove = function(blogId){
		 	console.log(blogId);
           Blog.removeABlogs($scope,blogId);
        };
    }]);
