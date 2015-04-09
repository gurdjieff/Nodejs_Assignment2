'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/postblogs', {
        templateUrl: 'app/postblogs/postblogs.html',
        controller: 'PostblogsCtrl'
      });
  });
