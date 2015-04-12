'use strict';

angular.module('blogsApp')
      .controller('ReleventusersCtrl', ['$scope','Releventusers', '$routeParams','$location',
           function($scope,Releventusers,$routeParams,$location) {
	Releventusers.searchByBlogAuthor($scope, commonData.username);

		 // $scope.searchByBlogAuthor = function(){
   //        var myDate = new Date();  
   //        var comment = {
   //            blog_id:$routeParams._id,
   //            blog_title:$scope.blog.title,
   //            blog_author:$scope.blog.name,
   //            name:commonData.username,
   //            content:$scope.commentInfo,
   //            date:myDate.toLocaleString()
   //        };
   //      };
    }]);
