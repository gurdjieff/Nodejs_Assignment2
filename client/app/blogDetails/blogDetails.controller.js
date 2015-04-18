'use strict';


angular.module('blogsApp')
      .controller('BlogDetailsCtrl', ['$scope','BlogDetail', '$routeParams','$location',
           function($scope,BlogDetail,$routeParams,$location) {
     $scope.comments = [];
     commonData.error = null;
		 BlogDetail.getBlog($scope, $routeParams._id);
     BlogDetail.getComments($scope, $routeParams._id);
    $scope.like = function(commentId){
          console.log(commentId);
           BlogDetail.likeComment($scope, commentId);
     };
		 $scope.postComment = function(){
           commonData.error = null;
          var myDate = new Date();  
          var comment = {
              blog_id:$routeParams._id,
              blog_title:$scope.blog.title,
              blog_author:$scope.blog.name,
              name:commonData.username,
              content:$scope.commentInfo,
              date:myDate.toLocaleString()
          };
          $scope.comment = comment;
           BlogDetail.postComment($scope);
        };
    }])

      .controller('BlogEditCtrl', ['$scope','BlogDetail', '$routeParams','$location',
           function($scope,BlogDetail,$routeParams,$location) {
     BlogDetail.getBlog($scope, $routeParams._id);
     $scope.commonData = commonData;
      commonData.error = null;

     $scope.updateBlog = function(){
      commonData.error = null;
       // console.log($scope, blogId, content);
           BlogDetail.updateBlog($scope, $routeParams._id, $scope.blog);
        };
    }]);


      // app.controller('contentInfoController', ['$scope', '$routeParams',
      //      function($scope,$routeParams) {
      //       $scope.info = $routeParams.diary;
      //                  // console.log($scope.info);
      //     }]);