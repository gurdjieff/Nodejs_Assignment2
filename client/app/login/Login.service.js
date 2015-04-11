'use strict';

// angular.module('blogsApp')
//       .factory('Login', ['$http', function($http){
//        var api = {
//              login : function(scope) {
//                         console.log("register1");
//               $http.post('/api/users/login', scope.user).success(function(posts) {
//               scope.user = [];
//               console.log("register2");
//           });
//         }
//       return api
//     }])

      // .controller('RegisterCtrl', ['$scope','Register', '$routeParams','$location',

      angular.module('blogsApp')
      .factory('Login', ['$http','$location', function($http, $location){
       var api = {

       login : function(scope) {
          $http.post('/api/users/login', scope.user).success(function(user) {
            console.log(user);
            commonData.loginState = true;
            commonData.username = scope.user.name;
            scope.user = [];


           $location.path('/blogs');
          }).
          error(function(error) {
            scope.commonData.error = error;
          });
        }
     }
      
      return api
    }])