'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/releventusers', {
        templateUrl: 'app/releventusers/releventusers.html',
        controller: 'ReleventusersCtrl'
      });
  });
