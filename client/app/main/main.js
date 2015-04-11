'use strict';



angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/home', {
        templateUrl: 'app/main/home.html',
        controller: 'MainCtrl'
      })
      ;
  });