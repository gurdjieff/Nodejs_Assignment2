'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/profile', {
        templateUrl: 'app/register/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/register', {
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      });
  });
