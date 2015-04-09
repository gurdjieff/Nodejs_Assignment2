'use strict';


angular.module('blogsApp')
      .controller('PostblogsCtrl', ['$scope','Postblog', '$routeParams','$location',
           function($scope,Postblog,$routeParams,$location) {
		
        $scope.postblogs = function(){
            console.log("register");
            var myDate = new Date();  
			// myDate.toLocaleDateString();     
// var mytime=myDate.toLocaleTimeString();      
          // myDate.toLocaleString();        
                  console.log(myDate.toLocaleString());
        	$scope.blog = {
            name:$scope.data.title,
            title:$scope.data.title,
            content:$scope.data.blog,
            date:myDate.toLocaleString()
          };
           console.log($scope.blog);


          Postblog.postblogs($scope);
        };
    }]);