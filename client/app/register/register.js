'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      });
  });
