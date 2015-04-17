'use strict';

    angular.module('blogsApp')
      .factory('Login', ['$http','$location','$alert', '$modal', '$window', function($http, $location,$alert, $modal,$window){
       var api = {

       login : function(scope) {
          $http.post('/api/users/login', scope.user).success(function(user) {
            console.log(user);
            commonData.loginState = true;
            commonData.username = user.name;
            commonData.key = user.key;
            console.log(commonData);
            scope.user = [];
           $location.path('/blogs');
          }).
          error(function(error) {

            scope.commonData.error = error;
             console.log("before alert11");
// data-container="body" data-keyboard="true"
            $alert({
            title:'Login Alert: ',
            content: error,
            placement:'top',
            animation: 'amFadeAndSlideTop',
            type: 'info',
            duration: 3
          });
          });
        }
     }
      
      return api
    }])