'use strict';


angular.module('blogsApp')
      .controller('PostblogsCtrl', ['$scope','Postblog', '$routeParams','$location',
           function($scope,Postblog,$routeParams,$location) {
		          commonData.error = null;
        $scope.postblogs = function(){
                    commonData.error = null;

            console.log(commonData);
            var myDate = new Date();  
		  
          console.log(myDate.toLocaleString());
        	$scope.blog = {
            name:commonData.username,
            title:$scope.data.title,
            content:$scope.data.blog,
            date:myDate.toLocaleString()
          };
           console.log($scope.blog);


          Postblog.postblogs($scope);
        };
    }]);