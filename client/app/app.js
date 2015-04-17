'use strict';
var commonData = {}
angular.module('blogsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'mgcrea.ngStrap',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });