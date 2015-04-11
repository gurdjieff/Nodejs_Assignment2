'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myBlogs', {
        templateUrl: 'app/myBlogs/myBlogs.html',
        controller: 'MyBlogsCtrl'
      });
  });
