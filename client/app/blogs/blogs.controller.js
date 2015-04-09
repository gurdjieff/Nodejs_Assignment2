'use strict';


angular.module('blogsApp')
      .controller('BlogsCtrl', ['$scope','Blog', '$routeParams','$location',
           function($scope,Blog,$routeParams,$location) {
		          // Blog.getBlogs($scope);
		          Blog.getMyBlogs($scope);

        $scope.getBlogs = function(){
            console.log("register");
          Blog.getBlogs($scope);
        };
    }]);
