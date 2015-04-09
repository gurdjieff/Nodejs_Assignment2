'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogs', {
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsCtrl'
      });
  });
