'use strict';

angular.module('blogsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'app/main/home.html',
        controller: 'MainCtrl'
      })
	  // .when('/home', {
   //      templateUrl: 'app/main/main.html',
   //      controller: 'MainCtrl'
   //    })
      ;
  });