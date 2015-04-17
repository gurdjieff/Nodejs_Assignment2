'use strict';

 angular.module('blogsApp')
      .factory('Register', ['$http', '$location','$alert', function($http, $location,$alert){
       var api = {
                    // $scope.posts = Register.register($scope);
             register : function(scope) {
                        console.log("register1");
              $http.post('/api/users', scope.user).success(function(user) {
              console.log(user);
              commonData.loginState = true;
              commonData.username = user.name;
              commonData.key = user.key;
              scope.user = [];
             $location.path('/blogs');

          }).
          error(function(error) {
            if (error.errors) {
                console.log(error.errors.content.message);
              $alert({
                title:'Login Alert: ',
                content: error,
                placement:'top',
                animation: 'amFadeAndSlideTop',
                type: 'info',
                duration: 5
              });
            } else if (error) {
              $alert({
                title:'Login Alert: ',
                content: error,
                placement:'top',
                animation: 'amFadeAndSlideTop',
                type: 'info',
                duration: 5
            });

            }
            console.log(error);
            // alert(data);
          });
        }
     }
      
      return api
    }])