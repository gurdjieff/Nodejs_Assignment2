'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogs', {
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsCtrl'
      })
      .when('/blogs/:author', {
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsCtrl'
      });
  });
