'use strict';

 angular.module('blogsApp')
      .factory('Postblog', ['$http', '$location','$alert', function($http, $location,$alert){
       var api = {
                    // $scope.posts = Register.register($scope);
             postblogs : function(scope) {
              $http.post('/api/postblogs', scope.blog)
          .success(function(blog) {
              console.log("postblog");
              scope.blog = {};
             $location.path('/blogs');
          })
          .error(function(error) {
            $alert({
              title:'Post Alert: ',
              content: error,
              placement:'top',
              animation: 'amFadeAndSlideTop',
              type: 'info',
              duration: 3
            });

            console.log('gurdjieff'+error);
          });
        }
     }
      
      return api
    }])
