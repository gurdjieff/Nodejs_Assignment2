'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogDetails/:_id', {
        templateUrl: 'app/blogDetails/blogDetails.html',
        controller: 'BlogDetailsCtrl'
      })
      .when('/blogEdit/:_id', {
        templateUrl: 'app/blogDetails/blogEdit.html',
        controller: 'BlogEditCtrl'
      })
  });
