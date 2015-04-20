'use strict';

angular.module('blogsApp')
      .controller('ReleventusersCtrl', ['$scope','Releventusers', '$routeParams','$location',
           function($scope,Releventusers,$routeParams,$location) {
	Releventusers.searchByBlogAuthor($scope, commonData.username);
    }]);
